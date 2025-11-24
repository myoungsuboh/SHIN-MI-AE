import React from 'react';
import './ProfileAwards.css';

const ProfileAwards = ({ awards }) => {
  return (
    <section className="profile-awards">
      <h2>Awards & Recognition</h2>
      <div className="awards-slider">
        <div className="awards-container">
          {awards.map((award, index) => (
            <div key={index} className="award-card">
              <img src={award.image} alt={award.title} className="award-image" />
              <div className="award-info">
                <h4>{award.title}</h4>
                <p>{award.ceremony} - {award.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileAwards;