import Link from 'next/link';
import { ArrowRight, Users, Building2 } from 'lucide-react';

export const metadata = {
    title: 'Mentoría - Fútbol Visual',
    description: 'Elige tu programa de mentoría especializada: para entrenadores o para instituciones.',
};

export default function MentoriaHubPage() {
    return (
        <div className="bg-fv-primary min-h-screen flex flex-col justify-center py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Elige tu camino en la <br />
                        <span className="text-fv-accent">Mentoría Élite</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Programas de acompañamiento ultra-especializados. Selecciona tu perfil para descubrir cómo podemos ayudarte a alcanzar tus objetivos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Tarjeta Entrenadores */}
                    <Link href="/mentoria/entrenadores" className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-fv-accent/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(34,220,118,0.2)] block h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-fv-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="p-10 flex flex-col h-full relative z-10">
                            <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-fv-accent/20 transition-colors">
                                <Users className="text-gray-400 group-hover:text-fv-accent transition-colors" size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Para Entrenadores</h2>
                            <p className="text-gray-400 text-lg flex-grow mb-8">
                                Impulsa tu carrera. Acompañamiento 1 a 1 para desarrollar tu Modelo de Juego, entender la táctica a fondo y no estancarte profesionalmente.
                            </p>
                            <div className="flex items-center text-fv-accent font-bold group-hover:underline decoration-2 underline-offset-4">
                                Ver programa completo <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                            </div>
                        </div>
                    </Link>

                    {/* Tarjeta Instituciones */}
                    <Link href="/mentoria/instituciones" className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] block h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="p-10 flex flex-col h-full relative z-10">
                            <div className="w-16 h-16 bg-neutral-800 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-colors">
                                <Building2 className="text-gray-400 group-hover:text-blue-400 transition-colors" size={32} />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">Para Instituciones</h2>
                            <p className="text-gray-400 text-lg flex-grow mb-8">
                                Potencia tu academia o colegio. Asesoría metodológica para crear una estructura sólida, formar a tus entrenadores e implementar tecnología de videoanálisis.
                            </p>
                            <div className="flex items-center text-blue-400 font-bold group-hover:underline decoration-2 underline-offset-4">
                                Ver programa institucional <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
