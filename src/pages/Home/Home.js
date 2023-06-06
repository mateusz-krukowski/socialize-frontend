import React,{useState} from 'react';
import HeaderHero from "./HeaderHero";
import CardsContainer from "./CardsContainer";
import Footer from '../../components/Footer';
import './Home.css'

const Home = ({setIsAuthenticated}) => {

    return (
        // eslint-disable-next-line react/style-prop-object
        <div className="Home" >
            <HeaderHero setIsAuthenticated={setIsAuthenticated} />
            <CardsContainer/>
            <Footer/>
        </div>
    );
}

export default Home;