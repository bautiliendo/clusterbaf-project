import { CheckCircle } from 'lucide-react'
import Soluciones from '../assets/Soluciones.webp'
import { useLanguage } from '../hooks/useLanguage';
import translations from '../translations.json';

export const Outsourcing2 = () => {
    const { language } = useLanguage();
    // @ts-expect-error development
    const t = translations[language].outsourcing2;

    return (
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-10'>
            <h3 className="text-3xl font-extrabold text-rich_black-500 sm:text-4xl mt-10 py-4 text-center mb-8">
                {t.h3}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">

                <div className='flex flex-col gap-4 items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg text-xl text-gray-600'>
                    <p className="">
                        {t.p}
                    </p>
                    <ul className='list-disc mx-4 space-y-2 text-base font-bold'>
                        {t.list.map((item: string, index: number) => (
                            <li key={index}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='relative w-full max-w-md mx-auto'>
                    <img
                        className="w-full rounded-lg shadow-xl"
                        src={Soluciones}
                        alt="Técnicas Lean"
                    />
                </div>
            </div>

            <ul className="space-y-6">
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">{t.p1}</p>
                        <ul className="text-base text-rich_black-400">
                            <li className='list-disc'>{t.ulLi1}</li>
                            <li className='list-disc'>{t.ulLi2}</li>
                            <li className='list-disc'>{t.ulLi3}</li>
                        </ul>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">{t.p2}</p>
                        <ul className="text-base text-rich_black-400">
                            <li className='list-disc'>{t.ulLi4}</li>
                            <li className='list-disc'>{t.ulLi5}</li>
                            <li className='list-disc'>{t.ulLi6}</li>
                            <li className='list-disc'>{t.ulLi7}</li>
                        </ul>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">{t.p3}
                        </p>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">{t.p4}</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
