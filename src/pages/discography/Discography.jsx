import React from 'react';
import Slider from 'react-slick';
import miniAlbumCover from '@/assets/album/mini-album.png';

import './Discography.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const albums = [
  {
    seq: 0,
    title: '콩닭콩닭',
    year: '2017.07.25',
    cover: miniAlbumCover,
    tracks: [
      {
        name: '1. 콩닭콩닭',
        url: 'https://music.bugs.co.kr/album/20109777?wl_ref=list_ab_01_ab',
      },
    ],
  },
  {
    seq: 1,
    title: 'Lunar Lullaby',
    year: '2024',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
    tracks: [
      { name: '1. Moonbeam Melody', url: '#' },
      { name: '2. Cosmic Dust', url: '#' },
      { name: '3. Echoes of the Void', url: '#' },
    ],
  }
];

const Discography = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <section className="discography-profile-albums">
      <div className="timeline-slider-wrapper">
        <Slider {...settings}>
          {albums.map((album) => (
            <div key={album.seq} className="discography-slide">
              <div className="discography-card">
                <div className="discography-image-wrapper">
                  <img
                    src={album.cover}
                    alt={album.title}
                    className="discography-card-image"
                  />
                </div>
                <div className="discography-card-info">
                  <div className="discography-card-header">
                    <h4>{album.title}</h4>
                    <p>{album.year}</p>
                  </div>
                  <ul className="discography-card-track-list">
                    {album.tracks?.map((track, trackIndex) => (
                      <li key={trackIndex}>
                        <a
                          href={track.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {track.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Discography;
