import React from 'react';

import youtubeIcon from '@/assets/logo/youtube.png';
import instagramIcon from '@/assets/logo/instagram.png';

import './S_SocialMedia.css';

const socials = {
  youtube:
    'https://youtube.com/channel/UCpJRX-k8FNgsy78rGGcV4Lg?si=pou3DUSDLRm4ybTJ',
  instagram: 'https://www.instagram.com/mwesin/',
};

const S_SocialMedia = () => {
  return (
    <section className="profile-socials">
      <div className="social-links-container">
        {socials.youtube && (
          <a
            href={socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src={youtubeIcon}
              alt="YouTube"
              className="social-icon-image"
            />
          </a>
        )}
        {socials.instagram && (
          <a
            href={socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="social-icon-image"
            />
          </a>
        )}
      </div>
    </section>
  );
};

export default S_SocialMedia;
