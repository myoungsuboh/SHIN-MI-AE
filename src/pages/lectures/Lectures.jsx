import React, { useState } from 'react';
import { lectureData } from '@/data/lectures/lectureData';

import './Lectures.css';

const Lectures = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="gallery-container">
      <div className="video-grid">
        {lectureData.map((video) => (
          <div
            key={video.id}
            className="video-card"
            onClick={() => openModal(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="video-thumbnail"
            />
            <div className="video-card-title">{video.title}</div>
          </div>
        ))}
      </div>
      {selectedVideo && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="video-responsive">
              <iframe
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h3>{selectedVideo.title}</h3>
              <p>{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lectures;
