document.addEventListener("DOMContentLoaded", function(){

    const chatBtn = document.getElementById("chatBtn");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");

    const sendBtn = document.getElementById("sendBtn");
    const userMessage = document.getElementById("userMessage");
    const chatBody = document.getElementById("chatBody");


    // Open chat
    chatBtn.addEventListener("click", function(){
        chatBox.classList.add("show");
    });


    // Close chat
    closeChat.addEventListener("click", function(){
        chatBox.classList.remove("show");
    });


    // Send message
    sendBtn.addEventListener("click", function(){

        let message = userMessage.value.trim();

        if(message === ""){
            return;
        }


        chatBody.innerHTML += 
            <div class="user-message">
                ${message}
            </div>
        ;


        userMessage.value = "";


        chatBody.innerHTML += 
            <div class="bot-message">
                🤖 I received your message. AI connection will be added soon.
            </div>
        ;


        chatBody.scrollTop = chatBody.scrollHeight;

    });


});
