import { CheckCircle } from 'lucide-react'
import Fases from '../assets/fases-ingenieria-de-proyectos-idea.webp'

export const Outsourcing4 = () => {
    return (
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-10'>
            <h3 className="text-3xl font-extrabold text-rich_black-500 sm:text-4xl mt-10 py-4 text-center">
                IV - Gestión y Desarrollo de proyectos
            </h3>
            <h2 className="text-xl text-rich_black-500 text-center mb-8">Según lineamientos ISO 21500</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                <p className='flex flex-col gap-4 items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg text-xl text-gray-600'>
                    Cualquiera sea el tamaño de los Proyectos y Obras que lidere su empresa, nuestros servicios siempre se adaptarán a los requisitos de alcance, calidad y plazos requeridos, respaldando el trabajo con la misma seriedad, responsabilidad y entusiasmo con la que afrontamos cada compromiso
                </p>
                <div className='relative w-full max-w-md mx-auto'>
                    <img
                        className="w-full rounded-lg shadow-xl"
                        src={Fases}
                        alt="Técnicas Lean"
                    />
                </div>
            </div>

            <ul className="space-y-6">
            <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">Ingeniería no es solo lo que hacemos, es lo que somos.</p>
                        <p className="text-base text-rich_black-400">Ejecutar un proyecto industrial con la calidad adecuada, dentro del tiempo previsto y al costo presupuestado, supone la existencia de un equipo especializado que, bajo la dirección de un jefe de proyecto, asegure el cumplimiento de estos tres parámetros</p>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">Nos especializamos en proyectos llave en mano en ingeniería industrial, ingeniería civil e ingeniería mecánica,  su posterior seguimiento y mantenimiento</p>
                        <p className="text-base text-rich_black-400">Desarrollando una estrategia integral entre la ingeniería, la fabricación y el montaje, basados en altos estándares de calidad y niveles de cumplimiento y compromiso.</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
