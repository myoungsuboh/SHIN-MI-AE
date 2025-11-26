import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Intro.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import introImage0 from '@/assets/intro/introImage_0.png';
import introImage1 from '@/assets/intro/introImage_1.png';
import introImage2 from '@/assets/intro/introImage_2.png';

const sliderImages = [introImage0, introImage1, introImage2];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div
      className="language-switcher"
      style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 10,
      }}
    >
      <select
        value={i18n.language}
        onChange={changeLanguage}
        style={{
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          padding: '8px',
          borderRadius: '5px',
          border: '1px solid #555',
        }}
      >
        <option value="ko">한국어</option>
        <option value="en">English</option>
        <option value="ja">日本語</option>
      </select>
    </div>
  );
};

const MainTitle = () => {
  const navigate = useNavigate();

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleExploreClick = () => {
    navigate('/main');
  };

  return (
    <header className="main-intro-header">
      <LanguageSwitcher />
      <Slider {...sliderSettings} className="main-intro-slider">
        {sliderImages.map((img, index) => (
          <div key={index} className="main-intro-slide-container">
            <img
              src={img}
              alt={`Intro image ${index + 1}`}
              className="main-intro-slide-image"
            />
          </div>
        ))}
      </Slider>
      <div className="main-intro-overlay">
        <h1>SHIN MI AE</h1>
        <p>Experience the passion in her music</p>
        <button onClick={handleExploreClick}>Explore Her World</button>
      </div>
    </header>
  );
};

export default MainTitle;
