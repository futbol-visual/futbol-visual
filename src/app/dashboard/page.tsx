import Link from 'next/link';
import { PlayCircle, Download, Calendar } from 'lucide-react';
import PurchaseSuccessModal from '@/components/PurchaseSuccessModal';

export const metadata = {
    title: 'Mi Área - Fútbol Visual',
    description: 'Panel de control del estudiante.',
};

export default function DashboardPage() {
    return (
        <div className="bg-fv-primary min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <PurchaseSuccessModal />
                <h1 className="text-3xl font-bold text-white mb-8">Hola, Entrenador <span className="text-fv-accent">.</span></h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Area - My Courses */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-fv-secondary rounded-2xl p-6 border border-neutral-800">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <PlayCircle className="text-fv-accent" /> Continuar Aprendiendo
                            </h2>

                            <div className="bg-neutral-900 rounded-xl p-4 flex gap-4 items-center">
                                <div className="w-32 h-20 bg-neutral-800 rounded-lg bg-cover bg-center flex-shrink-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=3693&auto=format&fit=crop')" }}></div>
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-sm mb-1">Mediocentros: El Motor del Juego</h3>
                                    <div className="w-full bg-neutral-800 rounded-full h-2 mb-2">
                                        <div className="bg-fv-accent h-2 rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-400">45% completado</p>
                                </div>
                                <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-fv-accent transition-colors">
                                    Reanudar
                                </button>
                            </div>
                        </div>

                        <div className="bg-fv-secondary rounded-2xl p-6 border border-neutral-800">
                            <h2 className="text-xl font-bold text-white mb-6">Mis Cursos y Packs</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Link to Laterales Pack */}
                                <Link href="/dashboard/pack/laterales" className="group relative aspect-video bg-neutral-800 rounded-xl overflow-hidden cursor-pointer block">
                                    <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517466787929-bc90951d6dbb?auto=format&fit=crop&w=800')" }}></div>
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-12 h-12 bg-fv-accent rounded-full flex items-center justify-center text-black">
                                            <PlayCircle fill="black" />
                                        </div>
                                    </div>
                                    <div className="absolute bottom-3 left-3">
                                        <p className="text-white font-bold text-sm">Pack Laterales (30 Clips)</p>
                                    </div>
                                </Link>

                                {/* Placeholder for other courses */}
                                {[1, 2].map((_, i) => (
                                    <div key={i} className="group relative aspect-video bg-neutral-800 rounded-xl overflow-hidden cursor-pointer">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-12 h-12 bg-fv-accent rounded-full flex items-center justify-center text-black">
                                                <PlayCircle fill="black" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-3 left-3">
                                            <p className="text-white font-bold text-sm">Curso #{i + 1}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-fv-secondary rounded-2xl p-6 border border-neutral-800">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Download className="text-fv-accent" /> Descargas Recientes
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-between text-sm text-gray-400 hover:text-white cursor-pointer transition-colors p-2 hover:bg-white/5 rounded-lg">
                                    <span>Microciclo Tipo.pdf</span>
                                    <Download size={14} />
                                </li>
                                <li className="flex items-center justify-between text-sm text-gray-400 hover:text-white cursor-pointer transition-colors p-2 hover:bg-white/5 rounded-lg">
                                    <span>Plantilla Scouting.xlsx</span>
                                    <Download size={14} />
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-fv-accent/20 to-fv-secondary rounded-2xl p-6 border border-fv-accent/20">
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Calendar className="text-fv-accent" /> Próximo Live
                            </h2>
                            <p className="text-sm text-gray-300 mb-4">
                                Análisis en vivo de la Final de Champions.
                            </p>
                            <div className="bg-black/40 rounded-lg p-3 text-center mb-4">
                                <p className="text-2xl font-bold text-white">10 JUN</p>
                                <p className="text-xs text-gray-400">20:00 CET</p>
                            </div>
                            <button disabled className="w-full bg-white/10 text-white py-2 rounded-lg text-sm font-bold cursor-not-allowed">
                                Solo Miembros PRO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
