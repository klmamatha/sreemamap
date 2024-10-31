import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './index.css';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_7zj9o2d',  // Replace with your EmailJS service ID
            'template_n65p2kb',  // Replace with your EmailJS template ID
            form.current,
            'MS6kC4AriwmIg8V0-'       // Replace with your EmailJS user ID
        )
            .then((result) => {
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("Failed to send the message. Please try again.");
            });

        e.target.reset();  // Clear the form after submission
    };

    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Enter Your Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Enter Your Mail ID" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <input type="text" name="mobile" placeholder="Enter Your Mobile Number" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" placeholder="Enter Subject of the Mail" required />
                    </div>
                </div>

                <div className="form-group">
                    <textarea name="message" rows="6" placeholder="Enter your message here..." required></textarea>
                </div>
                <div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;