import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Jonny Estupiñan</h1>
                <p>Bogotá DC</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And let´s get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="desing-by">
                    Design By Jonny Estupiñan
                </div>
                <div className="sns-links">
                   <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin linkedin" ></i>
                    </a> 
                    <a href="https://twitter.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-twitter twitter"></i>
                    </a> 
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="fab fa-facebook facebook"></i>
                    </a> 
                </div>
            </div>
        </footer>
    )
}

export default Footer
