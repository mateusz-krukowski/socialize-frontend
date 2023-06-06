import React,{useState} from 'react';
import HeaderHero from "./HeaderHero";
import CardsContainer from "./CardsContainer";
import Footer from '../../components/Footer';

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