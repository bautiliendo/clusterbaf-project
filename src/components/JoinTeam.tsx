import React from 'react';
import { handleGmailCV } from '../helpers/handleLinks';
import { useLanguage } from '../hooks/useLanguage';
import translations from '../translations.json';

export const JoinTeam: React.FC = () => {
    const { language } = useLanguage();
    // @ts-expect-error development
    const t = translations[language].joinTeam;
    // @ts-expect-error development
    const t2 = translations[language].contact;

    return (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-xl animate-fade-down animate-ease-linear">
            <h3 className="text-3xl font-semibold mb-6">{t.h3}</h3>
            <form onSubmit={handleGmailCV} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                    <div>
                        <label htmlFor="user-name" className="block text-sm font-medium text-gray-700">{t2.label1}</label>
                        <input type="text" id="user-name" name="user-name" required placeholder={t2.label1p} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="user-email" className="block text-sm font-medium text-gray-700">{t2.label2}</label>
                        <input type="email" id="user-email" name="user-email" required placeholder={t2.label2p} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="user-phone" className="block text-sm font-medium text-gray-700">{t2.label3}</label>
                        <input type="tel" id="user-phone" name="user-phone" required placeholder={t2.label3p} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                    </div>
                </div>
                <div>
                    <label htmlFor="user-message" className="block text-sm font-medium text-gray-700">{t2.label5}</label>
                    <textarea
                        id="user-message"
                        name="user-message"
                        placeholder={t.messageP}
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent resize-none"
                        required
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className="btn-custom">
                        {t.button}
                    </button>
                    <p className="mt-4 text-sm text-gray-400">{t.text}</p>
                </div>
            </form>
        </div>
    );
};