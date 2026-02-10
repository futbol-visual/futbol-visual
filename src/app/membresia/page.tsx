import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { Check, Lock } from 'lucide-react';

export const metadata = {
    title: 'Membresía PRO - Fútbol Visual',
    description: 'Próximamente: Acceso ilimitado a toda la academia por una suscripción mensual.',
};

export default function MembershipPage() {
    return (
        <div className="bg-fv-primary min-h-screen py-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-fv-accent/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-fv-accent/20 text-fv-accent font-bold text-sm mb-6 border border-fv-accent/20">
                        PRÓXIMAMENTE - FÚTBOL VISUAL PRO
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        La Mejor Inversión para tu <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fv-accent to-green-200">Carrera como Entrenador</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-8">
                        Una sola suscripción. Acceso ilimitado. <br />
                        Únete a la lista de espera y consigue un precio especial de lanzamiento.
                    </p>

                    <div className="flex justify-center gap-4">
                        <button disabled className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                            Unirse a la Lista de Espera
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto bg-neutral-900/50 backdrop-blur-xl border border-neutral-800 rounded-3xl p-8 md:p-12 relative">
                    <div className="absolute -top-4 -right-4 bg-fv-accent text-black font-bold px-4 py-1 rounded-full transform rotate-12 shadow-lg z-20">
                        MUY PRONTO
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">¿Qué incluirá?</h3>
                            <ul className="space-y-4">
                                {[
                                    "Acceso a TODOS los cursos actuales y futuros",
                                    "Librería completa de packs por posición",
                                    "Descarga ilimitada de recursos",
                                    "Sesiones de análisis en vivo mensuales",
                                    "Comunidad privada de entrenadores",
                                    "Descuentos en software de análisis"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <div className="mt-1 bg-fv-accent/20 p-1 rounded-full"><Check size={14} className="text-fv-accent" /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-neutral-700 relative overflow-hidden">
                            <div className="absolute inset-0 bg-neutral-900/80 z-10 flex items-center justify-center backdrop-blur-[2px]">
                                <Lock size={48} className="text-gray-500 mb-2" />
                            </div>

                            <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Precio Mensual</p>
                            <div className="flex items-baseline justify-center gap-1 mb-2 blur-sm">
                                <span className="text-5xl font-bold text-white">29</span>
                                <span className="text-xl text-gray-400">€</span>
                            </div>
                            <p className="text-gray-500 text-sm blur-sm">Cancela cuando quieras</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
