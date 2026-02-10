'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { X, CheckCircle, PlayCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PurchaseSuccessModal() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (searchParams.get('success') === 'true') {
            setIsOpen(true);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }, [searchParams]);

    const handleClose = () => {
        setIsOpen(false);
        // Remove the query param cleanly
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.delete('success');
        router.replace(`/dashboard?${newParams.toString()}`, { scroll: false });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-fv-secondary border border-fv-accent/20 rounded-2xl max-w-md w-full p-8 shadow-2xl relative animate-in fade-in zoom-in duration-300">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="text-center">
                    <div className="w-16 h-16 bg-fv-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="text-fv-accent w-8 h-8" />
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">¡Compra Completada!</h2>
                    <p className="text-gray-300 mb-8">
                        Gracias por confiar en Fútbol Visual. Tu contenido ya está desbloqueado y listo para que lo disfrutes.
                    </p>

                    <button
                        onClick={handleClose}
                        className="w-full bg-fv-accent text-black font-bold py-3 rounded-xl hover:bg-white transition-colors flex items-center justify-center gap-2"
                    >
                        <PlayCircle size={20} />
                        Empezar a Aprender
                    </button>
                </div>
            </div>
        </div>
    );
}
