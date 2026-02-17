'use client';

import { services } from '@/data/services';
import { Check, ArrowRight, Calendar, Info } from 'lucide-react';
import Link from 'next/link';

export default function JugadoresPage() {
    return (
        <div className="flex min-h-screen flex-col pt-16">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-fv-primary z-0"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fv-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-fv-accent/10 border border-fv-accent/20 text-fv-accent text-sm font-bold tracking-wider mb-6">
                        PARA JUGADORES AMBICIOSOS
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Lleva tu juego al <span className="text-transparent bg-clip-text bg-gradient-to-r from-fv-accent to-white">siguiente nivel</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Servicios profesionales de entrenamiento y análisis diseñados para potenciar tus cualidades y corregir tus debilidades.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div key={index} className={`flex flex-col h-full rounded-2xl bg-neutral-900/60 border ${service.border} overflow-hidden hover:scale-[1.01] transition-all duration-300 group shadow-lg`}>
                                    <div className={`p-8 bg-gradient-to-br ${service.color} pb-10`}>
                                        <div className="w-16 h-16 rounded-xl bg-neutral-900/50 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10 shadow-lg group-hover:scale-111 transition-transform duration-300">
                                            <Icon size={32} className="text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-1 leading-tight whitespace-pre-line">{service.title}</h3>
                                        <p className={`text-sm font-medium ${service.accentColor} mb-4 uppercase tracking-wide`}>{service.subtitle}</p>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="p-8 pt-0 flex-grow flex flex-col justify-between -mt-6 relative z-10">
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                                                    <div className="mt-1 min-w-[16px] min-h-[16px] w-[16px] h-[16px] rounded-full bg-fv-accent/10 flex items-center justify-center">
                                                        <Check size={10} className="text-fv-accent" strokeWidth={3} />
                                                    </div>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="grid grid-cols-2 gap-3 mt-auto">
                                            <Link
                                                href={`/jugadores/${service.slug}`}
                                                className="w-full py-3 px-4 bg-transparent border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                                            >
                                                <Info size={16} />
                                                + Info
                                            </Link>
                                            <Link
                                                href="/contacto"
                                                className="w-full py-3 px-4 bg-fv-accent hover:bg-[#1fe078] text-black rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-[0_0_15px_rgba(34,220,118,0.2)] hover:shadow-[0_0_20px_rgba(34,220,118,0.4)]"
                                            >
                                                {service.buttonText}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-500 text-sm">
                            * Precio en MXN orientativo según tipo de cambio actual.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden bg-neutral-900 border-t border-neutral-800">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fv-accent/5 via-transparent to-transparent pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        ¿No sabes qué servicio es mejor para ti?
                    </h2>
                    <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
                        Agenda una llamada gratuita de 15 minutos y evaluaremos tu situación actual para recomendarte el plan de trabajo ideal.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 text-lg font-bold hover:bg-gray-200 transition-colors"
                    >
                        <Calendar size={20} />
                        Agendar Consultoría Gratuita
                    </Link>
                </div>
            </section>
        </div>
    );
}
