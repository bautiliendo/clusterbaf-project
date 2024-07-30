import { CheckCircle } from "lucide-react"

export const Capacitaciones = () => {
  return (
    <section className="bg-gradient-to-b from-white to-jonquil-900 py-28 lg:py-36">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
          <div className="relative">
            <img
              className="w-full max-w-2xl mx-auto rounded-lg shadow-xl"
              src="https://img.freepik.com/free-photo/close-up-people-learning-work_23-2149300705.jpg?t=st=1722347840~exp=1722351440~hmac=5e6102cdfbcffd9f5069fe90838d5f6974854833903f81bacd99034e5b81ce35&w=1380"
              alt="Trabajador en fábrica"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rich_black-500/70 to-transparent rounded-lg"></div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-rich_black-500 sm:text-5xl">
              Capacitaciones
            </h2>
            <ul className="space-y-4">
              {[
                "Gestión de Calidad Total",
                "Herramientas de Análisis y resolución de problemas",
                "Gestión por Indicadores",
                "Ingeniería de Procesos",
                "Ingeniería Logística",
                "Herramientas Lean (5S, TPM, VSM, SMED, Six Sigma, Kaizen, Trabajo estandarizado, JIT, KANBAN)",
                "Gestión de Compras",
                "Diseño Asistido (Catia, Solidworks)",
                "Matricería - Diseño, Puesta a punto y Mantenimiento"
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
      <div className="flex justify-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl">
          <div className="flex flex-col overflow-hidden bg-rich_black shadow-md rounded-xl">
            <div className="flex flex-col justify-between flex-1 px-5 py-6">
              <div className="flex-shrink-0">
                <span className="block text-lg font-bold tracking-widest text-jonquil uppercase pb-4">¿Qué ofrecemos? </span>
              </div>
              <p className="text-base text-white">
                Un servicio de capacitación profesional Certificada, adaptado a las necesidades de las empresas para aportar valor al staff de empleados
              </p>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden bg-rich_black shadow-xl rounded-xl">
            <div className="flex flex-col justify-between flex-1 px-5 py-6">
              <div className="flex-shrink-0">
                <span className="block text-lg font-bold tracking-widest text-jonquil uppercase pb-4">¿Cómo?</span>
              </div>
              <p className="text-base text-white">
                Asesorando, diseñando, produciendo y evaluando la propuesta de capacitación junto al referente que la empresa disponga en el área.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}