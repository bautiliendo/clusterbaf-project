import { CheckCircle } from 'lucide-react';
import tecnicasLean from '../assets/tecnicaslean.png'

export const IngenieriaProcesos = () => {
  return (
    <section className="bg-gradient-to-b from-white to-jonquil-900 py-28 lg:py-36">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-start grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="relative overflow-hidden pt-10">
            <div className="relative w-full max-w-2xl mx-auto">
              <img
                className="w-full rounded-lg shadow-xl"
                src="https://img.freepik.com/free-photo/two-workers-showing-quality-control-inspector-industrial-machine-they-are-using-distribution-warehouse_637285-4188.jpg?t=st=1722285613~exp=1722289213~hmac=7cd6dc5395fbdb68fde1e94b098bf4f247d6b74559338f1a4e8e4b29ffd779af&w=1380"
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

            <h3 className="text-3xl font-extrabold text-rich_black-500 sm:text-4xl mt-10">
              Metodología aplicada
            </h3>

            <img
              className="w-full rounded-lg shadow-xl"
              src={tecnicasLean}
              alt="Técnicas Lean"
            />

            <h4 className="text-2xl font-extrabold text-rich_black-500 sm:text-3xl mt-10">
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
        </div>
      </div>
    </section>
  );
};