import { useContext } from "react";
import { LanguageContextType } from "../types";
import { LanguageContext } from "../context/language";

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
      throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
  };