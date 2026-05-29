import { useState, useEffect, useRef } from "react";
import { Chatbot } from "supersimpledev";
import userImg from "../src/assets/user.png";
import robotImg from "./assets/robot.png";
import "./App.css";

function ChatInput({ inputMessage, setInputMessage, sendMessage, isLoading }) {
  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Type your message..."
        value={inputMessage}
        onChange={(event) => setInputMessage(event.target.value)}
        onKeyDown={(event) => {
          if (
            event.key === "Enter" &&
            !isLoading &&
            inputMessage.trim() !== ""
          ) {
            sendMessage();
          }

          if (event.key === "Escape") {
            setInputMessage("");
          }
        }}
      />

      <button
        onClick={sendMessage}
        disabled={isLoading || inputMessage.trim() === ""}
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </div>
  );
}

function ChatMessage({ message, sender, img, alt = "" }) {
  // create a ref for the chat message container
  const chatMessagesRef = useRef(null);

  // scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessagesRef]);

  return (
    <div className={`chat-message ${sender}`} ref={chatMessagesRef}>
      {sender === "robot" && <img height="50" width="50" src={img} alt={alt} />}

      <div className="message-bubble">{message}</div>

      {sender === "user" && <img height="50" width="50" src={img} alt={alt} />}
    </div>
  );
}

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello chatbot",
      sender: "user",
      img: "user.png",
      alt: "User",
    },
    {
      message: "Hello! How can I help you today?",
      sender: "robot",
      img: "robot.png",
      alt: "Robot",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage() {
    if (!inputMessage.trim()) return;

    const userMessage = {
      message: inputMessage,
      sender: "user",
      img: "user.png",
      alt: "User",
    };

    setChatMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    const response = await Chatbot.getResponseAsync(inputMessage);

    if (response) {
      const robotMessage = {
        message: response,
        sender: "robot",
        img: "robot.png",
        alt: "Robot",
      };

      setChatMessages((prev) => [...prev, robotMessage]);
    }

    setInputMessage("");
    setIsLoading(false);
  }

  return (
    <div className="app">
      <div className="chat-container">
        {chatMessages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            sender={message.sender}
            img={message.img}
            alt={message.alt}
          />
        ))}
      </div>

      <ChatInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        sendMessage={sendMessage}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
