'use client';

import { createClient } from '@/utils/supabase/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';

export default function AuthButton() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();
    const supabase = createClient();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        getUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
        });

        return () => subscription.unsubscribe();
    }, []);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.refresh();
        router.push('/');
    };

    if (!user) {
        return (
            <Link
                href="/login"
                className="bg-fv-accent text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-green-400 transition-colors"
            >
                Acceso Alumnos
            </Link>
        );
    }

    return (
        <div className="flex items-center gap-4">
            <Link
                href="/dashboard"
                className="text-white font-bold text-sm hover:text-fv-accent transition-colors"
            >
                Mi Área
            </Link>
            <button
                onClick={handleSignOut}
                className="text-gray-400 text-sm hover:text-white transition-colors"
            >
                Salir
            </button>
        </div>
    );
}
