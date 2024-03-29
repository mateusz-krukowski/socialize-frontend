import React from "react";
import { useParams } from "react-router-dom";
import HeaderMain from "../../../components/HeaderMain";
import Footer from "../../../components/Footer";
import "./Profile.css"

const Profile = ({setIsAuthenticated}) => {
    const { username } = useParams();

    return (
        <div className="user-profile">
            <HeaderMain setIsAuthenticated={setIsAuthenticated}/>
            <main>
            <h1>Profile: {username}</h1>
            <Footer/>
            </main>
        </div>
    );
};

export default Profile;