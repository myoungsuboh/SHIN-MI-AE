import React, { Suspense, lazy, useState, useEffect } from 'react';
import { FloatButton } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import Header from '@/Header';

const Main = lazy(() => import('@/pages/main/Main'));
const Intro = lazy(() => import('@/pages/title/Intro'));
const Gallery = lazy(() => import('@/pages/gallery/Gallery'));
const Lectures = lazy(() => import('@/pages/lectures/Lectures'));
const ProfileAwards = lazy(() => import('@/pages/awards/ProfileAwards'));
const Discography = lazy(() => import('@/pages/discography/Discography'));

import { Routes, Route } from 'react-router-dom';

import './App.css';
import 'antd/dist/reset.css';

const LayoutWithHeader = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="page-content">{children}</div>
      <FloatButton.BackTop
        icon={<ArrowUpOutlined />}
        style={{ bottom: isMobile ? 30 : 85 }}
      />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>.....Loading...</div>}>
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
            path="/lectures"
            element={
              <LayoutWithHeader>
                <Lectures />
              </LayoutWithHeader>
            }
          />
          <Route
            path="/discography"
            element={
              <LayoutWithHeader>
                <Discography />
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
      </Suspense>
    </div>
  );
}

export default App;
