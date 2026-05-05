'use client';

import { packsData } from '@/data/packs';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, Play, Shield, Target, Users, LayoutList, Trophy, ArrowRight } from 'lucide-react';
import BuyButton from '@/components/BuyButton';

export default function PackDetailsPage({ params }: { params: { slug: string } }) {
    const slug = params.slug as keyof typeof packsData;
    const pack = packsData[slug] as any;

    if (!pack) {
        return (
            <div className="min-h-screen bg-fv-primary flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-3xl font-bold mb-4">Pack no encontrado</h1>
                <Link href="/packs" className="text-fv-accent hover:underline">Volver a los packs</Link>
            </div>
        );
    }

    return (
        <div className="bg-fv-primary min-h-screen pb-32 lg:pb-20">
            {/* Hero Background */}
            <div className="h-[500px] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${pack.image || 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=3693&auto=format&fit=crop'}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-fv-primary via-fv-primary/90 to-transparent"></div>
                <div className="absolute inset-0 bg-black/40"></div>
                
                {/* Content Overlay in Hero */}
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24">
                        <div className="max-w-3xl">
                            <span className="inline-block bg-fv-accent/10 border border-fv-accent/30 text-fv-accent px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-widest uppercase shadow-[0_0_15px_rgba(34,220,118,0.2)]">
                                Pack de Video
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                                {pack.title}
                            </h1>
                            {pack.subtitle && (
                                <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl border-l-4 border-fv-accent pl-4">
                                    {pack.subtitle}
                                </p>
                            )}
                            
                            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                <BuyButton
                                    slug={slug}
                                    priceId={pack.priceEUR}
                                    title={pack.title}
                                    className="px-8 py-4 rounded-xl bg-fv-accent text-black font-bold text-lg hover:bg-[#1fe078] hover:scale-105 transition-all shadow-[0_0_25px_rgba(34,220,118,0.3)] flex items-center justify-center gap-2 w-full sm:w-auto"
                                    btnText="Acceder al pack"
                                />
                                <div className="text-center sm:text-left w-full sm:w-auto bg-black/30 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/5">
                                    <span className="text-3xl font-extrabold text-white flex items-baseline gap-2">
                                        {pack.priceEUR}€ <span className="text-sm font-normal text-gray-400">/ {pack.priceMXN} MXN</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-2 space-y-20">
                        
                        {/* Bloque de Valor */}
                        {pack.valueBullets && (
                            <section className="pt-8">
                                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Target className="text-fv-accent" size={28} />
                                    ¿Por qué necesitas este pack?
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {pack.valueBullets.map((bullet: any, index: number) => (
                                        <div key={index} className="bg-fv-secondary/80 border border-neutral-800 rounded-2xl p-6 hover:border-fv-accent/30 transition-colors shadow-lg">
                                            <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                                                {index === 0 && <CheckCircle size={18} className="text-fv-accent" />}
                                                {index === 1 && <Shield size={18} className="text-blue-400" />}
                                                {index === 2 && <Users size={18} className="text-yellow-400" />}
                                                {bullet.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {bullet.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Contenido del Pack */}
                        {pack.contentSummary && (
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <LayoutList className="text-blue-400" size={28} />
                                    Contenido del pack
                                </h2>
                                <div className="bg-gradient-to-br from-neutral-900 to-fv-secondary border border-neutral-800 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                                    <div className="absolute -right-10 -top-10 opacity-5 pointer-events-none">
                                        <LayoutList size={200} />
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                                        <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20 shadow-inner">
                                            <Play size={36} className="text-blue-400 ml-1" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-4">
                                                {pack.contentSummary.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed text-lg">
                                                {pack.contentSummary.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Preview Section */}
                        {pack.previewVideo && (
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Play className="text-red-500" size={28} />
                                    Muestra Gratuita
                                </h2>
                                <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
                                    <div className="p-5 border-b border-neutral-800 flex justify-between items-center bg-black/40">
                                        <h3 className="text-white font-medium flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                            {pack.previewVideo.title}
                                        </h3>
                                        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full">Preview</span>
                                    </div>
                                    <div className="aspect-video w-full relative bg-black">
                                        <video 
                                            controls 
                                            className="w-full h-full object-cover"
                                            poster={pack.image}
                                        >
                                            <source src={pack.previewVideo.url} type="video/mp4" />
                                            Tu navegador no soporta el formato de video.
                                        </video>
                                    </div>
                                </div>
                            </section>
                        )}

                        {/* Resultado Final */}
                        {pack.results && (
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Trophy className="text-yellow-500" size={28} />
                                    Resultado Final
                                </h2>
                                <div className="bg-fv-secondary/50 border border-neutral-800 rounded-3xl p-8 lg:p-10">
                                    <h3 className="text-xl font-bold text-white mb-8">
                                        {pack.results.title}
                                    </h3>
                                    <div className="space-y-6">
                                        {pack.results.items.map((item: string, idx: number) => (
                                            <div key={idx} className="flex gap-4 items-start group">
                                                <div className="mt-1 bg-yellow-500/10 border border-yellow-500/20 p-2 rounded-xl text-yellow-500 flex-shrink-0 group-hover:scale-110 transition-transform">
                                                    <CheckCircle size={20} />
                                                </div>
                                                <p className="text-gray-300 text-lg leading-relaxed pt-1">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                    </div>

                    {/* Right Column: Sticky Purchase Box */}
                    <div className="relative hidden lg:block">
                        <div className="sticky top-28 bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl">
                            <div className="aspect-video rounded-xl overflow-hidden mb-8 relative border border-white/10">
                                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${pack.image}')` }}></div>
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="w-16 h-16 rounded-full bg-fv-accent/90 flex items-center justify-center text-black shadow-[0_0_30px_rgba(34,220,118,0.4)]">
                                        <Play size={24} className="ml-1" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mb-8 text-center border-b border-neutral-800 pb-8">
                                <p className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-3">Acceso Inmediato</p>
                                <div className="flex flex-col items-center justify-center gap-1">
                                    <span className="text-5xl font-extrabold text-white">{pack.priceEUR}€</span>
                                    <span className="text-gray-500 mt-1">/ {pack.priceMXN} MXN</span>
                                </div>
                            </div>

                            <BuyButton
                                slug={slug}
                                priceId={pack.priceEUR}
                                title={pack.title}
                                className="block w-full bg-fv-accent text-black text-center py-4 rounded-xl font-bold text-lg hover:bg-[#1fe078] hover:scale-105 transition-all shadow-[0_0_20px_rgba(34,220,118,0.2)] mb-5 flex items-center justify-center gap-2"
                                btnText="Comprar Pack"
                            />
                            
                            <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                                <Shield size={14} className="text-green-500" /> Pago seguro garantizado por Stripe
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 bg-neutral-900/95 backdrop-blur-md border-t border-neutral-800 p-4 lg:hidden z-50 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <div>
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-0.5">Acceso Total</span>
                    <span className="text-2xl font-bold text-white">{pack.priceEUR}€</span>
                </div>
                <BuyButton
                    slug={slug}
                    priceId={pack.priceEUR}
                    title={pack.title}
                    className="bg-fv-accent text-black px-8 py-3.5 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(34,220,118,0.3)]"
                    btnText="Comprar Pack"
                />
            </div>
        </div>
    );
}
