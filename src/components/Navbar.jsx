import React, { useState, useEffect } from 'react';
import { FaCloud } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Active link highlighting logic
            const sections = ['home', 'about', 'skills', 'experience', 'certifications', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveLink(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="container nav-container">
                <div className="logo">
                    <i><FaCloud /></i>
                    <span>Kartik<span className="accent">Potdar</span></span>
                </div>
                <ul className={`nav-menu ${isOpen ? 'active' : ''}`} id="nav-menu">
                    <li><a href="#home" className={`nav-link ${activeLink === 'home' ? 'active' : ''}`} onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" className={`nav-link ${activeLink === 'about' ? 'active' : ''}`} onClick={closeMenu}>About</a></li>
                    <li><a href="#skills" className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`} onClick={closeMenu}>Skills</a></li>
                    <li><a href="#experience" className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`} onClick={closeMenu}>Experience</a></li>
                    <li><a href="#certifications" className={`nav-link ${activeLink === 'certifications' ? 'active' : ''}`} onClick={closeMenu}>Certifications</a></li>
                    <li><a href="#contact" className="nav-link cta-nav" onClick={closeMenu}>Contact</a></li>
                </ul>
                <div className={`hamburger ${isOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
