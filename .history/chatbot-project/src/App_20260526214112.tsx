import { useState, useEffect, useRef } from "react";
import { Chatbot } from "supersimpledev";
import userImg from "./assets/user.png";
import robotImg from "./assets/robot.png";
import "./App.css";

type ChatInputProps = {
  inputMessage: string;
  setInputMessage: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: () => void;
  isLoading: boolean;
};

function ChatInput({
  inputMessage,
  setInputMessage,
  sendMessage,
  isLoading,
}: ChatInputProps) {
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

type ChatMessageProps = {
  message: string;
  sender: string;
  img: string;
  alt?: string;
};

function ChatMessage({ message, sender, img, alt = "" }: ChatMessageProps) {
  const chatMessagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [message]);

  return (
    <div className={`chat-message ${sender}`} ref={chatMessagesRef}>
      {sender === "robot" && <img height="50" width="50" src={img} alt={alt} />}

      <div className="message-bubble">{message}</div>

      {sender === "user" && <img height="50" width="50" src={img} alt={alt} />}
    </div>
  );
}

type Message = {
  id: number;
  message: string;
  sender: string;
  img: string;
  alt: string;
};

function App() {
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: 1,
      message: "Hello chatbot",
      sender: "user",
      img: userImg,
      alt: "User",
    },
    {
      id: 2,
      message: "Hello! How can I help you today?",
      sender: "robot",
      img: robotImg,
      alt: "Robot",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function sendMessage() {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      message: inputMessage,
      sender: "user",
      img: userImg,
      alt: "User",
    };

    setChatMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    try {
      const response = await Chatbot.getResponseAsync(inputMessage);

      if (response) {
        const robotMessage: Message = {
          id: Date.now() + 1,
          message: response,
          sender: "robot",
          img: robotImg,
          alt: "Robot",
        };

        setChatMessages((prev) => [...prev, robotMessage]);
      }
    } catch (error) {
      console.error(error);
    }

    setInputMessage("");
    setIsLoading(false);
  }

  return (
    <div className="app">
      <div className="chat-container">
        {chatMessages.map((message) => (
          <ChatMessage
            key={message.id}
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
