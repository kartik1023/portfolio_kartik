import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Kartik Potdar</h3>
                        <p>Cloud & DevOps Engineer passionate about building scalable and secure cloud solutions.</p>
                        <div className="social-links">
                            <a href="https://github.com/kartik1023" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <i><FaGithub /></i>
                            </a>
                            <a href="https://linkedin.com/in/kartik-potdar" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <i><FaLinkedin /></i>
                            </a>
                            <a href="mailto:kartikpotdar007@gmail.com" title="Email">
                                <i><FaEnvelope /></i>
                            </a>
                            <a href="tel:+919008870855" title="Phone">
                                <i><FaPhone /></i>
                            </a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#experience">Experience</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Explore</h4>
                        <ul className="footer-links">
                            <li><a href="#certifications">Certifications</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact Info</h4>
                        <ul className="footer-contact">
                            <li><i><FaMapMarkerAlt /></i> Kormangala, Bangalore</li>
                            <li><i><FaPhone /></i> +91 9008870855</li>
                            <li><i><FaEnvelope /></i> kartikpotdar007@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kartik Potdar. All rights reserved. | Built with <i><FaHeart style={{ color: '#EF4444', display: 'inline', margin: '0 5px' }} /></i> for Cloud
                        Engineering</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
