import React from "react";
import { useParams } from "react-router-dom";
import HeaderMain from "../../../components/HeaderMain";
import Footer from "../../../components/Footer";

const Profile = ({setIsAuthenticated}) => {
    const { username } = useParams();

    return (
        <div className="user-profile">
            <HeaderMain setIsAuthenticated={setIsAuthenticated}/>
            <h1>Profile: {username}</h1>
            <Footer/>
        </div>
    );
};

export default Profile;