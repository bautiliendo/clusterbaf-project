import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MoreAbout } from './MoreAbout';
import team from '../assets/Equipo.webp'

export const About: React.FC = () => {

    const [dropdown, setDropDown] = useState<boolean>(false);

    const handleDropdown = () => {
        setDropDown(!dropdown)
    }

    return (
        <section className="py-16 bg-white">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="bg-white rounded-lg overflow-hidden">
                    <div className="py-12 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                            <div className="max-w-lg">
                                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">¿Quiénes Somos?</h2>
                                <p className="mt-4 text-gray-600 text-lg">
                                    <strong>CLUSTERBAF</strong> es una empresa de servicios de ingeniería con más de 20 años de experiencia, formada por un equipo multidisciplinario de profesionales. Nos dedicamos a mejorar la competitividad de nuestros clientes, ofreciendo un servicio personalizado y de excelencia en todas las etapas de industrialización.
                                </p>
                                <p className="mt-4 text-gray-600 text-lg">
                                    Nuestro principal objetivo es poner en sus manos, Soluciones Integrales de Ingeniería con la máxima responsabilidad, profesionalidad y compromiso que nuestros Clientes se merecen.
                                </p>
                            </div>
                            <div className="mt-12 md:mt-0">
                                <img src={team} alt="About Us Image" className="object-cover rounded-lg shadow-md" />
                            </div>
                        </div>
                    </div>
                </div>
                <section className="py-6 pt-0 rounded-md">
                    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto lg:grid-cols-3 lg:max-w-full lg:gap-14">
                            <div className="flex flex-col overflow-hidden bg-rich_black shadow-xl rounded-xl animate-fade-up">
                                <div className="flex flex-col justify-between flex-1 px-5 py-6">
                                    <div className="flex-shrink-0">
                                        <span className="block text-lg font-bold tracking-widest text-jonquil uppercase">Misión</span>
                                    </div>
                                    <div className="flex-1 mt-6">
                                        <p className="text-xl font-semibold text-white mb-4">
                                            Excelencia en ingeniería para nuestros clientes
                                        </p>
                                        <p className="text-base text-white">
                                            Brindar un servicio responsable y eficiente, ofreciendo asesoramiento de calidad respondiendo a sus necesidades, que supere las expectativas de nuestros clientes. Nos apoyamos en la experiencia e integración del talento, conocimiento y experiencia de nuestro equipo profesional.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden bg-rich_black shadow-xl rounded-xl animate-fade-up">
                                <div className="flex flex-col justify-between flex-1 px-5 py-6">
                                    <div className="flex-shrink-0">
                                        <span className="block text-lg font-bold tracking-widest text-jonquil uppercase">Visión</span>
                                    </div>
                                    <div className="flex-1 mt-6">
                                        <p className="text-xl font-semibold text-white mb-4">
                                            Líderes en consultoría industrial integrada
                                        </p>
                                        <p className="text-base text-white">
                                            Ser un partner estratégico en el segmento de consultoría Industrial Integrada, destacándonos por satisfacer con profesionalismo las necesidades de nuestros clientes.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col overflow-hidden bg-rich_black shadow-xl rounded-xl animate-fade-up">
                                <div className="flex flex-col justify-between flex-1 px-5 py-6">
                                    <div className="flex-shrink-0">
                                        <span className="block text-lg font-bold tracking-widest text-jonquil uppercase">Valores</span>
                                    </div>
                                    <div className="flex-1 mt-6">
                                        <p className="text-xl font-semibold text-white mb-4">
                                            Principios que nos guían
                                        </p>
                                        <ul className="text-base text-white list-disc pl-5">
                                            <li>Compromiso</li>
                                            <li>Experiencia y Conocimiento</li>
                                            <li>Innovación y Desarrollo</li>
                                            <li>Responsabilidad y Puntualidad</li>
                                            <li>Soporte y Garantía</li>
                                            <li>Acompañamiento</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='my-10 flex mx-auto btn-custom' onClick={handleDropdown}>
                            Conocer más
                            <FaChevronDown className={`ml-2 mt-1 transform ${dropdown ? 'rotate-180' : ''} transition-transform text-black`} />
                        </button>
                        {dropdown && (
                            <MoreAbout />
                        )}
                    </div>
                </section>
            </div>
        </section>
    )
}