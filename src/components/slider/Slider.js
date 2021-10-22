import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides.js";
import "./Slider.css";

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div>

            <Carousel 
                slidesPerPage={0}
                animationSpeed={220}
                centered
                offset={50}
                itemWidth={400}
                slides={Slides}
                breakpoints={{
                    960: {
                        slidesPerPage: 1,
                        arrows:false,
                        itemWidth: 250,
                    },
                }}
            />
        </div>
    )
}

export default Slider;