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
    <div className='flex gap-1'>
      <button
        onClick={toggleLanguage}
        className="relative flex items-center justify-center w-10 h-6 rounded bg-cover bg-center text-white font-bold transition-opacity hover:opacity-80"
        style={{
          backgroundImage: `url(${language === 'es' ? USFlag : SpainFlag})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8
        }}
      >
      </button>
      <span className="relative z-10">{language === 'es' ? 'ENG' : 'ESP'}</span>
    </div>
  );
};
