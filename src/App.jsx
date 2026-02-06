import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';

import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Console messages
    console.log('%c👋 Hello, Recruiter!', 'color: #00C2FF; font-size: 24px; font-weight: bold;');
    console.log('%cThanks for checking out my portfolio!', 'color: #64FFDA; font-size: 16px;');
    console.log('%c📧 Email: kartikpotdar007@gmail.com', 'color: #8892B0; font-size: 14px;');
    console.log('%c📱 Phone: +91 9008870855', 'color: #8892B0; font-size: 14px;');
    console.log('%c💼 LinkedIn: linkedin.com/in/kartik-potdar', 'color: #8892B0; font-size: 14px;');
    console.log('%c🚀 Status: Immediate Joiner', 'color: #10B981; font-size: 14px; font-weight: bold;');

    // Konami Code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    const handleKeyDown = (e) => {
      konamiCode.push(e.key);
      konamiCode = konamiCode.slice(-10);

      if (konamiCode.join('') === konamiSequence.join('')) {
        alert('🎉 Konami Code Activated! You found the easter egg! 🚀\n\nYou clearly pay attention to details - that\'s exactly what we need in a Cloud Engineer!\n\nLet\'s connect: kartikpotdar007@gmail.com');
        konamiCode = [];
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />

      <Certifications />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
