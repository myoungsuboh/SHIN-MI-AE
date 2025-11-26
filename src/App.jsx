import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'antd/dist/reset.css';
import Main from '@/pages/main/Main';
import Intro from '@/pages/title/Intro';
import ProfileAwards from '@/pages/awards/ProfileAwards';
import Gallery from '@/pages/gallery/Gallery';
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
          path="/awards/:id"
          element={
            <LayoutWithHeader>
              <ProfileAwards />
            </LayoutWithHeader>
          }
        />
        <Route
          path="/gallery"
          element={
            <LayoutWithHeader>
              <Gallery />
            </LayoutWithHeader>
          }
        />
        <Route path="*" element={<Intro />} />
      </Routes>
    </div>
  );
}

export default App;
