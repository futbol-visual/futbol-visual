export const packsData = {
    "laterales": {
        title: "Laterales Ofensivos - Pack Completo",
        description: "30 clips esenciales para dominar la banda.",
        image: "https://images.unsplash.com/photo-1517466787929-bc90951d6dbb?auto=format&fit=crop&w=800",
        videos: [
            { id: 1, title: "Amplitud y Profundidad", duration: "0:30", bunnyVideoId: "49933fdb-34aa-402f-ad7f-c6af10a00ce0" },
            { id: 2, title: "Doblajes por fuera", duration: "0:45", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: 3, title: "Centros al área pequeña", duration: "0:35", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: 4, title: "Defensa del 1x1", duration: "0:50", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: 5, title: "Cierre de pasillos interiores", duration: "0:40", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            // ... truncated for brevity in data, but keeping the structure
            ...Array.from({ length: 25 }, (_, i) => ({
                id: i + 6,
                title: `Concepto Táctico #${i + 6}`,
                duration: "0:30",
                url: "https://www.w3schools.com/html/mov_bbb.mp4"
            }))
        ]
    },
    "porteros": {
        title: "Entrenamiento de Porteros",
        description: "Fundamentos bajo palos.",
        image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=3540",
        videos: [
            { id: 1, title: "Posicionamiento en el área", duration: "0:45", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: 2, title: "Blocajes y despejes", duration: "1:00", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: 3, title: "Juego de pies bajo presión", duration: "0:55", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            { id: 4, title: "Salidas en centros", duration: "1:10", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
            ...Array.from({ length: 6 }, (_, i) => ({
                id: i + 5,
                title: `Ejercicio de Agilidad #${i + 5}`,
                duration: "0:45",
                url: "https://www.w3schools.com/html/mov_bbb.mp4"
            }))
        ]
    },
    "mediocentros-doble-pivote": {
        title: "Mediocentros: relaciones del doble pivote",
        subtitle: "Comprende, entrena y aplica las relaciones tácticas clave del doble pivote en diferentes contextos de juego para dominar el centro del campo.",
        priceMXN: 979,
        priceEUR: 49,
        image: "https://images.unsplash.com/photo-1522778526582-12248ce8b2ca?q=80&w=3540&auto=format&fit=crop",
        valueBullets: [
            {
                title: "Qué aprenderás",
                description: "Sinergias defensivas y ofensivas, coberturas mutuas, escalonamiento y distribución de roles."
            },
            {
                title: "Qué problema resuelve",
                description: "Falta de cohesión y desequilibrio en la medular durante transiciones y ataques organizados."
            },
            {
                title: "A quién va dirigido",
                description: "Entrenadores de formación y rendimiento, analistas tácticos y mediocentros que buscan perfeccionar su juego."
            }
        ],
        contentSummary: {
            title: "20 Videos de Análisis y Tareas",
            description: "El pack está estructurado en bloques de formación que abarcan todas las fases del juego. A través de 20 videos detallados, exploramos conceptos como la salida de balón, la presión tras pérdida, coberturas en bloque medio/bajo y el desmarque de apoyo en ataque organizado. Una guía visual directa y enfocada 100% en el entendimiento táctico."
        },
        previewVideo: {
            title: "Muestra Gratuita: Escalonamiento en Salida de Balón",
            url: "https://www.w3schools.com/html/mov_bbb.mp4"
        },
        results: {
            title: "Lo que serás capaz de hacer",
            items: [
                "Identificar y corregir errores de posicionamiento en tu equipo.",
                "Diseñar tareas específicas que potencien la conexión entre tus mediocentros.",
                "Transferir de forma directa los conceptos al campo de entrenamiento."
            ]
        }
    }
};
