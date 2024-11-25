import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;