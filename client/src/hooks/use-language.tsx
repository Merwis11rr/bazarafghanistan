import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fa' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fa');

  useEffect(() => {
    // Update document attributes
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'fa' ? 'rtl' : 'ltr');
    
    // Update body class for font
    document.body.className = document.body.className.replace(
      /font-(persian|english)/g, 
      `font-${language === 'fa' ? 'persian' : 'english'}`
    );
    if (!document.body.className.includes('font-')) {
      document.body.className += ` font-${language === 'fa' ? 'persian' : 'english'}`;
    }
  }, [language]);

  const isRTL = language === 'fa';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
