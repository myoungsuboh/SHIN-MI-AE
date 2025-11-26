import React from 'react';
import greatBirth from '@/assets/award/greatBirth.png';
import { useNavigate } from 'react-router-dom';

import './S_Awards.css';

const awards = [
  {
    year: '2012 ~ 2013',
    title: 'The Great Birth 3',
    ceremony: 'Star Audition',
    image: greatBirth,
  },
  {
    year: '2024',
    title: 'Best Female Vocalist',
    ceremony: 'Pop Excellence Awards',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
  },
  {
    year: '2023',
    title: 'Album of the Year (Celestial Echo)',
    ceremony: "Music Critics' Choice",
    image:
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    year: '2022',
    title: 'Breakthrough Artist',
    ceremony: 'New Talent Showcase',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop',
  },
  {
    year: '2021',
    title: 'Best Live Performance',
    ceremony: 'Stage Presence Awards',
    image:
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
  },
  {
    year: '2020',
    title: 'Fan Favorite Artist',
    ceremony: 'Audience Choice Awards',
    image:
      'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=2070&auto=format&fit=crop',
  },
];

const ProfileAwards = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/awards/${id}`);
  };

  return (
    <div className="awards-section-wrapper">
      <div className="awards-header-overlay">
        <h2 className="awards-section-title">Awards & Recognition</h2>
      </div>
      <main className="awards-main-content">
        <div className="awards-slider">
          <div className="awards-container">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="award-card"
                onClick={() => handleCardClick(idx)}
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="award-image"
                />
                <div className="award-info">
                  <h4>{award.title}</h4>
                  <p>
                    {award.ceremony} - {award.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileAwards;
