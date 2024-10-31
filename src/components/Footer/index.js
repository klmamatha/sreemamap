import React from 'react';
import './index.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-right">
                © 2024
            </div>
            <div className="footer-center">
                Need a portfolio website like this Contact | {' '}
                <a href="https://www.linkedin.com/in/kranthi-kumar-81453113a/" target="_blank" rel="noopener noreferrer">
                    Kranthi Kadinti
                </a>
            </div>
        </footer>
    );
}

export default Footer;