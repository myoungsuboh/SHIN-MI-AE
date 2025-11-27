import React, { useState } from 'react';
import Slider from 'react-slick';
import { Button, Select } from 'antd';
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
  const [open, setOpen] = useState(false);

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
    setOpen(false);
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
      <Select
        value={i18n.language}
        onChange={changeLanguage}
        className="language-select"
        dropdownStyle={{ textAlign: 'center' }} 
        bordered={false}
        open={open}
        onDropdownVisibleChange={(visible) => setOpen(visible)}
      >
        <Select.Option value="ko">한국어</Select.Option>
        <Select.Option value="en">English</Select.Option>
        <Select.Option value="ja">日本語</Select.Option>
        <Select.Option value="uz">Oʻzbekcha</Select.Option>
        <Select.Option value="ru">Русский</Select.Option>
      </Select>
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
        <div className="intro-text-content">
          <h1>SHIN MI AE</h1>
          <p>Experience the passion in her music</p>
        </div>
        <Button onClick={handleExploreClick} className="intro-button" ghost>
          DIVE IN
        </Button>
      </div>
    </header>
  );
};

export default MainTitle;
