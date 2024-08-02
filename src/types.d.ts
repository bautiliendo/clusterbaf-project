export interface BrandLogoProps {
    name: string;
    logo: string;
  }

  export type ProductOption = 
  | "ingenieriaGestion"
  | "ingenieriaProcesos"
  | "industrializacion"
  | "mantenimiento"
  | "outsourcing"
  | "capacitaciones";


  //CONTEXT LANGUAGE

  export interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
  }
