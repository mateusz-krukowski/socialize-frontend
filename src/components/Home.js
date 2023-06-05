import React, { useState, useEffect } from 'react';
import {fetchData} from "../API";
import HeaderHero from "./HeaderHero";
import RegisterCard from "./RegisterCard";
import WelcomeCard from "./WelcomeCard";

const Home = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        fetchData('http://127.0.0.1:5000')
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <div className="Home">
            <HeaderHero/>
            {data.Status}
            <WelcomeCard/>
            <RegisterCard/>
        </div>
    );
}

export default Home;