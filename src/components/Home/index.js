import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import Typed from 'typed.js'; // Import Typed.js
import myImage from '../assets/images/kranthi.jpg';
import './index.css';

function Home() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const typedTextRef = useRef(null); // Ref for Typed.js text

    useEffect(() => {
        // Initialize Typed.js on component mount
        const typed = new Typed(typedTextRef.current, {
            strings: ["Frontend Developer", "Web Developer", "ReactJs Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });

        return () => {
            typed.destroy(); // Cleanup on unmount
        };
    }, []);

    const handleConnectPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);

    // Handle resume button click
    const handleResumeClick = (e) => {
        e.preventDefault();
        window.open('/kranthi resume.pdf', '_blank'); // Open resume in a new tab
    };

    // Handle social icon click to open in a new tab
    const handleSocialClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <div className="align-left">
                    <h3>Hello, I am</h3>
                    <h4>Kranthi Kumar Kadinti</h4>
                    <h4>
                        I'm a <span className="text-content3" ref={typedTextRef}></span>
                    </h4>
                    <p className="kkk2">
                        Building bridges between front end and backend, transforming ideas into responsive reality.
                    </p>

                    <div className="social-icons">
                        <a onClick={() => handleSocialClick("https://www.linkedin.com/in/kranthi-kumar-81453113a/")} className="social-icons1">
                            <FaLinkedinIn />
                        </a>
                        <a onClick={() => handleSocialClick("https://github.com/klmamatha")} className="social-icons1">
                            <FaGithub />
                        </a>
                        <a onClick={() => handleSocialClick("mailto:kranthikuma17@gmail.com")} className="social-icons1">
                            <FaEnvelope />
                        </a>
                    </div>

                    <button className="resume-btn" onClick={handleResumeClick}>
                        Download my Resume <MdDownload />
                    </button>
                </div>
                <div className="align-right">
                    <div className="floating-image">
                        <img src={myImage} alt="Kranthi Kumar Kadinti" />
                    </div>
                    <div className="topmate-profile">
                        <button className="topmate-button" onClick={handleConnectPopup}>
                            Let's Connect
                        </button>
                    </div>
                </div>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay" onClick={closePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={closePopup}>
                            X
                        </button>
                        <iframe
                            src="https://topmate.io/embed/profile/kadinti_kranthi?theme=D5534D"
                            title="Topmate Profile"
                            className="popup-iframe"
                            frameBorder="0"
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
