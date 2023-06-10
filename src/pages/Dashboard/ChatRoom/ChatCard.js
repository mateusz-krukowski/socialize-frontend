import './ChatCard.css';
import { fetchData } from "../../../API";
import { useEffect, useState } from "react";

import MessageCard from "./MessageCard";

export default function ChatCard({ username }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [date,setDate] = useState("")
    const { DateTime } = require('luxon');


    useEffect(() => {
        fetchMessages();
        const interval = setInterval(fetchMessages, 1000); // Ask  server every second

        return () => {
            clearInterval(interval);
        };
    }, []);

        async function fetchMessages() {
            try {
                const response = await fetchData('http://127.0.0.1:5000/api/getmessages');
                setMessages(response.data);
            } catch (error) {
                console.error('Błąd podczas pobierania wiadomości:', error);
            }
        }

    function handleChange(e) {
        setNewMessage(e.target.value);
        let datenow = DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss');
        setDate(datenow);
    }

    const sendMessage = (event) => {
        event.preventDefault();

        if (newMessage.trim() === "") {
            return;
        }

        const data = {"user":username,"text":newMessage,"date":date}
        console.log(data)

        fetchData('https://socialize-backend-s1gy.onrender.com/api/sendmessage', "POST", data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });
        setNewMessage("")
    }


    return (
        <div className="chat-card">
            <div className="messages-container">
                {messages.map((message,index) => (
                    <MessageCard
                        key={index}
                        username={message.user}
                        text={message.text}
                        date={message.date}
                    />
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <div className="message-input">
                    <input
                        type="text"
                        name="text"
                        placeholder="Send a message..."
                        maxLength="255"
                        value={newMessage}
                        onChange={handleChange}
                    />
                    <button type="submit">➡️</button>
                </div>
            </form>
        </div>
    );
}