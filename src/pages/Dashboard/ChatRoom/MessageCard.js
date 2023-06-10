import React from "react";
import './MessageCard.css'

const MessageCard = ({ username, text, date }) => {
    return (
        <div className="message-card">
            <p>{username}</p>
            <p>{text}</p>
            <p>{date}</p>
        </div>
    );
};

export default MessageCard;