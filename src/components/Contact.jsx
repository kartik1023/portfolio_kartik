import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const mailtoLink = `mailto:kartikpotdar007@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
            `Name: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Company: ${data.company}\n\n` +
            `Message:\n${data.message}`
        )}`;

        window.location.href = mailtoLink;
        alert('Thank you for reaching out! Your email client will open with the pre-filled message. You can also directly email me at kartikpotdar007@gmail.com or call +91 9008870855.');
        e.target.reset();
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">Contact Me</h2>
                    <div className="title-underline"></div>
                    <p className="section-description">Available for Immediate Joining – Let's Work Together</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-card">
                            <div className="contact-icon">
                                <i><FaMapMarkerAlt /></i>
                            </div>
                            <div className="contact-details">
                                <h3>Location</h3>
                                <p>Kormangala, Bangalore</p>
                                <p>Karnataka, India</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <i><FaPhone /></i>
                            </div>
                            <div className="contact-details">
                                <h3>Phone</h3>
                                <a href="tel:+919008870855">+91 9008870855</a>
                                <p>Available 9 AM - 9 PM IST</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <i><FaEnvelope /></i>
                            </div>
                            <div className="contact-details">
                                <h3>Email</h3>
                                <a href="mailto:kartikpotdar007@gmail.com">kartikpotdar007@gmail.com</a>
                                <p>Response within 24 hours</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <i><FaLinkedin /></i>
                            </div>
                            <div className="contact-details">
                                <h3>LinkedIn</h3>
                                <a href="https://linkedin.com/in/kartik-potdar" target="_blank" rel="noopener noreferrer">linkedin.com/in/kartik-potdar</a>
                                <p>Professional Network</p>
                            </div>
                        </div>

                        <div className="availability-banner">
                            <i><FaCheckCircle /></i>
                            <div>
                                <h4>Immediate Joiner</h4>
                                <p>Ready to start immediately and contribute to your team</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" name="name" required placeholder="Enter your name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input type="email" id="email" name="email" required placeholder="Enter your email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company Name</label>
                                <input type="text" id="company" name="company" placeholder="Your company (optional)" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" required placeholder="What's this about?" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required placeholder="Tell me about the opportunity..."></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">
                                <i><FaPaperPlane /></i>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
