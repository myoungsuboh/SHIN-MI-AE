import React from 'react';

const ProfileStats = ({ stats }) => {
  return (
    <section className="profile-stats">
      <div className="stat-item">
        <h3>{stats.albums}</h3>
        <p>Albums</p>
      </div>
      <div className="stat-item">
        <h3>{stats.followers}</h3>
        <p>Followers</p>
      </div>
      <div className="stat-item">
        <h3>{stats.monthlyListeners}</h3>
        <p>Listeners</p>
      </div>
    </section>
  );
};

export default ProfileStats;