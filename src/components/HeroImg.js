import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/introbg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HELLO, I'M A STUDENT.</p>
            <h1>Learning Something New Everyday.</h1>
            <div>
                <Link to="/project" className="btn">Projects
                </Link>
                <Link to="/contact" className="btn-light">Contact
                </Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg;
