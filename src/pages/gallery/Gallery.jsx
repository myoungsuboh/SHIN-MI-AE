import React, { useState } from 'react';
import './Gallery.css';

const videos = [
  {
    id: 1,
    title: '보여줄게 (Cover)',
    description: "에일리(Ailee)의 '보여줄게' 커버 영상입니다.",
    thumbnail: 'https://i.ytimg.com/vi/PZypA9rin0E/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/PZypA9rin0E?autoplay=1',
  },
  {
    id: 10,
    title: 'Memory (Cats OST Cover)',
    description: "뮤지컬 캣츠(Cats)의 'Memory' 커버 영상입니다.",
    thumbnail: 'https://i.ytimg.com/vi/XsSjlSLfdE4/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/XsSjlSLfdE4?autoplay=1',
  },
  {
    id: 11,
    title: 'I Will Always Love You (Cover)',
    description: "Whitney Houston의 'I Will Always Love You' 커버 영상입니다.",
    thumbnail: 'https://i.ytimg.com/vi/CS35sxq4zC4/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/CS35sxq4zC4?autoplay=1',
  },
  {
    id: 12,
    title: '여러분 (Cover)',
    description: "윤복희의 '여러분' 커버 영상입니다.",
    thumbnail: 'https://i.ytimg.com/vi/4ibkJBuwUU4/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/4ibkJBuwUU4?autoplay=1',
  },
  {
    id: 13,
    title: '2016 대한민국 실용음악 페스티벌 1부 중_신미애',
    description: '2016 대한민국 실용음악 페스티벌 1부 중_신미애',
    thumbnail: 'https://i.ytimg.com/vi/yc8hwJKHuC8/hqdefault.jpg',
    embedUrl: 'https://tv.naver.com/embed/1211611?autoPlay=true',
  },
  {
    id: 14,
    title: 'Let It Go (Frozen OST Cover)',
    description: "애니메이션 겨울왕국(Frozen)의 'Let It Go' 커버 영상입니다.",
    thumbnail: 'https://i.ytimg.com/vi/3dbJvm0vPV0/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/3dbJvm0vPV0?autoplay=1',
  },
  {
    id: 30,
    title: '위대한 탄생 3 - "Queen of the night',
    description: '2013년 방영된 MBC 위대한 탄생 3 방송',
    thumbnail: 'https://img.imbc.com/adams/Corner/20131/130017883715009817.jpg',
    embedUrl:
      'https://mbcsvod.imbc.com/hdvod/TV/ENTER/1002734100000100000/audition3_20130104_211_700_1002734100017100000_V1.mp4?start=3730&end=3800&_lsu_sa_=6171B41B038037348B4D058736912F4965D53B35430262283A7074a196193076B9aA83493762BB4A10A930F13BbFE1C3E7634546796A407665785991ACBEF0020089DEA33C7F9135395CD5459F03B33C&v=3',
  },
  {
    id: 31,
    title: '위대한 탄생 3 - "내가 고백을 하면 깜짝 놀랄 거야"',
    description: '2013년 방영된 MBC 위대한 탄생 3에서의 라이브 무대',
    thumbnail: 'https://img.imbc.com/adams/Corner/20131/130017883715009817.jpg',
    embedUrl: 'https://www.youtube.com/embed/yc8hwJKHuC8?autoplay=1',
  },
  {
    id: 51,
    title: 'Good Luck (Cover)',
    description: 'Good Luck 커버 영상입니다.',
    thumbnail: 'https://i.ytimg.com/vi/SrS1HEE7AN8/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/SrS1HEE7AN8?autoplay=1',
  },
  {
    id: 52,
    title: '비상 (Cover)',
    description: "임재범의 '비상' 커버 영상입니다.",
    thumbnail: 'https://i.ytimg.com/vi/a4i6m_v63UA/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/a4i6m_v63UA?autoplay=1',
  },
  {
    id: 53,
    title: '거위의 꿈 (Cover)',
    description: "카니발의 '거위의 꿈' 커버 영상입니다.",
    thumbnail: 'https://i.ytimg.com/vi/Msp5hkdeQT8/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/Msp5hkdeQT8?autoplay=1',
  },
  {
    id: 54,
    title: 'Stand Up For You (Cover)',
    description: "Destiny's Child의 'Stand Up For You' 커버 영상입니다.",
    thumbnail: 'https://i.ytimg.com/vi/2OVmRTrgFwU/hqdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/2OVmRTrgFwU?autoplay=1',
  },
];

const Gallery = () => {
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

export default Gallery;
