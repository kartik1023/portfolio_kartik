
import React, { useEffect, useRef, useState } from 'react';
import { FaGraduationCap, FaSchool, FaCalendarAlt } from 'react-icons/fa';

const EducationCard = ({ icon, degree, school, year, description, index }) => {
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
        <div className="education-card" ref={ref} style={style}>
            <div className="education-icon">
                <i>{icon}</i>
            </div>
            <div className="education-content">
                <h3>{degree}</h3>
                <h4>{school}</h4>
                <p className="education-year"><i><FaCalendarAlt /></i> {year}</p>
                <p className="education-description">{description}</p>
            </div>
        </div>
    );
};

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Academic Background</span>
                    <h2 className="section-title">Education</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="education-grid">
                    <EducationCard
                        icon={<FaGraduationCap />}
                        degree="Master of Computer Applications (MCA)"
                        school="CMR University"
year="Jan 2023 - Dec 2024"
                        description="Advanced studies in cloud computing, software engineering, and DevOps practices"
                        index={0}
                    />
                    <EducationCard
                        icon={<FaGraduationCap />}
                        degree="Bachelor of Computer Applications (BCA)"
                        school="Sharnbasva University, Kalaburagi"
                        year="Aug 2020 - Sep 2022"

                        description="Foundation in programming, databases, and web development"
                        index={1}
                    />
                    <EducationCard
                        icon={<FaSchool />}
                        degree="Pre-University (PCMB)"
school="Alva's College, Moodabidri, Karnataka"
                        year="Jun 2018 - Jul 2019"
                        description="Science - Physics, Chemistry, Mathematics, Biology (PCMB)"
                        index={2}
                    />
                </div>
            </div>
        </section>
    );

};

export default Education;
