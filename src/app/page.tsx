'use client';

import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { MonitorPlay, Shield, Target, Award, Plus } from 'lucide-react';
import { useTranslation } from '@/context/i18n-context';

export default function Home() {
    const { t } = useTranslation();

    const featuredCourses = [
        {
            title: "Máster en Análisis Táctico",
            description: "Aprende a analizar el juego como un profesional. Desglosamos las fases del juego, estructuras y patrones para que domines la pizarra.",
            priceMXN: 5900,
            priceEUR: 299,
            image: "https://images.unsplash.com/photo-1518605348433-e341908d5f66?q=80&w=3540&auto=format&fit=crop", // Placeholder
            type: "course" as const,
            slug: "master-analisis"
        },
        {
            title: "Máster en Preparación Física Aplicada al Fútbol Base",
            description: "Planificación, cargas y prevención de lesiones, adaptado a la realidad del fútbol formativo para potenciar a tus jugadores.",
            priceMXN: 0,
            priceEUR: 0,
            image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=3540&auto=format&fit=crop",
            type: "course" as const,
            slug: "master-fisica",
            comingSoon: true
        },
        {
            title: "Máster Profesional en Fundamentos Específicos por Demarcación",
            description: "Domina cada posición al detalle. Micro-conceptos, perfiles y funciones específicas para desarrollar jugadores inteligentes.",
            priceMXN: 0,
            priceEUR: 0,
            image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=3540&auto=format&fit=crop",
            type: "course" as const,
            slug: "master-fundamentos",
            comingSoon: true
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
            <section className="py-24 bg-fv-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-900/0 to-neutral-900/0 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <SectionHeader
                        title={t('value_prop.title')}
                        subtitle={t('value_prop.subtitle')}
                        centered={true}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-fv-accent/20 transition-all duration-300 hover:shadow-2xl hover:bg-neutral-900/80 group">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-fv-accent/20 to-transparent flex items-center justify-center text-fv-accent mb-6 group-hover:scale-110 transition-transform duration-300 border border-fv-accent/10">
                                <MonitorPlay size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{t('value_prop.card1_title')}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {t('value_prop.card1_desc')}
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-fv-accent/20 transition-all duration-300 hover:shadow-2xl hover:bg-neutral-900/80 group">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-fv-accent/20 to-transparent flex items-center justify-center text-fv-accent mb-6 group-hover:scale-110 transition-transform duration-300 border border-fv-accent/10">
                                <Shield size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{t('value_prop.card2_title')}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {t('value_prop.card2_desc')}
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-fv-accent/20 transition-all duration-300 hover:shadow-2xl hover:bg-neutral-900/80 group">
                            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-fv-accent/20 to-transparent flex items-center justify-center text-fv-accent mb-6 group-hover:scale-110 transition-transform duration-300 border border-fv-accent/10">
                                <Target size={40} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{t('value_prop.card3_title')}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {t('value_prop.card3_desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Courses */}
            <section className="py-24 relative">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-fv-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-fv-accent font-bold tracking-wider text-sm uppercase mb-2 block">{t('courses.tag')}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">{t('courses.title')} <span className="text-fv-accent">.</span></h2>
                            <p className="text-gray-400 mt-3 max-w-xl text-lg">
                                {t('courses.subtitle')}
                            </p>
                        </div>
                        <Link href="/cursos" className="hidden md:flex items-center gap-2 text-white hover:text-fv-accent transition-colors group font-medium">
                            {t('courses.cta_all')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredCourses.map((course, index) => (
                            <ProductCard key={index} {...course} />
                        ))}
                        {/* Placeholder for visual balance if needed */}
                        <div className="rounded-2xl border-2 border-dashed border-neutral-800 bg-neutral-900/30 flex flex-col items-center justify-center text-center p-8 hover:border-fv-accent/30 hover:bg-neutral-900/50 transition-all cursor-pointer group">
                            <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center text-gray-500 mb-4 group-hover:text-white group-hover:bg-neutral-700 transition-colors">
                                <Plus size={32} />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{t('courses.coming_soon_title')}</h3>
                            <p className="text-gray-500 text-sm">{t('courses.coming_soon_desc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Packs */}
            <section className="py-24 bg-neutral-900/30 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-2 block">{t('packs.tag')}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">{t('packs.title')} <span className="text-fv-accent">.</span></h2>
                            <p className="text-gray-400 mt-3 max-w-xl text-lg">
                                {t('packs.subtitle')}
                            </p>
                        </div>
                        <Link href="/packs" className="hidden md:flex items-center gap-2 text-white hover:text-fv-accent transition-colors group font-medium">
                            {t('packs.cta_all')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {positionPacks.map((pack, index) => (
                            <ProductCard key={index} {...pack} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link href="/packs" className="inline-flex items-center gap-2 text-fv-accent hover:text-white transition-colors">
                            {t('packs.cta_mobile')} <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Membership Teaser */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-fv-accent/5"></div>
                <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-fv-accent/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-16 border border-neutral-700 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group hover:border-fv-accent/20 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-fv-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="md:w-1/2 relative z-10">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fv-accent/10 text-fv-accent font-bold text-xs uppercase tracking-wider mb-6 border border-fv-accent/20">
                                <span className="w-2 h-2 rounded-full bg-fv-accent animate-pulse"></span>
                                {t('pro.tag')}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Fútbol Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-fv-accent to-green-300">PRO</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                {t('pro.subtitle')}
                            </p>
                            <button disabled className="px-8 py-4 bg-white/5 text-gray-400 font-bold rounded-xl cursor-not-allowed border border-white/5 flex items-center gap-3">
                                {t('pro.cta_waitlist')} <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center relative z-10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-fv-accent/20 blur-[60px] rounded-full"></div>
                                <Award size={140} className="text-fv-accent relative z-10 drop-shadow-[0_0_15px_rgba(34,220,118,0.5)]" strokeWidth={1} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/30 via-neutral-900/0 to-neutral-900/0 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight whitespace-pre-line">
                        {t('cta_final.title')}
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        {t('cta_final.subtitle')}
                    </p>
                    <Link
                        href="/cursos"
                        className="inline-flex items-center gap-3 rounded-full bg-fv-accent px-10 py-5 text-xl font-bold text-black shadow-[0_0_20px_rgba(34,220,118,0.4)] hover:shadow-[0_0_40px_rgba(34,220,118,0.6)] hover:bg-[#1fe078] hover:scale-105 transition-all duration-300"
                    >
                        {t('cta_final.button')} <ArrowRight size={20} strokeWidth={2.5} />
                    </Link>
                </div>
            </section>
        </div>
    );
}

function ArrowRight({ className, size, strokeWidth = 2 }: { className?: string, size?: number, strokeWidth?: number }) {
    // Local definition to avoid conflict if not imported, but imported above from lucide-react
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
