'use client';

import { useTranslation } from '@/context/i18n-context';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useTranslation();

    return (
        <div className="flex items-center gap-2 bg-neutral-900/50 rounded-full p-1 border border-white/10">
            <button
                onClick={() => setLanguage('es')}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${language === 'es'
                        ? 'bg-fv-accent text-black font-bold shadow-sm'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                aria-label="Español"
            >
                <span className="text-sm">ES</span>
            </button>
            <button
                onClick={() => setLanguage('ja')}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${language === 'ja'
                        ? 'bg-fv-accent text-black font-bold shadow-sm'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                aria-label="Japanese"
            >
                <span className="text-sm">JP</span>
            </button>
        </div>
    );
}
