import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import reactLogo from './assets/logo.png';
import About from './Pages/About.jsx';
import Blog from './Pages/Blog.jsx';
import Education from './Pages/Education.jsx';
import VideoGallery from './Pages/VideoGallery.jsx';
import Contact from './Pages/Contact.jsx';
import Gallery from './Pages/Gallery.jsx';
import NavBar from './Pages/NavBar.jsx';
import './App.css';
import './Pages/NavBar.jsx';
import Businessshot from './Pages/headshotkb.jsx';
import Aestheticshot from './Pages/aestheticshotkb.jsx';
import Reflectsshot from './Pages/reflectslifekb.jsx';

function App() {
  return (
    <div className='App'>
      <header className="header">
        <nav className="navbar">
          <div className="navbar-logo">
            <div className="logo-container">
              <Link to="/about" >
                <img src={reactLogo} alt="React Logo" className="logo react-logo" />
              </Link>
            </div>
          </div>
          <ul className='nav-links'>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/videogallery">VideoGallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav> 
      </header>

      <main className='container'>
        <Routes>
          <Route path="/about" element={<About />} />
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

