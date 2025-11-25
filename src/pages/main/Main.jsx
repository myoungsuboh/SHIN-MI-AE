import React, { useRef } from 'react';
import Slider from 'react-slick';
import About from '@/pages/main/about/SectionAbout';
import ProfileAwards from '@/pages/main/awards/SectionAwards';
import Discography from '@/pages/main/discography/SectionDiscography';
import SocialMedia from '@/pages/main/socialMedia/SectionSocialMedia';
import introImage0 from '@/assets/intro/introImage_0.png';
import introImage1 from '@/assets/intro/introImage_1.png';
import introImage2 from '@/assets/intro/introImage_2.png';

import '../main/Main.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const singerData = {
  name: 'SHIN MI AE',
  genre: 'Synth-Pop & Ethereal Wave',
  bio: 'SHIN MI AE is a solo artist known for her celestial voice and dreamy soundscapes. Blending synth-pop with ethereal wave, her music transports listeners to another dimension. From humble beginnings, she has risen to international acclaim, captivating audiences with her mesmerizing performances. Her journey began with a deep fascination for the electronic music of the 80s and the ambient textures of contemporary artists. This unique combination has shaped her signature sound, which is both nostalgic and futuristic. SHIN MI AE believes that music is a bridge to the unseen, a way to explore the depths of human emotion and the mysteries of the cosmos.',
  sliderImages: [introImage0, introImage1, introImage2],
  stats: {
    albums: 5,
    followers: '3.2M',
    monthlyListeners: '15M',
  },
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
            <About bio={singerData.bio} />
          </div>

          <section className="profile-stats">
            <div className="stat-item">
              <h3>{singerData.stats.albums}</h3>
              <p>Albums</p>
            </div>
            <div className="stat-item">
              <h3>{singerData.stats.followers}</h3>
              <p>Followers</p>
            </div>
            <div className="stat-item">
              <h3>{singerData.stats.monthlyListeners}</h3>
              <p>Listeners</p>
            </div>
          </section>
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
