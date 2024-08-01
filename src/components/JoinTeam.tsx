import React from 'react';
import { handleGmailCV } from '../helpers/handleLinks';

export const JoinTeam: React.FC = () => {
    return (
        <div className="mt-10 p-6 bg-white rounded-lg shadow-xl animate-fade-down animate-ease-linear">
            <h3 className="text-3xl font-semibold mb-6">Sumate a nuestro equipo</h3>
            <form onSubmit={handleGmailCV} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                    <div>
                        <label htmlFor="user-name" className="block text-sm font-medium text-gray-700">Tu nombre</label>
                        <input type="text" id="user-name" name="user-name" required placeholder="Ingresa tu nombre" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="user-email" className="block text-sm font-medium text-gray-700">Tu email</label>
                        <input type="email" id="user-email" name="user-email" required placeholder="Ingresa tu email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="user-phone" className="block text-sm font-medium text-gray-700">Número de teléfono</label>
                        <input type="tel" id="user-phone" name="user-phone" required placeholder="Ingresa tu teléfono" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                    </div>
                </div>
                <div>
                    <label htmlFor="user-message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                    <textarea
                        id="user-message"
                        name="user-message"
                        placeholder="Cuéntanos un poco sobre ti"
                        rows={4}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent resize-none"
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className="btn-custom">
                        Enviar solicitud
                    </button>
                    <p className="mt-4 text-sm text-gray-400">Al hacer click, se abrira gmail con tus datos y el mensaje listos para ser enviados, recuerda adjuntar allí tu Curriculum.</p>
                </div>
            </form>
        </div>
    );
};