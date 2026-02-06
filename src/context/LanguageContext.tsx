'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, TranslationKey } from '@/data/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function LanguageProviderContent({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Only runs on client-side
        setMounted(true);
        
        try {
            // Read from URL query parameter if available
            if (typeof window !== 'undefined') {
                const urlParams = new URLSearchParams(window.location.search);
                const urlLang = urlParams.get('lang');
                if (urlLang === 'en' || urlLang === 'ru') {
                    setLanguage(urlLang);
                    return;
                }
            }
            // Fallback to localStorage
            const savedLang = localStorage.getItem('portfolio-lang') as Language;
            if (savedLang && (savedLang === 'en' || savedLang === 'ru')) {
                setLanguage(savedLang);
            }
        } catch (e) {
            // Final fallback to default
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('portfolio-lang', lang);
    };

    const t = (key: TranslationKey): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    return (
        <LanguageProviderContent>{children}</LanguageProviderContent>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
