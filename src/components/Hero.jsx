import React, { useEffect, useState } from 'react';
import { FaAws, FaDocker, FaGithub, FaLinkedin, FaBriefcase, FaServer, FaCode, FaUserTie, FaDownload, FaPhone, FaEnvelope, FaCircle } from 'react-icons/fa';

const Hero = () => {
    const [lines, setLines] = useState([]);

    // Resume content
    const resumeContent = `
KARTIK POTDAR
Cloud & DevOps Engineer | AWS Certified | MCA Graduate

CONTACT:
Location: Kormangala, Bangalore
Phone: +91 9008870855
Email: kartikpotdar007@gmail.com
LinkedIn: linkedin.com/in/kartik-potdar

PROFESSIONAL SUMMARY:
Cloud & DevOps Engineer with hands-on AWS deployments, Flask + MySQL web apps, Docker automation, 
CI/CD pipelines, serverless architecture, and Generative AI exposure. Immediate joiner ready to 
contribute to cloud infrastructure and DevOps initiatives.

TECHNICAL SKILLS:
Cloud Platforms: AWS (EC2, S3, ECS, Fargate, Lambda, CloudFront, IAM, VPC)
DevOps: Docker, Kubernetes, CI/CD, Jenkins, GitHub Actions, Linux, Bash Scripting
Programming: Python, Flask, JavaScript, HTML, CSS
Databases: MySQL, SQL, Database Design
AI/ML: Generative AI, CNN, NLP, TensorFlow
Tools: Git, GitHub, REST APIs, Microservices

PROFESSIONAL EXPERIENCE:


IT Project Intern | Welleazy | Recent
- Gained hands-on exposure to AWS serverless architecture and cloud deployment strategies
- Implemented Docker containerization for application deployments, improving efficiency
- Created comprehensive technical specifications and project documentation

Fullstack Developer Intern | Gyaan Vivarttana Technologies | Dec 2023 - Feb 2024
- Developed responsive web apps using HTML, CSS, and JavaScript
- Integrated Flask and MySQL for secure backend operations
- Enhanced UI/UX design resulting in improved user engagement

DevOps Cloud Intern | PRODEVANS(Cloud & Open Source Solutions) | Jan 2022 - Jul 2022
- Deployed containerized applications with Docker and Kubernetes, cutting release time by 40%
- Automated AWS resource provisioning with Python scripts, reducing manual work by 50%
- Set up CI/CD pipelines for automated testing and deployment

Python Developer Intern | Softek Solutions Pvt. Ltd | May 2022 - Jun 2022
- Built web applications using Flask for backend and HTML/CSS/JS for frontend
- Created and managed databases with MySQL Workbench
- Optimized application performance and responsiveness



CERTIFICATIONS:
- AWS Solution Architect (2024)
- Microsoft Generative AI (2024)
- RHCSA - Red Hat Certified System Administrator (2024)
- Digital Marketing (2023)
- Website Development Tutorial (2023)

EDUCATION:
Master of Computer Applications (MCA) | CMR University | 2022-2024
Bachelor of Computer Applications (BCA) | Sharnbasva University | 2019-2022
Pre-University (PCMB) | Alva's College | 2017-2019

AVAILABILITY: Immediate Joiner
    `;

    const handleDownloadResume = (e) => {
        e.preventDefault();
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Kartik_Potdar_Cloud_DevOps_Engineer_Resume.txt';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        alert('Resume downloaded! For a professionally formatted PDF version, please contact me at kartikpotdar007@gmail.com');
    };

    useEffect(() => {
        const terminalLines = [
            { type: 'command', text: 'whoami' },
            { type: 'output', text: 'My name is kartik potdar' },
            { type: 'command', text: 'cat skills.txt' },
            { type: 'output', text: 'AWS | Docker | Kubernetes | CI/CD' },
            { type: 'command', text: 'echo $STATUS' },
            { type: 'output', text: 'Immediate Joining' },
            { type: 'output', text: 'Ready to Deploy Solutions 🚀' }
        ];

        let currentLine = 0;
        const timer = setInterval(() => {
            if (currentLine < terminalLines.length) {
                setLines(prev => [...prev, terminalLines[currentLine]]);
                currentLine++;
            } else {
                clearInterval(timer);
            }
        }, 800); // Add a line every 800ms

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="cloud-animation"></div>
            </div>
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <i className="pulse" style={{ display: 'flex' }}><FaCircle /></i>
                        <span>Available for Immediate Joining</span>
                    </div>
                    <h1 className="hero-title">
                        Hi, I'm <span className="gradient-text">Kartik Potdar</span>
                    </h1>
                    <h2 className="hero-subtitle">Executive Project management  Enthusiast Cloud Security and AWS  </h2>
                    <p className="hero-tagline">Building Scalable, Secure & Automated Cloud Solutions</p>

                    {/* Quick Highlights Strip */}
                    <div className="highlights-strip">
                        <div className="highlight-item">
                            <i><FaAws /></i>
                            <span>AWS Certified</span>
                        </div>
                        <div className="highlight-item">
                            <i><FaBriefcase /></i>
                            <span>4+ Internships</span>
                        </div>
                        <div className="highlight-item">
                            <i><FaDocker /></i>
                            <span>Docker & CI/CD</span>
                        </div>
                        <div className="highlight-item">
                            <i><FaServer /></i>
                            <span>Serverless Deployment</span>
                        </div>
                        <div className="highlight-item">
                            <i><FaCode /></i>
                            <span>Python Automation</span>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            <i><FaUserTie /></i>
                            Hire Me
                        </a>
                        <a href="#" className="btn btn-secondary" id="download-resume" onClick={handleDownloadResume}>
                            <i><FaDownload /></i>
                            Download Resume
                        </a>
                        <a href="https://github.com/kartik1023" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <i><FaGithub /></i>
                            GitHub
                        </a>
                    </div>

                    {/* Contact Info Quick Access */}
                    <div className="hero-contact">
                        <a href="tel:+919008870855" className="contact-quick">
                            <i><FaPhone /></i>
                            9008870855
                        </a>
                        <a href="mailto:kartikpotdar007@gmail.com" className="contact-quick">
                            <i><FaEnvelope /></i>
                            kartikpotdar007@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/kartik-potdar" target="_blank" rel="noopener noreferrer" className="contact-quick">
                            <i><FaLinkedin /></i>
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <span className="terminal-dot red"></span>
                            <span className="terminal-dot yellow"></span>
                            <span className="terminal-dot green"></span>
                            <span className="terminal-title">kartik@cloud-engineer:~</span>
                        </div>
                        <div className="terminal-body" style={{ minHeight: '230px' }}>
                            {lines.map((line, index) => (
                                <p key={index} className={line.type === 'output' ? 'terminal-output' : ''}>
                                    {line.type === 'command' && <span className="terminal-prompt">$</span>}
                                    {line.text}
                                </p>
                            ))}
                            <p><span className="terminal-prompt">$</span> <span className="cursor">_</span></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <div className="">
                    <div className=""></div>
                </div>
                <p></p>
            </div>
        </section>
    );
};

export default Hero;
