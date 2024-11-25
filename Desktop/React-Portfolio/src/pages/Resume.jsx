import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div className="resume-container">
            <h2>My Resume</h2>
            <p>Download my resume below to learn more about my skills and experience.</p>
            <a href="/resume.pdf" className="download-button" download>Download Resume</a>
        </div>
    );
}

export default Resume;