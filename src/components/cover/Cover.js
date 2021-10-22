import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";
const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Jonny Alejandro Estupiñan </h1>
            <p>Systems engineer student | Developer.</p>
        </div>
    )
}

export default Cover
