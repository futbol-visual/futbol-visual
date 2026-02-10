'use client';

import { useState } from 'react';
import { packsData } from '@/data/packs';
import Link from 'next/link';
import { Play, CheckCircle, Lock, ArrowLeft, Menu } from 'lucide-react';
import BunnyVideoPlayer from '@/components/BunnyVideoPlayer';

export default function PackViewer({ params }: { params: { slug: string } }) {
    const slug = params.slug as keyof typeof packsData;
    const pack = packsData[slug];
    const [currentVideoId, setCurrentVideoId] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    if (!pack) {
        return (
            <div className="min-h-screen bg-fv-primary flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-3xl font-bold mb-4">Pack no encontrado</h1>
                <Link href="/dashboard" className="text-fv-accent hover:underline">Volver al Dashboard</Link>
            </div>
        );
    }

    const currentVideo = pack.videos.find(v => v.id === currentVideoId) || pack.videos[0];

    return (
        <div className="flex h-screen bg-neutral-900 overflow-hidden text-white font-sans">
            {/* Sidebar List */}
            <div
                className={`${isSidebarOpen ? 'w-80' : 'w-0'} bg-fv-secondary border-r border-neutral-800 transition-all duration-300 flex flex-col absolute md:relative z-20 h-full`}
            >
                <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                    <h2 className="font-bold text-sm truncate pr-2">{pack.title}</h2>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-400">
                        <ArrowLeft size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto custom-scrollbar">
                    {pack.videos.map((video) => (
                        <button
                            key={video.id}
                            onClick={() => setCurrentVideoId(video.id)}
                            className={`w-full flex items-start p-4 border-b border-neutral-800 hover:bg-neutral-800 transition-colors text-left group ${currentVideoId === video.id ? 'bg-fv-accent/10 border-l-4 border-l-fv-accent' : 'border-l-4 border-l-transparent'}`}
                        >
                            <span className="text-xs font-mono text-gray-500 mr-3 mt-1 w-6">{String(video.id).padStart(2, '0')}</span>
                            <div>
                                <p className={`text-sm font-medium ${currentVideoId === video.id ? 'text-fv-accent' : 'text-gray-300 group-hover:text-white'}`}>
                                    {video.title}
                                </p>
                                <p className="text-xs text-gray-500 mt-1">{video.duration}</p>
                            </div>
                            {/* Simulated "Watched" status logic could go here */}
                            {/* <CheckCircle size={14} className="ml-auto text-fv-accent" /> */}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col relative h-full">
                {/* Top Bar */}
                <div className="bg-fv-primary border-b border-neutral-800 px-4 py-3 flex items-center gap-4">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 hover:bg-neutral-800 rounded-lg transition-colors text-gray-400 hover:text-white"
                    >
                        <Menu size={20} />
                    </button>
                    <Link href="/dashboard" className="text-sm text-gray-400 hover:text-white flex items-center gap-1">
                        <ArrowLeft size={16} /> Volver
                    </Link>
                    <h1 className="text-sm font-bold truncate hidden md:block ml-4">
                        {currentVideo.title}
                    </h1>
                </div>

                {/* Video Player Area */}
                <div className="flex-1 bg-black flex items-center justify-center p-4 md:p-8 overflow-y-auto">
                    <div className="w-full max-w-4xl aspect-video bg-neutral-900 rounded-xl overflow-hidden shadow-2xl relative group">
                        {currentVideo.bunnyVideoId ? (
                            <BunnyVideoPlayer videoId={currentVideo.bunnyVideoId} title={currentVideo.title} />
                        ) : (
                            <video
                                key={currentVideo.url}
                                controls
                                className="w-full h-full object-contain"
                                poster="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=3540&auto=format&fit=crop"
                            >
                                <source src={currentVideo.url} type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
