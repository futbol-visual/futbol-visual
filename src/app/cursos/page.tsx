import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';

import { coursesData } from '@/data/courses';

export const metadata = {
    title: 'Cursos Completos - Fútbol Visual',
    description: 'Fórmate como entrenador con nuestros cursos especializados en análisis táctico y metodología.',
};

export default function CursosPage() {
    const courses = Object.values(coursesData).map(course => ({
        ...course,
        type: 'course' as const
    }));

    return (
        <div className="bg-fv-primary min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Cursos Completos"
                    subtitle="Formación integral para dominar todas las facetas del juego. Certifícate con nosotros."
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
