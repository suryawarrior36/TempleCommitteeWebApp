import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null); // For modal content

  // Example data for gallery (image and video URLs)
  const mediaItems = [
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
    { type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { type: "image", src: "https://via.placeholder.com/300" },
  ];

  // Modal close function
  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="gallery-el">
        <div className='gallery-top'>
                <h1 className='about-head'>Gallery</h1>
                <hr></hr>
            </div>
    
    <div className="gallery-container">
      {/* Gallery Grid */}
      <div className="gallery-grid">
        {mediaItems.map((media, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setSelectedMedia(media)}
          >
            {media.type === "image" ? (
              <img src={media.src} alt={`Media ${index + 1}`} />
            ) : (
              <video src={media.src} controls muted />
            )}
          </div>
        ))}
      </div>

      {/* Modal for larger view */}
      {selectedMedia && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === "image" ? (
              <img src={selectedMedia.src} alt="Selected Media" />
            ) : (
              <video src={selectedMedia.src} controls autoPlay />
            )}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Gallery;
