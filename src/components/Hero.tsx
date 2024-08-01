import { useScrollNavigation } from "../helpers/ScrollToSection";


export const Hero = () => {
  const scrollToSection = useScrollNavigation();

  return (
    <div className="w-full h-screen">
      <img className="top-0 left-0 w-full h-screen object-cover"
        src="https://img.freepik.com/foto-gratis/foto-linea-produccion-automoviles-soldadura-carrocerias-planta-ensamblaje-automoviles-moderna-industria-automotriz-interior-fabrica-alta-tecnologia-produccion-moderna_645730-185.jpg?t=st=1722457392~exp=1722460992~hmac=da11f6e12e7c6e4d1d26215211fd71f045aa805b941f1af8d63fc1e1e5d7e882&w=1380"
        alt="Imagen ingeniería"
      />
      <div className="bg-black/50 absolute top-0 left-0 w-full h-[99.6vh] my-1" />
      <div className="text-white absolute top-0 w-full h-full flex flex-col justify-center">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 animate-fade-up">
          <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl text-jonquil">CLUSTERBAF</h1>
          <p className="max-w[600px] drop-shadow-2xl py-2 text-xl">
            Con más de 20 años de experiencia, ofrecemos soluciones integrales de ingeniería para mejorar la competitividad de su empresa. Brindamos un servicio personalizado y de excelencia en todas las etapas de industrialización.
          </p>
          <button type="button" className="btn-custom " onClick={() => scrollToSection('contact')}>
            Contáctenos ahora
          </button>
        </div>
      </div>

    </div>
  )
}
