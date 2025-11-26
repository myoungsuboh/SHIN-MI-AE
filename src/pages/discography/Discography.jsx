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
      { name: '4. Stellar Bloom', url: '#' },
      { name: '5. Galactic Whisper', url: '#' },
    ],
  },
  {
    seq: 2,
    title: 'Cosmic Rhapsody',
    year: '2023',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
    tracks: [
      { name: "1. Nebula's Dance", url: '#' },
      { name: '2. Quantum Leap', url: '#' },
      { name: '3. Celestial Drift', url: '#' },
      { name: '4. Astral Echoes', url: '#' },
      { name: '5. Infinite Horizon', url: '#' },
    ],
  },
  {
    seq: 3,
    title: 'Dream Weaver',
    year: '2022',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
    tracks: [
      { name: '1. Whispering Winds', url: '#' },
      { name: '2. Silent Stars', url: '#' },
      { name: '3. Fading Light', url: '#' },
      { name: '4. Dreamscape', url: '#' },
      { name: '5. Eternal Slumber', url: '#' },
    ],
  },
  {
    seq: 4,
    title: 'Galactic Harmonies',
    year: '2021',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
    tracks: [
      { name: '1. Pulsar Beat', url: '#' },
      { name: '2. Solar Flare', url: '#' },
      { name: "3. Andromeda's Song", url: '#' },
      { name: '4. Milky Way Groove', url: '#' },
      { name: '5. Cosmic Symphony', url: '#' },
    ],
  },
  {
    seq: 5,
    title: 'Ethereal Journey',
    year: '2020',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
    tracks: [
      { name: '1. Ancient Paths', url: '#' },
      { name: "2. Spirit's Flight", url: '#' },
      { name: '3. Sacred Grove', url: '#' },
      { name: '4. Timeless River', url: '#' },
      { name: "5. Soul's Ascent", url: '#' },
    ],
  },
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
    arrows: true,
    focusOnSelect: true,
  };

  return (
    <section className="profile-albums">
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
