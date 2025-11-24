import React from 'react';

const ProfileAwards = ({ awards }) => {
  return (
    <section className="profile-awards">
      <h2>Awards & Recognition</h2>
      <ul className="awards-list">
        {awards.map((award, index) => (
          <li key={index} className="award-item">
            <span className="award-year">{award.year}</span>
            <span className="award-title">{award.title}</span>
            <span className="award-ceremony">{award.ceremony}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProfileAwards;