import { CheckCircle } from 'lucide-react';
import ingenieriaGestion from '../assets/IngenieriaGestion.webp'

export const IngenieriaGestion = () => {
  return (
    <section className="bg-gradient-to-b from-white to-jonquil-900 py-28 lg:py-36">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="relative sm:animate-fade-right sm:animate-ease-linear animate-fade animate-ease-linear">
            <img
              className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
              src={ingenieriaGestion}
              alt="ISO"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rich_black-500/70 to-transparent rounded-lg"></div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-rich_black-500 sm:text-5xl">
              Ingeniería en Gestión Integral de Calidad
            </h2>
            <ul className="space-y-4">
              {[
                "Consultoría, Capacitación e Implementación de Sistemas de Gestión (ISO 9001, ISO TS16949, ISO14001, ISO45001, OHSAS 18001)",
                "Auditorías de Sistema y Procesos Internos",
                "Certificación de Normas ISO",
                "Gestión de Indicadores (KPI) y Mejora Continua (PDCA)",
                "Capacitación en Herramientas de análisis y resolución de No Conformidades",
                "Elaboración de Documentación",
                "Evaluación, Desarrollo y Seguimiento de Proveedores"
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
    </section>
  );
};