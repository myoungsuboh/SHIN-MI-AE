import React from 'react';
import Header from '@/Header';
import Main from '@/pages/main/Main';
import Intro from '@/pages/title/Intro';
import Gallery from '@/pages/gallery/Gallery';
import Lectures from '@/pages/lectures/Lectures';
import ProfileAwards from '@/pages/awards/ProfileAwards';
import Discography from '@/pages/discography/Discography';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import 'antd/dist/reset.css';

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
    </div>
  );
}

export default App;
