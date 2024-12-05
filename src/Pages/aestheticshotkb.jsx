import aestheticpic from "./../assets/2_aestheticshot.jpg";
import "./aestheticshotkb.css";

function Aestheshot() {
  return (
    <div className="center">
      <div className="aesth">
        <img className="aestheticpic1" src={aestheticpic} alt="pic1"/>
        <h1>Aesthetic/Dramatic Shot</h1>
          <p>
            This picture depicts the scene I am studying in. The orange-yellow lights in the dormitory create a good atmosphere and a feeling of immersion in my studies. 
            Because it is cloudy, the light outside the window can play a good embellishment role for the room, but it is not too bright. During post-processing, I slightly lowered the brightness and adjusted the hue/saturation to reduce the yellow hue on my face. 
            Finally, I retouched the image to make the overall look cleaner.
          </p>
          <li>Focal Length:35</li>
          <li>Aperture value: f/0.053</li>
          <li>Shutter speed:1/40</li>
          <li>ISO:1000</li>
      </div>
    </div>
  )
}

export default Aestheshot