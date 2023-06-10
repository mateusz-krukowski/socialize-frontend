import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

export default function Dashboard({ setIsAuthenticated }) {
    const [username, setUsername] = useState("");

    useEffect(() => {
        const storedUsername = Cookies.get("username");
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);



    return (
        <div id="dashboard">
            <HeaderMain setIsAuthenticated={setIsAuthenticated}/>
            <h1>Welcome to the Dashboard {username}!</h1>

            <Footer/>
        </div>

    );
}