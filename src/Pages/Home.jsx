import React from 'react';
import "./About.css";
import meiqiLogo from '../assets/1_headshot.jpg';

// Import required modules, styles, and the profile image

function Home() {
  return (
    // Containing personal information and profile photo
    <section id="hero" className="hero">
      {/* Container for personal information */}
        <div className="profile-info">
          {/* Profile photo */}
        <img src={meiqiLogo} alt="Meiqi Cheng" className="profile-photo" ></img>
        {/* Personal details */}
        <div>
            <h1>Meiqi Cheng</h1>
            <span>Student at University of Limerick</span><br />
            <span>Major of Interaction of Experience Design </span><br />
            </div>
        </div>
    </section>
  )
}

export default Home