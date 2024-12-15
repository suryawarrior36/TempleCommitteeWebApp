import React from 'react';
import './FooterComponent.css';

const FooterComponent = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src="src/assets/temple-logo.jpg" alt="Temple Logo" className="footer-logo" />
          <p className="footer-brand">Sri Nagathamman Kovil</p>
        </div>
        <div className="footer-links-section">
          <a href="#land-part" className="footer-link">Home</a>
          <a href="#about-part" className="footer-link">About Us</a>
          <a href="#gallery" className="footer-link">Gallery</a>
          <a href="#events" className="footer-link">Events</a>
          <a href="#contact-us" className="footer-link">Contact Us</a>
          <a href="#donations" className="footer-link">Donations</a>
        </div>
        <div className="footer-copy-section">
          <p>© {new Date().getFullYear()} Sri Nagathamman Kovil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
