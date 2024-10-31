import React, { useRef, useEffect, useState, useMemo } from 'react';
import './App.css';
import Home from './components/Home/index';
import About from './components/AboutMe/index';
import Skills from './components/Skills/index';
import Services from './components/Services/index';
import Projects from './components/MyProjects/index';
import Contact from './components/Contact/index';
import Header from './components/Header/index';
import Footer from './components/Footer/index'; // Import the Footer component

function App() {
  // Create individual refs at the top level of the component
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Memoize the sections object to ensure it doesn't change on every render
  const sections = useMemo(
    () => ({
      home: homeRef,
      about: aboutRef,
      skills: skillsRef,
      services: servicesRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    [] // Empty dependency array ensures memoization across renders
  );

  // State to track the currently active section
  const [activeSection, setActiveSection] = useState('home');

  // Function to scroll to a particular section
  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: 'smooth' });
  };

  // Use IntersectionObserver to track section visibility and update active navbar item
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust this value to control when a section is considered in view
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    Object.values(sections).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [sections]); // Include 'sections' as a dependency

  return (
    <div className="App">
      {/* Header with Sticky Navbar */}
      <header className="navbar">
        <nav>
          <ul>
            <li className="portfolio">Portfolio</li>
            <li
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </li>
            <li
              onClick={() => scrollToSection('skills')}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </li>
            <li
              onClick={() => scrollToSection('services')}
              className={activeSection === 'services' ? 'active' : ''}
            >
              Services
            </li>
            <li
              onClick={() => scrollToSection('projects')}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <div id="home" ref={homeRef}>
        <Home />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="skills" ref={skillsRef}>
        <Skills />
      </div>
      <div id="services" ref={servicesRef}>
        <Services />
      </div>
      <div id="projects" ref={projectsRef}>
        <Projects />
      </div>
      <div id="contact" ref={contactRef}>
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
