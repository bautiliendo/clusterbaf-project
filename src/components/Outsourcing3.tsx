import { CheckCircle } from 'lucide-react'
import DiseñoAsistido from '../assets/diseñoasistido.webp'

export const Outsourcing3 = () => {
    return (
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-10'>
            <h3 className="text-3xl font-extrabold text-rich_black-500 sm:text-4xl mt-10 py-4 text-center mb-8">
                III - Diseño asistido CAD
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                <p className='flex flex-col gap-4 items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg text-xl text-gray-600'>
                    A través del Diseño Asistido CAD, en CLUSTEBAF con más de 20 años de experiencia ofrecemos soluciones dinámicas centradas en el desarrollo de soluciones para ingeniería de medios productivos, matricería, embalajes metálicos, medios logísticos, dispositivos de ensamble, mecanizado, calidad, etc. Empezando por el concepto, la empresa se ocupa del diseño, desarrollo y su proceso productivo en sus más diversas tareas.
                </p>
                <div className='relative w-full max-w-md mx-auto'>
                    <img
                        className="w-full rounded-lg shadow-xl"
                        src={DiseñoAsistido}
                        alt="Técnicas Lean"
                    />
                </div>
            </div>
            <h4 className="text-2xl font-extrabold text-rich_black-500 sm:text-3xl mt-10 py-4">
                Ventajas
            </h4>
            <ul className="space-y-4">
                <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-rich_black-400">Se pueden hacer cambios a las ideas de manera rápida y fácil por la transferencia electrónica de archivos</p>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-rich_black-400">La comunicación con el cliente es más fácil.</p>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-rich_black-400">La fabricación del producto puede ser más fácil.</p>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-rich_black-400">Puede evitar errores costosos.</p>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-rich_black-400">Reduce los costos ya que no se necesitan prototipos adicionales.</p>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-rich_black-400">Ahorra tiempo a través de prácticas de trabajo eficientes.</p>
                </li>
                <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                    <p className="text-base text-rich_black-400">Posee alta precisión y fidelidad</p>
                </li>
            </ul>

        </div>
    )
}
