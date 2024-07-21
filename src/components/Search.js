// src/components/Search.js
import React, { useState, useRef } from 'react';
import './Search.css'; // Importing the CSS file for styling
import googleLogo from '../assets/google-logo.png'; // Importing Google logo image
import micIcon from '../assets/mic-icon.png'; // Importing microphone icon image
import cameraIcon from '../assets/camera-icon.png'; // Importing camera icon image

// Search component definition
const Search = () => {
  // State for the text displayed on the "I'm Feeling Lucky" button
  const [luckyText, setLuckyText] = useState("I'm Feeling Lucky");
  
  // Array of options for the "I'm Feeling Lucky" button
  const options = ["I'm Feeling Curious", "I'm Feeling Hungry", "I'm Feeling Happy", "I'm Feeling Playful", "I'm Feeling Lucky"];
  
  // Reference to the "I'm Feeling Lucky" button element
  const luckyButtonRef = useRef(null);

  // Handler for when mouse enters the "I'm Feeling Lucky" button
  const handleLuckyHover = () => {
    // Select a random option from the options array
    const randomOption = options[Math.floor(Math.random() * options.length)];
    setLuckyText(randomOption);
  };

  // Handler for when mouse leaves the "I'm Feeling Lucky" button
  const handleLuckyLeave = () => {
    setLuckyText("I'm Feeling Lucky");
  };

  return (
    <div className="search-container">
      {/* Google logo */}
      <img src={googleLogo} alt="Google Logo" className="google-logo" />
      
      <div className="search">
        {/* Search input container */}
        <div className="search-input-container">
          {/* Search icon SVG */}
          <svg className="search-icon" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
          
          {/* Search input field */}
          <input type="text" className="search-input" />
          
          {/* Container for mic and camera icons */}
          <div className="search-icons">
            <img src={micIcon} alt="Voice Search" className="mic-icon" />
            <img src={cameraIcon} alt="Camera" className="camera-icon" />
          </div>
        </div>
        
        {/* Container for search buttons */}
        <div className="search-buttons">
          {/* Google Search button */}
          <button className="search-button">Google Search</button>
          
          {/* I'm Feeling Lucky button */}
          <button 
            ref={luckyButtonRef}
            className="search-button lucky-button"
            onMouseEnter={handleLuckyHover}
            onMouseLeave={handleLuckyLeave}
            data-text={luckyText}
          >
            <span className="lucky-text">I'm Feeling Lucky</span>
          </button>
        </div>
      </div>
      
      {/* Link to compare with actual Google Search */}
      <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="google-link">
        Compare with actual Google Search
      </a>
    </div>
  );
};

// Exporting the Search component for use in other parts of the application
export default Search;