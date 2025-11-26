import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import useWindowSize from '@/hooks/useWindowSize';

import './S_Discography.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const albums = [
  {
    seq: 0,
    title: 'Starlight Serenade',
    year: '2025',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
  },
  {
    seq: 1,
    title: 'Lunar Lullaby',
    year: '2024',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
  },
  {
    seq: 2,
    title: 'Cosmic Rhapsody',
    year: '2023',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
  },
  {
    seq: 3,
    title: 'Dream Weaver',
    year: '2022',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
  },
  {
    seq: 4,
    title: 'Galactic Harmonies',
    year: '2021',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
  },
  {
    seq: 5,
    title: 'Ethereal Journey',
    year: '2020',
    cover:
      'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?q=80&w=1974&auto=format&fit=crop',
  },
];

const sampleTracks = {
  'Starlight Serenade': [
    '1. Starlight Prelude',
    '2. Galactic Tides',
    "3. Nebula's Embrace",
    '4. Supernova Heart',
    '5. Echoes of Infinity',
  ],
  'Lunar Lullaby': [
    '1. Moonbeam Melody',
    '2. Cosmic Dust',
    '3. Echoes of the Void',
    '4. Stellar Bloom',
    '5. Galactic Whisper',
  ],
  'Cosmic Rhapsody': [
    "1. Nebula's Dance",
    '2. Quantum Leap',
    '3. Celestial Drift',
    '4. Astral Echoes',
    '5. Infinite Horizon',
  ],
  'Dream Weaver': [
    '1. Whispering Winds',
    '2. Silent Stars',
    '3. Fading Light',
    '4. Dreamscape',
    '5. Eternal Slumber',
  ],
  'Galactic Harmonies': [
    '1. Pulsar Beat',
    '2. Solar Flare',
    "3. Andromeda's Song",
    '4. Milky Way Groove',
    '5. Cosmic Symphony',
  ],
  'Ethereal Journey': [
    '1. Ancient Paths',
    "2. Spirit's Flight",
    '3. Sacred Grove',
    '4. Timeless River',
    "5. Soul's Ascent",
  ],
};

const Discography = () => {
  const { width } = useWindowSize();

  const getCenterPadding = () => {
    if (width <= 768) {
      return '10px';
    }
    if (width <= 1024) {
      return '80px';
    }
    return '150px';
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: getCenterPadding(),
    arrows: width > 768,
  };

  return (
    <section className="profile-albums">
      <h2>Discography</h2>
      <div className="timeline-slider-wrapper">
        <Slider key={width} {...settings}>
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
                    {sampleTracks[album.title]?.map((track, trackIndex) => (
                      <li key={trackIndex}>{track}</li>
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
