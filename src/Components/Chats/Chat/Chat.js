import { Avatar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

const Chat = ({ name, message, timestamp, profilePic }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat">
        <Avatar className="chat__avatar" src={profilePic}>
          {name[0]}
        </Avatar>
        <div className="chat__info">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <small className="chat__time">{timestamp}</small>
      </div>
    </Link>
  );
};

export default Chat;
