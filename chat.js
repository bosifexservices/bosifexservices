document.addEventListener("DOMContentLoaded", () => {
  const chatBtn = document.getElementById("chatBtn");
  const chatBox = document.getElementById("chatBox");
  const closeChat = document.getElementById("closeChat");
  const sendBtn = document.getElementById("sendBtn");
  const userMessage = document.getElementById("userMessage");
  const chatBody = document.getElementById("chatBody");

  chatBtn.addEventListener("click", () => {
    chatBox.classList.add("show");
  });

  closeChat.addEventListener("click", () => {
    chatBox.classList.remove("show");
  });

  async function sendMessage() {
    const message = userMessage.value.trim();
    if (!message) return;

    chatBody.innerHTML += <div class="user-message">${message}</div>;
    userMessage.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await response.json();

      chatBody.innerHTML += <div class="bot-message">${data.reply}</div>;
      chatBody.scrollTop = chatBody.scrollHeight;

    } catch (err) {
      chatBody.innerHTML += <div class="bot-message">⚠️ Sorry, I couldn't connect to the AI.</div>;
    }
  }

  sendBtn.addEventListener("click", sendMessage);

  userMessage.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });
});
