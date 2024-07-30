import { AiOutlineBarChart, AiOutlineSetting, AiOutlineBuild, AiOutlineTool, AiOutlineTeam, AiOutlineBook } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const IngYServ: React.FC = () => {

    const navigate = useNavigate();

    return (
        <section className="py-10 bg-white sm:py-16 lg:py-28">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Ingeniería y Servicios</h2>
                    <p className="mt-4 text-xl text-gray-600">Ofrecemos soluciones personalizadas y de calidad para optimizar tus procesos y alcanzar el éxito en tu industria.</p>

                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
                    <div className="md:p-8 lg:p-14" >
                        <AiOutlineBarChart className="mx-auto h-12 w-12 text-gray-600" />

                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>1- Ingeniería en Gestión Integral de Calidad</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >Orientado al Acompañamiento de la Organización para desarrollar su Potencial, tendiendo como eje central los Sistemas de Gestión  (ISO 9001, ISO TS 16949, ISO 14001, ISO 45001, OHSAS 18001).</p>
                        <button
                            className="btn-custom2"
                            onClick={() => navigate('/ingenieriaGestion')}
                        >
                            Ver más
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>


                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">

                        <AiOutlineSetting className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>2- Ingeniería de Procesos</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >Con una amplia experiencia en industrialización de procesos productivos hacemos foco en los factores estratégicos que inciden en el mismo imprimiendo una visión integradora de toda la operación.</p>
                        <button className="btn-custom2"
                            onClick={() => navigate('/ingenieriaProcesos')}
                        >Ver más
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">

                        <AiOutlineBuild className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>3- Industrialización de Componentes</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >El desarrollo de piezas o conjuntos es un proceso estratégico para afrontar la sustitución de importaciones, garantizar la calidad y los plazos de desarrollo son claves para integrar los componentes tercerizados a la producción</p>
                        <button className="btn-custom2"
                            onClick={() => navigate('/industrializacion')}
                        >Ver más
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">

                        <AiOutlineTool className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>4- Mantenimiento e Instalaciones Industriales</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >Asesoramiento y servicio en planificación, seguimiento y ejecución de nuevos proyectos nuevos, ampliaciones, o mejoras de plantas industriales con un respaldo de más de 30 años de experiencia en el rubro. </p>
                        <button className="btn-custom2"
                            onClick={() => navigate('/mantenimiento')}
                        >Ver más
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">

                        <AiOutlineTeam className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>5- Outsourcing de Servicios</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >Aumentar el costo fijo en una compañía es riesgoso, por ello, ofrecemos outsourcing de servicios, eventual o fijo, según la necesidad del cliente, para dar soporte ante la falta de recursos y reducir el riesgo de aumentar ese costo.</p>
                        <button className="btn-custom2"
                            onClick={() => navigate('/outsourcing')}
                        >Ver más
                            <svg className="w-5 h-5 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>

                    <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">

                        <AiOutlineBook className="mx-auto h-12 w-12 text-gray-600" />
                        <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj" style={{ minHeight: '3.5em' }}>6- Capacitaciones</h3>
                        <p className="mt-5 text-base text-gray-600 font-pj" style={{ minHeight: '10.5em' }} >Mejora el funcionamiento colectivo del personal con una experiencia de formación a medida, desarrollada por un equipo de profesionales con el objetivo de convertir a sus colaboradores en un activo clave para la operación.</p>
                        <button className="btn-custom2"
                            onClick={() => navigate('/capacitaciones')}
                        >Ver más
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
