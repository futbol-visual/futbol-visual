'use client';

import { useState } from 'react';
import { Loader2, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface BuyButtonProps {
    slug: string;
    priceId: number; // For now passing simple amount, in real world this is Stripe Price ID or we calculate it
    title: string;
    className?: string; // Allow custom styling
    btnText?: string;
}

export default function BuyButton({ slug, priceId, title, className, btnText = "Comprar" }: BuyButtonProps) {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleBuy = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    slug,
                    priceId,
                    title
                }),
            });

            const data = await res.json();

            if (res.status === 401) {
                // Redirigir a login si no está logueado
                router.push(`/login?redirect=/cursos/${slug}`);
                return;
            }

            if (data.url) {
                window.location.href = data.url;
            } else {
                alert('Error initiating checkout: ' + (data.error || 'Unknown error'));
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            alert('Error connecting to server');
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleBuy}
            disabled={loading}
            className={className || "flex items-center justify-center rounded-lg bg-white px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-fv-accent"}
        >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <>{btnText} {!className?.includes('gap') && <ShoppingCart size={16} className="ml-2" />}</>}
        </button>
    );
}
