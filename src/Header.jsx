import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-content">
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
            to="/discography"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Discography
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
