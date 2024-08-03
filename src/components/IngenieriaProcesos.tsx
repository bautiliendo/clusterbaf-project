import { CheckCircle } from 'lucide-react';
import tecnicasLean from '../assets/tecnicaslean.webp'
import ingProcesos from '../assets/IngenieriaProcesos.webp'
import { useLanguage } from '../hooks/useLanguage';
import translations from '../translations.json';

export const IngenieriaProcesos = () => {
  const { language } = useLanguage();
  // @ts-expect-error development
  const t = translations[language].processEng;

  return (
    <section className="bg-gradient-to-b from-white to-jonquil-900 py-28 lg:py-36">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="relative overflow-hidden pt-10  sm:animate-fade-right sm:animate-ease-linear animate-fade animate-ease-linear">
            <div className="relative w-full max-w-2xl mx-auto">
              <img
                className="w-full rounded-lg shadow-xl"
                src={ingProcesos}
                alt="Personas discutiendo plan en fábrica"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich_black-500/70 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-rich_black-500 sm:text-5xl">
              {t.h2}
            </h2>
            <ul className="space-y-4">
              {t.list.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                  <p className="text-base text-rich_black-400">{item}</p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-10'>
        <h3 className="text-3xl font-extrabold text-rich_black-500 sm:text-4xl mt-10 py-4">
          {t.h3}
        </h3>
        <div className='relative w-full max-w-2xl'>

          <img
            className="w-full rounded-lg shadow-xl"
            src={tecnicasLean}
            alt="Técnicas Lean"
          />
        </div>

        <h4 className="text-2xl font-extrabold text-rich_black-500 sm:text-3xl mt-10 py-4">
          {t.h4}
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
            <p className="text-base text-rich_black-400">{t.p1}</p>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
            <p className="text-base text-rich_black-400">{t.p2}</p>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
            <p className="text-base text-rich_black-400">{t.p3}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};