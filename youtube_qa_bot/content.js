// /* FILE: content.js */

// // Add Tailwind CSS
// const tailwindLink = document.createElement("link");
// tailwindLink.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
// tailwindLink.rel = "stylesheet";
// document.head.appendChild(tailwindLink);

// // Create floating toggle button
// const toggleBtn = document.createElement("button");
// toggleBtn.innerHTML = `
//   <div class="flex items-center justify-center">
//     <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//     </svg>
//     <span class="font-medium">Ask About Video</span>
//   </div>
// `;
// toggleBtn.className = "fixed z-50 bottom-6 right-6 flex items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none";
// document.body.appendChild(toggleBtn);

// // Create the chat container
// const chatContainer = document.createElement("div");
// chatContainer.innerHTML = `
// <div id="chat-bot-container" class="hidden fixed top-24 right-6 w-[350px] h-3/4 z-9999 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300">
//   <!-- Header -->
//   <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-600 to-blue-500 sticky top-0">
//     <div class="flex items-center space-x-2">
//       <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
//       </svg>
//       <h3 class="font-bold text-white text-lg">YouTube Q&A</h3>
//     </div>
//     <div class="flex space-x-2">
//       <button id="closeChat" class="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>
//     </div>
//   </div>

//   <!-- Chat Messages -->
//   <div id="chat-body" class="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
//     <div class="flex justify-center items-center h-full text-gray-500 dark:text-gray-400">
//       <div class="text-center space-y-4">
//         <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//         </svg>
//         <p class="text-base font-medium">Ask anything about this YouTube video</p>
//         <p class="text-sm opacity-75">I'll analyze the content and provide answers based on what's discussed in the video.</p>
//       </div>
//     </div>
//   </div>

//   <!-- Input Area -->
//   <div class="p-4 border-t border-gray-200 dark:border-gray-700 sticky bottom-0 bg-white dark:bg-gray-800">
//     <form id="chat-form" class="flex items-center space-x-2">
//       <input 
//         type="text" 
//         id="chat-input" 
//         placeholder="Ask a question..." 
//         class="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white text-base"
//         required
//       />
//       <button 
//         type="submit" 
//         class="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 rounded-full hover:shadow-lg transition-all">
//         <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
//         </svg>
//       </button>
//     </form>
//   </div>

//   <!-- Loading indicator -->
//   <div id="loading-indicator" class="hidden absolute inset-0 bg-white/80 dark:bg-gray-800/80 flex items-center justify-center">
//     <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
//   </div>
// </div>
// `;
// document.body.appendChild(chatContainer);

// // Custom CSS for message bubbles and animations
// const customStyles = document.createElement("style");
// customStyles.innerHTML = `
//   .message-in {
//     animation: fadeIn 0.3s ease-out;
//   }

//   .user-message {
//     background: linear-gradient(135deg, #6366f1, #8b5cf6);
//     border-radius: 18px 18px 0 18px;
//     color: white;
//     max-width: 80%;
//     margin-left: auto;
//     padding: 12px 16px;
//     position: relative;
//     margin-bottom: 24px;
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   }

//   .bot-message {
//     background: #f3f4f6;
//     border-radius: 18px 18px 18px 0;
//     color: #1f2937;
//     max-width: 80%;
//     padding: 12px 16px;
//     position: relative;
//     margin-bottom: 24px;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
//   }

//   .dark .bot-message {
//     background: #374151;
//     color: #f3f4f6;
//   }

//   @keyframes fadeIn {
//     from { opacity: 0; transform: translateY(10px); }
//     to { opacity: 1; transform: translateY(0); }
//   }

//   /* Custom scrollbar */
//   .scrollbar-thin::-webkit-scrollbar {
//     width: 6px;
//   }

//   .scrollbar-thin::-webkit-scrollbar-track {
//     background: transparent;
//   }

//   .scrollbar-thin::-webkit-scrollbar-thumb {
//     background: #d1d5db;
//     border-radius: 3px;
//   }

//   .dark .scrollbar-thin::-webkit-scrollbar-thumb {
//     background: #4b5563;
//   }
// `;
// document.head.appendChild(customStyles);

// // Event listeners
// let chatInitialized = false;

// toggleBtn.addEventListener("click", async () => {
//   const chatBox = document.getElementById("chat-bot-container");
//   const isVisible = !chatBox.classList.contains("hidden");

//   if (isVisible) {
//     // Hide with animation
//     chatBox.classList.add("translate-x-full", "opacity-0");
//     setTimeout(() => {
//       chatBox.classList.add("hidden");
//       chatBox.classList.remove("translate-x-full", "opacity-0");
//     }, 300);
//   } else {
//     // Show with animation
//     chatBox.classList.remove("hidden");
//     chatBox.classList.add("translate-x-full", "opacity-0");
//     setTimeout(() => {
//       chatBox.classList.remove("translate-x-full", "opacity-0");
//     }, 10);
//   }

//   // Initialize chat if not already done
//   if (!chatInitialized && !isVisible) {
//     const loadingIndicator = document.getElementById("loading-indicator");
//     loadingIndicator.classList.remove("hidden");

//     try {
//       const url = encodeURIComponent(location.href);
//       const loadResp = await fetch(`http://127.0.0.1:8000/load_video?url=${url}`);
//       const data = await loadResp.json();
//       console.log("Transcript loaded:", data);
//       chatInitialized = true;

//       // Show a welcome message
//       const chatBody = document.getElementById("chat-body");
//       chatBody.innerHTML = `
//         <div class="bot-message message-in dark:text-gray-100">
//           <p>Hi there! I'm ready to answer questions about this YouTube video. What would you like to know?</p>
//         </div>
//       `;
//     } catch (err) {
//       console.error("Failed to load transcript:", err);
//       document.getElementById("chat-body").innerHTML = `
//         <div class="p-4 text-center">
//           <div class="text-red-500 font-medium">Failed to load transcript</div>
//           <p class="text-sm text-gray-500 mt-2">Please check if the backend server is running at http://127.0.0.1:8000</p>
//         </div>
//       `;
//     } finally {
//       loadingIndicator.classList.add("hidden");
//     }
//   }
// });

// document.getElementById("closeChat").addEventListener("click", () => {
//   const chatBox = document.getElementById("chat-bot-container");
//   chatBox.classList.add("translate-x-full", "opacity-0");
//   setTimeout(() => {
//     chatBox.classList.add("hidden");
//     chatBox.classList.remove("translate-x-full", "opacity-0");
//   }, 300);
// });

// document.getElementById("chat-form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const input = document.getElementById("chat-input");
//   const question = input.value.trim();
//   if (!question) return;

//   const chatBody = document.getElementById("chat-body");
//   // Clear placeholder if it exists
//   if (chatBody.querySelector(".text-center")) {
//     chatBody.innerHTML = "";
//   }

//   // Add user message
//   chatBody.innerHTML += `
//     <div class="user-message message-in">
//       <p>${question}</p>
//     </div>
//   `;

//   input.value = "";
//   input.disabled = true;
//   document.getElementById("loading-indicator").classList.remove("hidden");

//   // Scroll to bottom
//   chatBody.scrollTop = chatBody.scrollHeight;

//   try {
//     // Make sure video is loaded
//     const url = encodeURIComponent(location.href);

//     const loadResp = await fetch(`http://127.0.0.1:8000/load_video?url=${url}`);
//     await loadResp.json();

//     // Get answer
//     const response = await fetch(`http://127.0.0.1:8000/ask?q=${encodeURIComponent(question)}&url=${url}`);
//     const data = await response.json();

//     // Add bot message
//     chatBody.innerHTML += `
//       <div class="bot-message message-in">
//         <p>${data.response}</p>
//       </div>
//     `;

//     // Scroll to bottom
//     chatBody.scrollTop = chatBody.scrollHeight;
//   } catch (err) {
//     chatBody.innerHTML += `
//       <div class="bot-message message-in">
//         <p class="text-red-500">Sorry, I couldn't get an answer. Please try again.</p>
//       </div>
//     `;
//   } finally {
//     document.getElementById("loading-indicator").classList.add("hidden");
//     input.disabled = false;
//     input.focus();
//   }
// });

// // Check if we should use dark mode (based on YouTube's dark theme)
// function updateTheme() {
//   const isDarkMode = document.documentElement.getAttribute('dark') === 'true' ||
//     document.body.classList.contains('dark-theme') ||
//     document.documentElement.classList.contains('dark');

//   if (isDarkMode) {
//     document.getElementById("chat-bot-container").classList.add("dark");
//   } else {
//     document.getElementById("chat-bot-container").classList.remove("dark");
//   }
// }

// // Check theme on load and when it might change
// updateTheme();
// const observer = new MutationObserver(updateTheme);
// observer.observe(document.documentElement, { attributes: true });
// observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

// ==UserScript==
// @name         YouTube Q&A Chatbot
// @version      1.0
// @description  Ask questions about YouTube video content
// ==/UserScript==

// Inject Tailwind CSS
const tailwindLink = document.createElement("link");
tailwindLink.href = "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
tailwindLink.rel = "stylesheet";
document.head.appendChild(tailwindLink);

// Wrapper to avoid YouTube DOM contamination
const wrapper = document.createElement("div");
wrapper.id = "youtube-chat-wrapper";
document.body.appendChild(wrapper);

// Create toggle button
const toggleBtn = document.createElement("button");
toggleBtn.innerHTML = `
  <div class="flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
    <span class="font-medium">Ask About Video</span>
  </div>
`;
toggleBtn.className = "fixed z-50 bottom-6 right-6 flex items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none";
wrapper.appendChild(toggleBtn);

// Chat container
const chatContainer = document.createElement("div");
chatContainer.innerHTML = `
<div id="chat-bot-container" class="hidden fixed top-24 right-6 w-[350px] h-3/4 z-[9999] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 box-border">
  <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-600 to-blue-500 sticky top-0">
    <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
      <h3 class="font-bold text-white text-lg">YouTube Q&A</h3>
    </div>
    <div class="flex space-x-2">
      <button id="closeChat" class="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
  <<div id="chat-body" class="flex-1 p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 box-border">
    <div class="flex justify-center items-center h-full text-gray-500 dark:text-gray-400">
      <div class="text-center space-y-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <p class="text-base font-medium">Ask anything about this YouTube video</p>
        <p class="text-sm opacity-75">I'll analyze the content and provide answers based on what's discussed in the video.</p>
      </div>
    </div>
  </div>
  <div class="p-4 border-t border-gray-200 dark:border-gray-700 sticky bottom-0 bg-white dark:bg-gray-800 box-border">
    <form id="chat-form" class="flex items-center space-x-2">
      <input type="text" id="chat-input" placeholder="Ask a question..." class="flex-1 px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white text-base" required />
      <button type="submit" class="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-3 rounded-full hover:shadow-lg transition-all">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </button>
    </form>
  </div>
  <div id="loading-indicator" class="hidden absolute inset-0 bg-white/80 dark:bg-gray-800/80 flex items-center justify-center">
    <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-purple-500"></div>
  </div>
</div>
`;
wrapper.appendChild(chatContainer);

// Style fix for width consistency and message styling
const customStyles = document.createElement("style");
customStyles.innerHTML = `
  #youtube-chat-wrapper * {
    box-sizing: border-box;
  }

  .message-in {
    animation: fadeIn 0.3s ease-out;
  }

  .user-message {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    border-radius: 18px 18px 0 18px;
    color: white;
    max-width: 80%;
    margin-left: auto;
    padding: 12px 16px;
    position: relative;
    margin-bottom: 24px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .bot-message {
    background: #f3f4f6;
    border-radius: 18px 18px 18px 0;
    color: #1f2937;
    max-width: 80%;
    padding: 12px 16px;
    position: relative;
    margin-bottom: 24px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }

  .dark .bot-message {
    background: #374151;
    color: #f3f4f6;
  }
  
  #chat-body {
    overflow-y: auto;
    overflow-x: hidden;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .scrollbar-thin::-webkit-scrollbar {
    width: 6px;
  }
  .scrollbar-thin::-webkit-scrollbar-track {
    background: transparent;
  }
  .scrollbar-thin::-webkit-scrollbar-thumb {
    background: #d1d5db;
    border-radius: 3px;
  }
  .dark .scrollbar-thin::-webkit-scrollbar-thumb {
    background: #4b5563;
  }
`;
document.head.appendChild(customStyles);

// Event handlers
let chatInitialized = false;

toggleBtn.addEventListener("click", async () => {
  const chatBox = document.getElementById("chat-bot-container");
  const isVisible = !chatBox.classList.contains("hidden");

  if (isVisible) {
    chatBox.classList.add("translate-x-full", "opacity-0");
    setTimeout(() => {
      chatBox.classList.add("hidden");
      chatBox.classList.remove("translate-x-full", "opacity-0");
    }, 300);
  } else {
    chatBox.classList.remove("hidden");
    chatBox.classList.add("translate-x-full", "opacity-0");
    setTimeout(() => {
      chatBox.classList.remove("translate-x-full", "opacity-0");
    }, 10);
  }

  if (!chatInitialized && !isVisible) {
    const loadingIndicator = document.getElementById("loading-indicator");
    loadingIndicator.classList.remove("hidden");

    try {
      const url = encodeURIComponent(location.href);
      const loadResp = await fetch(`http://127.0.0.1:8000/load_video?url=${url}`);
      const data = await loadResp.json();
      console.log("Transcript loaded:", data);
      chatInitialized = true;

      document.getElementById("chat-body").innerHTML = `
        <div class="bot-message message-in dark:text-gray-100">
          <p>Hi there! I'm ready to answer questions about this YouTube video. What would you like to know?</p>
        </div>
      `;
    } catch (err) {
      console.error("Failed to load transcript:", err);
      document.getElementById("chat-body").innerHTML = `
        <div class="p-4 text-center">
          <div class="text-red-500 font-medium">Failed to load transcript</div>
          <p class="text-sm text-gray-500 mt-2">Please check if the backend server is running at http://127.0.0.1:8000</p>
        </div>
      `;
    } finally {
      loadingIndicator.classList.add("hidden");
    }
  }
});

document.getElementById("closeChat").addEventListener("click", () => {
  const chatBox = document.getElementById("chat-bot-container");
  chatBox.classList.add("translate-x-full", "opacity-0");
  setTimeout(() => {
    chatBox.classList.add("hidden");
    chatBox.classList.remove("translate-x-full", "opacity-0");
  }, 300);
});

document.getElementById("chat-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("chat-input");
  const question = input.value.trim();
  if (!question) return;

  const chatBody = document.getElementById("chat-body");
  if (chatBody.querySelector(".text-center")) chatBody.innerHTML = "";

  chatBody.innerHTML += `
    <div class="user-message message-in">
      <p>${question}</p>
    </div>
  `;

  input.value = "";
  input.disabled = true;
  document.getElementById("loading-indicator").classList.remove("hidden");
  chatBody.scrollTop = chatBody.scrollHeight;

  try {
    const url = encodeURIComponent(location.href);
    await fetch(`http://127.0.0.1:8000/load_video?url=${url}`);
    const response = await fetch(`http://127.0.0.1:8000/ask?q=${encodeURIComponent(question)}&url=${url}`);
    const data = await response.json();

    chatBody.innerHTML += `
      <div class="bot-message message-in">
        <p>${data.response}</p>
      </div>
    `;
    chatBody.scrollTop = chatBody.scrollHeight;
  } catch (err) {
    chatBody.innerHTML += `
      <div class="bot-message message-in">
        <p class="text-red-500">Sorry, I couldn't get an answer. Please try again.</p>
      </div>
    `;
  } finally {
    document.getElementById("loading-indicator").classList.add("hidden");
    input.disabled = false;
    input.focus();
  }
});

// Theme update logic
function updateTheme() {
  const isDarkMode = document.documentElement.getAttribute('dark') === 'true' ||
    document.body.classList.contains('dark-theme') ||
    document.documentElement.classList.contains('dark');

  if (isDarkMode) {
    document.getElementById("chat-bot-container").classList.add("dark");
  } else {
    document.getElementById("chat-bot-container").classList.remove("dark");
  }
}
updateTheme();
const observer = new MutationObserver(updateTheme);
observer.observe(document.documentElement, { attributes: true });
observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
