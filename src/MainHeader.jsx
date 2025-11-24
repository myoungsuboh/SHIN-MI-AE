import React from 'react';
import './MainHeader.css';

const MainHeader = ({ onScrollToProfile }) => {
  return (
    <header className="App-header">
      <h1>Welcome to the Singer App</h1>
      <button onClick={onScrollToProfile}>View Profile</button>
    </header>
  );
};

export default MainHeader;