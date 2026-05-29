import { useEffect, useState } from "react";
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

  useEffect(() => {
    // Initialize the chatbot when the component mounts
    Chatbot.init();
    Chatbot.addResponses();
  }, []);

  async function sendMessage() {
    if (!inputMessage.trim()) return;

    const userMessage = {
      message: inputMessage,
      sender: "user",
      img: userImg,
      alt: "User",
    };

    setChatMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);
    const response = await Chatbot.getResponseAsync(inputMessage);

    if (response) {
      const robotMessage = {
        message: response,
        sender: "robot",
        img: robotImg,
        alt: "Robot",
      };

      setChatMessages((prev) => [...prev, robotMessage]);
    }

    setInputMessage("");
    setIsLoading(false);
  }

  return (
    <>
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

        {isLoading && <SyncLoader />}

        <ChatInput
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          sendMessage={sendMessage}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}

export default App;
