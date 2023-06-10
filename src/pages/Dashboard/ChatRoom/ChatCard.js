import './ChatCard.css';
import { fetchData } from "../../../API";
import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";

export default function ChatCard({ username }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();

        async function fetchMessages() {
            try {
                const response = await fetchData('http://127.0.0.1:5000/api/getmessages');
                setMessages(response.data);
                response.data.forEach((message) => {
                    console.log(message);
                });
            } catch (error) {
                console.error('Błąd podczas pobierania wiadomości:', error);
            }
        }
    }, []);

    return (
        <div className="chat-card">
            <div className="messages-container">
                {messages.map((message) => (
                    <MessageCard
                        username={message.user}
                        text={message.text}
                        date={message.date}
                    />
                ))}
            </div>
            <form>
                <input className="message-input" type="text" placeholder="Send a message..." maxLength="255" />
            </form>
        </div>
    );
}