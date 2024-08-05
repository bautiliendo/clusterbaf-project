import React, { FormEvent, useRef, useState } from 'react';
import { JoinTeam } from './JoinTeam';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import translations from '../translations.json';
import { useLanguage } from '../hooks/useLanguage';

export const Contact: React.FC = () => {
    const [showJoinTeamForm, setShowJoinTeamForm] = useState(false);
    const { language } = useLanguage();
       // @ts-expect-error development
    const t = translations[language].contact;

    const toggleJoinTeamForm = () => {
        setShowJoinTeamForm(!showJoinTeamForm);
    };

    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_1d5guma', 'template_acf17t5', form.current, {
                    publicKey: 'zmR_yzpITXNAz8CcB',
                })
                .then(
                    () => {
                        toast.success("¡Email enviado con éxito!", {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                        if (form.current) form.current.reset();
                    },
                    (error: { text: string }) => {
                        console.log('FAILED...', error.text);
                        toast.error("Error al enviar el email. Por favor, intente nuevamente.", {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    },
                );
        } else {
            console.error('Form reference is null');
        }
    };

    return (
        <section className="py-28 bg-gradient-to-b from-white to-gray-100">
            <ToastContainer />
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t.title}</h2>
                    <p className="mt-4 text-xl text-gray-600 hidden sm:block">{t.subTitle}</p>
                </div>

                <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 sm:p-10 bg-rich_black text-white">
                            <h3 className="text-3xl font-semibold mb-6">{t.h3}</h3>

                            <form ref={form} onSubmit={sendEmail} className="space-y-6">
                                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                                    <div>
                                        <label className="block text-sm font-medium">{t.label1}</label>
                                        <input type="text" name="user_name" placeholder={t.label1p} className="mt-1 block w-full px-3 py-2 bg-rich_black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">{t.label2}</label>
                                        <input type="email" name="user_email" placeholder={t.label2p} className="mt-1 block w-full px-3 py-2 bg-rich_black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">{t.label3}</label>
                                        <input type="tel" name="user_phone" placeholder={t.label3p} className="mt-1 block w-full px-3 py-2 bg-rich_black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium">{t.label4}</label>
                                        <input type="text" name="user_company" placeholder={t.label4p} className="mt-1 block w-full px-3 py-2 bg-rich_black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">{t.label5}</label>
                                    <textarea
                                        name="message"
                                        placeholder={t.label5p}
                                        rows={4}
                                        className="mt-1 block w-full px-3 py-2 bg-rich_black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent resize-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <button type="submit" className="btn-custom" value="Send">
                                        {t.button}
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="p-6 sm:p-10 bg-gray-50">
                            <h4 className="text-2xl font-bold text-gray-900 mb-6">{t.h4}</h4>

                            <div className="space-y-6 font-semibold text-xl">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-jonquil flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="ml-3 text-gray-700 sm:text-lg text-sm">Córdoba, Argentina</span>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-jonquil flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-3">
                                        <a href="mailto:comercial@clusterbaf.com" className="text-gray-700 hover:text-jonquil transition-colors sm:text-lg text-sm duration-300">comercial@clusterbaf.com</a>
                                        <a href="mailto:ingeniería@clusterbaf.com" className="block mt-1 text-gray-700 hover:text-jonquil transition-colors sm:text-lg text-sm duration-300">ingeniería@clusterbaf.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-jonquil flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-3">
                                        <p className="text-gray-700 hover:text-jonquil transition-colors sm:text-lg text-sm duration-300">+54 9 351 5581441</p>
                                        <p className="block mt-1 text-gray-700 hover:text-jonquil transition-colors sm:text-lg text-sm duration-300">+54 9 351 2883834</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-jonquil flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                    <div className="ml-3">
                                        <p onClick={toggleJoinTeamForm} className="text-gray-700 hover:text-jonquil transition-colors sm:text-lg text-sm duration-300 hover:cursor-pointer">
                                            {t.button2}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showJoinTeamForm && (
                    <JoinTeam />
                )}
            </div>
        </section>
    )
}