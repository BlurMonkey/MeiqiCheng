import './Blog.css';
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import photo from './../assets/MeiqiCheng.jpg'
import headshot from './../assets/1_headshot_kb.jpeg';
import Businessshot from './headshotkb';
import aestheshot from './../assets/2_aestheticshot_kb.jpeg';
import Aestheticshot from './aestheticshotkb';
import reflectsshot from './../assets/3_reflects my passion in life_kb.jpeg';
import Reflectsshot from './reflectslifekb';

import ppt from './../assets/example/ppt.jpeg';
import pptfestival from './../assets/example/ppt- festival.jpeg';
import pptreligion from './../assets/example/ppt- religion.jpeg';
import ui from './../assets/example/UI Designer.jpeg';

function Blog() {
  return (
  <div>
    <section id="blog" className="blog-container">
      <h2 className='blog-title'>Meiqi Cheng Blog</h2>
      <div className="blog-grid"> {/* Grid for displaying project cards */}
        <div className="blog-card"> {/* Project 1 card */}
          <h3>Photos</h3>
          <div className="blog-photo">
            <Link to="/headpic"><img className='photo' src={headshot} alt='maggie_headshot'/></Link>
            <div className='text'>
              <h2>Formal 'business-type' headshot</h2>
              <p>
              This headshot was taken against the white background of the dormitory, using natural light and lights from the Windows as the main source of light. Due to the focal length (35mm), the face is slightly deformed, and the middle part appears more prominent, 
              but the overall facial features are clear. Due to some imperfections in the makeup during the shooting, Photoshop was used to retouch and adjust the overall brightness and size.
              </p>
              <li>Focal Length:35</li>
              <li>Aperture value: f/2.466</li>
              <li>Shutter speed:1/40</li>
              <li>ISO:200</li>
            </div>
          </div>

          <h3></h3>
          <div className="blog-photo">
            <Link to="/aestheticpic"><img className='photo2' src={aestheshot} alt='maggie_aestheshot'/></Link>
            <div className='text'>
              <h2>Aesthetic/Dramatic Shot</h2>
              <p>This picture depicts the scene I am studying in. The orange-yellow lights in the dormitory create a good atmosphere and a feeling of immersion in my studies. 
                Because it is cloudy, the light outside the window can play a good embellishment role for the room, but it is not too bright. During post-processing, I slightly lowered the brightness and adjusted the hue/saturation to reduce the yellow hue on my face. 
                Finally, I retouched the image to make the overall look cleaner.
              </p>
              <li>Focal Length:35</li>
              <li>Aperture value: f/0.053</li>
              <li>Shutter speed:1/40</li>
              <li>ISO:1000</li>
            </div>
          </div>

          <h3></h3>
          <div className="blog-photo">
            <Link to="/reflectspic"><img className='photo2' src={reflectsshot} alt='maggie_reflectsshot'/></Link>
            <div className='text'>
              <h2>The image that reflects my passion in life</h2>
              <p>This photo captures me having a pleasant conversation with someone using an over-the-shoulder lens. This photo was taken outdoors. In my view, moderate overexposure showed a cheerful atmosphere. Still, in the actual shooting, 
                the ISO setting was too high, causing the original image to be overexposed and require adjustments. First, after reducing the overall brightness, I tried several ways to reduce the overexposure on my face, such as using channels to reduce the brightness in the highlights. 
                Still, the results were unsatisfactory because the overall brightness was too high. So, I first used the positive blend mode to add shadows and reduce brightness. Then, I used the curve to modify it. Finally, I used the brush tool to correct the overexposed areas selectively. Also, I thought the bags under my eyes were too obvious, so I modified them with Photoshop.
                </p>
              <li>Focal Length:55</li>
              <li>Aperture value: f/5</li>
              <li>Shutter speed:1/50</li>
              <li>ISO:400</li>
            </div>
          </div>
        </div>
       
        <div className="blog-card">
          <h3>Movie still</h3>
          <div className='blog-stack'>
            <img className='photo4' src={photo} alt='MeiqiCheng'/>
            <img className='photo5' src={ppt} alt='ppt'/>
            <img className='photo4' src={pptfestival} alt='pptfest'/>
            <img className='photo4' src={pptreligion} alt='pptreg'/>
            <img className='photo4 ' src={ui} alt='ui'/>
          </div>  
        </div> 
      </div>
    </section>

    <Routes>
      <Route path="/picture" element={<Businessshot />} />
      <Route path="/picture" element={<Aestheticshot />} />
      <Route path="/picture" element={<Reflectsshot />} />
    </Routes>

  </div>

  );
};

export default Blog;