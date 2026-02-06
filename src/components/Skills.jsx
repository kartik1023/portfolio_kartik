import React, { useEffect, useRef, useState } from 'react';
import { FaAws, FaInfinity, FaCode, FaDatabase, FaBrain, FaTools } from 'react-icons/fa';

const SkillBar = ({ level }) => {
    const [width, setWidth] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setWidth(level);
                observer.unobserve(ref.current);
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [level]);

    return (
        <div className="skill-bar" ref={ref}>
            <div className="skill-progress" style={{ width: `${width}%` }}></div>
        </div>
    );
};

const SkillItem = ({ name, levelName, percentage }) => (
    <div className="skill-item">
        <div className="skill-info">
            <span className="skill-name">{name}</span>
            <span className="skill-level">{levelName}</span>
        </div>
        <SkillBar level={percentage} />
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Technical Expertise</span>
                    <h2 className="section-title">Cloud & DevOps Skills</h2>
                    <div className="title-underline"></div>
                    <p className="section-description">ATS-optimized technical skill set for Cloud Engineer, DevOps Engineer,
                        and Software Developer roles</p>
                </div>

                <div className="skills-grid">
                    {/* Cloud Platforms */}
                    <div className="skill-category">
                        <div className="category-header">
                            <i><FaAws /></i>
                            <h3>Cloud Platforms</h3>
                        </div>
                        <div className="skill-items">
                            <SkillItem name="AWS (Amazon Web Services)" levelName="Intermediate" percentage={85} />
                            <div className="skill-tags">
                                <span className="tag">EC2</span>
                                <span className="tag">S3</span>
                                <span className="tag">ECS</span>
                                <span className="tag">Fargate</span>
                                <span className="tag">Lambda</span>
                                <span className="tag">CloudFront</span>
                                <span className="tag">IAM</span>
                                <span className="tag">VPC</span>
                            </div>
                        </div>
                    </div>

                    {/* DevOps Tools */}
                    <div className="skill-category">
                        <div className="category-header">
                            <i><FaInfinity /></i>
                            <h3>DevOps & Automation</h3>
                        </div>
                        <div className="skill-items">
                            <SkillItem name="Docker" levelName="Intermediate" percentage={90} />
                            <SkillItem name="Kubernetes" levelName="Intermediate" percentage={75} />
                            <SkillItem name="CI/CD Pipelines" levelName="Intermediate" percentage={80} />
                            <div className="skill-tags">
                                <span className="tag">Jenkins</span>
                                <span className="tag">GitHub Actions</span>
                                <span className="tag">GitLab CI</span>
                                <span className="tag">Linux</span>
                                <span className="tag">Bash Scripting</span>
                            </div>
                        </div>
                    </div>

                    {/* Programming Languages */}
                    <div className="skill-category">
                        <div className="category-header">
                            <i><FaCode /></i>
                            <h3>Programming & Development</h3>
                        </div>
                        <div className="skill-items">
                            <SkillItem name="Python" levelName="Intermediate" percentage={88} />
                            <SkillItem name="Flask Framework" levelName="Intermediate" percentage={85} />
                            <SkillItem name="JavaScript" levelName="Intermediate" percentage={70} />
                            <div className="skill-tags">
                                <span className="tag">HTML5</span>
                                <span className="tag">CSS3</span>
                                <span className="tag">REST APIs</span>
                                <span className="tag">Git</span>
                                <span className="tag">GitHub</span>
                            </div>
                        </div>
                    </div>

                    {/* Databases */}
                    <div className="skill-category">
                        <div className="category-header">
                            <i><FaDatabase /></i>
                            <h3>Databases</h3>
                        </div>
                        <div className="skill-items">
                            <SkillItem name="MySQL" levelName="Intermediate" percentage={82} />
                            <div className="skill-tags">
                                <span className="tag">SQL</span>
                                <span className="tag">Database Design</span>
                                <span className="tag">Query Optimization</span>
                                <span className="tag">Relational Databases</span>
                            </div>
                        </div>
                    </div>

                    {/* AI/ML */}
                    <div className="skill-category">
                        <div className="category-header">
                            <i><FaBrain /></i>
                            <h3>AI & Machine Learning</h3>
                        </div>
                        <div className="skill-items">
                            <SkillItem name="Generative AI" levelName="Intermediate" percentage={70} />
                            <div className="skill-tags">
                                <span className="tag">CNN</span>
                                <span className="tag">NLP</span>
                                <span className="tag">TensorFlow</span>
                                <span className="tag">Machine Learning</span>
                            </div>
                        </div>
                    </div>

                    {/* Additional Skills */}
                    <div className="skill-category">
                        <div className="category-header">
                            <i><FaTools /></i>
                            <h3>Additional Skills</h3>
                        </div>
                        <div className="skill-items">
                            <div className="skill-tags">
                                <span className="tag">Serverless Architecture</span>
                                <span className="tag">Microservices</span>
                                <span className="tag">Infrastructure as Code</span>
                                <span className="tag">Monitoring & Logging</span>
                                <span className="tag">Cloud Security</span>
                                <span className="tag">Agile Methodology</span>
                                <span className="tag">Technical Documentation</span>
                                <span className="tag">Problem Solving</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
