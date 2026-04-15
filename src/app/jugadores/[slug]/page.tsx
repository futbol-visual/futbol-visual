import { services } from '@/data/services';
import { ArrowLeft, Calendar, Check, Star, FileText, ImageIcon, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BunnyVideoPlayer from '@/components/BunnyVideoPlayer';

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
    const service = services.find((s) => s.slug === params.slug);

    if (!service) {
        notFound();
    }

    const Icon = service.icon;

    return (
        <div className="min-h-screen bg-black pt-20 pb-20">
            {/* Background elements */}
            <div className="fixed inset-0 bg-fv-primary z-0"></div>
            <div className={`fixed top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b ${service.color} blur-[120px] rounded-full pointer-events-none opacity-40`}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-8">
                    <Link href="/jugadores" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Volver a Área Jugadores
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    {/* Left Column: Info (2/3) */}
                    <div className="lg:col-span-2 space-y-8 animate-in slide-in-from-left-4 duration-500">
                        <div className="flex items-center gap-4 mb-2">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center border border-white/10 shrink-0`}>
                                <Icon size={32} className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight leading-tight whitespace-pre-line">{service.title}</h1>
                                <p className={`text-lg font-medium ${service.accentColor} uppercase tracking-wide`}>
                                    {service.subtitle}
                                </p>
                            </div>
                        </div>

                        {/* Image Section */}
                        {service.image && (
                            <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-fv-accent rounded-full"></span>
                                    Trabajo de Video Análisis en Japón
                                </h3>
                                <div className="relative aspect-video rounded-xl overflow-hidden border border-neutral-800 shadow-2xl group">
                                    <img
                                        src={service.image}
                                        alt={`Ejemplo ${service.title}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                            </div>
                        )}

                        <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
                            {service.longDescription}
                        </div>



                        {/* Video Section */}
                        {service.videoId && (
                            <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-fv-accent rounded-full"></span>
                                    Video de Ejemplo
                                </h3>
                                <BunnyVideoPlayer videoId={service.videoId} title={service.title} />
                            </div>
                        )}

                        {/* Custom Visual Panel for Group Training */}
                        {service.slug === 'entrenamiento-grupal' && !service.videoId && !service.image && (
                            <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/10 rounded-3xl p-8 border border-purple-500/30 backdrop-blur-sm relative overflow-hidden">
                                <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 blur-3xl rounded-full"></div>
                                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 flex items-center gap-2">
                                    <Star className="text-purple-400" size={24} />
                                    Dinámica, Ritmo y Competencia
                                </h3>
                                <p className="text-purple-200 relative z-10 text-lg">
                                    El trabajo grupal es el puente perfecto entre la técnica individual y la realidad de un partido. Eleva tu exigencia entrenando de manera interactiva.
                                </p>
                                <div className="mt-6 flex flex-col sm:flex-row gap-4 relative z-10">
                                    <div className="bg-black/40 rounded-xl p-4 flex-1 border border-purple-500/20 text-center shadow-lg">
                                        <span className="block text-3xl font-bold text-purple-400 mb-1">100%</span>
                                        <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Intensidad</span>
                                    </div>
                                    <div className="bg-black/40 rounded-xl p-4 flex-1 border border-purple-500/20 text-center shadow-lg">
                                        <span className="block text-3xl font-bold text-fv-accent mb-1">4-5</span>
                                        <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Jugadores Max</span>
                                    </div>
                                    <div className="bg-black/40 rounded-xl p-4 flex-1 border border-purple-500/20 text-center shadow-lg">
                                        <span className="block text-2xl font-bold text-white mb-2 mt-1"><Check size={28} className="mx-auto" /></span>
                                        <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Táctica Real</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Sample Reports Section */}
                        {service.sampleReports && service.sampleReports.length > 0 && (
                            <div className="bg-neutral-900/50 rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-fv-accent rounded-full"></span>
                                    Informes de Ejemplo
                                </h3>
                                <div className="grid grid-cols-1 gap-4">
                                    {service.sampleReports.map((report, index) => (
                                        <div key={index} className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 rounded-2xl p-6 border border-white/10">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center border border-red-500/30 text-red-500 shrink-0">
                                                    <FileText size={24} />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-bold">{report.title}</h4>
                                                    <p className="text-sm text-gray-400">Descarga un ejemplo real</p>
                                                </div>
                                            </div>
                                            <a
                                                href={report.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-shrink-0 px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-lg w-full md:w-auto justify-center"
                                            >
                                                Ver PDF
                                                <ArrowLeft size={16} className="rotate-[135deg]" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column: Pricing (1/3) - Sticky */}
                    <div className="lg:col-span-1 lg:sticky lg:top-24 animate-in slide-in-from-right-4 duration-500 delay-100">
                        <div className={`bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl relative`}>
                            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color.replace('from-', '').replace('to-', '').split(' ')[0]} to-transparent`}></div>

                            <div className="p-8">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-white rounded-full"></span>
                                    Planes y Precios
                                </h3>

                                <div className="space-y-4 mb-8">
                                    {service.pricing.map((option, idx) => (
                                        <div key={idx} className="bg-neutral-800/50 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-gray-300 font-medium text-sm">{option.label}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-2xl font-bold text-fv-accent">{option.price}</span>
                                                <span className="text-xs text-gray-500">{option.priceMXN}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-xs text-gray-500 mb-6 text-center">
                                    * Los precios en MXN son orientativos.
                                </p>

                                <div className="space-y-3 mb-8">
                                    <Link
                                        href="/contacto"
                                        className={`w-full py-4 bg-white hover:bg-gray-200 text-black text-lg font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg transform hover:scale-[1.02]`}
                                    >
                                        <Calendar size={20} />
                                        {service.buttonText}
                                    </Link>

                                    <a
                                        href="https://wa.me/525666677912"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] text-lg font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border border-[#25D366]/30"
                                    >
                                        <MessageCircle size={20} />
                                        Contactar por WhatsApp
                                    </a>
                                </div>

                                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
                                    <Check size={12} className="text-green-500" />
                                    <span>Garantía de satisfacción profesional</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
