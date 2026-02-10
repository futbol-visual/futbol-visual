'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Lock, Mail, Loader2, AlertCircle, LogIn } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const supabase = createClient();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError("Email o contraseña incorrectos.");
            setIsLoading(false);
        } else {
            router.push('/dashboard');
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen bg-fv-primary flex flex-col justify-center items-center p-4">
            <Link href="/" className="text-3xl font-bold text-white tracking-tighter mb-8">
                FÚTBOL <span className="text-fv-accent">VISUAL</span>
            </Link>

            <div className="bg-fv-secondary p-8 rounded-2xl border border-neutral-800 w-full max-w-md shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Bienvenido de nuevo</h2>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm mb-6 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-fv-accent focus:border-transparent outline-none pl-10"
                                placeholder="entrenador@ejemplo.com"
                            />
                            <Mail className="absolute left-3 top-3.5 text-gray-500" size={18} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Contraseña</label>
                        <div className="relative">
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-fv-accent focus:border-transparent outline-none pl-10"
                                placeholder="••••••••"
                            />
                            <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-fv-accent text-black font-bold py-3 rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : <>Iniciar Sesión <LogIn size={18} /></>}
                    </button>
                </form>

                <div className="mt-6 text-center border-t border-neutral-800 pt-6">
                    <p className="text-sm text-gray-500">
                        ¿No tienes cuenta?{' '}
                        <Link href="/signup" className="text-fv-accent hover:underline font-bold">
                            Regístrate gratis
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
