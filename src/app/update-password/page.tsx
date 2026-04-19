'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Lock, Loader2, AlertCircle, CheckCircle } from 'lucide-react';

export default function UpdatePasswordPage() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const router = useRouter();
    const supabase = createClient();

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            setMessage({ type: 'error', text: "Las contraseñas no coinciden." });
            return;
        }

        setIsLoading(true);
        setMessage(null);

        const { error } = await supabase.auth.updateUser({
            password: password
        });

        if (error) {
            setMessage({ type: 'error', text: "Hubo un error al actualizar la contraseña. Inténtalo de nuevo." });
            setIsLoading(false);
        } else {
            setMessage({ type: 'success', text: "¡Contraseña actualizada con éxito! Redirigiendo..." });
            setTimeout(() => {
                router.push('/dashboard');
                router.refresh();
            }, 2000);
        }
    };

    return (
        <div className="min-h-screen bg-fv-primary flex flex-col justify-center items-center p-4">
            <Link href="/" className="text-3xl font-bold text-white tracking-tighter mb-8">
                FÚTBOL <span className="text-fv-accent">VISUAL</span>
            </Link>

            <div className="bg-fv-secondary p-8 rounded-2xl border border-neutral-800 w-full max-w-md shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-2 text-center">Nueva Contraseña</h2>
                <p className="text-gray-400 text-sm text-center mb-6">Elige una contraseña segura que puedas recordar.</p>

                {message && (
                    <div className={`p-4 rounded-lg text-sm mb-6 flex items-start gap-3 ${message.type === 'success' ? 'bg-fv-accent/10 border border-fv-accent/20 text-fv-accent' : 'bg-red-500/10 border border-red-500/20 text-red-500'}`}>
                        {message.type === 'success' ? <CheckCircle size={18} className="shrink-0 mt-0.5" /> : <AlertCircle size={18} className="shrink-0 mt-0.5" />}
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleUpdate} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Nueva Contraseña</label>
                        <div className="relative">
                            <input
                                type="password"
                                required
                                minLength={6}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-fv-accent focus:border-transparent outline-none pl-10"
                                placeholder="••••••••"
                            />
                            <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Confirmar Contraseña</label>
                        <div className="relative">
                            <input
                                type="password"
                                required
                                minLength={6}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-fv-accent focus:border-transparent outline-none pl-10"
                                placeholder="••••••••"
                            />
                            <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-fv-accent text-black font-bold py-3 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2 mt-2"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : "Guardar y Entrar"}
                    </button>
                </form>
            </div>
        </div>
    );
}
