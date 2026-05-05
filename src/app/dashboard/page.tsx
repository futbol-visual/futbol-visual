import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import { 
    TrendingUp, 
    Target, 
    CheckCircle2, 
    Calendar, 
    ChevronRight, 
    Info,
    Quote
} from 'lucide-react';
import Link from 'next/link';

// Dynamically import the radar chart to avoid SSR issues
const DevelopmentRadar = dynamic(() => import('@/components/dashboard/DevelopmentRadar'), { ssr: false });

export default async function DashboardPage() {
    const supabase = createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
        redirect('/login');
    }

    // Fetch mentorship profile
    const { data: profile } = await supabase
        .from('mentorship_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

    // Fetch latest resources
    const { data: recentFiles } = await supabase
        .from('mentorship_files')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(3);

    const userName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Entrenador';

    // Map recent files to next steps or use defaults if none exist
    const nextSteps = recentFiles && recentFiles.length > 0 
        ? recentFiles.map((file, index) => ({
            title: `Revisar: ${file.title}`,
            category: file.url.includes('youtube') || file.url.includes('vimeo') ? 'Video de Análisis' : 'Material de Apoyo',
            status: index === 0 ? 'pending' : 'completed',
            color: index === 0 ? 'text-blue-500' : 'text-fv-accent',
            link: '/dashboard/mentoria?tab=recursos'
        }))
        : [
            { 
                title: 'Agenda tu primera sesión con el mentor', 
                category: 'Onboarding',
                status: 'pending',
                color: 'text-amber-500',
                link: '/dashboard/mentoria?tab=sesiones'
            },
            { 
                title: 'Define tus objetivos principales', 
                category: 'Planificación',
                status: 'pending',
                color: 'text-blue-500',
                link: '/dashboard/mentoria?tab=resumen'
            }
        ];

    return (
        <div className="min-h-screen bg-[#020617] p-8 pb-20">
            <div className="max-w-5xl mx-auto space-y-8">
                
                {/* Progress Card - Simplified without Radar */}
                <div className="bg-gradient-to-br from-fv-accent/10 to-indigo-500/5 border border-white/5 rounded-[2.5rem] p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8">
                        <Info className="text-gray-500 cursor-help hover:text-gray-400 transition-colors" size={20} />
                    </div>
                    
                    <div className="max-w-md mx-auto text-center space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-fv-accent/10 border border-fv-accent/20 text-fv-accent text-[10px] font-bold uppercase tracking-widest">
                            Estado del Entrenador
                        </div>
                        <h2 className="text-4xl font-black text-white tracking-tighter">Tu evolución no se detiene.</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Has completado el <span className="font-bold text-white">45% de tus objetivos</span> este mes. Revisa tus áreas de desarrollo en la sección de mentoría.
                        </p>
                        <Link href="/dashboard/mentoria?tab=areas" className="inline-flex items-center gap-2 bg-white text-black font-black px-6 py-3 rounded-2xl hover:scale-105 transition-all shadow-xl text-xs uppercase tracking-tight">
                            Ver Radar de Habilidades <ChevronRight size={14} />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Where am I now? */}
                    <div className="group bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/[0.07] transition-all cursor-pointer">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
                                <TrendingUp className="text-indigo-400" size={24} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">¿Dónde estoy ahora?</h3>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">Estás por encima del 68% de entrenadores en nuestra plataforma.</p>
                        <button className="text-xs font-bold text-indigo-400 px-6 py-2.5 rounded-xl border border-indigo-500/20 hover:bg-indigo-500/10 transition-all">
                            Ver análisis completo
                        </button>
                    </div>

                    {/* Where do I want to be? */}
                    <div className="group bg-white/5 border border-white/5 rounded-3xl p-8 hover:bg-white/[0.07] transition-all cursor-pointer">
                        <div className="flex items-start justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-fv-accent/10 flex items-center justify-center">
                                <Target className="text-fv-accent" size={24} />
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">¿Dónde quiero estar en 3 meses?</h3>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">Tu objetivo: Ser un entrenador referente y vivir 100% de tu proyecto.</p>
                        <button className="text-xs font-bold text-fv-accent px-6 py-2.5 rounded-xl border border-fv-accent/20 hover:bg-fv-accent/10 transition-all">
                            Ver plan de acción
                        </button>
                    </div>
                </div>

                {/* Bottom Row: Next Steps & Session */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Next Steps Column */}
                    <div className="lg:col-span-2 space-y-6">
                        <h3 className="text-lg font-bold text-white uppercase tracking-widest px-2">Próximos Pasos</h3>
                        <div className="bg-white/5 border border-white/5 rounded-[2rem] p-4 divide-y divide-white/5">
                            {nextSteps.map((step, idx) => (
                                <Link href={step.link} key={idx} className="flex items-center gap-4 p-4 hover:bg-white/5 transition-all cursor-pointer group rounded-xl">
                                    <div className={`w-6 h-6 shrink-0 flex items-center justify-center ${step.color}`}>
                                        <CheckCircle2 size={24} strokeWidth={step.status === 'completed' ? 3 : 1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-white group-hover:text-fv-accent transition-colors">{step.title}</p>
                                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-0.5">{step.category}</p>
                                    </div>
                                    <ChevronRight size={16} className="text-gray-700 group-hover:text-gray-400 transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Next Session Column */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-white uppercase tracking-widest px-2">Próxima Sesión</h3>
                        <div className="bg-white/5 border border-white/5 rounded-[2rem] p-8 flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                    <Calendar className="text-indigo-400" size={24} />
                                </div>
                                <div>
                                    {profile?.next_call_date ? (
                                        <>
                                            <p className="text-lg font-black text-white">
                                                {new Date(profile.next_call_date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })},{' '}
                                                {new Date(profile.next_call_date).toLocaleTimeString('es-ES', { hour: '2-digit', minute:'2-digit' })}
                                            </p>
                                            <p className="text-xs text-gray-500 font-bold uppercase">Mentoría 1 a 1</p>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-lg font-black text-gray-400">Por definir</p>
                                            <p className="text-xs text-gray-500 font-bold uppercase">Mentoría 1 a 1</p>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="w-full h-px bg-white/5"></div>
                            <Link href="/dashboard/mentoria?tab=sesiones" className="w-full bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-2xl border border-white/10 transition-all text-sm text-center">
                                {profile?.next_call_date ? 'Preparar sesión' : 'Indicar disponibilidad'}
                            </Link>
                        </div>

                        {/* Motivational Quote */}
                        <div className="bg-gradient-to-br from-indigo-500/10 to-transparent border border-white/5 rounded-[2rem] p-8 relative overflow-hidden">
                            <Quote className="absolute -top-4 -right-4 text-white/5" size={80} />
                            <p className="text-sm text-gray-300 italic font-medium leading-relaxed relative z-10 text-center">
                                "Un buen entrenador mejora partidos. Un gran entrenador transforma vidas."
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
