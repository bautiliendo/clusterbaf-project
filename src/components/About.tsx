import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MoreAbout } from './MoreAbout';
import team from '../assets/Equipo.webp'
import { useLanguage } from '../hooks/useLanguage';
import translations from '../translations.json';

export const About: React.FC = () => {
    const [dropdown, setDropDown] = useState<boolean>(false);
    const { language } = useLanguage();
    // @ts-expect-error development
    const t = translations[language].about;

    const handleDropdown = () => {
        setDropDown(!dropdown)
    }

    return (
        <section className="py-16 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="bg-white rounded-lg overflow-hidden">
                    <div className="py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div className="max-w-lg">
                                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t.title}</h2>
                                <p className="mt-4 text-gray-600 text-lg">
                                    {t.description1}
                                </p>
                                <p className="mt-4 text-gray-600 text-lg">
                                    {t.description2}
                                </p>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <img src={team} alt="About Us Image" className="object-cover rounded-lg shadow-md" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="py-6 pt-0 rounded-md">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:max-w-full lg:gap-14">
                            <div className="flex flex-col overflow-hidden bg-rich_black shadow-xl rounded-xl animate-fade-up">
                                <div className="flex flex-col justify-between flex-1 px-5 py-6">
                                    <div className="flex-shrink-0">
                                        <span className="block text-lg font-bold tracking-widest text-jonquil uppercase">{t.missionTitle}</span>
                                    </div>
                                    <div className="flex-1 mt-6">
                                        <p className="text-xl font-semibold text-white mb-4">
                                        {t.missionSubtitle}
                                        </p>
                                        <p className="text-base text-white">
                                            {t.missionDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden bg-rich_black shadow-xl rounded-xl animate-fade-up">
                                <div className="flex flex-col justify-between flex-1 px-5 py-6">
                                    <div className="flex-shrink-0">
                                        <span className="block text-lg font-bold tracking-widest text-jonquil uppercase">{t.visionTitle}</span>
                                    </div>
                                    <div className="flex-1 mt-6">
                                        <p className="text-xl font-semibold text-white mb-4">
                                            {t.visionSubtitle}
                                        </p>
                                        <p className="text-base text-white">
                                            {t.visionDescription}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden bg-rich_black shadow-xl rounded-xl animate-fade-up">
                                <div className="flex flex-col justify-between flex-1 px-5 py-6">
                                    <div className="flex-shrink-0">
                                        <span className="block text-lg font-bold tracking-widest text-jonquil uppercase">{t.valuesTitle}</span>
                                    </div>
                                    <div className="flex-1 mt-6">
                                        <p className="text-xl font-semibold text-white mb-4">
                                            {t.valuesDescription}
                                        </p>
                                        <ul className="text-base text-white list-disc pl-5">
                                            <li>{t.valuesList[0]}</li>
                                            <li>{t.valuesList[1]}</li>
                                            <li>{t.valuesList[2]}</li>
                                            <li>{t.valuesList[3]}</li>
                                            <li>{t.valuesList[4]}</li>
                                            <li>{t.valuesList[5]}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='my-10 flex mx-auto btn-custom' onClick={handleDropdown}>
                            {t.learnMore}
                            <FaChevronDown className={`ml-2 mt-1 transform ${dropdown ? 'rotate-180' : ''} transition-transform text-black`} />
                        </button>
                        {dropdown && (
                            <MoreAbout />
                        )}
                    </div>
                </section>
            </div>
        </section>
    )
}