import React from 'react';
import './S_About.css';

const S_About = ({ bio }) => {
  return (
    <section className="profile-bio">
      <h2>About</h2>
      <p>{bio}</p>
    </section>
  );
};

export default S_About;
