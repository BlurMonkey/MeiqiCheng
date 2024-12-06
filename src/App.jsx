import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import reactLogo from './assets/logo.png';
import Home from './Pages/Home.jsx';
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

// Import section: Required modules, page components, styles, and assets are imported.
// Includes React Router for navigation, page components for rendering, and the app's CSS.

function App() {
  return (
    <div className='App'>
      {/* Header section: Contains the navigation bar and app logo */}
      <header className="header">
        <nav className="navbar">
          <div className="navbar-logo">
            {/* Logo section: Links to the home page */}
            <div className="logo-container">
              <Link to="/MeiqiCheng" >
                <img src={reactLogo} alt="React Logo" className="logo react-logo" />
              </Link>
            </div>
          </div>
             {/* Navigation links section*/}
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
      {/* Main content section: Defines the routes for the app */}
      <main className='container'>
        <Routes>
          <Route path="/MeiqiCheng" element={<Home />} /> {/* Home page */}
          <Route path="/about" element={<About />} /> {/* About page */}
          <Route path="/blog" element={<Blog/>}/> {/* Blog page */}
          <Route path="/education" element={<Education />}/> {/* Education page */}
          <Route path="/gallery" element={<Gallery/>}/> {/* Gallery page */}
          <Route path="/videogallery" element={<VideoGallery/>}/> {/* VideoGallery page */}
          <Route path="/contact" element={<Contact/>}/> {/* Contact page */}
          <Route path="/NavBar" element={<NavBar/>}/> {/* Navigation bar component */}
          <Route path="/headpic" element={<Businessshot/>}/> {/* Business style photo page */}
          <Route path="/aestheticpic" element={<Aestheticshot/>}/> {/* Aesthetic style photo page */}
          <Route path="/reflectspic" element={<Reflectsshot/>}/> {/* Reflective life photo page */}
        </Routes>  
      </main>

      <footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Meiqi Cheng. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer>  
    </div>
);
}
   
 export default App;  

