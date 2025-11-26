import React from 'react';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import {
  YoutubeOutlined,
  InstagramOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import SCount from '@/pages/main/section/S_Count';
import S_About from '@/pages/main/section/S_About';
import S_Awards from '@/pages/main/section/S_Awards';
import introImage0 from '@/assets/intro/introImage_0.png';
import introImage1 from '@/assets/intro/introImage_1.png';
import introImage2 from '@/assets/intro/introImage_2.png';
import S_SocialMedia from '@/pages/main/section/S_SocialMedia';

import '../main/Main.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderImages = [introImage0, introImage1, introImage2];

const socials = {
  youtube:
    'https://youtube.com/channel/UCpJRX-k8FNgsy78rGGcV4Lg?si=pou3DUSDLRm4ybTJ',
  instagram: 'https://www.instagram.com/mwesin/',
};

const Main = () => {
  const { t } = useTranslation();
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
            {sliderImages.map((img, index) => (
              <div key={index} className="slider-image-container">
                <img
                  src={img}
                  alt={`${t('artistName')} intro image ${index + 1}`}
                  className="slider-image"
                />
              </div>
            ))}
          </Slider>
          <div className="header-overlay">
            <h1 className="singer-name">{t('artistName')}</h1>
            <p className="singer-genre">{t('artistGenre')}</p>
          </div>
        </header>
        <main className="profile-main">
          <div className="section-container">
            <S_About />
          </div>

          <SCount />
        </main>
      </div>
      <main className="profile-main profile-main-continued">
        <S_Awards />
      </main>

      <footer className="profile-footer">
        <div className="footer-content">
          <p className="footer-copyright">
            {t('footer', {
              year: new Date().getFullYear(),
              artistName: t('artistName'),
            })}
          </p>
          <div className="footer-socials">
            <a
              href={socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
            >
              <YoutubeOutlined />
            </a>
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramOutlined />
            </a>
            <a href="tel:YOUR_PHONE_NUMBER" aria-label="Phone">
              <PhoneOutlined />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Main;
