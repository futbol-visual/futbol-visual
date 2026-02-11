'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CookiesPage() {
    return (
        <main className="min-h-screen bg-fv-primary text-white font-sans">
            <Navbar />
            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-fv-accent">Política de Cookies</h1>

                <div className="space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. ¿Qué son las Cookies?</h2>
                        <p>
                            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet o móvil) cuando visita determinados sitios web.
                            Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. ¿Qué tipos de cookies utilizamos?</h2>
                        <p>
                            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web.</li>
                            <li><strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas.</li>
                            <li><strong>Cookies de análisis:</strong> Son aquellas que nos permiten el seguimiento y análisis del comportamiento de los usuarios.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. ¿Cómo administrar las cookies?</h2>
                        <p>
                            Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
