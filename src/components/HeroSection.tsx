import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className="relative overflow-hidden bg-fv-primary pb-16 pt-16 sm:pb-24 lg:pb-32">
            {/* Background decoration */}
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-full h-[500px] bg-fv-accent/20 blur-[120px] rounded-full opacity-30 pointer-events-none"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-20 xl:col-span-6">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Eleva tu nivel como <br />
                            <span className="text-fv-accent">Entrenador de Fútbol</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-300 leading-8">
                            La primera academia online basada en el <span className="text-white font-bold">aprendizaje visual</span>.
                            Domina la táctica con análisis de video, ejercicios reales y formación específica por posición.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                            <Link
                                href="/cursos"
                                className="rounded-full bg-fv-accent px-8 py-3.5 text-base font-bold text-black shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400 transition-all transform hover:scale-105"
                            >
                                Ver Cursos Completos
                            </Link>
                            <Link
                                href="/packs"
                                className="rounded-full bg-white/10 px-8 py-3.5 text-base font-bold text-white hover:bg-white/20 border border-white/20 transition-all backdrop-blur-sm"
                            >
                                Packs por Posición
                            </Link>
                        </div>

                        <div className="mt-10 pt-10 border-t border-white/10 flex items-center gap-8 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-fv-accent"></div>
                                <span>Análisis de Video</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-fv-accent"></div>
                                <span>Ejercicios Reales</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-fv-accent"></div>
                                <span>100% Online</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                        <div className="relative rounded-2xl bg-fv-secondary/50 p-4 border border-white/10 backdrop-blur-md shadow-2xl">
                            {/* Placeholder for the user provided image or a generic tactical board representation */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-black rounded-xl border border-white/5 flex items-center justify-center overflow-hidden relative">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                                <div className="relative z-10 text-center p-6">
                                    <div className="w-16 h-16 bg-fv-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                    </div>
                                    <p className="text-white font-bold text-xl mb-1">Análisis Táctico en Vivo</p>
                                    <p className="text-gray-400 text-sm">Aprende viendo fútbol real</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
