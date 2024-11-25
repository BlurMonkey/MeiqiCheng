import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        <div className="navbar-logo">
        </div>
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