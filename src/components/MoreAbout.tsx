import React from 'react';
import Proceso from '../assets/proceso-estrategico.webp'
import { useLanguage } from '../hooks/useLanguage';
import translations from '../translations.json';

export const MoreAbout: React.FC = () => {
    const { language } = useLanguage();
    // @ts-expect-error development
    const t = translations[language].moreAbout;

    return (
        <section className="py-10 sm:py-16 animate-fade-down animate-ease-linear">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                    <div className="relative mb-12">
                        <img className="w-full rounded-md sm:mb-10 mb-6 " src={Proceso} alt="Proceso estratégico de gestión de calidad" />

                        <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                            <div className="overflow-hidden bg-white rounded-xl border">
                                <div className="px-10 py-6 hidden lg:flex ">
                                    <div className="flex items-center">
                                        <p className="flex-shrink-0 text-3xl font-bold text-jonquil sm:text-4xl">100%</p>
                                        <p className="pl-6 text-xs font-medium text-black sm:text-lg">{t.commitment}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-4xl">{t.title}</h3>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">{t.p1}</p>
                        <p className="mt-2 text-lg leading-relaxed text-gray-600">{t.p2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
