import React, { useEffect, useRef, useState } from 'react';
import { FaAws, FaMicrosoft, FaRedhat, FaBullhorn, FaCalendarAlt, FaCheckCircle, FaEye, FaTimes } from 'react-icons/fa';
import awsCertImage from '../assets/aws-solution-architect-cert.png';
import digitalMarketingCertImage from '../assets/digital-marketing-cert.png';
import microsoftGenAiCertImage from '../assets/microsoft-gen-ai-cert.png';
import rhcsaCertImage from '../assets/rhcsa-coss-cert.png';

const CertCard = ({ icon, title, issuer, description, date, featured, index, certificateImage, onView }) => {
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
        <div className={`cert-card ${featured ? 'featured' : ''}`} ref={ref} style={style}>
            <div className="cert-badge">
                <i>{icon}</i>
            </div>
            <div className="cert-content">
                <h3>{title}</h3>
                <p className="cert-issuer">{issuer}</p>
                <p className="cert-description">{description}</p>
                <div className="cert-meta">
                    <span className="cert-date"><i><FaCalendarAlt /></i> {date}</span>
                    <span className="cert-status verified"><i><FaCheckCircle /></i> Verified</span>
                </div>
                {certificateImage && (
                    <button className="btn btn-outline btn-view-cert" onClick={() => onView(certificateImage)}>
                        <i><FaEye /></i> View Certificate
                    </button>
                )}
            </div>
        </div>
    );
};

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Credentials</span>
                    <h2 className="section-title">Certifications</h2>
                    <div className="title-underline"></div>
                    <p className="section-description">Professional certifications validating technical expertise</p>
                </div>

                <div className="certifications-grid">
                    <CertCard
                        icon={<FaAws />}
                        title="AWS Solution Architect"
                        issuer="Amazon Web Services"
                        description="Comprehensive AWS cloud architecture and deployment expertise"
                        date="2024"
                        featured={true}
                        index={0}
                        certificateImage={awsCertImage}
                        onView={setSelectedCert}
                    />
                    <CertCard
                        icon={<FaMicrosoft />}
                        title="Microsoft Generative AI"
                        issuer="Microsoft"
                        description="Generative AI and machine learning fundamentals"
                        date="2024"
                        index={1}
                        certificateImage={microsoftGenAiCertImage}
                        onView={setSelectedCert}
                    />
                    <CertCard
                        icon={<FaRedhat />}
                        title="RHCSA"
                        issuer="Red Hat"
                        description="Red Hat Certified System Administrator"
                        date="2024"
                        index={2}
                        certificateImage={rhcsaCertImage}
                        onView={setSelectedCert}
                    />
                    <CertCard
                        icon={<FaBullhorn />}
                        title="Digital Marketing"
                        issuer="Professional Certification"
                        description="Digital marketing strategies and analytics"
                        date="2023"
                        index={3}
                        certificateImage={digitalMarketingCertImage}
                        onView={setSelectedCert}
                    />
                </div>
            </div>
            {selectedCert && (
                <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
                    <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
                            <FaTimes />
                        </button>
                        <img src={selectedCert} alt="Certificate" className="cert-modal-image" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;
