import SectionHeader from '@/components/SectionHeader';
import { Target, Users, BarChart2, Video, Rocket, Award, MonitorPlay, Layers } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Mentoría - Fútbol Visual',
    description: 'Acelera tu carrera como entrenador o potencia la estructura de tu club o academia.',
};

export default function MentoriaPage() {
    return (
        <div className="bg-fv-primary min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-fv-primary pb-16 pt-32 sm:pb-24 lg:pb-32 border-b border-neutral-800">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-fv-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
                        Impulsa tu carrera o<br />
                        <span className="text-fv-accent">potencia tu institución.</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Programas de acompañamiento especializado: mentoría individual para entrenadores y desarrollo metodológico para clubes, escuelas y academias.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <Link
                            href="/contacto"
                            className="rounded-full bg-fv-accent px-8 py-3.5 text-base font-bold text-black shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-colors"
                        >
                            Solicitar Información
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mentoría Entrenadores */}
            <div className="bg-fv-secondary py-20 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Mentoría a <span className="text-fv-accent">Entrenadores</span>
                        </h2>
                        <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
                            Un programa de acompañamiento para entrenadores que quieren dar el salto al siguiente nivel, sin perder tiempo en el ensayo y error.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionHeader title="¿Te sientes estancado?" subtitle="El camino del entrenador es solitario." />
                            <ul className="space-y-6 mt-8">
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                                        <Target />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Dudas con tu Modelo de Juego</h3>
                                        <p className="text-gray-400">Tienes ideas pero te cuesta plasmarlas en el campo y en las tareas de entrenamiento.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                                        <BarChart2 />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Falta de Feedback Real</h3>
                                        <p className="text-gray-400">Nadie analiza tu trabajo objetivamente para decirte dónde puedes mejorar.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center text-red-500">
                                        <Rocket />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">No avanzas de categoría</h3>
                                        <p className="text-gray-400">Sientes que estás preparado para más, pero no surgen las oportunidades.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-tr from-fv-accent to-blue-500 rounded-2xl opacity-20 absolute -inset-4 blur-2xl"></div>
                            <div className="relative bg-fv-primary border border-neutral-800 rounded-2xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Lo que logramos juntos</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Definición clara de tu Identidad como Entrenador.",
                                        "Creación de tu propio Modelo de Juego visual.",
                                        "Análisis de tus sesiones y partidos.",
                                        "Preparación para entrevistas con clubes.",
                                        "Networking y acceso a oportunidades."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <Award className="text-fv-accent flex-shrink-0" size={20} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mentoría a Clubes, Academias y Colegios */}
            <div className="bg-fv-primary py-20 border-b border-neutral-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Mentoría a <span className="text-blue-400">Clubes, Academias o Colegios</span>
                        </h2>
                        <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
                            Transformación institucional desarrollando una estructura metodológica, aportando orden, tecnología y claridad al proceso formativo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="aspect-square bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-2xl opacity-20 absolute -inset-4 blur-2xl"></div>
                            <div className="relative bg-fv-secondary border border-neutral-800 rounded-2xl p-8">
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
                                        <p className="text-gray-400">Desarrollamos un modelo claro para que todos los equipos y entrenadores hablen el mismo idioma futbolístico y metodológico.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                                        <Users />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Formación de Formadores</h3>
                                        <p className="text-gray-400">Capacitamos a tus coordinadores y técnicos para garantizar la máxima calidad en los procesos de cada entrenamiento.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                                        <MonitorPlay />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">Nuevas Tecnologías</h3>
                                        <p className="text-gray-400">Iniciación e implementación de herramientas de videoanálisis y grabación en el día a día para potenciar la enseñanza.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* How it works */}
            <div className="py-20 bg-fv-secondary">
                <SectionHeader title="¿Cómo trabajamos?" subtitle="Un proceso adaptado a las necesidades de cada entidad o técnico." />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Video size={32} />,
                            title: "1. Sesiones y Análisis",
                            desc: "Reuniones estratégicas, análisis de video e implementación en campo."
                        },
                        {
                            icon: <Users size={32} />,
                            title: "2. Soporte Continuo",
                            desc: "Comunicación constante y acompañamiento cercano en el día a día."
                        },
                        {
                            icon: <Target size={32} />,
                            title: "3. Plan de Acción",
                            desc: "Definición de objetivos a corto, medio y largo plazo con tareas claras."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="bg-fv-primary p-8 rounded-2xl border border-neutral-800 text-center hover:border-fv-accent transition-colors group">
                            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center text-white mx-auto mb-6 group-hover:bg-fv-accent group-hover:text-black transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Final CTA */}
            <div className="bg-fv-accent py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-black mb-4">¿Listo para transformar tu proyecto?</h2>
                    <p className="text-black/80 mb-8 text-lg">Las plazas son limitadas para garantizar la máxima calidad en el servicio y atención.</p>
                    <Link
                        href="/contacto"
                        className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-800 transition-colors shadow-2xl"
                    >
                        Solicitar Más Información
                    </Link>
                </div>
            </div>
        </div>
    );
}
