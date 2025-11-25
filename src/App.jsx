import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/reset.css';
import Main from '@/pages/main/Main';
import Intro from '@/pages/intro/Intro';
import AwardsPage from '@/pages/awards/ProfileAwards';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/awards" element={<AwardsPage />} />
      </Routes>
    </div>
  );
}

export default App;
