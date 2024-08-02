import { CheckCircle } from 'lucide-react'
import Pilares from '../assets/5pilares.webp'

export const Outsourcing1 = () => {
    return (
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-10'>
            <h3 className="text-3xl font-extrabold text-rich_black-500 sm:text-4xl mt-10 py-4 text-center mb-8">
                I - Gestión de proveedores
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
                <p className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg text-xl text-gray-600">
                    No es de extrañar que cualquier elemento diferencial que agregue valor a su compañía puede llegar a ser un factor decisivo para sus potenciales clientes.
                    Y es justo en este contexto donde entra en juego la gestión de proveedores o la gestión de compras y abastecimiento, una importante área estratégica que les ayudará a reducir costos y tiempo, que aumentará sus resultados financieros a corto y largo plazo
                </p>
                <div className='relative w-full max-w-md mx-auto '>
                    <img
                        className="w-full rounded-lg shadow-xl"
                        src={Pilares}
                        alt="Técnicas Lean"
                    />
                </div>
            </div>

            <ul className="space-y-6">
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">Desarrollo de Proveedores Nacionales y Extranjeros de 1° y 2° Nivel</p>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">Asistencia técnica Residente;</p>
                        <p className="text-base text-rich_black-400">Es el Soporte que CLUSTERBAF ofrece a las Empresas que no disponen de personal para realizar la Asistencia en sus Clientes o Proveedores, preservando la buena Comunicación y resguardando la Imagen de la Empresa.</p>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">Inspección y Retrabajo de Piezas</p>
                        <p className="text-base text-rich_black-400">Con el Objetivo de Examinar y medir las Características de Calidad de un Producto, así como de los componentes y materiales con los que está elaborado, o de un servicio o proceso determinado; realizamos el Servicio de Inspección siguiendo los Lineamientos de la Norma ISO 17020.</p>
                        <p className="text-base text-rich_black-400 mt-2">Tipos de Inspección
                            <p>Inspección 100%</p>
                            <p>Inspección por Muestreo: Inspección por Variables / Atributos.</p> 
                        </p>
                        <p className="text-base text-rich_black-400 mt-2">Con el Servicio de segregación y retrabajo, garantizamos que los Productos NO Conformes detectados durante el proceso de Inspección, sean corregidos de modo que cumplan con las especificaciones predefinidas.</p>
                    </div>
                </li>
                <li className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                    <CheckCircle className="w-6 h-6 mr-4 text-jonquil-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <p className="text-lg font-bold text-rich_black-500 mb-2">Embarque Controlado nivel I y II.</p>
                        <p className="text-base text-rich_black-400">El Embarque Controlado es un procedimiento de contención de Incidentes de calidad. Se aplica en casos en que "el proveedor tenga, o potencialmente pueda tener, su proceso fuera de control, generando la aparición de piezas NO Conformes en sus clientes".
                            Nuestro Servicio puede ser implementado en supply chain o bien para control interno de  despacho.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
