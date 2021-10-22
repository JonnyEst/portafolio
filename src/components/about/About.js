import React from 'react';
import "./About.css";
import JEst from "../../media/JEst.jpg";
const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h2>About</h2>
                <hr></hr>
                <h3>I´m Jonny Estupiñan. </h3>
                <p>Passionate about technology and web development. With a lot of desire to continue learning and fulfill my passion.</p>
                <br></br>
                <p>
                    <b>Age:</b> 21 <br></br><b>Email:</b> jonny.037e@gmail.com <br></br><b>From: </b>
                    Bogotá,Colombia
                </p>               
            </div>
            <div className="about-img">
                <img src={JEst} alt="about"/>
            </div>
        </div>
    )
}

export default About 
