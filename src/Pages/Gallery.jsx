import React, { useState } from 'react';
import './Gallery.css';

import img1 from '../assets/image/img1.jpg';
import img2 from '../assets/image/img2.jpg';
import img3 from '../assets/image/img3.jpg';
import img4 from '../assets/image/img4.jpg';

// Define the ImageGallery component using TypeScript
const ImageGallery = () => {// defining a React functional component in TypeScript.
  // useState hook to manage the current index of the displayed image
  const [index, setIndex] = useState(0);

  // An array of image URLs for the gallery
  const images = [
    img1,
    img2,
    img3,
    img4,
    // Add more image URLs as needed
  ];

  // Function to go to the next image in the gallery
  const goToNextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image in the gallery
  const goToPreviousImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <header className="gallery-header">
        <h1>Image Gallery</h1>
        <p>Browse through my collection of images showcasing various topics and projects.</p>
      </header>
      {/* Display the current image */}
      <img
        src={images[index]}
        alt={`Gallery Image ${index + 1}`}
        className="gallery-image"
      />
      {/* Navigation buttons */}
      <div className="gallery-buttons">
        <button onClick={goToPreviousImage} className="gallery-button">
          Previous
        </button>
        <button onClick={goToNextImage} className="gallery-button">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;