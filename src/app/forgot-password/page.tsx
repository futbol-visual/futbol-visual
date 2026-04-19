'use client';

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';
import { Mail, Loader2, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
    const supabase = createClient();

    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/auth/callback`,
        });

        if (error) {
            setMessage({ type: 'error', text: "No hemos podido procesar tu solicitud. Verifica el email." });
            setIsLoading(false);
        } else {
            setMessage({ type: 'success', text: "¡Listo! Te hemos enviado un enlace seguro a tu correo para restablecer tu contraseña." });
            setIsLoading(false);
            setEmail('');
        }
    };

    return (
        <div className="min-h-screen bg-fv-primary flex flex-col justify-center items-center p-4">
            <Link href="/" className="text-3xl font-bold text-white tracking-tighter mb-8">
                FÚTBOL <span className="text-fv-accent">VISUAL</span>
            </Link>

            <div className="bg-fv-secondary p-8 rounded-2xl border border-neutral-800 w-full max-w-md shadow-2xl relative">
                <Link href="/login" className="absolute top-8 text-gray-500 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                </Link>
                
                <h2 className="text-2xl font-bold text-white mb-2 text-center">Recuperar Acceso</h2>
                <p className="text-gray-400 text-sm text-center mb-6">Ingresa tu correo y te enviaremos un enlace mágico para cambiar tu contraseña.</p>

                {message && (
                    <div className={`p-4 rounded-lg text-sm mb-6 flex items-start gap-3 ${message.type === 'success' ? 'bg-fv-accent/10 border border-fv-accent/20 text-fv-accent' : 'bg-red-500/10 border border-red-500/20 text-red-500'}`}>
                        {message.type === 'success' ? <CheckCircle size={18} className="shrink-0 mt-0.5" /> : <AlertCircle size={18} className="shrink-0 mt-0.5" />}
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleReset} className="space-y-4">
                    <div>
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

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : "Enviar enlace de acceso"}
                    </button>
                </form>
            </div>
        </div>
    );
}
