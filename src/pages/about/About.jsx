import React from 'react';

const About = ({ bio }) => {
  return (
    <section className="profile-bio">
      <h2>About</h2>
      <p>{bio}</p>
    </section>
  );
};

export default About;