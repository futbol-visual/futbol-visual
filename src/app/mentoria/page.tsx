import SectionHeader from '@/components/SectionHeader';
import { Target, Users, BarChart2, Video, Rocket, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Mentoría 1 a 1 - Fútbol Visual',
    description: 'Acelera tu carrera como entrenador con sesiones personalizadas.',
};

export default function MentoriaPage() {
    return (
        <div className="bg-fv-primary min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-fv-primary pb-16 pt-32 sm:pb-24 lg:pb-32">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-fv-accent/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
                        No entrenes solo.<br />
                        <span className="text-fv-accent">Acelera tu carrera.</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
                        Un programa de acompañamiento personalizado para entrenadores que quieren dar el salto al siguiente nivel, sin perder tiempo en el ensayo y error.
                    </p>
                    <div className="mt-10 flex justify-center gap-4">
                        <Link
                            href="/contacto"
                            className="rounded-full bg-fv-accent px-8 py-3.5 text-base font-bold text-black shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-colors"
                        >
                            Solicitar Entrevista Gratuita
                        </Link>
                    </div>
                </div>
            </div>

            {/* Problem / Solution */}
            <div className="bg-fv-secondary py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* How it works */}
            <div className="py-20 bg-fv-primary">
                <SectionHeader title="¿Cómo trabajamos?" subtitle="Un proceso adaptado a tus necesidades." />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Video size={32} />,
                            title: "1. Videollamadas Semanales",
                            desc: "Sesiones de 60 minutos para revisar trabajo, analizar video y plantear objetivos."
                        },
                        {
                            icon: <Users size={32} />,
                            title: "2. Soporte Continuo",
                            desc: "Contacto directo por WhatsApp para dudas del día a día en tus entrenamientos."
                        },
                        {
                            icon: <Target size={32} />,
                            title: "3. Plan de Acción",
                            desc: "No solo hablamos. Definimos tareas concretas para que apliques en tu equipo."
                        }
                    ].map((feature, i) => (
                        <div key={i} className="bg-fv-secondary p-8 rounded-2xl border border-neutral-800 text-center hover:border-fv-accent transition-colors group">
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
                    <h2 className="text-3xl font-bold text-black mb-4">¿Listo para dar el salto profesional?</h2>
                    <p className="text-black/80 mb-8 text-lg">Las plazas son limitadas. Solo trabajo con 5 entrenadores a la vez para garantizar la calidad.</p>
                    <Link
                        href="/contacto"
                        className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-800 transition-colors"
                    >
                        Aplicar Ahora
                    </Link>
                </div>
            </div>
        </div>
    );
}
