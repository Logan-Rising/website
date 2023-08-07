// NavigationBar.js

import React, { useState } from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>Logan Rising</span>
      </div>

      <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <span><a href="#home">Home</a></span>
            <span><a href="#experience">Experience</a></span>
            <span><a href="#education">Education</a></span>
            <span><a href="#projects">Projects</a></span>
      </div>

      <div className="navbar-mobile-toggle" onClick={handleMobileMenuToggle}>
        <i className={`fa ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} />
      </div>
    </nav>
  );
};

export default NavigationBar;
