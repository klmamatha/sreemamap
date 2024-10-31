import React from 'react';
import './index.css'; // Custom styles for the Skills section

// Import logos
import htmlLogo from '../assets/logos/html.png';
import cssLogo from '../assets/logos/css.png';
import bootstrapLogo from '../assets/logos/bootstrap.png';
import jsLogo from '../assets/logos/javascript.png';
import reactLogo from '../assets/logos/react.png';
import nodejsLogo from '../assets/logos/nodejs.png';
import pythonLogo from '../assets/logos/python.png';

function Skills() {
    return (
        <section className="skills-section">
            <h2>Technical Skills</h2>
            <div className="skills-container">
                <div className="skill-card">
                    <img src={htmlLogo} alt="HTML" />
                    <p>HTML</p>
                </div>
                <div className="skill-card">
                    <img src={cssLogo} alt="CSS" />
                    <p>CSS</p>
                </div>
                <div className="skill-card">
                    <img src={bootstrapLogo} alt="Bootstrap" />
                    <p>Bootstrap</p>
                </div>
            </div>
            <div className="skills-container">
                <div className="skill-card">
                    <img src={jsLogo} alt="JavaScript" />
                    <p>JavaScript</p>
                </div>
                <div className="skill-card">
                    <img src={reactLogo} alt="React.js" />
                    <p>React.JS</p>
                </div>
                <div className="skill-card">
                    <img src={nodejsLogo} alt="Node.js" />
                    <p>Node.JS</p>
                </div>
                <div className="skill-card">
                    <img src={pythonLogo} alt="Python" />
                    <p>Python</p>
                </div>
            </div>
        </section>
    );
}

export default Skills;