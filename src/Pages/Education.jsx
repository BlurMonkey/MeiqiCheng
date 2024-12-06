import "./Education.css";
import Personalknowledge from './Personalknowledge';

// Import the Education page's stylesheet and Personal Knowledge component

function Education() {
  return (
  <div>  
    {/* Container for education details */}
    <div id="education" className="Education-container">
        {/* Title section */}
        <h2>Education</h2>
        {/* University and degree information */}
        <p>
          University of Limerick--Master
        </p>
        <span>
        Master's degree - interaction and experience design
        </span>
        {/* Time period */}
        <span>
        2024 - 2025
        </span>
         {/* Description of coursework and focus */}
        <span>
        Learn about human-computer interaction, making personal web pages, digital modeling and animation, AR and VR making, and more. 
        </span>
    </div>
    {/* Embed the Personal Knowledge component */}
    <Personalknowledge />
    </div>  
  );
}


export default Education