import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import reactLogo from './assets/logo.png';
import About from './Pages/About';
import Project from './Pages/Project';
import Blog from './Pages/Blog';
import Education from './Pages/Education';
import VideoGallery from './Pages/VideoGallery';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import NavBar from './Pages/NavBar';
import './App.css';
import './Pages/NavBar';
import Businessshot from './Pages/headshotkb';
import Aestheticshot from './Pages/aestheticshotkb';
import Reflectsshot from './Pages/reflectslifekb';

function App() {
  return (
    <div className='App'>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-logo">
            <div className="logo-container">
              <img src={reactLogo} alt="React Logo" className="logo react-logo" />
            </div>
          </div>
          <ul className='nav-links'>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/videogallery">VideoGallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> 
      </header>

      <main className='container'>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/education" element={<Education />}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/videogallery" element={<VideoGallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/NavBar" element={<NavBar/>}/>
          <Route path="/headpic" element={<Businessshot/>}/>
          <Route path="/aestheticpic" element={<Aestheticshot/>}/>
          <Route path="/reflectspic" element={<Reflectsshot/>}/>
        </Routes>  
      </main>
      
      <footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Meiqi Cheng. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer>  
    </div>
);
}
   
 export default App;  
