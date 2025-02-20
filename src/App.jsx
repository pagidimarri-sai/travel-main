import React from "react";
import "./App.css";
import { Search } from "lucide-react"; // Ensure Lucide React is installed

const App = () => {
  return (
    <div className="video-container">
      {/* Top Bar */}
      <nav className="topbar">
        {/* Left - Logo */}
        <div className="logo">
          🌍 <span>TravelMate</span>
        </div>

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
        <source src="/Alaska.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Transparent Buttons */}
      <div className="button-container">
        <button>India 360</button> |  
        <button>Adventure</button> |  
        <button>Nature</button> |  
        <button>Wildlife</button> |  
        <button>Heritage</button> |  
        <button>Spiritual</button>
      </div>
    </div>
  );
};

export default App;
