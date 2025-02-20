import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="video-container">
      {/* Background Video */}
      <video autoPlay loop muted className="background-video">
        <source src="/Alaska in 8K 60p HDR  (Dolby Vision) - Jacob + Katie Schwarz (720p, h264).mp4" type="video/mp4" />
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
