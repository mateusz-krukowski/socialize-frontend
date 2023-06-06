import React, { useState, useEffect } from 'react';
import HeaderHero from "./HeaderHero";
import CardsContainer from "./CardsContainer";
import Footer from './Footer';
import './Home.css';

const Home = ({setIsAuthenticated}) => {

    return (
        <div className="Home">
            <HeaderHero setIsAuthenticated={setIsAuthenticated} />
            <CardsContainer/>
            <Footer/>
        </div>
    );
}

export default Home;