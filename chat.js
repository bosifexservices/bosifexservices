const chatBtn = document.getElementById("chatBtn");
const chatBox = document.getElementById("chatBox");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const userMessage = document.getElementById("userMessage");
const chatBody = document.getElementById("chatBody");

chatBtn.addEventListener("click", () => {
    chatBox.classList.toggle("show");
});

closeChat.addEventListener("click", () => {
    chatBox.classList.remove("show");
});

sendBtn.addEventListener("click", sendMessage);

userMessage.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {

    const message = userMessage.value.trim();

    if (!message) return;

    chatBody.innerHTML += 
        <div class="user-message">
            ${message}
        </div>
    ;

    userMessage.value = "";

    chatBody.innerHTML += 
        <div class="bot-message">
            🤖 AI connection is not added yet.
        </div>
    ;

    chatBody.scrollTop = chatBody.scrollHeight;
}
