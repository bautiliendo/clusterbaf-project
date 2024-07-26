import React from 'react';
import Proceso from '../assets/proceso-estrategico.png'

export const MoreAbout: React.FC = () => {
    return (
        <section className="py-10 sm:py-16 ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                    <div className="relative mb-12">
                        <img className="w-full rounded-md sm:mb-10 mb-6" src={Proceso} alt="Proceso estratégico de gestión de calidad" />

                        <div className="absolute w-full max-w-xs px-4 -translate-x-1/2 sm:px-0 sm:max-w-sm left-1/2 -bottom-12">
                            <div className="overflow-hidden bg-white rounded-xl border border-jonquil-100">
                                <div className="px-10 py-6">
                                    <div className="flex items-center">
                                        <p className="flex-shrink-0 text-3xl font-bold text-jonquil sm:text-4xl">100%</p>
                                        <p className="pl-6 text-xs font-medium text-black sm:text-lg">Compromiso con <br />nuestros clientes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>

                        <h2 className="mt-10 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">Soluciones adaptadas a su medida</h2>
                        <p className="mt-6 text-lg leading-relaxed text-gray-600">En <strong>CLUSTERBAF</strong>, contamos con reconocida experiencia en la industria manufacturera. Ofrecemos una amplia variedad de alternativas y soluciones a la problemática que las Empresas deben afrontar.</p>
                        <p className="mt-2 text-lg leading-relaxed text-gray-600"> Cualquiera sea el tamaño de los Proyectos y Obras que lidere su empresa, nuestros servicios siempre se adaptarán a los requisitos de alcance, calidad y plazos requeridos, respaldando el trabajo con la misma seriedad, responsabilidad y entusiasmo con la que afrontamos cada compromiso</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
