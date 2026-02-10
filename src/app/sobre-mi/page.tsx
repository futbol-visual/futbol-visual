import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';

export const metadata = {
    title: 'Sobre Mí - Fútbol Visual',
    description: 'Conoce la historia detrás de Fútbol Visual y nuestra metodología de trabajo.',
};

export default function AboutPage() {
    return (
        <div className="bg-fv-primary min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div>
                        <SectionHeader
                            title="La Visión Detrás del Proyecto"
                            subtitle="Transformando la manera en que los entrenadores aprenden y enseñan el juego."
                        />

                        <div className="prose prose-invert text-gray-300 space-y-6">
                            <p>
                                Hola, soy Adrián Márquez. Bienvenido a <strong>Fútbol Visual</strong>.
                            </p>
                            <p>
                                Durante años, observé que la formación de entrenadores estaba saturada de teoría densa y alejada de la realidad del campo.
                                Libros interminables y conceptos abstractos que, a la hora de la verdad, eran difíciles de transmitir a los jugadores.
                            </p>
                            <p>
                                Creé esta plataforma con una misión clara: <strong>utilizar el poder de la imagen para simplificar lo complejo</strong>.
                                El cerebro procesa la información visual 60.000 veces más rápido que el texto. ¿Por qué no aplicar esto al fútbol?
                            </p>
                            <p>
                                Aquí no encontrarás fórmulas mágicas, sino herramientas reales basadas en el análisis de video, tareas de entrenamiento
                                diseñadas para el juego real y una metodología probada en el fútbol profesional.
                            </p>

                            <h3 className="text-xl font-bold text-white mt-8">Futuras Colaboraciones</h3>
                            <p>
                                Fútbol Visual es un proyecto vivo. Estamos trabajando para incorporar a otros entrenadores profesionales, analistas
                                y preparadores físicos para ofrecerte una visión 360º del rendimiento en el fútbol.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 lg:mt-0 relative">
                        <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-2xl border border-neutral-800">
                            {/* Placeholder for coach image or brand image */}
                            <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                                <div className="bg-cover bg-center absolute inset-0 opacity-60" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=3540&auto=format&fit=crop')" }}></div>
                                <div className="relative z-10 text-center p-8 bg-black/50 backdrop-blur-sm rounded-xl m-8">
                                    <p className="text-white font-bold text-2xl">Adrián Márquez</p>
                                    <p className="text-fv-accent">Head Coach & Founder</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-fv-accent/20 rounded-full blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-fv-accent/20 rounded-full blur-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
