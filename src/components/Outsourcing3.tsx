import { CheckCircle } from 'lucide-react'
import DiseñoAsistido from '../assets/diseñoasistido.webp'
import { useLanguage } from '../hooks/useLanguage';
import translations from '../translations.json';

export const Outsourcing3 = () => {
    const { language } = useLanguage();
    // @ts-expect-error development
    const t = translations[language].outsourcing3;

    return (
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-10'>
            <h3 className="text-3xl font-extrabold text-rich_black-500 sm:text-4xl mt-10 py-4 text-center mb-8">
                {t.h3}
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                <p className='flex flex-col gap-4 items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg text-xl text-gray-600'>
                    {t.p}
                </p>
                <div className='relative w-full max-w-md mx-auto'>
                    <img
                        className="w-full rounded-lg shadow-xl"
                        src={DiseñoAsistido}
                        alt="Técnicas Lean"
                    />
                </div>
            </div>
            <h4 className="text-2xl font-extrabold text-rich_black-500 sm:text-3xl mt-10 py-4">
                {t.h4}
            </h4>
            <ul className="space-y-4">
                {
                    t.list.map((item: string, index: number) => (
                        <li className="flex items-start" key={index}>
                            <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                            <p className="text-base text-rich_black-400">{item}</p>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
