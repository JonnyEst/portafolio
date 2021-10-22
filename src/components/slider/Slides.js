import React from 'react';
import "./Slider.css";

const slidesInfo = [
    {
        src: "https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        alt: "Project 1",
        desc: "Project 1"
    },
    {
        src: "https://images.pexels.com/photos/3584967/pexels-photo-3584967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Project 2",
        desc: "Project 2"
    },
    {
        src: "https://images.pexels.com/photos/4050287/pexels-photo-4050287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        alt: "Project 3",
        desc: "Project 3"
    },
    {
        src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
        alt: "Project 4",
        desc: "Project 4"
    }

]


const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides;