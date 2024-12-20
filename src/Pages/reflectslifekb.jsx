import reflectspic from "./../assets/3_reflects my passion in life.jpg";
import "./reflectslifekb.css";

// Import the photo and the CSS file

function Reflectsshot() {
  return (
    // Main container with centered layout
    <div className="center">
       {/* Container for content reflects life passion */}
        <div className="reflect">
          {/* Display image */}
          <img className="reflectspic1" src={reflectspic} alt="pic1"/>
          {/* Title section */}
          <h1>The image that reflects my passion in life</h1>
          {/* Description of the photo */}
              <p>This photo captures me having a pleasant conversation with someone using an over-the-shoulder lens. This photo was taken outdoors. In my view, moderate overexposure showed a cheerful atmosphere. Still, in the actual shooting, 
                the ISO setting was too high, causing the original image to be overexposed and require adjustments. First, after reducing the overall brightness, I tried several ways to reduce the overexposure on my face, such as using channels to reduce the brightness in the highlights. 
                Still, the results were unsatisfactory because the overall brightness was too high. So, I first used the positive blend mode to add shadows and reduce brightness. Then, I used the curve to modify it. Finally, I used the brush tool to correct the overexposed areas selectively. Also, I thought the bags under my eyes were too obvious, so I modified them with Photoshop.
                </p>
                {/* Camera setting */}
              <li>Focal Length:55</li>
              <li>Aperture value: f/5</li>
              <li>Shutter speed:1/50</li>
              <li>ISO:400</li>
        </div>     
    </div>
  )
}

export default Reflectsshot