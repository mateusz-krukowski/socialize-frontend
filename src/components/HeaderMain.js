import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMain.css";

export default function HeaderMain({ setIsAuthenticated }) {
    const username = Cookies.get("username");
    const isAdmin = Cookies.get("isAdmin");
    const handleLogout = () => {
        setIsAuthenticated(false);
        Cookies.remove("isAuthenticated");
        Cookies.remove("username");
        Cookies.remove("isAdmin");
    };

    return (
        <header className="header-main">
            <Link to={'/'} className="logo-title pb-8">Socialize</Link>
            <div className="links-container">
                {isAdmin === "true" ? <Link to={'/admin'}>admin </Link>: null}
                <Link to={'/chatroom'}>chatroom</Link>
                <Link to={`/user/${username}`} id="profile-link">profile</Link>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
}