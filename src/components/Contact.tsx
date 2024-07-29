import React from 'react';

export const Contact: React.FC = () => {
    return (
        <section className="py-10 pt-28 bg-white sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-100">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contáctanos</h2>
                    <p className="mt-4 text-xl text-gray-600">Estamos aquí para ayudarte. Atenderemos tus consultas y te brindaremos la mejor asistencia posible.</p>
                </div>

                <div className="overflow-hidden bg-white rounded-lg shadow-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 sm:p-10 bg-rich_black text-white">
                            <h3 className="text-3xl font-semibold mb-6">Envíanos un mensaje</h3>

                            <form action="#" method="POST" className="space-y-6">
                                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium">Tu nombre</label>
                                        <input type="text" name="name" id="name" placeholder="Ingresa tu nombre" className="mt-1 block w-full px-3 py-2 bg-rich_black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium">Tu email</label>
                                        <input type="email" name="email" id="email" placeholder="Ingresa tu email" className="mt-1 block w-full px-3 py-2 bg-rich_black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium">Número de teléfono</label>
                                        <input type="tel" name="phone" id="phone" placeholder="Ingresa tu teléfono" className="mt-1 block w-full px-3 py-2 bg-rich_black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium">Nombre de la empresa</label>
                                        <input type="text" name="company" id="company" placeholder="Ingresa el nombre de tu empresa" className="mt-1 block w-full px-3 py-2 bg-rich_black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium">Mensaje</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Escribe tu mensaje aquí"
                                        rows={4}
                                        className="mt-1 block w-full px-3 py-2 bg-rich_black border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-jonquil focus:border-transparent resize-none"
                                    ></textarea>
                                </div>

                                <div>
                                    <button type="submit" className="btn-custom">
                                        Enviar mensaje
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="p-6 sm:p-10 bg-gray-50">
                            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Información de contacto</h4>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-jonquil flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="ml-3 text-gray-700">Córdoba, Argentina</span>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-jonquil flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-3">
                                        <a href="mailto:comercial@clusterbaf.com" className="text-gray-700 hover:text-jonquil transition-colors duration-300">comercial@clusterbaf.com</a>
                                        <a href="mailto:ingeniería@clusterbaf.com" className="block mt-1 text-gray-700 hover:text-jonquil transition-colors duration-300">ingeniería@clusterbaf.com</a>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <svg className="w-6 h-6 text-jonquil flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-3">
                                        <a href="tel:+5493515581441" className="text-gray-700 hover:text-jonquil transition-colors duration-300">+54 9 351 5581441</a>
                                        <a href="tel:+5493512883834" className="block mt-1 text-gray-700 hover:text-jonquil transition-colors duration-300">+54 9 351 2883834</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}