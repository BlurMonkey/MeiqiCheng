import React from 'react';
import "./About.css";
import meiqiLogo from '../assets/1_headshot.jpg';

function Home() {
  return (
    <section id="hero" className="hero">
        <div className="profile-info">
        <img src={meiqiLogo} alt="Meiqi Cheng" className="profile-photo" ></img>
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