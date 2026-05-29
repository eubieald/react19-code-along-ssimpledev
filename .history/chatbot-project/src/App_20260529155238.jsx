import { useState, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";

export default function ChatApp() {
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("messages");
    return savedMessages ? JSON.parse(savedMessages) : [];
  });

  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: crypto.randomUUID(),
      message: input,
      sender: "user",
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    // Example bot reply
    setTimeout(() => {
      const botMessage = {
        id: crypto.randomUUID(),
        message: "Hello from the bot!",
        sender: "robot",
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const clearChat = () => {
    localStorage.removeItem("messages");
    setMessages([]);
  };

  return (
    <div>
      <div className="messages-container">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            message={msg.message}
            sender={msg.sender}
            timestamp={msg.timestamp}
            img="/robot.png"
            alt="Robot"
          />
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />

      <button onClick={sendMessage}>Send</button>

      <button onClick={clearChat}>Clear Chat</button>
    </div>
  );
}
