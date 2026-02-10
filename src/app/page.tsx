import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { MonitorPlay, Shield, Target, Award } from 'lucide-react';

export default function Home() {
    const featuredCourses = [
        {
            title: "Máster en Análisis Táctico",
            description: "Aprende a analizar el juego como un profesional. Desglosamos las fases del juego, estructuras y patrones para que domines la pizarra.",
            priceMXN: 5900,
            priceEUR: 299,
            image: "https://images.unsplash.com/photo-1518605348433-e341908d5f66?q=80&w=3540&auto=format&fit=crop", // Placeholder
            type: "course" as const,
            slug: "master-analisis"
        }
    ];

    const positionPacks = [
        {
            title: "Entrenamiento de Porteros",
            description: "Posicionamiento, juego de pies y toma de decisiones bajo palos.",
            priceMXN: 979,
            priceEUR: 49,
            image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=3540&auto=format&fit=crop",
            type: "pack" as const,
            slug: "porteros"
        },
        {
            title: "Mediocentros: El Motor del Juego",
            description: "Perfiles, orientación corporal y distribución de juego para dominar el centro del campo.",
            priceMXN: 979,
            priceEUR: 49,
            image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=3693&auto=format&fit=crop",
            type: "pack" as const,
            slug: "mediocentros"
        },
        {
            title: "Extremos Desequilibrantes",
            description: "1vs1, desmarques de ruptura y finalización para jugadores de banda.",
            priceMXN: 979,
            priceEUR: 49,
            image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=3540&auto=format&fit=crop",
            type: "pack" as const,
            slug: "extremos"
        }
    ];

    return (
        <div className="flex min-h-screen flex-col">
            <HeroSection />

            {/* Value Proposition Section */}
            <section className="py-20 bg-fv-secondary/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        title="¿Por qué aprender con Fútbol Visual?"
                        subtitle="Olvídate de la teoría aburrida. Nuestra metodología se basa en lo que realmente sucede en el campo."
                        centered={true}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
                            <div className="w-16 h-16 rounded-full bg-fv-accent/10 flex items-center justify-center text-fv-accent mb-6">
                                <MonitorPlay size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Análisis de Video</h3>
                            <p className="text-gray-400">Desglosamos jugadas reales para que entiendas el "por qué" de cada movimiento.</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
                            <div className="w-16 h-16 rounded-full bg-fv-accent/10 flex items-center justify-center text-fv-accent mb-6">
                                <Shield size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Ejercicios Reales</h3>
                            <p className="text-gray-400">Lleva lo aprendido directamente a tu sesión de entrenamiento con tareas diseñadas.</p>
                        </div>

                        <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800">
                            <div className="w-16 h-16 rounded-full bg-fv-accent/10 flex items-center justify-center text-fv-accent mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Específico por Posición</h3>
                            <p className="text-gray-400">Contenido detallado para mejorar el rendimiento de cada demarcación en el campo.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white">Cursos Destacados <span className="text-fv-accent">.</span></h2>
                            <p className="text-gray-400 mt-2">Formación completa para transformar tu visión.</p>
                        </div>
                        <Link href="/cursos" className="hidden md:flex items-center gap-2 text-fv-accent hover:text-white transition-colors">
                            Ver todos <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCourses.map((course, index) => (
                            <ProductCard key={index} {...course} />
                        ))}
                        {/* Add a generic card promoting the catalog if needed, or just list 1 course as per request data structure having only 1 full course example */}
                    </div>
                </div>
            </section>

            {/* Video Packs */}
            <section className="py-20 bg-neutral-900/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-white">Packs por Posición <span className="text-fv-accent">.</span></h2>
                            <p className="text-gray-400 mt-2">Mejora específica para cada jugador de tu plantilla.</p>
                        </div>
                        <Link href="/packs" className="hidden md:flex items-center gap-2 text-fv-accent hover:text-white transition-colors">
                            Ver todos <ArrowRight size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {positionPacks.map((pack, index) => (
                            <ProductCard key={index} {...pack} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link href="/packs" className="inline-flex items-center gap-2 text-fv-accent hover:text-white transition-colors">
                            Ver todos los packs <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Membership Teaser */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-fv-accent/5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-16 border border-neutral-700 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-1/2">
                            <span className="inline-block px-4 py-1 rounded-full bg-fv-accent/20 text-fv-accent font-bold text-sm mb-6">
                                PRÓXIMAMENTE
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Fútbol Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-fv-accent to-green-200">PRO</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Accede a TODO el contenido de la academia por una suscripción mensual.
                                Cursos, packs, recursos y sesiones de análisis en vivo exclusivas.
                            </p>
                            <button disabled className="px-8 py-4 bg-white/10 text-gray-400 font-bold rounded-lg cursor-not-allowed border border-white/5">
                                Unirse a la lista de espera
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <Award size={120} className="text-fv-accent opacity-80" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                        ¿Listo para transformar tu equipo?
                    </h2>
                    <Link
                        href="/cursos"
                        className="inline-block rounded-full bg-fv-accent px-10 py-5 text-xl font-bold text-black shadow-lg hover:bg-green-400 hover:scale-105 transition-all"
                    >
                        Empezar Ahora
                    </Link>
                </div>
            </section>
        </div>
    );
}

function ArrowRight({ className, size }: { className?: string, size?: number }) {
    // Local definition to avoid conflict if not imported, but imported above from lucide-react
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
