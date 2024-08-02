import { useScrollNavigation } from "../helpers/ScrollToSection";
import HeroImg from '../assets/Hero.webp'

export const Hero = () => {
  const scrollToSection = useScrollNavigation();

  return (
    <div className="w-full h-screen">
      <img className="top-0 left-0 w-full h-screen object-cover"
        src={HeroImg}
        alt="Imagen ingeniería"
      />
      <div className="bg-black/50 absolute top-0 left-0 w-full h-[99.6vh] my-1" />
      <div className="text-white absolute top-0 w-full h-full flex flex-col justify-center">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4 animate-fade-up">
          <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl text-jonquil">CLUSTERBAF</h1>
          <div className="max-w[600px] drop-shadow-2xl py-2 sm:text-xl text-md">
            <p>
              Con más de 20 años de experiencia, ofrecemos soluciones integrales de ingeniería para mejorar la competitividad de su empresa.
            </p>
            <p className="hidden md:block">
              Brindamos un servicio personalizado y de excelencia en todas las etapas de industrialización.
            </p>
          </div>
          <button type="button" className="btn-custom " onClick={() => scrollToSection('contact')}>
            Contáctenos ahora
          </button>
        </div>
      </div>

    </div>
  )
}
