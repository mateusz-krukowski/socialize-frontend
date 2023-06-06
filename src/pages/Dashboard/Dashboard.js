import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Dashboard({ setIsAuthenticated }) {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUsername = Cookies.get("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        setIsAuthenticated(false);
        Cookies.remove("isAuthenticated");
        Cookies.remove("username");
    };

    return (
        <div>
            <h1>Welcome to the Dashboard, {username}!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}