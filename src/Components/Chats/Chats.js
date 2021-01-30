import React from "react";
import Chat from "./Chat/Chat";
import "./Chats.css";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Abdul Qader"
        message="Yo whats up!!"
        timestamp="Yesterday"
        profilePic="https://lh3.googleusercontent.com/ogw/ADGmqu8huYwMAifb4lJin2nE3CHCJJBvE2FZHoldA3JV=s83-c-mo"
      />

      <Chat
        name="Jssk aseeen"
        message="Yo whats up!!"
        timestamp="30 second ago"
        profilePic="https://images.pexels.com/photos/705741/pexels-photo-705741.png?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Chat
        name="Pasow Queen"
        message="Yo whats up!!"
        timestamp="15 days ago"
        profilePic="https://images.pexels.com/photos/2744636/pexels-photo-2744636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
      <Chat
        name="Jonior Spider"
        message="Yo whats up!!"
        timestamp="1 second ago"
        profilePic="https://images.pexels.com/photos/3074949/pexels-photo-3074949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />
    </div>
  );
};

export default Chats;
