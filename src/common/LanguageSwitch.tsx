import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SpainFlag from '../assets/spain-flag.svg';
import USFlag from '../assets/us-flag.svg';

export const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <button onClick={toggleLanguage} className="flex items-center px-4 py-2  text-white rounded">
      <img
        src={language === 'es' ? USFlag : SpainFlag}
        alt={language === 'es' ? 'United States' : 'España'}
        className={language === 'es' ? 'w-9' : 'w-9 h-4'}
      />
    </button>
  );
};
