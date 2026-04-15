import SectionHeader from '@/components/SectionHeader';
import { Target, Users, Video, Award, Building2, MonitorPlay, Layers } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Mentoría Institucional - Fútbol Visual',
    description: 'Transformación institucional desarrollando una estructura metodológica sólida.',
};

export default function MentoriaInstitucionesPage() {
    return (
        <div className="bg-fv-primary min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-fv-primary pb-16 pt-32 sm:pb-24 lg:pb-32 border-b border-neutral-800">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Potencia tu institución <br />
                        <span className="text-blue-400">y llévala a otro nivel.</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Transformación institucional desarrollando una estructura metodológica, aportando orden, tecnología y claridad al proceso formativo.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <Link
                            href="/contacto"
                            className="rounded-full bg-blue-500 px-8 py-3.5 text-base font-bold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-colors"
                        >
                            Solicitar Asesoramiento
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-fv-secondary py-20 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="aspect-square bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-2xl opacity-20 absolute -inset-4 blur-2xl"></div>
                            <div className="relative bg-fv-primary border border-neutral-800 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">El impacto del programa</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Creación de estructura metodológica sólida.",
                                        "Formación integral de coordinadores y entrenadores.",
                                        "Implementación de tecnología de videoanálisis.",
                                        "Grabación de entrenamientos y partidos institucionales.",
                                        "Orden, claridad y estandarización del proceso."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <Award className="text-blue-400 flex-shrink-0" size={20} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <SectionHeader title="Actualiza tu Institución" subtitle="El fútbol moderno requiere tecnología y método." />
                            <ul className="space-y-6 mt-8">
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                                        <Layers />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Estructura y Orden</h3>
                                        <p className="text-gray-400">Desarrollamos un modelo claro para que todos los equipos y entrenadores hablen el mismo idioma metodológico.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                                        <Users />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Formación de Formadores</h3>
                                        <p className="text-gray-400">Capacitamos a tus coordinadores y técnicos para garantizar la máxima calidad en los procesos de enseñanza.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                                        <MonitorPlay />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Nuevas Tecnologías</h3>
                                        <p className="text-gray-400">Iniciación e implementación de herramientas de videoanálisis y grabación en el día a día para potenciar el talento.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* How it works */}
            <div className="py-20 bg-fv-primary">
                <SectionHeader title="¿Cómo trabajamos?" subtitle="Un proceso adaptado a las necesidades de tu club o colegio." />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Building2 size={32} />,
                            title: "1. Diagnóstico Inicial",
                            desc: "Análisis exhaustivo de la situación actual y definición de las necesidades del club."
                        },
                        {
                            icon: <Users size={32} />,
                            title: "2. Implementación",
                            desc: "Inmersión y formación de la estructura técnico-táctica a todos los coordinadores."
                        },
                        {
                            icon: <Video size={32} />,
                            title: "3. Seguimiento",
                            desc: "Soporte continuado y auditorías mensuales de control de calidad institucional."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="bg-fv-secondary p-8 rounded-2xl border border-neutral-800 text-center hover:border-blue-500/50 transition-colors group">
                            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div className="bg-blue-600 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">¿Preparado para transformar la academia de tu club?</h2>
                    <p className="text-white/80 mb-8 text-lg">Nos integramos en vuestro ecosistema o diseñamos uno desde cero exclusivamente para ti.</p>
                    <Link
                        href="/contacto"
                        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-colors shadow-2xl"
                    >
                        Solicitar Más Información
                    </Link>
                </div>
            </div>
        </div>
    );
}
