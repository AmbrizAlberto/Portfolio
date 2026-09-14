'use client';
import { createContext, useState, useContext, useEffect } from 'react';
import es from '../locales/es';
import en from '../locales/en';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');
  const [isReady, setIsReady] = useState(false);

  // Leer el idioma guardado en localStorage al cargar
  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved === 'es' || saved === 'en') {
      setLanguage(saved);
    }
    setIsReady(true);
  }, []);

  // Guardar idioma cuando cambie
  useEffect(() => {
    if (isReady) {
      localStorage.setItem('language', language);
    }
  }, [language, isReady]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'es' ? 'en' : 'es'));
  };

  const translations = language === 'es' ? es : en;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}