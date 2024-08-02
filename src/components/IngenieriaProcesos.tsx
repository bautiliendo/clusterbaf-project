import { CheckCircle } from 'lucide-react';
import tecnicasLean from '../assets/tecnicaslean.webp'
import ingProcesos from '../assets/IngenieriaProcesos.webp'

export const IngenieriaProcesos = () => {
  return (
    <section className="bg-gradient-to-b from-white to-jonquil-900 py-28 lg:py-36">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="relative overflow-hidden pt-10  sm:animate-fade-right sm:animate-ease-linear animate-fade animate-ease-linear">
            <div className="relative w-full max-w-2xl mx-auto">
              <img
                className="w-full rounded-lg shadow-xl"
                src={ingProcesos}
                alt="Personas discutiendo plan en fábrica"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rich_black-500/70 to-transparent rounded-lg"></div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-rich_black-500 sm:text-5xl">
              Ingeniería de Procesos
            </h2>
            <ul className="space-y-4">
              {[
                "Análisis, Desarrollo y Optimización de Procesos",
                "Implementando y Capacitando en Herramientas Lean",
                "Gestión de la Cadena de Valor",
                "Programación de la Producción",
                "Estudio de Métodos y Tiempos",
                "Simulación de Procesos",
                "Redefinición de Procesos Productivos y de Servicios",
                "Propuestas de Lay Out"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
                  <p className="text-base text-rich_black-400">{item}</p>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
      <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-10'>
        <h3 className="text-3xl font-extrabold text-rich_black-500 sm:text-4xl mt-10 py-4">
          Metodología aplicada
        </h3>
        <div className='relative w-full max-w-2xl'>

          <img
            className="w-full rounded-lg shadow-xl"
            src={tecnicasLean}
            alt="Técnicas Lean"
          />
        </div>

        <h4 className="text-2xl font-extrabold text-rich_black-500 sm:text-3xl mt-10 py-4">
          Beneficios
        </h4>
        <ul className="space-y-4">
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
            <p className="text-base text-rich_black-400">Se exploran las causas y efectos de problemas transversales en los procesos de forma integral</p>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
            <p className="text-base text-rich_black-400">Se crea un plan de acción acorde a las necesidades y problemas específicos del cliente</p>
          </li>
          <li className="flex items-start">
            <CheckCircle className="w-6 h-6 mr-2 text-jonquil-500 flex-shrink-0 mt-1" />
            <p className="text-base text-rich_black-400">Se logra la estandarización de las acciones para convertirlas en parte operativa de la empresa</p>
          </li>
        </ul>
      </div>
    </section>
  );
};