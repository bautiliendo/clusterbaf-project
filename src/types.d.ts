export interface BrandLogoProps {
    name: string;
    logo: string;
  }

  export type ProductOption = 
  | "Ingeniería en Gestión Integral de Calidad"
  | "Ingeniería de Procesos"
  | "Industrialización de Componentes"
  | "Mantenimiento e Instalaciones Industriales"
  | "Outsourcing de servicios"
  | "Capacitaciones";


  //CONTEXT LANGUAGE

  export interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
  }