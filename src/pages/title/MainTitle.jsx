import React from 'react';
import Slider from 'react-slick';
import './MainTitle.css';

// 슬라이더 CSS 임포트
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 슬라이더에 사용할 이미지 임포트
import introImage0 from '@/assets/intro/introImage_0.png';
import introImage1 from '@/assets/intro/introImage_1.png';
import introImage2 from '@/assets/intro/introImage_2.png';

const sliderImages = [introImage0, introImage1, introImage2];

const MainTitle = ({ onScrollToProfile }) => {
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
    <header className="main-title-header">
      <Slider {...sliderSettings} className="main-title-slider">
        {sliderImages.map((img, index) => (
          <div key={index} className="main-title-slide-container">
            <img src={img} alt={`Intro image ${index + 1}`} className="main-title-slide-image" />
          </div>
        ))}
      </Slider>
      <div className="main-title-overlay">
        <h1>SHIN MI AE</h1>
        <p>Experience the passion in her music</p>
        <button onClick={onScrollToProfile}>Explore Her World</button>
      </div>
    </header>
  );
};

export default MainTitle;