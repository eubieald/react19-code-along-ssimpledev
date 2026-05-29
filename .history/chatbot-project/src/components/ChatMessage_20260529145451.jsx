import { useEffect, useRef } from "react";
import "./ChatMessage.css";
import { UserProfileImage } from "./UserProfileImage";
import dayjs from "dayjs";

export function ChatMessage({ message, sender, img, alt = "" }) {
  // create a ref for the chat message container
  const chatMessagesRef = useRef(null);
  const 
  const time = dayjs().valueOf();

  // scroll to the bottom of the chat when a new message is added
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className={`chat-message ${sender}`} ref={chatMessagesRef}>
      {sender === "robot" && <img height="50" width="50" src={img} alt={alt} />}

      <div className="message-bubble">
        <span>{message}</span>
        <em>{dayjs(time).format("h:mma")}</em>
      </div>

      {sender === "user" && (
        <UserProfileImage
          className="user-profile-image"
          imgSrc="https://supersimple.dev/images/profile-1.jpg"
          altText={alt}
        />
      )}
    </div>
  );
}
