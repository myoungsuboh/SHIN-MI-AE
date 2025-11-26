import React, { useState } from 'react';
import './Lectures.css';

// 비디오 파일을 직접 import 합니다.
import video_20251124 from '@/assets/lecture/videos/video1.mp4';
import image_20251124 from '@/assets/lecture/images/20251124.png';

import video_20251116 from '@/assets/lecture/videos/video2.mp4';
import image_20251116 from '@/assets/lecture/images/20251116.png';

const videos = [
  {
    id: 1,
    title: '고음의 비밀을 알았어요',
    description: '고음의 비밀을 알았어요',
    thumbnail: image_20251124,
    embedUrl: video_20251124,
  },
  {
    id: 2,
    title: '공감발표회 리허설',
    description: '공감발표회 리허설',
    thumbnail: image_20251116,
    embedUrl: video_20251116,
  },
];

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
        {videos.map((video) => (
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
