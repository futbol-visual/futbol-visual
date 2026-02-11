'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-fv-primary text-white font-sans">
            <Navbar />
            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-fv-accent">Política de Privacidad</h1>

                <div className="space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. Información que Recopilamos</h2>
                        <p>
                            En Fútbol Visual, recopilamos información personal que usted nos proporciona voluntariamente cuando se registra en el sitio web,
                            expresa interés en obtener información sobre nosotros o nuestros productos y servicios, cuando participa en actividades en el sitio web
                            o cuando se pone en contacto con nosotros.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. Uso de su Información</h2>
                        <p>
                            Usamos la información personal recopilada a través de nuestro sitio web para diversos fines comerciales descritos a continuación.
                            Procesamos su información personal para estos fines basándonos en nuestros intereses comerciales legítimos, para celebrar o realizar un contrato con usted,
                            con su consentimiento y/o para cumplir con nuestras obligaciones legales.
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Para facilitar la creación de cuentas y el proceso de inicio de sesión.</li>
                            <li>Para enviarle información administrativa.</li>
                            <li>Para cumplir y gestionar sus pedidos.</li>
                            <li>Para proteger nuestros servicios.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. Compartir su Información</h2>
                        <p>
                            Solo compartimos información con su consentimiento, para cumplir con las leyes, para brindarle servicios, para proteger sus derechos o para cumplir con obligaciones comerciales.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">4. Contacto</h2>
                        <p>
                            Si tiene preguntas o comentarios sobre esta política, puede enviarnos un correo electrónico a soporte@futbolvisual.com.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
