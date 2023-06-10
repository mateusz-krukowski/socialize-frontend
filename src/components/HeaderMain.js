import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMain.css";

export default function HeaderMain({ setIsAuthenticated }) {
    var username = Cookies.get("username");
    const handleLogout = () => {
        setIsAuthenticated(false);
        Cookies.remove("isAuthenticated");
        Cookies.remove("username");
        Cookies.remove("isAdmin");
    };

    return (
        <header className="header-main">
            <h1 className="logo-title">Socialize</h1>
            <div className="links-container">
                <Link to={'/chatroom'}>chatroom</Link>
                <Link to={`/user/${username}`} id="profile-link">profile</Link>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
}