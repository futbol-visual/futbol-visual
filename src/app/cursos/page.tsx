'use client';

import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import { coursesData } from '@/data/courses';

export default function CursosPage() {
    const courses = Object.values(coursesData).map(course => ({
        ...course,
        type: 'course' as const
    }));

    return (
        <div className="bg-fv-primary min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Cursos Destacados"
                    subtitle="Programas completos diseñados para transformar tu comprensión del juego desde la base hasta la élite."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {courses.map((course, index) => (
                        <ProductCard key={index} {...course} />
                    ))}
                </div>
            </div>
        </div>
    );
}
