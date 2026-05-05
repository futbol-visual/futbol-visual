import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Target, Calendar as CalendarIcon, FileText, Video, ExternalLink, Activity, Clock, PieChart, Info, CheckCircle2, Quote } from 'lucide-react';
import Link from 'next/link';
import AvailabilityForm from './AvailabilityForm';

// Dynamic import for radar
const DevelopmentRadar = dynamic(() => import('@/components/dashboard/DevelopmentRadar'), { ssr: false });

export const metadata = {
    title: 'Mi Mentoría - Fútbol Visual',
    description: 'Panel de control exclusivo para alumnos de mentoría.',
};

export default async function MentorshipDashboard({
    searchParams,
}: {
    searchParams: { tab?: string }
}) {
    const supabase = createClient();
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
        redirect('/login');
    }

    // 1. Fetch or create Mentorship Profile
    let { data: profile } = await supabase.from('mentorship_profiles').select('*').eq('user_id', user.id).single();
    if (!profile) {
        const { data: newProfile, error } = await supabase.from('mentorship_profiles').insert([{ user_id: user.id }]).select().single();
        if (!error) profile = newProfile;
    }

    // 2. Fetch Sessions
    const { data: sessions } = await supabase.from('mentorship_sessions').select('*').eq('user_id', user.id).order('session_date', { ascending: false });

    // 3. Fetch Files
    const { data: files } = await supabase.from('mentorship_files').select('*').eq('user_id', user.id).order('created_at', { ascending: false });

    // 4. Fetch Availabilities
    const { data: availabilities } = await supabase.from('mentorship_availabilities').select('*').eq('user_id', user.id).order('day_of_week').order('start_time');

    const tab = searchParams.tab || 'resumen';

    return (
        <div className="min-h-full bg-fv-primary p-8">
            <div className="max-w-6xl mx-auto">
                
                {/* CRM Header */}
                <div className="flex justify-between items-end border-b border-neutral-800 pb-6 mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                            Panel de Mentoría
                        </h1>
                        <p className="text-gray-400 mt-2 text-sm">Espacio de seguimiento y evolución técnica personalizada.</p>
                    </div>
                </div>

                {/* Tabs Navigation now with 4 options */}
                <div className="flex flex-wrap gap-2 mb-8 bg-neutral-900/50 p-1.5 rounded-xl w-max border border-neutral-800">
                    <Link href="/dashboard/mentoria?tab=resumen" className={`px-5 py-2 rounded-lg text-sm font-bold transition-colors ${tab === 'resumen' ? 'bg-fv-accent text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-neutral-800'}`}>
                        Resumen
                    </Link>
                    <Link href="/dashboard/mentoria?tab=areas" className={`px-5 py-2 rounded-lg text-sm font-bold transition-colors ${tab === 'areas' ? 'bg-fv-accent text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-neutral-800'}`}>
                        Áreas de Desarrollo
                    </Link>
                    <Link href="/dashboard/mentoria?tab=sesiones" className={`px-5 py-2 rounded-lg text-sm font-bold transition-colors ${tab === 'sesiones' ? 'bg-fv-accent text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-neutral-800'}`}>
                        Sesiones
                    </Link>
                    <Link href="/dashboard/mentoria?tab=recursos" className={`px-5 py-2 rounded-lg text-sm font-bold transition-colors ${tab === 'recursos' ? 'bg-fv-accent text-black shadow-lg' : 'text-gray-400 hover:text-white hover:bg-neutral-800'}`}>
                        Recursos
                    </Link>
                </div>

                {/* Main Tab Content */}
                <div className="bg-fv-secondary border border-neutral-800 rounded-2xl overflow-hidden min-h-[500px]">
                    
                    {/* AREAS DE DESARROLLO TAB */}
                    {tab === 'areas' && (
                        <div className="p-8">
                            <div className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-6">
                                <div>
                                    <h2 className="text-xl font-bold text-white flex items-center gap-3">
                                        <PieChart className="text-fv-accent" size={24} /> Radar de Capacidades
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1">Niveles de competencia basados en tu desempeño detectado.</p>
                                </div>
                                <Info className="text-gray-600" size={20} />
                            </div>
                            
                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="w-full lg:w-1/2">
                                    <DevelopmentRadar />
                                </div>
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="bg-neutral-900/50 rounded-2xl p-6 border border-white/5">
                                        <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-widest">Leyenda de Puntuación</h3>
                                        <div className="space-y-4 text-xs font-bold uppercase tracking-wider">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 rounded-full bg-fv-accent"></div>
                                                <span className="text-gray-300">Fortaleza (80-100)</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                                <span className="text-gray-300">En Desarrollo (50-79)</span>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                                <span className="text-gray-300">A mejorar (0-49)</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-neutral-900/50 rounded-2xl p-6 border border-white/5">
                                        <h3 className="text-white font-bold text-sm mb-2 uppercase tracking-widest">Análisis del Mentor</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed italic">
                                            "Tu conocimiento táctico está en un nivel de élite. Debemos enfocarnos ahora en tu imagen personal y networking para subir al siguiente escalafón profesional."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* RESUMEN TAB */}
                    {tab === 'resumen' && (
                        <div className="p-8">
                            <h2 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4 text-center lg:text-left">Evolución Estratégica</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Next Call Widget */}
                                <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-fv-accent/10 flex items-center justify-center shrink-0">
                                        <CalendarIcon className="text-fv-accent" size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Próxima Llamada</p>
                                        {profile?.next_call_date ? (
                                            <p className="text-lg font-bold text-white">
                                                {new Date(profile.next_call_date).toLocaleDateString('es-ES', { weekday: 'short', day: 'numeric', month: 'short' })} - {new Date(profile.next_call_date).toLocaleTimeString('es-ES', { hour: '2-digit', minute:'2-digit' })}
                                            </p>
                                        ) : (
                                            <p className="text-gray-500 italic">Por definir con el instructor.</p>
                                        )}
                                    </div>
                                </div>
                                {/* Sessions Counter */}
                                <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-fv-accent/10 flex items-center justify-center shrink-0">
                                        <Target className="text-fv-accent" size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Llamadas Realizadas</p>
                                        <div className="flex items-center justify-between">
                                            <p className="text-2xl font-black text-fv-accent">{profile?.completed_calls || 0}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">Objetivos Definidos</h2>
                            <div className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800">
                                {profile?.goals ? (
                                    <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                                        {profile.goals}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 italic">
                                        Todavía no hemos definido tus metas. Lo trataremos en nuestra primera sesión.
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* SESIONES TAB */}
                    {tab === 'sesiones' && (
                        <div>
                            <div className="border-b border-neutral-800 p-8">
                                <h2 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">Histórico de Sesiones</h2>
                                {sessions && sessions.length > 0 ? (
                                    <div className="space-y-6">
                                        {sessions.map((session, index) => (
                                            <div key={session.id} className="bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden relative group hover:border-neutral-700 transition-colors">
                                                <div className="absolute top-0 left-0 w-1 h-full bg-fv-accent/50 group-hover:bg-fv-accent transition-colors"></div>
                                                <div className="p-6">
                                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 border-b border-neutral-800 pb-4 gap-4">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-fv-accent/10 flex items-center justify-center">
                                                                <Activity size={20} className="text-fv-accent" />
                                                            </div>
                                                            <div>
                                                                <h3 className="font-bold text-white">Reporte de Sesión</h3>
                                                                <p className="text-xs text-gray-400 capitalize">{new Date(session.session_date).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                                            </div>
                                                        </div>
                                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest border border-green-500/20 w-max">
                                                            <CheckCircle2 size={12} /> Completada
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Feedback del Mentor</h4>
                                                        <div className="bg-black/30 rounded-xl p-5 border border-white/5 relative">
                                                            <Quote size={40} className="absolute top-2 right-2 text-white/5" />
                                                            <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap relative z-10">{session.summary}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 italic p-4 bg-neutral-900/50 rounded-lg">No hay sesiones registradas.</p>
                                )}
                            </div>

                            <div className="p-8 bg-neutral-900/20">
                                <h2 className="text-xl font-bold text-white mb-2">Tu Disponibilidad</h2>
                                <p className="text-sm text-gray-400 mb-6 border-b border-neutral-800 pb-4">Indícame tus franjas preferidas para agendar llamadas.</p>
                                <AvailabilityForm initialAvailabilities={availabilities || []} />
                            </div>
                        </div>
                    )}

                    {/* RECURSOS TAB */}
                    {tab === 'recursos' && (
                        <div className="p-8">
                            <h2 className="text-xl font-bold text-white mb-6 border-b border-neutral-800 pb-4">Material de Apoyo</h2>
                            {files && files.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {files.map((file) => {
                                        const isVideo = file.url.includes('youtube') || file.url.includes('youtu.be') || file.url.includes('vimeo') || file.url.includes('bunny');
                                        
                                        // Funcioón para convertir URLs normales a URLs de embed
                                        let embedUrl = file.url;
                                        if (embedUrl.includes('youtube.com/watch?v=')) {
                                            embedUrl = embedUrl.replace('watch?v=', 'embed/');
                                            // Eliminar parámetros extra
                                            embedUrl = embedUrl.split('&')[0];
                                        } else if (embedUrl.includes('youtu.be/')) {
                                            embedUrl = embedUrl.replace('youtu.be/', 'youtube.com/embed/');
                                        } else if (embedUrl.includes('vimeo.com/') && !embedUrl.includes('player.vimeo.com')) {
                                            const parts = embedUrl.split('/');
                                            embedUrl = `https://player.vimeo.com/video/${parts[parts.length - 1]}`;
                                        }

                                        return (
                                            <div key={file.id} className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all shadow-lg group">
                                                {isVideo ? (
                                                    <div className="aspect-video bg-black relative">
                                                        <iframe src={embedUrl} className="w-full h-full absolute top-0 left-0" allowFullScreen></iframe>
                                                    </div>
                                                ) : (
                                                    <div className="aspect-video bg-neutral-800 flex flex-col items-center justify-center group-hover:bg-neutral-700 transition-colors">
                                                        <FileText size={48} className="text-fv-accent mb-4" />
                                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Documento Adjunto</span>
                                                    </div>
                                                )}
                                                <div className="p-6">
                                                    <h3 className="font-bold text-white mb-2 group-hover:text-fv-accent transition-colors">{file.title}</h3>
                                                    {file.description && <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-2">{file.description}</p>}
                                                    
                                                    {!isVideo && (
                                                        <a href={file.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full gap-2 bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors text-sm">
                                                            Descargar Material <ExternalLink size={16} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="text-center py-16 bg-neutral-900/30 rounded-2xl border border-neutral-800 border-dashed">
                                    <Video className="mx-auto h-12 w-12 text-neutral-600 mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-1">Sin material asignado</h3>
                                    <p className="text-gray-500 text-sm max-w-sm mx-auto">Tu mentor subirá vídeos, cortes tácticos o documentos en esta sección después de las sesiones.</p>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
