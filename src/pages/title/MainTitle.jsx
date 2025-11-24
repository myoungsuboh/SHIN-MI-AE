import React from 'react';
import './MainTitle.css';

const MainTitle = ({ onScrollToProfile }) => {
  const backgroundImageUrl = "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop";

  return (
    <header className="main-title-header" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="header-overlay">
        <h1>SHIN MI AE</h1>
        <p>Experience the passion in her music</p>
        <button onClick={onScrollToProfile}>Explore Her World</button>
      </div>
    </header>
  );
};

export default MainTitle;