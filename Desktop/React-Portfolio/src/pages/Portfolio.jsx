import React from 'react';
import Project from '../components/Project';
import './Portfolio.css';

function Portfolio() {
    const projects = [
        {
            title: "Weather Dashboard",
            description: "A web app to check weather forecasts by city.",
            link: "https://betsyassefa.github.io/-Weather-Dashboard",
            repo: "https://github.com/BetsyAssefa/-Weather-Dashboard"
        },
        {
            title: "PayRoll App",
            description: "An appoffers an intuitive interface for handling employee information.",
            link: "https://betsyassefa.github.io/payroll-3/",
            repo: "https://github.com/BetsyAssefa/payroll-3.git"
        },
        {
            title: "Note Taker",
            description: "Note Taker is a web application that allows users to write, save, and delete notes",
            link: "https://betsyassefa.github.io/Note-Taker",
            repo: "https://github.com/BetsyAssefa/Note-Taker.git"
        }
    ];

    return (
        <div className="portfolio-container">
            <h2 className="text-center">Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;