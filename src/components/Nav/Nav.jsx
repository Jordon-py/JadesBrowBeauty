import React, { useState } from 'react';
import './Nav.css'; // Import the CSS for styling

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className="main-nav">
      <a href="/" className="nav-logo">
        <img src="/Ja.svg" alt="Logo" className="nav-logo" />
      </a>
      
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}