import { Suspense } from 'react';
import Link from 'next/link';
import { PlayCircle, Download, Calendar, ExternalLink } from 'lucide-react';
import PurchaseSuccessModal from '@/components/PurchaseSuccessModal';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { coursesData } from '@/data/courses';
import { packsData } from '@/data/packs';

export const metadata = {
    title: 'Mi Área - Fútbol Visual',
    description: 'Panel de control del estudiante.',
};

export default async function DashboardPage() {
    const supabase = createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
        redirect('/login');
    }

    // Fetch user purchases
    const { data: purchases, error: purchasesError } = await supabase
        .from('purchases')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'completed');

    const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Entrenador';

    // Combine courses and packs for display
    const allContent = { ...coursesData, ...packsData };
    const userPurchases = (purchases || []).map(p => ({
        ...p,
        details: allContent[p.product_slug as keyof typeof allContent]
    })).filter(p => p.details);

    return (
        <div className="bg-fv-primary min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Suspense fallback={null}>
                    <PurchaseSuccessModal />
                </Suspense>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Hola, <span className="text-fv-accent capitalize">{userName}</span>.</h1>
                        <p className="text-gray-400 mt-1">Bienvenido a tu panel de control profesional.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Area - My Courses */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Featured Course / Continue Learning - Mockup for now, could be dynamic later */}
                        <div className="bg-fv-secondary rounded-2xl p-6 border border-neutral-800">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <PlayCircle className="text-fv-accent" /> Continuar Aprendiendo
                            </h2>

                            <div className="bg-neutral-900 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center">
                                <div className="w-full md:w-32 h-20 bg-neutral-800 rounded-lg bg-cover bg-center flex-shrink-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=3693&auto=format&fit=crop')" }}></div>
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-sm mb-1">Mediocentros: El Motor del Juego</h3>
                                    <div className="w-full bg-neutral-800 rounded-full h-2 mb-2">
                                        <div className="bg-fv-accent h-2 rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                    <p className="text-xs text-gray-400">45% completado</p>
                                </div>
                                <button className="w-full md:w-auto bg-white text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-fv-accent transition-colors">
                                    Reanudar
                                </button>
                            </div>
                        </div>

                        <div className="bg-fv-secondary rounded-2xl p-6 border border-neutral-800">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-white">Mis Cursos y Packs</h2>
                                <span className="text-xs bg-fv-accent/10 text-fv-accent px-2 py-1 rounded-full border border-fv-accent/20">
                                    {userPurchases.length} Adquiridos
                                </span>
                            </div>

                            {userPurchases.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {userPurchases.map((purchase) => (
                                        <Link
                                            key={purchase.id}
                                            href={`/dashboard/${'videos' in purchase.details ? 'pack' : 'curso'}/${purchase.product_slug}`}
                                            className="group relative aspect-video bg-neutral-800 rounded-xl overflow-hidden cursor-pointer block border border-white/5 hover:border-fv-accent/30 transition-all shadow-lg"
                                        >
                                            <div
                                                className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-40 transition-opacity"
                                                style={{ backgroundImage: `url('${purchase.details.image || 'https://images.unsplash.com/photo-1517466787929-bc90951d6dbb?auto=format&fit=crop&w=800'}')` }}
                                            ></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent group-hover:from-black/80 transition-all"></div>
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                                                <div className="w-12 h-12 bg-fv-accent rounded-full flex items-center justify-center text-black shadow-xl">
                                                    <PlayCircle fill="black" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-3 left-3 right-3">
                                                <p className="text-white font-bold text-sm truncate">{purchase.details.title}</p>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                                                    {'videos' in purchase.details ? 'Pack' : 'Curso'} • Acceso Completo
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12 bg-neutral-900/50 rounded-xl border border-dashed border-neutral-800">
                                    <p className="text-gray-400 mb-4">Aún no tienes cursos o packs adquiridos.</p>
                                    <Link href="/" className="inline-flex items-center gap-2 text-fv-accent font-bold hover:underline">
                                        Explorar Catálogo <ExternalLink size={14} />
                                    </Link>
                                </div>
                            )}
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
