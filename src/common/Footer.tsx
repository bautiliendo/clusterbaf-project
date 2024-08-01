import React from 'react';
import Logo from '../assets/logo-footer-transformed.webp';
import { handleGmail, handleLinkedIn, handleWhatsapp } from '../helpers/handleLinks';
import { useScrollNavigation } from '../helpers/ScrollToSection';
import { FaFileDownload } from "react-icons/fa";
import Brochure from '../assets/Brochure Institucional Clusterbaf.pdf'

export const Footer: React.FC = () => {
    const scrollToSection = useScrollNavigation();

    return (
        <footer className="py-10 bg-rich_black sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <img className="mb-4 w-full max-w-80 hover:cursor-pointer" src={Logo} onClick={() => scrollToSection("hero")} alt="Logo clusterbaf" />
                        <p className="text-sm text-white mb-4 font-semibold">© Copyright 2024, All Rights Reserved by Clusterbaf. (CREATED BY)</p>
                        <div className='flex gap-1 hover:cursor-pointer'>
                            <a href={Brochure} onClick={(e) => { e.preventDefault(); window.open(Brochure, '_blank'); }} className="text-sm font-semibold text-jonquil">Descargar Brochure Institucional</a>
                            <FaFileDownload className='text-jonquil' size={20} />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Navegación</h3>
                        <ul className="space-y-2">
                            <li><a onClick={() => { scrollToSection('ingYServ') }} className="text-white hover:text-opacity-80 transition-colors hover:cursor-pointer">Ingeniería y servicios</a></li>
                            <li><a onClick={() => { scrollToSection('about') }} className="text-white hover:text-opacity-80 transition-colors hover:cursor-pointer">Nosotros</a></li>
                            <li><a onClick={() => { scrollToSection('contact') }} className="text-white hover:text-opacity-80 transition-colors hover:cursor-pointer">Contacto</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Horarios de atención</h3>
                        <ul className="space-y-2">
                            <li className="text-white">Lunes a Viernes: 9:00 hs. a 18:00 hs.</li>
                            <li className="text-white">Sábados: 9:00 hs. a 13:00 hs.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Redes</h3>
                        <div className="flex space-x-4">
                            <button onClick={handleLinkedIn} title="LinkedIn" className="text-white hover:text-blue-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </button>
                            <button onClick={handleWhatsapp} title="WhatsApp" className="text-white hover:text-green-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </button>
                            <button onClick={handleGmail} title="Gmail" className="text-white hover:text-red-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};