import { CheckCircle } from 'lucide-react'
import Pilares from '../assets/5pilares.webp'
import translations from '../translations.json';
import { useLanguage } from '../hooks/useLanguage';

export const Outsourcing1 = () => {
    const { language } = useLanguage();
    // @ts-expect-error development
    const t = translations[language].outsourcing1;
    return (
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-10'>
            <h3 className="text-3xl font-extrabold text-rich_black-500 sm:text-4xl mt-10 py-4 text-center mb-8">
                {t.h3}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                <p className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg text-xl text-gray-600">
                    {t.p}
                </p>
                <div className='relative w-full max-w-md mx-auto '>
                    <img
                        className="w-full rounded-lg shadow-xl"
                        src={Pilares}
                        alt="Técnicas Lean"
                    />
                </div>
            </div>

            <ul className="space-y-6">
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">{t.liP1}</p>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">{t.liP2}</p>
                        <p className="text-base text-rich_black-400">{t.liP3}</p>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">{t.liP4}</p>
                        <p className="text-base text-rich_black-400">{t.liP5}</p>
                        <p className="text-base text-rich_black-400 mt-2">{t.liP6}
                            <p>{t.liP7}</p>
                            <p>{t.liP8}</p>
                        </p>
                        <p className="text-base text-rich_black-400 mt-2">{t.liP9}</p>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">{t.liP10}</p>
                        <p className="text-base text-rich_black-400">{t.liP11}
                            {t.liP12}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
