// src/components/Header.js
import React from 'react';
import './Header.css'; // Importing the CSS file for styling

// Header component definition
const Header = () => {
  return (
    // Main header container
    <header className="header">
      {/* Left section of the header */}
      <div className="left-links">
        {/* Button for About link */}
        <button className="link-button">About</button>
        {/* Button for Store link */}
        <button className="link-button">Store</button>
      </div>

      {/* Right section of the header */}
      <div className="right-links">
        {/* Button for Gmail link */}
        <button className="link-button">Gmail</button>
        {/* Button for Images link */}
        <button className="link-button">Images</button>
        
        {/* Container for icons */}
        <div className="icons">
          {/* Button for grid icon (Google apps) 
              Using Unicode characters to represent the grid */}
          <button className="grid-icon">⋮⋮⋮</button>
          {/* Button for profile icon 
              Using 'M' as a placeholder for the user's initial */}
          <button className="profile-icon">M</button>
        </div>
      </div>
    </header>
  );
};

// Exporting the Header component for use in other parts of the application
export default Header;