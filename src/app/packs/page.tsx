'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';

type Category = 'Todos' | 'Porteros' | 'Defensas' | 'Mediocentros' | 'Delanteros';

export default function PacksPage() {
    const [activeCategory, setActiveCategory] = useState<Category>('Todos');

    const categories: Category[] = ['Todos', 'Porteros', 'Defensas', 'Mediocentros', 'Delanteros'];

    const packs = [
        {
            title: "Entrenamiento de Porteros",
            description: "Fundamentos técnicos y tácticos para el guardameta moderno.",
            priceMXN: 979,
            priceEUR: 49,
            image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c",
            type: "pack" as const,
            slug: "porteros",
            category: "Porteros"
        },
        {
            title: "Laterales Ofensivos",
            description: "Cómo incorporarse al ataque, centros y balance defensivo.",
            priceMXN: 979,
            priceEUR: 49,
            image: "https://images.unsplash.com/photo-1517466787929-bc90951d6dbb",
            type: "pack" as const,
            slug: "laterales",
            category: "Defensas"
        },
        {
            title: "Centrales: Liderazgo y Colocación",
            description: "Defensa de área, anticipación y salida de balón.",
            priceMXN: 979,
            priceEUR: 49,
            image: "https://images.unsplash.com/photo-1544698310-74ea9d188d17",
            type: "pack" as const,
            slug: "centrales",
            category: "Defensas"
        },
        {
            title: "Mediocentros: El Motor",
            description: "Gestión del ritmo, perfiles y distribución.",
            priceMXN: 979,
            priceEUR: 49,
            image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
            type: "pack" as const,
            slug: "mediocentros",
            category: "Mediocentros"
        },
        {
            title: "Interiores y Mediapuntas",
            description: "Juego entre líneas, filtrar pases y llegada al área.",
            priceMXN: 979,
            priceEUR: 49,
            image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12",
            type: "pack" as const,
            slug: "interiores",
            category: "Mediocentros"
        },
        {
            title: "Extremos Desequilibrantes",
            description: "1vs1, regate y finalización desde banda.",
            priceMXN: 979,
            priceEUR: 49,
            image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d",
            type: "pack" as const,
            slug: "extremos",
            category: "Delanteros"
        },
        {
            title: "Delanteros: El Gol",
            description: "Movimientos en el área, remate y juego de espaldas.",
            priceMXN: 979,
            priceEUR: 49,
            image: "https://images.unsplash.com/photo-1551958219-acbc608c6377",
            type: "pack" as const,
            slug: "delanteros",
            category: "Delanteros"
        }
    ];

    const filteredPacks = activeCategory === 'Todos'
        ? packs
        : packs.filter(pack => {
            if (activeCategory === 'Defensas') return ['Defensas'].includes(pack.category); // Simplified for this example, could categorize Laterales/Centrales both as Defensas
            return pack.category === activeCategory;
        });

    return (
        <div className="bg-fv-primary min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Packs por Posición"
                    subtitle="Mejora el rendimiento de tus jugadores con formación específica."
                />

                {/* Category Filters */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                    ? 'bg-fv-accent text-black'
                                    : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPacks.map((pack, index) => (
                        <ProductCard key={index} {...{ ...pack, type: 'pack' }} />
                    ))}
                </div>
            </div>
        </div>
    );
}
