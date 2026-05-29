import { useEffect, useRef } from "react";
import "./ChatMessage.css";
import { UserProfileImage } from "./UserProfileImage";

export function ChatMessage({ message, sender, img, alt = "" }) {
  // create a ref for the chat message container
  const chatMessagesRef = useRef(null);

  // scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className={`chat-message ${sender}`} ref={chatMessagesRef}>
      {sender === "robot" && <img height="50" width="50" src={img} alt={alt} />}

      <div className="message-bubble">{message}</div>

      {sender === "user" && <UserProfileImage} altText={alt} />}
    </div>
  );
}
