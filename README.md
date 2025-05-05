# YouTube Q&A RAG Bot

![YouTube Q&A Banner](https://github.com/vipulc2580/Youtube_Q-A_RAG_Bot/blob/main/youtubeQ%26A%20Bot.png)  
*An intelligent Chrome extension that enables users to ask questions based on YouTube video content using advanced RAG (Retrieval-Augmented Generation) pipeline.*

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)

## Introduction

YouTube Q&A RAG Bot is a smart Chrome plugin designed to make YouTube videos interactive and informative. It extracts the transcript of the currently viewed video, embeds it into a vector store using FAISS, and allows users to ask natural language questions that are answered using a powerful language model. This tool makes video content more accessible, searchable, and insightful.

## Features

- **Transcript Extraction**  
  Automatically fetches the transcript of the current YouTube video using YouTube Transcript API.

- **Vector Store with FAISS**  
  Splits the transcript and stores it in a FAISS index for efficient similarity search.

- **RAG-based Query Answering**  
  Uses Retrieval-Augmented Generation to answer questions with high relevance.

- **Floating Chat UI on YouTube**  
  Displays a chat widget as a toggleable sidebar on the YouTube interface.

- **Streaming Responses**  
  Real-time token-by-token response generation for a natural conversational experience.

- **Chrome Extension Ready**  
  Fully integrated into the browser as a Chrome extension.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript (vanilla), TailwindCSS  
- **Backend:** FastAPI  
- **Embedding & Search:** SentenceTransformers, FAISS  
- **LLM:** OpenAI GPT (via API)  
- **Transcript:** YouTube Transcript API  
- **Other Tools:** Uvicorn, CORS, Python Requests, dotenv

## Installation & Setup

### 1. **Clone the Repository**

```bash
git clone https://github.com/vipulc2580/Youtube_Q-A_RAG_Bot.git
cd Youtube_Q-A_RAG_Bot
```
### 2. **Backend Setup (FastAPI)**
  - **Create a virtual environment:**
      ```bash
          python -m venv env
          # On Windows
          env\Scripts\activate
    ```
      
  - **Install backend dependencies:**
      ```bash
          pip install -r requirements.txt
      ```

 - **Add your .env file:**
    ```bash
       OPENAI_API_KEY=your_openai_key_here
    ```

- **Start FastAPI server:**
    ```bash
        uvicorn main:app --reload
    ```
    
### 3. **Frontend Setup (Chrome Extension)**
  - Open Google Chrome and go to chrome://extensions/
  - Enable Developer mode.
  - Click on Load unpacked and select the extension folder.
  - Open any YouTube video — you will see a "Q&A with this video" button on the bottom right.
  - Click the button to open the Q&A sidebar and start chatting!

## Usage
### **While Watching a Video:**
  - Click the "Q&A with this video" button that appears on YouTube.
  - A chat window will slide in from the right.
  - Type your question based on the video’s content (e.g., "What is the speaker’s main argument?").
  - The AI will respond using the video’s transcript as context.

### **Developer Notes:**
  - The extension uses window.location.href to get the video ID.
  - Transcript is fetched using the YouTube Transcript API.
  - Chat messages are sent to the FastAPI backend which performs the RAG flow and streams the response back.

## Acknowledgements

Built with love to enhance educational content accessibility on YouTube.
Thanks to OpenAI, FastAPI, FAISS, and the awesome open-source community for the libraries and inspiration.
Special appreciation to the developers behind YouTube Transcript API and SentenceTransformers.
