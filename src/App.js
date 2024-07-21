// src/App.js

// Importing React library
import React from 'react';

// Importing component files
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';

// Importing the CSS file for App component
import './App.css';

// Main App component definition
function App() {
  return (
    // Main container for the entire application
    <div className="App">
      {/* Header component - contains navigation and user options */}
      <Header />

      {/* Search component - main content area with Google search functionality */}
      <Search />

      {/* Footer component - contains additional links and information */}
      <Footer />
    </div>
  );
}

// Exporting the App component as the default export
export default App;