import { AiOutlineBarChart, AiOutlineSetting, AiOutlineBuild, AiOutlineTool, AiOutlineTeam, AiOutlineBook } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../translations.json';

export const IngYServ: React.FC = () => {
    const { language } = useLanguage();
    // @ts-expect-error development
    const t = translations[language].ingYServ;
    const navigate = useNavigate();

    return (
        <section className="py-32 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t.h2}</h2>
                    <p className="mt-4 text-xl text-gray-600">{t.subtitle}</p>

                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                    <div className="md:p-8 lg:p-14 border border-gray-300 rounded-md shadow-xl " >
                        <AiOutlineBarChart className="mx-auto h-12 w-12 text-jonquil" />

                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>{t.ing1}</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >{t.ing1sub}</p>
                        <button
                            className="btn-custom w-full justify-center"
                            onClick={() => navigate('/ingenieriaGestion')}
                        >
                            {t.button}
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>


                    <div className="md:p-8 lg:p-14 border border-gray-300 rounded-md shadow-xl">

                        <AiOutlineSetting className="mx-auto h-12 w-12 text-jonquil" />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>{t.ing2}</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >{t.ing2sub}</p>
                        <button className="btn-custom w-full justify-center"
                            onClick={() => navigate('/ingenieriaProcesos')}
                        >{t.button}
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="md:p-8 lg:p-14 border border-gray-300 rounded-md shadow-xl">

                        <AiOutlineBuild className="mx-auto h-12 w-12 text-jonquil" />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>{t.ing3}</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >{t.ing3sub}</p>
                        <button className="btn-custom w-full justify-center"
                            onClick={() => navigate('/industrializacion')}
                        >{t.button}
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="md:p-8 lg:p-14 border border-gray-300 rounded-md shadow-xl">

                        <AiOutlineTool className="mx-auto h-12 w-12 text-jonquil" />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>{t.ing4}</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >{t.ing4sub}</p>
                        <button className="btn-custom w-full justify-center"
                            onClick={() => navigate('/mantenimiento')}
                        >{t.button}
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="md:p-8 lg:p-14 border border-gray-300 rounded-md shadow-xl">

                        <AiOutlineTeam className="mx-auto h-12 w-12 text-jonquil" />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>{t.ing5}</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >{t.ing5sub}</p>
                        <button className="btn-custom w-full justify-center"
                            onClick={() => navigate('/outsourcing')}
                        >{t.button}
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="md:p-8 lg:p-14 border border-gray-300 rounded-md shadow-xl">

                        <AiOutlineBook className="mx-auto h-12 w-12 text-jonquil" />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>{t.ing6}</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >{t.ing6sub}</p>
                        <button className="btn-custom w-full justify-center"
                            onClick={() => navigate('/capacitaciones')}
                        >{t.button}
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
