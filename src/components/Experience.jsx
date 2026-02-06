import React, { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const TimelineItem = ({ data, index }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => {
                    setIsVisible(true);
                }, index * 100);
                observer.unobserve(ref.current);
            }
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [index]);

    const style = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease'
    };

    return (
        <div className="timeline-item" ref={ref} style={style}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
                <div className="timeline-header">
                    <div>
                        <h3>{data.title}</h3>
                        <h4>{data.company}</h4>
                    </div>
                    <span className="timeline-date">
                        <i><FaCalendarAlt /></i>
                        {data.date}
                    </span>
                </div>
                <div className="timeline-body">
                    <ul className="impact-list">
                        {data.impacts.map((impact, i) => (
                            <li key={i}>
                                <i><FaCheckCircle /></i>
                                <span dangerouslySetInnerHTML={{ __html: impact }}></span>
                            </li>
                        ))}
                    </ul>
                    <div className="tech-stack">
                        {data.tech.map((tech, i) => (
                            <span key={i} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const experiences = [
        {
            title: "IT Project Intern",
            company: "Welleazy",
            date: "Top Voice / Recent",
            impacts: [
                "Gained hands-on exposure to <strong>AWS serverless architecture</strong> and cloud deployment strategies",
                "Implemented <strong>Docker containerization</strong> for application deployments, improving efficiency",
                "Created comprehensive technical specifications and project documentation"
            ],
            tech: ["AWS", "Docker", "Serverless"]
        },
        {
            title: "Fullstack Developer Intern",
            company: "Gyaan Vivarttana Technologies",
            date: "Dec 2023 - Feb 2024",
            impacts: [
                "Developed responsive web apps using <strong>HTML, CSS, and JavaScript</strong>",
                "Integrated <strong>Flask and MySQL</strong> for secure backend operations",
                "Enhanced UI/UX design resulting in improved user engagement"
            ],
            tech: ["Flask", "MySQL", "JavaScript", "UI/UX"]
        },
        {
            title: "DevOps Cloud Intern",
            company: "PRODEVANS(Cloud & Open Source Solutions)",
            date: "Jan 2022 - Jul 2022",
            impacts: [
                "Deployed containerized applications with <strong>Docker and Kubernetes</strong>, cutting release time by <strong>40%</strong>",
                "Automated AWS resource provisioning with <strong>Python scripts</strong>, reducing manual work by <strong>50%</strong>",
                "Set up CI/CD pipelines for automated testing and deployment"
            ],
            tech: ["Docker", "Kubernetes", "AWS", "Python"]
        },
        {
            title: "Python Developer Intern",
            company: "Softek Solutions Pvt. Ltd",
            date: "May 2022 - Jun 2022",
            impacts: [
                "Built web applications using <strong>Flask</strong> for backend and HTML/CSS/JS for frontend",
                "Created and managed databases with <strong>MySQL Workbench</strong>",
                "Optimized application performance and responsiveness"
            ],
            tech: ["Python", "Flask", "MySQL"]
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Professional Journey</span>
                    <h2 className="section-title">Work Experience</h2>
                    <div className="title-underline"></div>
                    <p className="section-description">Impact-driven experience in Cloud, DevOps, and Full-Stack Development</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index} data={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
