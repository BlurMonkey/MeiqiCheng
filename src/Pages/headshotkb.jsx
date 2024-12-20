import headpic from "./../assets/1_headshot.jpg";
import "./headshotkb.css";

// Import the formal headshot image and corresponding styles
function Businessshot() {
  return (
    // Main container with centered layout
    <div className="center">
      {/* Container for headshot content */}
      <div className="headshot">
        {/* Left section: Display the headshot image */}
        <div className="center-left">
          <img src={headpic} alt="pic1"/>
        </div>
        {/* Right section: Display text description */}
        <div className="center-right">
          <h1 className="headshot-title">Formal 'business-type' headshot</h1>
          {/* Description of the headshot */}
              <p>
                This headshot was taken against the white background of the dormitory, using natural light and lights from the Windows as the main source of light. Due to the focal length (35mm), the face is slightly deformed, and the middle part appears more prominent, 
                but the overall facial features are clear. Due to some imperfections in the makeup during the shooting, Photoshop was used to retouch and adjust the overall brightness and size.
              </p>
              {/* Camera settings */}
              <li>Focal Length:35</li>
              <li>Aperture value: f/2.466</li>
              <li>Shutter speed:1/40</li>
              <li>ISO:200</li>
        </div>
      </div>
    </div>
  )
}

export default Businessshot