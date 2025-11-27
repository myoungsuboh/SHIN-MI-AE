import React from 'react';
import Slider from 'react-slick';

import { discographyData } from '@/data/discography/discographyData';

import './Discography.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
          {discographyData.map((album) => (
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
