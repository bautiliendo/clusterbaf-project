import { CheckCircle } from 'lucide-react'
import Soluciones from '../assets/Soluciones.webp'

export const Outsourcing2 = () => {
    return (
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-10'>
            <h3 className="text-3xl font-extrabold text-rich_black-500 sm:text-4xl mt-10 py-4 text-center mb-8">
                II - Gestión de Mantenimiento
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">

                <div className='flex flex-col gap-4 items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg text-xl text-gray-600'>
                    <p className="">
                        Si algo podemos afirmar gracias a la experiencia de nuestro equipo, es que una de las partes fundamentales de toda actividad productiva es el mantenimiento industrial. Por eso, en CLUSTERBAF prestamos especial atención a este punto, pues nuestro compromiso se centra en contribuir a:
                    </p>
                    <ul className='list-disc mx-4 space-y-2 text-base font-bold'>
                        <li><p>Aumentar la vida útil</p></li>
                        <li><p>Miniminzar el riesgo de avería</p></li>
                        <li><p>Disminuir el uso de repuestos</p></li>
                        <li><p>Minimizar fallos</p></li>
                        <li><p>Optimizar la productividad</p></li>
                        <li><p>Aumentar el valor residual</p></li>
                    </ul>
                </div>
                <div className='relative w-full max-w-md mx-auto'>
                    <img
                        className="w-full rounded-lg shadow-xl"
                        src={Soluciones}
                        alt="Técnicas Lean"
                    />
                </div>
            </div>

            <ul className="space-y-6">
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">Implementación de Gestión del Mantenimiento</p>
                        <ul className="text-base text-rich_black-400">
                            <li className='list-disc'>Creación de Indicadores</li>
                            <li className='list-disc'>Tablero a Bordo</li>
                            <li className='list-disc'>Planificación del Presupuesto</li>
                        </ul>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">Organización del área de Mantenimiento</p>
                        <ul className="text-base text-rich_black-400">
                            <li className='list-disc'>Definición de los diferentes tipos de Mantenimiento a implementar</li>
                            <li className='list-disc'>Estimación de Recursos</li>
                            <li className='list-disc'>Determinación de repuestos críticos</li>
                            <li className='list-disc'>Plan Anual de Mantenimiento Preventivo</li>
                        </ul>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">Cálculo de Vida útil y estudios de fiabilidad en equipos e instalaciones.
                        </p>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">Implementación de metodologías de análisis y resolución de problemas</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
