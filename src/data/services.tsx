import { User, Users, MonitorPlay, Check, Star, LucideIcon } from 'lucide-react';
import React from 'react';

export interface PricingOption {
    label: string;
    price: string;
    priceMXN: string;
    popular?: boolean;
    tag?: string;
}

export interface ServiceReport {
    title: string;
    url: string;
}

export interface Service {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    longDescription: React.ReactNode;
    features: string[];
    pricing: PricingOption[];
    icon: React.ElementType; // Use ElementType for components
    color: string;
    border: string;
    accentColor: string;
    buttonText: string;
    videoId?: string;
    image?: string;
    sampleReport?: string; // Deprecated, use sampleReports instead
    sampleReports?: ServiceReport[];
}

export const services: Service[] = [
    {
        slug: "entrenamiento-individual",
        title: "Entrenamiento Individual\n(1 a 1)",
        subtitle: "Mejora máxima y personalizada",
        description: "Entrena con un profesional y mejora tu técnica, táctica y físico de forma específica según tu posición en el campo. Cada sesión está diseñada solo para ti.",
        // videoId removed as requested
        longDescription: (
            <div className="space-y-6 text-gray-300">
                <p className="text-xl text-white font-medium">Entrena como un profesional. Mejora más rápido que nunca.</p>
                <p>El entrenamiento individual es la forma más efectiva de acelerar el progreso de un jugador. Cada sesión está diseñada específicamente para tus necesidades, tu posición y tus objetivos.</p>
                <p>A diferencia de los entrenamientos tradicionales, aquí todo el tiempo está enfocado en tu mejora. Analizamos tu nivel actual, detectamos tus puntos fuertes y trabajamos de forma específica las áreas que marcarán la diferencia en tu rendimiento.</p>

                <div className="my-8 pl-6 border-l-4 border-fv-accent/40 bg-fv-accent/5 p-6 rounded-r-xl">
                    <p className="font-bold text-white text-lg mb-4">En cada sesión trabajamos:</p>
                    <ul className="grid grid-cols-1 gap-3">
                        {["Técnica individual (control, pase, conducción, finalización)",
                            "Toma de decisiones y comprensión táctica",
                            "Trabajo físico específico para fútbol",
                            "Conceptos propios de tu demarcación",
                            "Ejercicios diseñados para situaciones reales de partido"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fv-accent"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                    </ul>
                </div>

                <p>Este servicio es ideal para jugadores que quieren mejorar más rápido, prepararse para pruebas, competir a mayor nivel o simplemente dar un salto de calidad en su juego.</p>
                <p className="text-fv-accent font-medium text-lg border border-fv-accent/20 bg-fv-accent/5 p-4 rounded-xl text-center">
                    👉 Si quieres resultados visibles y seguimiento continuo, este es tu servicio.
                </p>
            </div>
        ),
        features: [
            "Seguimiento personalizado",
            "Ajuste a tus necesidades y posición",
            "Desarrollo integral técnico-táctico-físico"
        ],
        pricing: [
            { label: "Sesión suelta", price: "50€", priceMXN: "$1,000 MXN" },
            { label: "Pack 4 sesiones (10% OFF)", price: "180€", priceMXN: "$3,600 MXN" },
            { label: "Pack 8 sesiones (20% OFF)", price: "320€", priceMXN: "$6,400 MXN", popular: true },
        ],
        icon: User,
        color: "from-blue-600/40 to-blue-900/10",
        border: "border-blue-500/30",
        accentColor: "text-blue-400",
        buttonText: "Reserva tu sesión",
    },
    {
        slug: "entrenamiento-grupal",
        title: "Entrenamiento Grupal",
        subtitle: "Aprende y compite",
        description: "Mejora en un entorno competitivo y motivador, trabajando técnica y táctica en grupos reducidos con atención individualizada.",
        videoId: "9778fa7b-2997-4796-a135-7059694ddf56",
        longDescription: (
            <div className="space-y-6 text-gray-300">
                <p className="text-xl text-white font-medium">Mejora en un entorno competitivo, motivador y personalizado.</p>
                <p>Los entrenamientos grupales combinan lo mejor del entrenamiento individual con la intensidad del trabajo en equipo.</p>
                <p>Trabajamos con grupos muy reducidos (máx. 5 jugadores) para asegurar atención personalizada y mantener una alta calidad de entrenamiento. Esto permite recrear situaciones reales de partido mientras cada jugador recibe feedback constante.</p>

                <div className="my-8 pl-6 border-l-4 border-fv-accent/40 bg-fv-accent/5 p-6 rounded-r-xl">
                    <p className="font-bold text-white text-lg mb-4">En estas sesiones trabajamos:</p>
                    <ul className="grid grid-cols-1 gap-3">
                        {["Técnica aplicada al juego real",
                            "Principios tácticos ofensivos y defensivos",
                            "Juego por posiciones y toma de decisiones",
                            "Ejercicios competitivos y dinámicos",
                            "Desarrollo del ritmo e intensidad de juego"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fv-accent"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                    </ul>
                </div>

                <p>El entorno grupal aumenta la motivación, fomenta la competitividad sana y permite aprender de otros jugadores mientras sigues recibiendo atención individualizada.</p>
                <p className="text-fv-accent font-medium text-lg border border-fv-accent/20 bg-fv-accent/5 p-4 rounded-xl text-center">
                    👉 Perfecto para jugadores que quieren mejorar de forma constante en un ambiente competitivo y divertido.
                </p>
            </div>
        ),
        features: [
            "Grupos reducidos para máxima atención",
            "Desarrollo de conceptos específicos",
            "Ideal para entrenar con amigos"
        ],
        pricing: [
            { label: "Sesión suelta", price: "18€", priceMXN: "$350 MXN" },
            { label: "Pack 4 sesiones", price: "65€", priceMXN: "$1,300 MXN" },
            { label: "Pack 8 sesiones", price: "120€", priceMXN: "$2,400 MXN", popular: true },
        ],
        icon: Users,
        color: "from-purple-600/40 to-purple-900/10",
        border: "border-purple-500/30",
        accentColor: "text-purple-400",
        buttonText: "Únete a un grupo",
    },
    {
        slug: "video-analisis",
        title: "Video Análisis Individual",
        subtitle: "Descubre tus fortalezas",
        description: "Analizamos tus partidos y te entregamos un informe profesional con fortalezas y áreas de mejora. Ideal para acelerar tu desarrollo.",
        image: "/images/video-analisis-example.jpg",
        sampleReports: [
            { title: "Informe Profesional Escrito", url: "/reports/informe-escrito.pdf" },
            { title: "Informe Profesional Visual", url: "/reports/informe-visual.pdf" }
        ], // Updated to use multiple reports
        longDescription: (
            <div className="space-y-6 text-gray-300">
                <p className="text-xl text-white font-medium">Descubre lo que realmente ocurre cuando juegas.</p>
                <p>Muchos jugadores entrenan duro, pero no saben exactamente qué deben mejorar. El video análisis elimina esa incertidumbre.</p>
                <p>Analizamos tus partidos de forma profesional y elaboramos un informe detallado donde identificamos:</p>

                <div className="my-8 pl-6 border-l-4 border-fv-accent/40 bg-fv-accent/5 p-6 rounded-r-xl">
                    <ul className="grid grid-cols-1 gap-3">
                        {["Fortalezas en tu juego",
                            "Áreas clave de mejora",
                            "Toma de decisiones en situaciones reales",
                            "Posicionamiento y lectura táctica",
                            "Acciones que marcan la diferencia en tu rendimiento"].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-fv-accent"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                    </ul>
                </div>

                <p>Recibirás un informe claro y fácil de entender, con recomendaciones concretas para aplicar en entrenamientos y partidos.</p>

                <div className="bg-fv-accent/10 border border-fv-accent/20 p-6 rounded-xl flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-fv-accent flex items-center justify-center shrink-0">
                        <Check size={20} className="text-black" />
                    </div>
                    <div>
                        <p className="font-bold text-white text-lg">Incluye Sesión de Feedback (1h)</p>
                        <p className="text-gray-300 text-sm mt-1">
                            El servicio incluye una <span className="text-white font-medium">videollamada o reunión presencial de 1 hora</span> donde presentamos el informe y analizamos juntos las jugadas clave utilizando el video del partido. Resolvemos todas tus dudas y definimos tu plan de acción.
                        </p>
                    </div>
                </div>

                <p>Este servicio es el complemento perfecto para acelerar tu evolución, ya que te permite entrenar con objetivos claros y medibles.</p>
            </div>
        ),
        features: [
            "Informe detallado de tus acciones",
            "Plan de mejora específico",
            "Complemento perfecto para entrenamientos"
        ],
        pricing: [
            { label: "1 partido + informe", price: "60€", priceMXN: "$1,200 MXN" },
            { label: "Pack 3 partidos", price: "150€", priceMXN: "$3,000 MXN", popular: true, tag: "Más vendido" },
        ],
        icon: MonitorPlay,
        color: "from-emerald-600/40 to-emerald-900/10",
        border: "border-emerald-500/30",
        accentColor: "text-emerald-400",
        buttonText: "Solicita tu análisis",
    }
];
