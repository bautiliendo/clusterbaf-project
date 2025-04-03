import { useLanguage } from '../hooks/useLanguage';
import translations from '../translations.json';
import industrializacion from '../assets/tecnon.webp';
import antiparras1 from '../assets/antiparras.webp';
import antiparras2 from '../assets/antiparrasiliconada.webp';
import anteojos from '../assets/anteojosPanoramicos.webp';
import guantesP from '../assets/guantespoliester.webp';
import guantesD from '../assets/guanteDescarne.webp';
import protectorAuditivo from '../assets/protectorAuditivo.webp';
import { FaFileDownload } from 'react-icons/fa';
import Tecnon from '../assets/CatalogoTecnon.pdf';

export const Products: React.FC = () => {
    const { language } = useLanguage();
    // @ts-expect-error development
    const t = translations[language].products;

    const productos = [
        { key: "p1", imagen: antiparras1 },
        { key: "p2", imagen: antiparras2 },
        { key: "p3", imagen: anteojos },
        { key: "p4", imagen: guantesP },
        { key: "p5", imagen: guantesD },
        { key: "p6", imagen: protectorAuditivo },
    ];

    return (
        <div className="bg-white my-40">
            <main className="my-8">
                <div className="container mx-auto px-6 relative">
                    {/* Contenedor de la imagen con blur reducido y hover */}
                    <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-md ">
                        <img
                            className="h-full w-full object-cover transition-all duration-300 filter blur-sm brightness-50 hover:blur-[2px] hover:brightness-75"
                            src={industrializacion}
                            alt="Catálogo Tecnón"
                        />
                        {/* Contenido sobre la imagen */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-black bg-opacity-0 rounded-md">
                            <h2 className="text-5xl font-extrabold drop-shadow-lg">TECNON</h2>
                            <hr className="my-3 w-16 border-white opacity-80" />
                            <p className="text-lg max-w-lg font-medium drop-shadow-md">
                                {t.subtitle}
                            </p>
                            <button className="btn-custom gap-2 my-3 transition-transform duration-300 hover:scale-105">
                                <FaFileDownload size={20} />
                                <a href={Tecnon} download="catalogoTecnon.pdf" className="text-sm font-semibold">
                                    {t.download}
                                </a>
                            </button>
                        </div>
                    </div>

                    {/* Sección de productos */}
                    <div className="mt-16">
                        <h3 className="text-gray-600 text-2xl font-medium">{t.h2}</h3>
                        <p className="text-gray-600 mt-2">{t.h2Subtitle}</p>
                        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">
                            {productos.map((producto, index) => (
                                <div
                                    key={index}
                                    className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                    <div
                                        className="flex items-end justify-end h-60 w-full bg-cover bg-center"
                                        style={{ backgroundImage: `url(${producto.imagen})` }}>
                                    </div>
                                    <div className="px-5 py-3">
                                        <h3 className="text-gray-700 font-semibold">{t[producto.key]}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
