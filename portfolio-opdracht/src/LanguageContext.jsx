import React, { createContext, useContext, useState } from "react";
import en from "./lang/en";
import nl from "./lang/nl";

const translations = { en, nl };
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const switchLanguage = (code) => setLang(code);
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ t, lang, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);