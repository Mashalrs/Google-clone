// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Importing the CSS file for styling

// Footer component definition
const Footer = () => {
  return (
    // Main footer container
    <footer className="footer">
      {/* Left section of the footer */}
      <div className="footer-left">
        {/* Button for Advertising */}
        <button className="footer-button">Advertising</button>
        {/* Button for Business */}
        <button className="footer-button">Business</button>
        {/* Button for How Search works */}
        <button className="footer-button">How Search works</button>
      </div>

      {/* Center section of the footer */}
      <div className="footer-center">
        {/* Button for Carbon neutral statement */}
        <button className="footer-button">Carbon neutral since 2007</button>
      </div>

      {/* Right section of the footer */}
      <div className="footer-right">
        {/* Button for Privacy */}
        <button className="footer-button">Privacy</button>
        {/* Button for Terms */}
        <button className="footer-button">Terms</button>
        {/* Button for Settings */}
        <button className="footer-button">Settings</button>
      </div>
    </footer>
  );
};

// Exporting the Footer component for use in other parts of the application
export default Footer;