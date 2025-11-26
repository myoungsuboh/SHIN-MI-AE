import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="site-header">
      <div className="header-content">
        <div onClick={scrollToTop} className="site-logo">
          SHIN MI AE
        </div>
        <nav className="site-nav">
          <NavLink
            to="/main"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Gallery
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
