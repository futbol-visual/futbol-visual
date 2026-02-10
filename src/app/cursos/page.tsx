import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';

export const metadata = {
    title: 'Cursos Completos - Fútbol Visual',
    description: 'Fórmate como entrenador con nuestros cursos especializados en análisis táctico y metodología.',
};

export default function CursosPage() {
    const courses = [
        {
            title: "Máster en Análisis Táctico",
            description: "La joya de la corona. Un recorrido profundo por todas las fases del juego: ataque organizado, transición defensiva, defensa organizada y transición ofensiva. Aprende a descomponer el juego y a crear tu propio modelo de juego.",
            priceMXN: 5900,
            priceEUR: 299,
            image: "https://images.unsplash.com/photo-1518605348433-e341908d5f66?q=80&w=3540&auto=format&fit=crop",
            type: "course" as const,
            slug: "master-analisis"
        },
        {
            title: "Metodología de Entrenamiento",
            description: "Aprende a diseñar tareas que realmente transfieran al partido. Desde la periodización táctica hasta el microciclo estructurado.",
            priceMXN: 5900,
            priceEUR: 299,
            image: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=3529&auto=format&fit=crop",
            type: "course" as const,
            slug: "metodologia"
        },
        {
            title: "Scouting y Análisis de Rivales",
            description: "Domina las herramientas y procesos para analizar al rival. Crea informes profesionales y prepara el plan de partido perfecto.",
            priceMXN: 5900,
            priceEUR: 299,
            image: "https://images.unsplash.com/photo-1504305754058-2f08ccd89a02?q=80&w=3540&auto=format&fit=crop",
            type: "course" as const,
            slug: "scouting"
        }
    ];

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
