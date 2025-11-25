import React from 'react';

import youtubeIcon from '@/assets/youtube.png';
import instagramIcon from '@/assets/instagram.png';

import './SocialMedia.css'; // 새로 생성한 CSS 파일 임포트
const SocialMedia = ({ socials }) => {
  if (!socials || (!socials.youtube && !socials.instagram)) {
    return null;
  }

  return (
    <section className="profile-socials">
      <h2>Social Media</h2>
      <div className="social-links-container">
        {socials.youtube && (
          <a href={socials.youtube} target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={youtubeIcon} alt="YouTube" className="social-icon-image" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
            <img src={instagramIcon} alt="Instagram" className="social-icon-image" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
          </a>
        )}
      </div>
    </section>
  );
};

export default SocialMedia;