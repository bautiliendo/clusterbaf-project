import { useScrollNavigation } from "../helpers/ScrollToSection";


export const Hero = () => {
  const scrollToSection = useScrollNavigation();
  
  return (
    <div className="w-full h-screen">
      <img className="top-0 left-0 w-full h-screen object-cover"
        src="https://img.freepik.com/free-photo/factory-workshop-interior-machines-glass-production-background_645730-396.jpg?t=st=1721923774~exp=1721927374~hmac=d7d1e418d5ea96c6c3d06030967ab61b6fbe677bdbf1b06489b8f972bc5ebfc4&w=1380"
        alt="Imagen ingeniería"
      />
      <div className="bg-black/45 absolute top-0 left-0 w-full h-[99.6vh] my-1" />
      <div className="text-white absolute top-0 w-full h-full flex flex-col justify-center">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p className="block text-lg font-bold tracking-widest text-jonquil uppercase">BROCHURE INSTITUCIONAL</p>
          <h1 className="font-bold text-5xl md:text-6xl drop-shadow-2xl">CLUSTERBAF</h1>
          <p className="max-w[600px] drop-shadow-2xl py-2 text-xl">
            Con más de 20 años de experiencia, ofrecemos soluciones integrales de ingeniería para mejorar la competitividad de su empresa. Brindamos un servicio personalizado y de excelencia en todas las etapas de industrialización.
          </p>
          <button type="button" className="btn-custom" onClick={() => scrollToSection('contact')}>
            Contáctenos ahora
          </button>
        </div>
      </div>

    </div>
  )
}
