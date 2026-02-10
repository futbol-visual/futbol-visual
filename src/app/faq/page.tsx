'use client';

import SectionHeader from '@/components/SectionHeader';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
    const faqs = [
        {
            question: "¿Cómo accedo al contenido después de comprar?",
            answer: "Inmediatamente después del pago, recibirás un correo electrónico con tus credenciales de acceso al área privada de alumnos. Allí tendrás todo el contenido organizado."
        },
        {
            question: "¿Tengo acceso de por vida?",
            answer: "Sí. Una vez compras un curso o pack, es tuyo para siempre. Podrás acceder a él cuando quieras y desde donde quieras."
        },
        {
            question: "¿Puedo descargar los materiales?",
            answer: "Los videos se verán en streaming desde la plataforma, pero todas las plantillas, PDFs y presentaciones son descargables para que las guardes en tu ordenador."
        },
        {
            question: "¿El contenido sirve para fútbol base?",
            answer: "Absolutamente. Aunque utilizamos ejemplos de fútbol profesional, los conceptos son adaptables a cualquier categoría, desde benjamines hasta senior."
        },
        {
            question: "¿Se añadirán nuevos cursos?",
            answer: "Sí, estamos trabajando constantemente en nuevo contenido. De hecho, pronto lanzaremos una membresía mensual que dará acceso a todo el catálogo."
        },
        {
            question: "¿Qué métodos de pago aceptan?",
            answer: "Aceptamos tarjetas de crédito/débito a través de Stripe y también pagos vía PayPal. Ambos son 100% seguros."
        }
    ];

    return (
        <div className="bg-fv-primary min-h-screen py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title="Preguntas Frecuentes"
                    subtitle="Resolvemos tus dudas principales sobre la academia."
                    centered={true}
                />

                <div className="mt-12 space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-neutral-800 rounded-xl overflow-hidden bg-fv-secondary/30">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none"
            >
                <span className="font-bold text-white text-lg">{question}</span>
                {isOpen ? <ChevronUp className="text-fv-accent" /> : <ChevronDown className="text-gray-400" />}
            </button>

            {isOpen && (
                <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-neutral-800/50">
                    <div className="pt-4">
                        {answer}
                    </div>
                </div>
            )}
        </div>
    );
}
