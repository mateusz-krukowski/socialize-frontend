import HeaderMain from "../../../components/HeaderMain";
import Footer from "../../../components/Footer";
import ChatChard from "./ChatCard"
import {useEffect, useState} from "react";
import Cookies from "js-cookie";


export default function ChatRoom({setIsAuthenticated}){
    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUsername = Cookies.get("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return(<div className="ChatRoom">
        <HeaderMain setIsAuthenticated={setIsAuthenticated}/>
        <h1>Chatroom</h1>
        <ChatChard username={username}/>
    </div>)
}