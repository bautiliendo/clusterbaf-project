import React from 'react'

export const Contact = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-24 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl bg-rich_black rounded-xl p-10">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Contactanos</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">Estamos aquí para ayudarte. Atenderemos tus consultas y te brindaremos la mejor asistencia posible.</p>
                </div>

                <div className="max-w-6xl mx-auto mt-12 overflow-hidden bg-white rounded-md shadow-md lg:mt-20">
                    <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
                        <div className="lg:col-span-3">
                            <div className="p-6 sm:p-10">
                                <h3 className="text-2xl font-semibold text-black">Envíanos un mensaje</h3>

                                <form action="#" method="POST" className="mt-8">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                        <div>
                                            <label htmlFor="name" className="text-base font-medium text-gray-900">Tu nombre</label>
                                            <div className="mt-2.5 relative">
                                                <input type="text" name="name" id="name" placeholder="Ingresa tu nombre" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:bg-white caret-black" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="text-base font-medium text-gray-900">Tu email</label>
                                            <div className="mt-2.5 relative">
                                                <input type="email" name="email" id="email" placeholder="Ingresa tu email" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:bg-white caret-black" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="text-base font-medium text-gray-900">Número de teléfono</label>
                                            <div className="mt-2.5 relative">
                                                <input type="tel" name="phone" id="phone" placeholder="Ingresa tu teléfono" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:bg-white caret-black" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="text-base font-medium text-gray-900">Nombre de la empresa</label>
                                            <div className="mt-2.5 relative">
                                                <input type="text" name="company" id="company" placeholder="Ingresa el nombre de tu empresa" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-black focus:bg-white caret-black" />
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <label htmlFor="message" className="text-base font-medium text-gray-900">Mensaje</label>
                                            <div className="mt-2.5 relative">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    placeholder="Escribe tu mensaje aquí"
                                                    className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-black focus:bg-white caret-black"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-2">
                                            <button type="submit" className="inline-flex items-center justify-center w-full btn-custom">
                                                Enviar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="bg-gray-100 lg:col-span-2">
                            <div className="h-full p-6 sm:p-10">
                                <div className="flex flex-col justify-between h-full">
                                    <div>
                                        <h4 className="text-2xl font-semibold text-black">Información de contacto</h4>

                                        <div className="mt-8 space-y-7">
                                            <div className="flex items-start">
                                                <svg className="flex-shrink-0 text-black w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                <span className="block ml-3 text-base text-gray-900">Córdoba, Argentina</span>
                                            </div>

                                            <div className="flex items-start">
                                                <svg className="flex-shrink-0 text-black w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <div className='flex flex-col'>
                                                    <span className="block ml-3 text-base text-gray-900"> comercial@clusterbaf.com </span>
                                                    <span className="block ml-3 text-base text-gray-900 mt-1"> ingeniería@clusterbaf.com </span>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <svg className="flex-shrink-0 text-black w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="1.5"
                                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                    />
                                                </svg>
                                                <div className="ml-3">
                                                    <span className="block text-base text-gray-900"> +54 9 351 5581441 </span>
                                                    <span className="block mt-1 text-base text-gray-900"> +54 9 351 2883834</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 lg:mt-auto">
                                        <hr className="border-gray-200" />
                                        <div className="flex items-center justify-between mt-7">
                                            <p className="text-lg font-semibold text-black hover:underline">
                                                <a href="#" className="transition-all duration-200 text-black hover:text-jonquil underline">Quiero unirme al equipo</a>
                                            </p>
                                        </div>
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