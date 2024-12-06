import { Link } from 'react-router-dom';

// Import Link component from React Router for navigation

function NavBar() {
  return (
    // Navigation bar container
    <nav>
      {/* Navigation list */}
      <ul className="navbar">
        {/* Navigation logo section */}
        <div className="navbar-logo">
        </div>
       {/* Navigation links */}
        <li><Link to="/about">About</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/videogallery">VideoGallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
    </nav>
  );
}

export default NavBar;