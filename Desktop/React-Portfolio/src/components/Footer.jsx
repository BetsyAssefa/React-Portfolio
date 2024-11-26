import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; 2024 My React Portfolio</p>
            <div className="social-links">
                <a href="https://github.com/YourGitHubUsername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://stackoverflow.com/users/YourStackOverflowID" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-stack-overflow"></i> Stack Overflow
                </a>
                <a href="https://www.linkedin.com/in/bitsiet-assefa-644760271?trk=contact-info" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </footer>
    );
}

export default Footer;