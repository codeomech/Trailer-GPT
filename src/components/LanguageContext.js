import React, { createContext, useState, useContext } from 'react';

// Create a Context object
const LanguageContext = createContext();

// Provider component that wraps your application and provides the context value
export const LanguageProvider = ({ children }) => {
  const [langKey, setLangKey] = useState('en');

  const toggleLanguage = () => {
    setLangKey((prevLangKey) => (prevLangKey === 'en' ? 'hin' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ langKey, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the LanguageContext
export const useLanguage = () => {
  return useContext(LanguageContext);
};
