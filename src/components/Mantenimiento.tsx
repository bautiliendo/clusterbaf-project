import { CheckCircle } from "lucide-react"
import mantenimiento from '../assets/Mantenimiento.webp'

export const Mantenimiento = () => {
  return (
    <section className="bg-gradient-to-b from-white to-jonquil-900 py-28 lg:py-36">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="relative animate-fade-right animate-ease-linear">
            <img
              className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
              src={mantenimiento}
              alt="Trabajadora en fábrica"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rich_black-500/70 to-transparent rounded-lg"></div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-rich_black-500 sm:text-5xl">
              Mantenimiento e Instalaciones Industriales
            </h2>
            <ul className="space-y-4">
              {[
                "Construcciones y Mantenimiento Civiles",
                "Mantenimiento Edilicio Industrial",
                "Instalaciones Industriales(Hidráulicas, Neumáticas, Aire Comprimido, Eléctricas, etc.)",
                "Automatizaciones",
                "Construcciones Metálicas en General",
                "Fabricación de Dispositivos Productivos, Logísticos, Calidad, etc",
                "Servicio de Pintura Industrial",
                "Montajes Industriales",

              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                  <p className="text-base text-rich_black-400">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24 py-20">


          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-rich_black-500 sm:text-5xl">
              Estandar Handling
            </h2>
            <ul className="space-y-4">
              {[
                "Nos especializamos en satisfacer las necesidades del mercado en la prestación de Soluciones para el movimiento de materiales, de la más alta calidad.",
                "Así podemos cumplir con los más exigentes requerimientos de la industria, adecuando, adaptando y ajustando los productos a los proyectos desarrollados por el departamento de Ingeniería, garantizando la funcionalidad y rendimiento de los mismos, antes de proceder al montaje en las plantas productivas.",
                "Ejecutamos proyecto e instalación de equipamiento para handling logístico y de manufactura acorde a las necesidades de la operación.",
              ].map((item, index) => (
                <li key={index}  className="flex items-start bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                  <p className="mt-4 text-xl text-gray-600">{item}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-2xl font-bold">OFRECEMOS</p>
            <ul className="space-y-4 font-bold">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                <p className="text-base text-rich_black-400">Diseño</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                <p className="text-base text-rich_black-400">Instalación y Montaje</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                <p className="text-base text-rich_black-400">Inspección y Auditoría</p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                <p className="text-base text-rich_black-400">Mantenimiento</p>
              </li>
            </ul>

          </div>
          <div className="relative animate-fade-left animate-ease-linear">
            <img
              className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
              src="https://www.dalmec.com/wp-content/uploads/2016/05/1036877_R02.jpg"
              alt="Trabajador en fábrica"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rich_black-500/70 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>

    </section>
  )
}
