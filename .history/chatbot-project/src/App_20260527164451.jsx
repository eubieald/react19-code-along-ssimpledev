import { useState } from "react";
import { Chatbot } from "supersimpledev";
import userImg from "./assets/user.png";
import robotImg from "./assets/robot.png";
import { ChatMessage } from "./components/ChatMessage";
import { ChatInput } from "./components/ChatInput";
import SyncLoader from "react-spinners/SyncLoader";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello chatbot",
      sender: "user",
      img: userImg,
      alt: "User",
    },
    {
      message: "Hello! How can I help you today?",
      sender: "robot",
      img: robotImg,
      alt: "Robot",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage() {
    if (!inputMessage.trim() || isLoading) return;

    const currentMessage = inputMessage;

    // Add user message
    const userMessage = {
      message: currentMessage,
      sender: "user",
      img: userImg,
      alt: "User",
    };

    setChatMessages((prev) => [...prev, userMessage]);

    // Clear input immediately
    setInputMessage("");

    // Show AI thinking spinner
    setIsLoading(true);

    try {
      const response = await Chatbot.getResponseAsync(currentMessage);

      // Add AI response after loading
      const robotMessage = {
        message: response,
        sender: "robot",
        img: robotImg,
        alt: "Robot",
      };

      setChatMessages((prev) => [...prev, robotMessage]);
    } catch (error) {
      console.error(error);

      const errorMessage = {
        message: "Something went wrong.",
        sender: "robot",
        img: robotImg,
        alt: "Robot",
      };

      setChatMessages((prev) => [...prev, errorMessage]);
    } finally {
      // Hide spinner
      setIsLoading(false);
    }
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

        {isLoading && (
          <div className="chat-message-container robot-message-container">
            <img src={robotImg} alt="Robot" className="chat-message-profile" />

            <div className="chat-message robot-message">
              <SyncLoader size={6} color="#555" />
            </div>
          </div>
        )}
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
