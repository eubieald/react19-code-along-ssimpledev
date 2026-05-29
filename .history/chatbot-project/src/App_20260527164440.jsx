 {/* AI Thinking Spinner */}
        {isLoading && (
          <div className="chat-message-container robot-message-container">
            <img
              src={robotImg}
              alt="Robot"
              className="chat-message-profile"
            />

            <div className="chat-message robot-message">
              <SyncLoader size={6} color="#555" />
            </div>
          </div>
        )}
      </div>