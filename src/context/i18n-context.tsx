'use client';

import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { translations, Language, TranslationKey } from '@/data/dictionaries';

type I18nContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');

    // Optionally load from localStorage on mount
    useEffect(() => {
        const savedLang = localStorage.getItem('fv-language') as Language;
        if (savedLang && (savedLang === 'es' || savedLang === 'ja')) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('fv-language', lang);
        // Optional: Update HTML lang attribute
        document.documentElement.lang = lang;
    };

    const t = (key: TranslationKey): string => {
        const keys = key.split('.');
        let value: any = translations[language];

        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key; // Return key if not found
            }
        }

        return typeof value === 'string' ? value : key;
    };

    return (
        <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useTranslation must be used within an I18nProvider');
    }
    return context;
}
