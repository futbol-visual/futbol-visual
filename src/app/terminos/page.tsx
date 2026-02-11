'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-fv-primary text-white font-sans">
            <Navbar />
            <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-fv-accent">Términos y Condiciones</h1>

                <div className="space-y-6 text-gray-300">
                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">1. Aceptación de los Términos</h2>
                        <p>
                            Al acceder y utilizar el sitio web de Fútbol Visual, usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">2. Propiedad Intelectual</h2>
                        <p>
                            El servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de Fútbol Visual y sus licenciantes.
                            El contenido proporcionado en nuestros cursos y packs es para uso personal e intransferible. Está prohibida su redistribución o reventa.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">3. Compras y Pagos</h2>
                        <p>
                            Si desea comprar cualquier producto o servicio disponible a través del Servicio ("Compra"), se le puede pedir que proporcione cierta información relevante para su Compra,
                            incluyendo, entre otros, su número de tarjeta de crédito, la fecha de vencimiento de su tarjeta de crédito y su dirección de facturación.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">4. Cambios</h2>
                        <p>
                            Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es importante, intentaremos proporcionar un aviso con al menos 30 días de antelación antes de que entren en vigor los nuevos términos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-white mb-2">5. Contacto</h2>
                        <p>
                            Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en soporte@futbolvisual.com.
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
