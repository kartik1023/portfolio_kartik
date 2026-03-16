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
            title: "Project Management Executive",
            company: "VeriRight",
            date: "Jan 2026 - Present",
            impacts: [
                "Leading IT project management and cross-functional team coordination",
                "Managing task tracking, milestones, and stakeholder communications for software initiatives",
                "Ensuring timely project delivery through requirements gathering and follow-ups"
            ],
            tech: ["Project Management", "CRM", "Stakeholder Management", "Agile"]
        },
        {
            title: "IT Project Intern",
            company: "VeriRight",
            date: "Jul 2025 - Jan 2026",
            impacts: [
                "Supported software development projects with documentation and coordination",
                "Assisted cross-functional teams with task tracking and milestone management",
                "Facilitated stakeholder communication and requirements documentation"
            ],
            tech: ["Project Documentation", "Software Deployment", "Team Coordination"]
        },
        {
            title: "Fullstack Developer Intern",
            company: "Gyaan Vivartanna Technologies",
            date: "Dec 2023 - Feb 2024",
            impacts: [
                "Developed responsive web apps using <strong>HTML, CSS, and JavaScript</strong>",
                "Integrated <strong>Flask and MySQL</strong> for secure backend operations",
                "Designed database schema improving page speed by <strong>20%</strong>",
                "Enhanced UI/UX reducing bounce rate by <strong>15%</strong>",
                "Managed source code with Git and conducted code reviews"
            ],
            tech: ["Flask", "MySQL", "JavaScript", "Git", "UI/UX"]
        },
        {
            title: "DevOps Cloud Intern",
            company: "Prodevans",
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
                "Built web applications using <strong>Flask</strong> backend with HTML/CSS/JS frontend",
                "Created and managed databases with <strong>MySQL Workbench</strong>",
                "Improved backend performance through debugging and modular design",
                "Practiced Git version control and agile development methods"
            ],
            tech: ["Python", "Flask", "MySQL", "Git", "Agile"]
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
