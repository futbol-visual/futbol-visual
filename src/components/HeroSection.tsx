import Link from 'next/link';
import { useTranslation } from '@/context/i18n-context';

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <div className="relative overflow-hidden bg-fv-primary pb-16 pt-16 sm:pb-24 lg:pb-32">
            {/* Background decoration with pulse animation */}
            <div className="absolute top-0 transform -translate-x-1/2 left-1/2 w-full h-[500px] bg-fv-accent/20 blur-[120px] rounded-full opacity-30 pointer-events-none animate-pulse"></div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
                    <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-20 xl:col-span-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6 leading-tight whitespace-pre-line">
                            {t('hero.title')}
                        </h1>
                        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                            {t('hero.subtitle')}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                            <Link
                                href="/cursos"
                                className="rounded-full bg-fv-accent px-8 py-3.5 text-base font-bold text-black shadow-[0_0_20px_rgba(34,220,118,0.3)] hover:shadow-[0_0_30px_rgba(34,220,118,0.5)] hover:bg-[#1fe078] transition-all transform hover:scale-105 active:scale-95 duration-200"
                            >
                                {t('hero.cta_courses')}
                            </Link>
                            <Link
                                href="/packs"
                                className="rounded-full bg-white/5 px-8 py-3.5 text-base font-bold text-white hover:bg-white/10 border border-white/10 transition-all backdrop-blur-sm hover:border-fv-accent/30"
                            >
                                {t('hero.cta_packs')}
                            </Link>
                        </div>

                        <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap items-center gap-x-8 gap-y-4 text-gray-400 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-fv-accent"></span>
                                <span>{t('hero.badge_video')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-fv-accent"></span>
                                <span>{t('hero.badge_exercises')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="flex h-2 w-2 rounded-full bg-fv-accent"></span>
                                <span>{t('hero.badge_online')}</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6 animate-in fade-in zoom-in duration-1000 delay-200">
                        <div className="relative rounded-2xl bg-neutral-900/50 p-2 border border-white/10 backdrop-blur-md shadow-2xl skew-y-1 transform transition-transform hover:skew-y-0 duration-500">
                            {/* Placeholder for the user provided image or a generic tactical board representation */}
                            <div className="aspect-[4/3] bg-neutral-900 rounded-xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=3540&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                <div className="absolute bottom-6 left-6 right-6 z-10">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-fv-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-fv-accent/30">
                                            <div className="w-3 h-3 bg-fv-accent rounded-full animate-pulse"></div>
                                        </div>
                                        <span className="text-fv-accent font-mono text-xs uppercase tracking-widest">{t('hero.live_analysis')}</span>
                                    </div>
                                    <p className="text-white font-bold text-2xl leading-tight">{t('hero.live_analysis_sub')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
