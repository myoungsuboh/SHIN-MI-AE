import React from 'react';
import { useTranslation } from 'react-i18next';
import './S_About.css';

const S_About = () => {
  const { t } = useTranslation();
  return (
    <section className="profile-bio">
      <h2>{t('aboutTitle')}</h2>
      <p>{t('bio')}</p>
    </section>
  );
};

export default S_About;
