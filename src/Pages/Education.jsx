import "./Education.css";
import Personalknowledge from './Personalknowledge';

function Education() {
  return (
  <div>  
    <div id="education" className="Education-container">
        <h2>Education</h2>
        <p>
          University of Limerick--Master
        </p>
        <span>
        Master's degree - interaction and experience design
        </span>
        <span>
        2024 - 2025
        </span>
        <span>
        Learn about human-computer interaction, making personal web pages, digital modeling and animation, AR and VR making, and more. 
        </span>
    </div>
    <Personalknowledge />
    </div>  
  );
}


export default Education