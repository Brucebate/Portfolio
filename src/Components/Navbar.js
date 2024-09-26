import React, { useState } from "react";
import '../Styles/Navbar2.css';
import AnimatedText from './AnimatedText';

function Navbar() {
  const [isMenuOn, setIsMenuOn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOn(!isMenuOn);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="name">
        <AnimatedText text="Welcome to My World" />
        </div>
        <div className={`list ${isMenuOn ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact me</a>
        </div>
        <div
          className="menu-container"
          onClick={toggleMenu}
          role="button"
          aria-label="Toggle menu"
          tabIndex={0}
        >
          <div className={`menu-icon ${isMenuOn ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* All sections will be part of the same page */}
      <section id="home" className="section home">
        <img src="best wayne.png" alt="my img" />
      </section>
      <section id="projects" className="section projects">
        <h1>Projects</h1>
      </section>
      <section id="about" className="section about">
        <h1>About</h1>
      </section>
      <section id="education" className="section education">
        <h1>Education</h1>
      </section>
      <section id="contact" className="section contact">
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}

export default Navbar;
