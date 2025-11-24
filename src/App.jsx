import React, { useRef } from 'react';
import './App.css';
import 'antd/dist/reset.css';
import Main from '@/pages/main/Main';
import { MainTitle } from '@/pages';

function App() {
  const profileRef = useRef(null);

  const scrollToProfile = () => {
    profileRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <MainTitle onScrollToProfile={scrollToProfile} />
      <div ref={profileRef}>
        <Main />
      </div>
    </div>
  );
}

export default App;