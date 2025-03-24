import React from "react";
import "./FooterStyle.css";
import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "1rem" }} />
                        <p>Poornima University, Jaipur</p>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "white", marginRight: "1rem" }} title="+91 8529274639"/>
                        <span>{"+91"} {"8529274639"}</span>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{ color: "white", marginRight: "1rem" }} />
                        <a href="mailto:2022cslakshika12779@poornima.edu.in">2022cslakshika12779@poornima.edu.in</a>
                    </div>
                </div>
                
                <div className="right">
                    <h4>Connect with Me</h4>
                    <a  className="leetcode"
                        href="https://www.leetcode.com/u/lakshika_sharma"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white", fontSize: "1.1rem", marginRight: "1rem", textDecoration: "none" }}
                    >
                        LeetCode
                    </a>
                    <div className="social">
                        <FaInstagram
                            size={30}
                            style={{ color: "white", marginRight: "1rem" }}
                            onClick={() => window.open("https://www.instagram.com/lakshika4sharma/", "_blank")}
                        />
                        
                        <FaLinkedin
                            size={30}
                            style={{ color: "white", marginRight: "1rem" }}
                            onClick={() => window.open("https://www.linkedin.com/in/lakshika-sharma-a011a4279", "_blank")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
