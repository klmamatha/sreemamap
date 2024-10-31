import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Header() {
    const navigate = useNavigate();

    return (
        <header className="header">
            <nav className="navbar">
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/about')}>About</li>
                    <li onClick={() => navigate('/skills')}>Skills</li>
                    <li onClick={() => navigate('/services')}>Services</li>
                    <li onClick={() => navigate('/projects')}>Projects</li>
                    <li onClick={() => navigate('/certificates')}>Certificates</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;