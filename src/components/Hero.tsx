import React from 'react';
import { useScrollNavigation } from "../helpers/ScrollToSection";
import HeroImg from '../assets/Hero.webp';
import translations from '../translations.json';
import { useLanguage } from '../hooks/useLanguage';


export const Hero: React.FC = () => {
  const scrollToSection = useScrollNavigation();
  const { language } = useLanguage();
   // @ts-expect-error development
  const t = translations[language].hero;

  return (
    <div className="w-full h-screen">
      <img className="top-0 left-0 w-full h-screen object-cover"
        src={HeroImg}
        alt="Imagen ingeniería"
      />
      <div className="bg-black/50 absolute top-0 left-0 w-full h-[99.6vh] my-1" />
      <div className="text-white absolute top-0 w-full h-full flex flex-col justify-center">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 animate-fade-up">
          <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl text-jonquil">{t.title}</h1>
          <div className="max-w[600px] drop-shadow-2xl py-2 sm:text-xl text-md">
            <p>{t.description1}</p>
            <p className="hidden md:block">{t.description2}</p>
          </div>
          <button type="button" className="btn-custom " onClick={() => scrollToSection('contact')}>
            {t.ctaButton}
          </button>
        </div>
      </div>
    </div>
  )
}