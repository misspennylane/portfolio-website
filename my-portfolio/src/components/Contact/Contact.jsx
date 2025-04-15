import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false,
        error: false,
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate form submission
        setFormStatus({
            submitted: true,
            error: false,
            message: 'Thanks for your message! I\'ll get back to you soon.',
        });

        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            message: '',
        });

        // In a real application, you would send the form data to a server here
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get In Touch</h2>
                    <p>Have a question or want to work together? Feel free to contact me!</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <i className="contact-icon email-icon"></i>
                            <h3>Email</h3>
                            <p><a href="mailto:anne.kreischer@gmail.com">click here to email me</a></p>
                        </div>

                        <div className="contact-item">
                            <i className="contact-icon location-icon"></i>
                            <h3>Location</h3>
                            <p>Putten, Nederland</p>
                        </div>

                        <div className="contact-social">
                            <h3>Find me on</h3>
                            <div className="social-links">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link github">
                                    GitHub
                                </a>
                                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        {formStatus.submitted ? (
                            <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                                {formStatus.message}
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="submit-btn">Send Message</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;