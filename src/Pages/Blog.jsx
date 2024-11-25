import './Blog.css';
import { Link } from 'react-router-dom';
import headshot from './../assets/1_headshot_kb.jpeg';
import aestheshot from './../assets/2_aestheticshot_kb.jpeg';
import reflectsshot from './../assets/3_reflects my passion in life_kb.jpeg';

import pic1 from './../assets/example/dft1.jpeg';
import pic2 from './../assets/example/dft2.jpeg';
import pic3 from './../assets/example/dft3.jpeg';
import pic5 from './../assets/example/dft5.jpeg';
import pic6 from './../assets/example/dft6.jpeg';
import pic7 from './../assets/example/dft7.jpeg';

import Project from '../Pages/Project.jsx';
import PostsList from '../features/posts/PostList.jsx';
import AddPostForm from '../features/posts/AddPostForm.jsx'

function Blog() {
  return (
    <section id="blog" className="blog-container">
      <h2 className='blog-title'> Meiqi Cheng Blog</h2>
      <div className="blog"> {/* Grid for displaying project cards */}
        <h3>Photos</h3>
        <div className="blog-card"> {/* Project 1 card */}
          <div className='blog-box'>
            <div className="blog-photo1">
              <Link to="/headpic">
                <img src={headshot} alt='maggie_headshot'/>
                <h2 className='text'>Formal 'business-type' headshot</h2>
              </Link>
            </div>  
          </div>
              
          <div className='blog-box'>
            <div className="blog-photo2">
              <Link to="/aestheticpic">
                <img src={aestheshot} alt='maggie_aestheshot'/>
                <h2 className='text'>Aesthetic/Dramatic Shot</h2>
              </Link>
            </div>
          </div>

          <div className='blog-box'>
            <div className="blog-photo3">
              <Link to="/reflectspic">
                <img src={reflectsshot} alt='maggie_reflectsshot'/>
                <h2 className='text'>The image that reflects my passion in life</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
          
      <div className="blog">
        <h3>Set photos</h3>
        <div className='blog-stack'>
          <img className='photo4' src={pic1} alt='pic1'/>
          <img className='photo5' src={pic2} alt='pic2'/>
          <img className='photo4' src={pic3} alt='pic3'/>
          <img className='photo4' src={pic5} alt='pic5'/>
          <img className='photo4'src={pic6} alt='pic6'/>
          <img className='photo4' src={pic7} alt='pic7'/>
        </div> 
        <Project /> 
      </div>  

      <div className="blog">
        <AddPostForm />
        <PostsList />
      </div>
    </section>

  );
};

export default Blog;