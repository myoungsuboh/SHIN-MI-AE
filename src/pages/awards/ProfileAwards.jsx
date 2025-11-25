import React from 'react';
import { useParams, Link } from 'react-router-dom';
import greatBirth from '@/assets/award/greatBirth.png';

import './ProfileAwards.css';

const ProfileAwards = () => {
  const { id } = useParams();

  const award = {
    year: '2012 ~ 2013',
    title: 'The Great Birth 3',
    ceremony: 'Star Audition',
    image: greatBirth,
  };

  return (
    <div className="award-detail-page">
      <div className="award-detail-content">
        <div className="award-detail-header">
          <img
            src={award.image}
            alt={award.title}
            className="award-detail-image"
          />
          <div className="award-detail-title-group">
            <h1>{award.title}</h1>
            <p className="award-detail-meta">
              {award.ceremony} - {award.year}
            </p>
          </div>
        </div>
        <p className="award-detail-description">
          {award.description ||
            'Detailed description about this award will be here.'}
        </p>
        <div className="award-detail-footer">
          <Link to="/main" className="back-to-main-btn">
            Back to Main
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileAwards;
