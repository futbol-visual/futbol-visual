'use client';

import Link from 'next/link';
import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { useTranslation } from '@/context/i18n-context';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-fv-secondary border-t border-neutral-800 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter">
                            FÚTBOL <span className="text-fv-accent">VISUAL</span>
                        </h3>
                        <p className="mb-4 max-w-sm">
                            {t('footer.about')}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-fv-accent transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-fv-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-fv-accent transition-colors"><Youtube size={20} /></a>
                            <a href="mailto:adrianmarquezytfa@gmail.com" className="hover:text-fv-accent transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t('footer.links')}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/cursos" className="hover:text-fv-accent transition-colors">{t('nav.courses')}</Link></li>
                            <li><Link href="/packs" className="hover:text-fv-accent transition-colors">{t('nav.packs')}</Link></li>
                            <li><Link href="/recursos" className="hover:text-fv-accent transition-colors">Recursos Tácticos</Link></li>
                            <li><Link href="/membresia" className="hover:text-fv-accent transition-colors">{t('nav.mentorship')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">{t('footer.legal')}</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacidad" className="hover:text-fv-accent transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="/terminos" className="hover:text-fv-accent transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="/cookies" className="hover:text-fv-accent transition-colors">Política de Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-12 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Fútbol Visual. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
}
