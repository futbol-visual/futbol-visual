import SectionHeader from '@/components/SectionHeader';
import { FileText, Monitor, Layout } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Recursos Tácticos - Fútbol Visual',
    description: 'Descarga plantillas, presentaciones y PDFs tácticos para mejorar tu trabajo diario.',
};

export default function RecursosPage() {
    const resources = [
        {
            title: "PDF Tácticos",
            description: "Guías detalladas sobre fases del juego y conceptos específicos.",
            priceMXN: 499,
            priceEUR: 25,
            icon: <FileText size={40} className="text-fv-accent" />,
            items: ["Salida de Balón de 3", "Presión Alta vs Bloque Bajo", "Estructuras Ofensivas"]
        },
        {
            title: "Plantillas de Entrenamiento",
            description: "Organiza tus sesiones con nuestras plantillas profesionales editables.",
            priceMXN: 499,
            priceEUR: 25,
            icon: <Layout size={40} className="text-fv-accent" />,
            items: ["Microciclo Estructurado", "Hoja de Sesión Diaria", "Control de Cargas"]
        },
        {
            title: "Presentaciones Editables",
            description: "Sorprende a tus jugadores con charlas tácticas de primer nivel.",
            priceMXN: 499,
            priceEUR: 25,
            icon: <Monitor size={40} className="text-fv-accent" />,
            items: ["Charla Pre-Partido", "Análisis del Rival", "Modelo de Juego"]
        }
    ];

    return (
        <div className="bg-fv-primary min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Recursos para Entrenadores"
                    subtitle="Herramientas profesionales para optimizar tu tiempo y mejorar tu comunicación."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {resources.map((resource, index) => (
                        <div key={index} className="bg-fv-secondary rounded-2xl p-8 border border-neutral-800 hover:border-fv-accent/50 transition-all group">
                            <div className="mb-6 bg-neutral-900 w-16 h-16 rounded-full flex items-center justify-center border border-neutral-700 group-hover:border-fv-accent transition-colors">
                                {resource.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                            <p className="text-gray-400 text-sm mb-6">{resource.description}</p>

                            <ul className="mb-8 space-y-2">
                                {resource.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-300">
                                        <span className="w-1.5 h-1.5 bg-fv-accent rounded-full mr-2"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-neutral-800">
                                <div>
                                    <span className="block text-2xl font-bold text-white">{resource.priceEUR}€</span>
                                    <span className="text-xs text-gray-500">{resource.priceMXN} MXN</span>
                                </div>
                                <Link href="/checkout" className="bg-white text-black px-6 py-2 rounded-lg font-bold hover:bg-fv-accent transition-colors">
                                    Comprar
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
