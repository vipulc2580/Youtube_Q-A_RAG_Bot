from fastapi import FastAPI, Query
from youtube_transcript_api import YouTubeTranscriptApi
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain.text_splitter import RecursiveCharacterTextSplitter
# from langchain.vectorstores import Chroma
from langchain_core.runnables import RunnableParallel, RunnablePassthrough, RunnableLambda
from langchain_core.output_parsers import StrOutputParser
from langchain_community.vectorstores import FAISS
import os 
import re
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from langchain.retrievers.multi_query import MultiQueryRetriever



load_dotenv()



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or set to your chrome-extension origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# embedding model
embedding_model=HuggingFaceEmbeddings(
            model_name="sentence-transformers/all-MiniLM-L6-v2"  # Lightweight, fast, good quality
        )

llm = ChatGoogleGenerativeAI(
    model="gemini-2.0-flash",
    google_api_key=os.getenv('GOOGLE_API_KEY'),
    temperature=0.8,
#     max_tokens=10,
    timeout=None,
#     max_retries=2,
    # other params...
)
# vector_store=None
text_splitter=RecursiveCharacterTextSplitter(chunk_size=1000,chunk_overlap=200)
transcript_chunks=[]
faiss_store={}

def extract_video_id(url):
    # print(url)
    match = re.search(r"[?&]v=([^&]+)", url)
    return match.group(1) if match else None

@app.get('/load_video')
def load_video(url:str):
    # print(url)
    global vector_store,transcript_chunks
    # if video_id:
        # print(video_id)
    # else:
    video_id=extract_video_id(url)
    
    # print(video_id)
    if not video_id:
        return {'error':'Invalid Youtube URL'}
    if faiss_store.get(video_id): return
    transcript_list = YouTubeTranscriptApi.get_transcript(video_id)
    transcript= " ".join([chunk.get('text') for chunk in transcript_list])
    
    chunks=text_splitter.create_documents([transcript])
    
    faiss_store[video_id]=FAISS.from_documents(documents=chunks,embedding=embedding_model)
    
    return {"message": "Transcript loaded and embedded"}
    
def format_docs(retrieved_docs):
  context_text = "\n\n".join(doc.page_content for doc in retrieved_docs)
  return context_text

@app.get('/ask')
def ask_question(q:str,url:str):
    # print(q)
    # print(url)
    video_id=extract_video_id(url)
    if faiss_store.get(video_id) is None:
        return {"error": "No transcript loaded"}
    
    multi_retriever = MultiQueryRetriever.from_llm(
        retriever=faiss_store.get(video_id).as_retriever(search_type="mmr", search_kwargs={"k": 5}),
        llm=llm
    )
    # retriever = vector_store.as_retriever(search_type="similarity", search_kwargs={"k": 4})
    # results=retriever.invoke(q)
    # text=format_docs(results)
    # return {'text':text}
    parallel_chain=RunnableParallel(
        {
            'question':RunnablePassthrough(),
            'context':multi_retriever | RunnableLambda(format_docs)
        }
    )
    parser=StrOutputParser()
    prompt_template = PromptTemplate(
    input_variables=["context", "question"],
    template="""
            You are an intelligent assistant that answers questions based strictly on the provided YouTube video transcript.

            Here is the transcript context:
        -------------------
        {context}
        -------------------

        Answer the following question as accurately as possible based on the context above. 
        If the answer is not in the transcript, say "I couldn't find the answer in the video transcript."

        Question: {question}

        Answer:
        """
    )
    main_chain=parallel_chain|prompt_template|llm|parser
    
    response=main_chain.invoke(q)
    # print(response)
    return {'response':response}