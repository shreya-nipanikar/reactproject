import React from 'react';
import bg from './images/tech.png';
import Common from './Common';
import './Home.css';


const About = () => {
    return (
        <>
        <div className="mycontainerr">
        <Common name="Our Company has many candidates. See reviews to gain trust."
            imgsrc={bg} visit="/contact" btname="Contact Now" />
           </div>
        </>
    )
}

export default About;