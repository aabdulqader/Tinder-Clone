import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./ChatScreen.css";
const ChatScreen = () => {
  const [messages, setMessages] = useState([
    {
      name: "Shimul",
      message: "Hey.. whats up!",
      image:
        "https://images.pexels.com/photos/1726999/pexels-photo-1726999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      message: "I'm fine.... how are you?",
    },
    {
      name: "Shimul",
      message: "Coooool man.... 🚀🚀🚀",
      image:
        "https://images.pexels.com/photos/1726999/pexels-photo-1726999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p> YOU MATCHED WITH SHIMUL ON 18/08/3031 </p>
      {messages.map((message) => (
        <div className="chatScreen__message">
          {message.image ? (
            <Avatar className="chatScreen__avatar" src={message.image} />
          ) : (
            ""
          )}
          <p
            className={
              message.name ? "chatScreen__sender" : "chatScreen__receiver"
            }
          >
            {message.message}
          </p>
        </div>
      ))}
      <div className="chatScreen__inputContainer">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message..."
          />
          <button disabled={!input} type="submit" onClick={handleSubmit}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;
