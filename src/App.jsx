import React from "react";
import "./App.css";
import { Search } from "lucide-react"; // Ensure Lucide React is installed

const App = () => {
  const handleLeftClick = () => {
    console.log("Left arrow clicked");
    // Add your functionality here (e.g., slide left, previous content, etc.)
  };

  const handleRightClick = () => {
    console.log("Right arrow clicked");
    // Add your functionality here (e.g., slide right, next content, etc.)
  };

  return (
    <div className="video-container">
      {/* Top Bar */}
      <nav className="topbar">
        {/* Left - Logo */}
        <div className="logo">🌍 <span>TravelMate</span></div>

        {/* Center - Navigation Links */}
        <div className="nav-links">
          <a href="#">Destinations</a>
          <a href="#">Experiences</a>
          <a href="#">Plan Your Trip</a>
        </div>

        {/* Right - Search Bar & Profile */}
        <div className="right-section">
          <div className="search-box">
            <Search className="search-icon" />
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile-icon">👤</div>
        </div>
      </nav>

      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/Top 10 Spiritual Destinations In India - Bridge (720p, h264).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Transparent Buttons - Bottom Left */}
      <div className="button-container">
        <button>India 360</button> |  
        <button>Adventure</button> |  
        <button>Nature</button> |  
        <button>Wildlife</button> |  
        <button>Heritage</button> |  
        <button>Spiritual</button>
      </div>

      {/* Bottom Right Arrows */}
      <div className="arrow-container">
        <button onClick={handleLeftClick}>←</button>
        <button onClick={handleRightClick}>→</button>
      </div>
    </div>
  );
};

export default App;
