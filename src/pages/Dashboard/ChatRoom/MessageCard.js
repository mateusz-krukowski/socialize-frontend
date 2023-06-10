import React from "react";
import './MessageCard.css'

const MessageCard = ({ username, text, date }) => {
    return (
        <div className="message-card">
            <p className="message-card-username">{username}</p>
            <p className="message-card-text">{text}</p>
            <p className="message-card-date">{date}</p>
        </div>
    );
};

export default MessageCard;