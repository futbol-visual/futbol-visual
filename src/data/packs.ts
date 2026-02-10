export const packsData = {
    "laterales": {
        title: "Laterales Ofensivos - Pack Completo",
        description: "30 clips esenciales para dominar la banda.",
        videos: Array.from({ length: 30 }, (_, i) => ({
            id: i + 1,
            title: `Clip ${i + 1}: Concepto Táctico #${i + 1}`,
            duration: "0:30",
            // For the first video, we use the real Bunny.net ID provided by the user
            bunnyVideoId: i === 0 ? "49933fdb-34aa-402f-ad7f-c6af10a00ce0" : undefined,
            url: i === 0 ? undefined : "https://www.w3schools.com/html/mov_bbb.mp4"
        }))
    },
    "porteros": {
        title: "Entrenamiento de Porteros",
        description: "Fundamentos bajo palos.",
        videos: Array.from({ length: 10 }, (_, i) => ({
            id: i + 1,
            title: `Ejercicio ${i + 1}: Agilidad`,
            duration: "0:45",
            url: "https://www.w3schools.com/html/mov_bbb.mp4"
        }))
    }
};
