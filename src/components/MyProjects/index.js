import React from 'react';
import './index.css';
import netflixCloneImage from '../assets/images/Netflix.jpeg';
import portfolioImage from '../assets/images/Free_Vector.jpg';

import { FaExternalLinkAlt } from 'react-icons/fa'; // Import the icon for 'Go To'

// Example data for the projects. You can replace these with your actual project details.
const projects = [
    {
        id: 1,
        title: 'Image-Gallery',
        description: 'Netflix clone website is created using ReactJS which is the replica of the popular streaming platform - Netflix, complete with similar features and user interface. Username: saira, Password: princess@9.',
        link: 'https://klmamatha.github.io/Image-Gallery-With-filter/', // Link to your project
        thumbnail: netflixCloneImage, // Replace with actual thumbnail
    },
    {
        id: 2,
        title: 'Portfolio Website',
        description: 'A personal portfolio built using React and Bootstrap.',
        link: 'https://klmamatha.github.io/Image-Gallery-With-filter/',
        thumbnail: portfolioImage,
    },
    {
        id: 3,
        title: 'Portfolio Website',
        description: 'A personal portfolio built using React and Bootstrap.',
        link: 'https://klmamatha.github.io/Image-Gallery-With-filter/',
        thumbnail: portfolioImage,
    },
    {
        id: 4,
        title: 'Portfolio Website',
        description: 'A personal portfolio built using React and Bootstrap.',
        link: 'https://klmamatha.github.io/Image-Gallery-With-filter/',
        thumbnail: portfolioImage,
    },
    {
        id: 5,
        title: 'Portfolio Website',
        description: 'A personal portfolio built using React and Bootstrap.',
        link: 'https://klmamatha.github.io/Image-Gallery-With-filter/',
        thumbnail: portfolioImage,
    },
    // Add more projects here...
];

function Projects() {
    return (
        <div className="projects-container">
            <h2 className='services-title'>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="thumbnail">
                            <img src={project.thumbnail} alt={project.title} />
                            <div className="overlay">
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt className="go-to-icon" /> {/* 'Go To' icon */}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;