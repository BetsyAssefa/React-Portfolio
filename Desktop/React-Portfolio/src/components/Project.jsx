import React from 'react';

function Project({ title, description, link, repo }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
    );
}

export default Project;