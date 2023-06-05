import React, { useState, useEffect } from 'react';
import {fetchData} from "../API";
import HeaderHero from "./HeaderHero";
import CardsContainer from "./CardsContainer";
import Footer from './Footer';
import './Home.css';

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
            <CardsContainer/>
            <Footer/>
        </div>
    );
}

export default Home;