import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/reset.css';
import Main from '@/pages/main/Main';
import Intro from '@/pages/title/Intro';
import ProfileAwards from '@/pages/awards/ProfileAwards';
import Header from '@/Header';

// 헤더를 포함하는 레이아웃 컴포넌트
const LayoutWithHeader = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page-content">{children}</div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route
          path="/main"
          element={
            <LayoutWithHeader>
              <Main />
            </LayoutWithHeader>
          }
        />
        <Route
          path="/awards"
          element={
            <LayoutWithHeader>
              <ProfileAwards />
            </LayoutWithHeader>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
