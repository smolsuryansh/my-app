import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import "./FooterStyles.css";

import React from 'react';

const Footer = () => {
  return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "white", marginRight: "2rem"}}/>
                        <div>
                            <p>Bhopal.</p>
                            <p>India.</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{color: "white", marginRight: "2rem"}}/>
                            84589-24610
                        </h4>
                    </div>

                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{color: "white", marginRight: "2rem"}}/>
                            suryanshdubey2525@gmail.com
                        </h4>
                    </div>
                </div>
                
                <div className="right">
                    <h4>
                        About Me
                    </h4>

                    <p>
                        My name is Suryansh Dubey. Currently a student. I am passionate about coding and tech.
                    </p>

                    <div className="social">
                        <FaInstagram size={25} style={{color: "white", marginRight: "2rem"}}/>
                        <FaTwitter size={25} style={{color: "white", marginRight: "2rem"}}/>
                        <FaLinkedin size={25} style={{color: "white", marginRight: "2rem"}}/>
                    </div>

                </div>
            </div>
        </div>
  );
};

export default Footer;
