import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header = () => {
  const { t } = useTranslation();
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
            {t('navProfile')}
          </NavLink>
          <NavLink
            to="/discography"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {t('navDiscography')}
          </NavLink>
          <NavLink
            to="/lectures"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {t('navLectures')}
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {t('navGallery')}
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
