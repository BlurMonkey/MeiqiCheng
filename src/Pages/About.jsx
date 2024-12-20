import meiqiLogo from '../assets/1_headshot.jpg';
import './About.css'

// Import necessary resources, including profile photo and stylesheet

function About() {
    return (
      <main className="container">
        {/* Personal Information Section */}
        <section id="hero" className="hero">
          <div className="profile-info">
            {/* Display profile photo */}
            <img src={meiqiLogo} alt="Meiqi Cheng" className="profile-photo" ></img>
            <div>
              {/* Basic personal details */}
              <h1>Meiqi Cheng</h1>
              <span>Student at University of Limerick</span><br />
              <span>Major of Interaction of Experience Design </span><br />
              </div>
          </div>
        </section>

      {/* About Me Section */}
        <section id="about-me" className="about-me">
          <h2>About me</h2>
          <span>
          I continued my undergraduate studies at Shanghai Theatre Academy, where I deepened my understanding of film theory and production, including photography, lighting, and film creation. 
          I am currently studying the interactive and Experience design course at University of Limerick. The course modules include the foundation of interactive media design, interactive media project/workshop, digital modeling and animation, and virtual and augmented reality design. </span><br />
        </section>

      </main>

    );
  }
 
  export default About;