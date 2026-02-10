import Link from 'next/link';
import { Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-fv-secondary border-t border-neutral-800 text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter">
                            FÚTBOL <span className="text-fv-accent">VISUAL</span>
                        </h3>
                        <p className="mb-4 max-w-sm">
                            La academia online premium para entrenadores de fútbol.
                            Aprende a través del análisis visual y eleva tu nivel táctico.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-fv-accent transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-fv-accent transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-fv-accent transition-colors"><Youtube size={20} /></a>
                            <a href="mailto:adrianmarquezytfa@gmail.com" className="hover:text-fv-accent transition-colors"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Explorar</h4>
                        <ul className="space-y-2">
                            <li><Link href="/cursos" className="hover:text-fv-accent transition-colors">Cursos Completos</Link></li>
                            <li><Link href="/packs" className="hover:text-fv-accent transition-colors">Packs por Posición</Link></li>
                            <li><Link href="/recursos" className="hover:text-fv-accent transition-colors">Recursos Tácticos</Link></li>
                            <li><Link href="/membresia" className="hover:text-fv-accent transition-colors">Membresía (Pronto)</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="/privacidad" className="hover:text-fv-accent transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="/terminos" className="hover:text-fv-accent transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="/cookies" className="hover:text-fv-accent transition-colors">Política de Cookies</Link></li>
                            <li><Link href="/faq" className="hover:text-fv-accent transition-colors">Preguntas Frecuentes</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 mt-12 pt-8 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Fútbol Visual. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
