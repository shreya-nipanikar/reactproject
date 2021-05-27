import React from 'react';
import bg from './images/fav.png';
import './Home.css';
import Common from './Common';


const Home = () => {
    return (
        <>

        <Common name="Grow your talent with TechnoHeights"
        imgsrc={bg} visit="/services" btname="Get Started" />
        
        </>
    )
}

export default Home;