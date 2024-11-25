import { useState } from 'react';
import './VideoGallery.css';

import video1 from '../assets/image/v1.mp4';
import video2 from '../assets/image/v2.mp4';
import video3 from '../assets/image/v3.mp4';


function VideoGallery() {
  // useState hook to manage the current index of the displayed video
  const [index, setIndex] = useState(0);

  // An array of video URLs for the gallery
  const videos = [
    video1,
    video2,
    video3,
    // Add more video URLs as needed
  ];

  // Function to go to the next video in the gallery
  function goToNextVideo() {
    setIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }

  // Function to go to the previous video in the gallery
  function goToPreviousVideo() {
    setIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  }

  return (
    <div className="video-gallery-container">
      <header className="video-gallery-header">
        <h1>Video Gallery</h1>
        <p>Explore our collection of videos showcasing various topics and projects.</p>
      </header>
      {/* Display the current video */}
      <video
        src={videos[index]}
        controls
        className="video-player"
        key={videos[index]} // Ensures video reloads when changing
      />
      {/* Navigation buttons */}
      <div className="video-gallery-buttons">
        <button onClick={goToPreviousVideo} className="video-gallery-button">
          Previous
        </button>
        <button onClick={goToNextVideo} className="video-gallery-button">
          Next
        </button>
      </div>
    </div>
  );
}

export default VideoGallery;