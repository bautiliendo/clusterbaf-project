import { CheckCircle } from "lucide-react"
import { Outsourcing1 } from "./Outsourcing1"
import { Outsourcing2 } from "./Outsourcing2"
import { Outsourcing3 } from "./Outsourcing3"
import { Outsourcing4 } from "./Outsourcing4"
import outsourcing from '../assets/Outosourcing.webp'

export const Outsourcing = () => {
  return (
    <section className="bg-gradient-to-b from-white to-jonquil-900 py-28 lg:py-36">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="relative animate-fade-right animate-ease-linear">
            <img
              className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
              src={outsourcing}
              alt="Trabajador en fábrica"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rich_black-500/70 to-transparent rounded-lg"></div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-rich_black-500 sm:text-5xl">
              Outsourcing de Servicios
            </h2>
            <ul className="space-y-4">
              {[
                "I - Gestión de Proveedores",
                "II Gestión de Mantenimiento",
                "III Diseño Asistido CAD",
                "IV Gestión y desarrollo de Proyectos (según lineamientos ISO 21500)",
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
      <Outsourcing1 />
      <Outsourcing2 />
      <Outsourcing3 />
      <Outsourcing4 />
    </section>
  )
}