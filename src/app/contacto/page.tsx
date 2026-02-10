'use client';

import SectionHeader from '@/components/SectionHeader';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for form submission logic
        alert('Mensaje enviado (simulado). Gracias por contactar.');
    };

    return (
        <div className="bg-fv-primary min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Hablemos de Fútbol"
                    subtitle="¿Tienes dudas sobre los cursos? ¿Buscas una colaboración? Contáctanos."
                    centered={true}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 bg-fv-secondary/50 rounded-3xl p-8 lg:p-12 border border-neutral-800">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                        <p className="text-gray-400 mb-8">
                            Estamos aquí para ayudarte a elegir el mejor camino para tu formación.
                            No dudes en escribirnos por WhatsApp para una respuesta más rápida.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-neutral-800 p-3 rounded-lg text-fv-accent">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-bold">Email</p>
                                    <a href="mailto:adrianmarquezytfa@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                        adrianmarquezytfa@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-neutral-800 p-3 rounded-lg text-fv-accent">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-bold">WhatsApp</p>
                                    <a href="https://wa.me/34622778036" className="text-gray-400 hover:text-white transition-colors">
                                        +34 622 778 036
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-neutral-800 p-3 rounded-lg text-fv-accent">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-white font-bold">Teléfono</p>
                                    <a href="tel:+34622778036" className="text-gray-400 hover:text-white transition-colors">
                                        +34 622 778 036
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-fv-accent focus:ring-1 focus:ring-fv-accent transition-colors"
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-fv-accent focus:ring-1 focus:ring-fv-accent transition-colors"
                                    placeholder="tu@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-fv-accent focus:ring-1 focus:ring-fv-accent transition-colors"
                                    placeholder="¿En qué podemos ayudarte?"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-fv-accent text-black font-bold py-4 rounded-lg hover:bg-green-400 transition-colors"
                            >
                                Enviar Mensaje
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
