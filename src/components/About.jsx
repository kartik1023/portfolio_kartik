import React, { useEffect, useRef, useState } from 'react';
import { FaCloud, FaCogs, FaBrain, FaShieldAlt, FaUserTie, FaMapMarkerAlt } from 'react-icons/fa';

const StatItem = ({ number, text, suffix = '+' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                let start = 0;
                const end = parseInt(number);
                if (start === end) return;

                let totalDuration = 2000;
                let incrementTime = (totalDuration / end) * 10;

                let timer = setInterval(() => {
                    start += 1;
                    setCount(start);
                    if (start >= end) clearInterval(timer);
                }, incrementTime);

                observer.unobserve(ref.current);
            }
        }, { threshold: 0.5 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [number]);

    return (
        <div className="stat-item" ref={ref}>
            <h4>{count}{suffix}</h4>
            <p>{text}</p>
        </div>
    );
}

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Get To Know Me</span>
                    <h2 className="section-title">About Me</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Cloud & DevOps Engineer with a Passion for Automation</h3>
                        <p>
                            I'm a <strong>Cloud & DevOps Engineer</strong> with hands-on experience in <strong>AWS
                                deployments</strong>,
                            <strong>Docker automation</strong>, <strong>CI/CD pipelines</strong>, and <strong>serverless
                                architecture</strong>.
                            I specialize in building scalable, secure, and automated cloud solutions that drive business
                            efficiency.
                        </p>
                        <p>
                            With a strong foundation in <strong>Python development</strong>, <strong>Flask web
                                applications</strong>,
                            and <strong>MySQL databases</strong>, I bring a full-stack perspective to cloud engineering. My
                            experience
                            spans across multiple internships where I've deployed production-grade applications, automated
                            infrastructure,
                            and implemented DevOps best practices.
                        </p>
                        <p>
                            I'm also passionate about <strong>Generative AI</strong> and <strong>Machine Learning</strong>,
                            having worked
                            on CNN-based healthcare detection systems and AI trading automation. I believe in continuous
                            learning and
                            staying updated with the latest cloud technologies and security practices.
                        </p>

                        <div className="about-highlights">
                            <div className="about-highlight-item">
                                <i><FaCloud /></i>
                                <div>
                                    <h4>Cloud Deployments</h4>
                                    <p>AWS EC2, ECS, Lambda, S3, CloudFront</p>
                                </div>
                            </div>
                            <div className="about-highlight-item">
                                <i><FaCogs /></i>
                                <div>
                                    <h4>DevOps Automation</h4>
                                    <p>Docker, Kubernetes, CI/CD Pipelines</p>
                                </div>
                            </div>
                            <div className="about-highlight-item">
                                <i><FaBrain /></i>
                                <div>
                                    <h4>AI/ML Exposure</h4>
                                    <p>Generative AI, CNN, NLP Projects</p>
                                </div>
                            </div>
                            <div className="about-highlight-item">
                                <i><FaShieldAlt /></i>
                                <div>
                                    <h4>Security Mindset</h4>
                                    <p>Cloud security best practices</p>
                                </div>
                            </div>
                        </div>

                        <div className="about-stats">
                            <StatItem number="4" text="Internships" />

                            <StatItem number="5" text="Certifications" />
                            <StatItem number="100" text="Commitment" suffix="%" />
                        </div>
                    </div>

                    <div className="about-image">
                        <div className="image-card">
                            <div className="image-placeholder">
                                <i><FaUserTie /></i>
                            </div>
                            <div className="image-overlay">
                                <div className="overlay-content">
                                    <h4>Kartik Potdar</h4>
                                    <p>MCA Graduate | CMR University</p>
                                    <p><i><FaMapMarkerAlt style={{ marginRight: '5px' }} /></i> Kormangala, Bangalore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
