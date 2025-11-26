import React from 'react';
import Slider from 'react-slick';
import SCount from '@/pages/main/section/S_Count';
import S_About from '@/pages/main/section/S_About';
import ProfileAwards from '@/pages/main/section/S_Awards';
import introImage0 from '@/assets/intro/introImage_0.png';
import introImage1 from '@/assets/intro/introImage_1.png';
import introImage2 from '@/assets/intro/introImage_2.png';
import Discography from '@/pages/main/section/S_Discography';
import SocialMedia from '@/pages/main/section/S_SocialMedia';

import '../main/Main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const singerData = {
  name: 'SHIN MI AE',
  genre: 'Synth-Pop & Ethereal Wave',
  bio: 'SHIN MI AE is a solo artist known for her celestial voice and dreamy soundscapes. Blending synth-pop with ethereal wave, her music transports listeners to another dimension. From humble beginnings, she has risen to international acclaim, captivating audiences with her mesmerizing performances. Her journey began with a deep fascination for the electronic music of the 80s and the ambient textures of contemporary artists. This unique combination has shaped her signature sound, which is both nostalgic and futuristic. SHIN MI AE believes that music is a bridge to the unseen, a way to explore the depths of human emotion and the mysteries of the cosmos.',
  sliderImages: [introImage0, introImage1, introImage2],
};

const Main = () => {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="profile-container">
      <div className="initial-view">
        <header className="profile-header">
          <Slider {...sliderSettings} className="header-slider">
            {singerData.sliderImages.map((img, index) => (
              <div key={index} className="slider-image-container">
                <img
                  src={img}
                  alt={`${singerData.name} intro image ${index + 1}`}
                  className="slider-image"
                />
              </div>
            ))}
          </Slider>
          <div className="header-overlay">
            <h1 className="singer-name">{singerData.name}</h1>
            <p className="singer-genre">{singerData.genre}</p>
          </div>
        </header>
        <main className="profile-main">
          <div className="section-container">
            <S_About bio={singerData.bio} />
          </div>

          <SCount />
        </main>
      </div>
      <main className="profile-main profile-main-continued">
        <div className="section-container">
          <Discography />
        </div>

        <ProfileAwards />

        <div className="section-container">
          <SocialMedia />
        </div>
      </main>

      <footer className="profile-footer">
        <p>
          &copy; {new Date().getFullYear()} {singerData.name} Music. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Main;
