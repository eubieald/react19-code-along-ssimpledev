import "./ChatInput.css";

export function ChatInput({
  inputMessage,
  setInputMessage,
  sendMessage,
  isLoading,
}) {
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
      <button>Clear</button>
    </div>
  );
}
