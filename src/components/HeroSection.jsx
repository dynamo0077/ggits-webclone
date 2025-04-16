import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-content">
        <img
          src="https://ggits.org/wp-content/uploads/2018/12/logo_ggits.png"
          alt="GGITS Logo"
          className="hero-logo"
        />
        <div className="hero-buttons">
          <a
            className="hero-btn admission"
            href="https://tinyurl.com/ggitsadmission2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admission Enquiry
          </a>
          <a
            className="hero-btn newsletter"
            href="https://ggits.org/enewsletter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            eNewsletter-The Genesis
          </a>
        </div>
      </div>
      <a href="#main-content" className="scroll-down-container">
        <span className="scroll-down" aria-label="Scroll Down">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="8,13 14,19 20,13" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </a>
    </section>
  );
};

export default HeroSection;
