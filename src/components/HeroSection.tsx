import Link from 'next/link';
import { ArrowRight, BookOpen, Video, Users, CheckCircle } from 'lucide-react';

export default function HeroSection() {
    return (
        <div className="relative overflow-hidden bg-fv-primary pb-16 pt-16 sm:pb-24 lg:pb-32">
            {/* Background decoration with pulse animation */}
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-full h-[500px] bg-fv-accent/20 blur-[120px] rounded-full opacity-30 pointer-events-none animate-pulse"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-20 flex flex-col">
                    
                    {/* Right column (Visual & Functional Links) */}
                    <div className="relative lg:col-span-6 xl:col-span-5 xl:col-start-8 animate-in fade-in zoom-in duration-1000 delay-200 flex flex-col justify-center order-1 lg:order-2 mt-12 lg:mt-0">
                        {/* Decorative background bloc */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-fv-accent/10 to-blue-600/10 rounded-[2.5rem] blur-xl opacity-50"></div>
                        
                        <div className="relative z-10 flex flex-col gap-4 w-full">
                            {/* Card 1: Cursos */}
                            <Link href="/cursos" className="group rounded-3xl bg-neutral-900 border border-neutral-800 p-6 hover:border-fv-accent/50 hover:bg-neutral-800/80 transition-all duration-300 flex items-center gap-6 shadow-xl hover:shadow-[0_10px_30px_rgba(34,220,118,0.15)] hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-gray-400 group-hover:bg-fv-accent/20 group-hover:text-fv-accent transition-colors flex-shrink-0">
                                    <BookOpen size={28} />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-white font-bold text-xl group-hover:text-fv-accent transition-colors">Cursos Profesionales</h3>
                                    <p className="text-gray-400 text-sm mt-1">Asegura tu constante evolución como entrenador.</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-500 group-hover:bg-fv-accent group-hover:text-black group-hover:border-fv-accent transition-all flex-shrink-0">
                                    <ArrowRight size={20} />
                                </div>
                            </Link>

                            {/* Card 2: Packs */}
                            <Link href="/packs" className="group rounded-3xl bg-neutral-900 border border-neutral-800 p-6 hover:border-fv-accent/50 hover:bg-neutral-800/80 transition-all duration-300 flex items-center gap-6 shadow-xl hover:shadow-[0_10px_30px_rgba(34,220,118,0.15)] hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-gray-400 group-hover:bg-fv-accent/20 group-hover:text-fv-accent transition-colors flex-shrink-0">
                                    <Video size={28} />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-white font-bold text-xl group-hover:text-fv-accent transition-colors">Packs de Video</h3>
                                    <p className="text-gray-400 text-sm mt-1">Colecciones tácticas para entender y enseñar mejor el juego.</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-500 group-hover:bg-fv-accent group-hover:text-black group-hover:border-fv-accent transition-all flex-shrink-0">
                                    <ArrowRight size={20} />
                                </div>
                            </Link>

                            {/* Card 3: Mentoría */}
                            <Link href="/mentoria" className="group rounded-3xl bg-neutral-900 border border-neutral-800 p-6 hover:border-blue-500/50 hover:bg-neutral-800/80 transition-all duration-300 flex items-center gap-6 shadow-xl hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1">
                                <div className="w-14 h-14 rounded-2xl bg-neutral-800 flex items-center justify-center text-gray-400 group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors flex-shrink-0">
                                    <Users size={28} />
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors">Mentoría Élite</h3>
                                    <p className="text-gray-400 text-sm mt-1">Acompañamiento privado para impulsar tus resultados diarios.</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-500 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all flex-shrink-0">
                                    <ArrowRight size={20} />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Left Column (Text) */}
                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-6 lg:max-w-none lg:pt-20 lg:pb-12 xl:col-span-6 animate-in fade-in slide-in-from-bottom-4 duration-700 order-2 lg:order-1 pt-10">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[4rem] mb-6 leading-tight">
                            Eleva tu nivel como <br className="hidden lg:block"/>
                            <span className="text-fv-accent">Entrenador de Fútbol</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-xl">
                            La primera academia online basada en el aprendizaje visual. Domina la táctica con análisis de video, ejercicios reales y formación específica por posición.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4">
                            <Link
                                href="/cursos"
                                className="rounded-full bg-fv-accent px-8 py-4 text-base font-bold text-black shadow-[0_0_20px_rgba(34,220,118,0.3)] hover:shadow-[0_0_30px_rgba(34,220,118,0.5)] hover:bg-[#1fe078] transition-all transform hover:scale-105 active:scale-95 duration-200"
                            >
                                Empezar Ahora
                            </Link>
                        </div>

                        <div className="mt-12 pt-10 border-t border-neutral-800 flex flex-col sm:flex-row flex-wrap gap-x-8 gap-y-4 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-fv-accent" size={18} />
                                <span>Micro-conceptos Tácticos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-fv-accent" size={18} />
                                <span>Tareas Listas para Entrenar</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="text-fv-accent" size={18} />
                                <span>100% Online y Visual</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
