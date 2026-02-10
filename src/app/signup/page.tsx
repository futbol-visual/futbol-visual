'use client';

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Lock, Mail, Loader2, AlertCircle, UserPlus } from 'lucide-react';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const supabase = createClient();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setSuccessMessage(null);

        const { error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            setSuccessMessage("¡Cuenta creada con éxito! Por favor, revisa tu email para confirmar tu cuenta antes de iniciar sesión.");
            setEmail('');
            setPassword('');
        }
        setIsLoading(false);
    }

    return (
        <div className="min-h-screen bg-fv-primary flex flex-col justify-center items-center p-4">
            <Link href="/" className="text-3xl font-bold text-white tracking-tighter mb-8">
                FÚTBOL <span className="text-fv-accent">VISUAL</span>
            </Link>

            <div className="bg-fv-secondary p-8 rounded-2xl border border-neutral-800 w-full max-w-md shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-2 text-center">Crear Cuenta</h2>
                <p className="text-gray-400 text-sm text-center mb-6">Únete a la comunidad de entrenadores.</p>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded-lg text-sm mb-6 flex items-center gap-2">
                        <AlertCircle size={16} />
                        {error}
                    </div>
                )}

                {successMessage && (
                    <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-3 rounded-lg text-sm mb-6">
                        {successMessage}
                    </div>
                )}

                <form onSubmit={handleSignUp} className="space-y-4">
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
                                minLength={6}
                            />
                            <Lock className="absolute left-3 top-3.5 text-gray-500" size={18} />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Mínimo 6 caracteres.</p>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : <>Registrarse <UserPlus size={18} /></>}
                    </button>
                </form>

                <div className="mt-6 text-center border-t border-neutral-800 pt-6">
                    <p className="text-sm text-gray-500">
                        ¿Ya tienes cuenta?{' '}
                        <Link href="/login" className="text-fv-accent hover:underline font-bold">
                            Inicia Sesión
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
