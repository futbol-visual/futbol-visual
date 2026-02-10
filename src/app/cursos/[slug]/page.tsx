'use client';

import { coursesData } from '@/data/courses';
import SectionHeader from '@/components/SectionHeader';
import { CheckCircle, PlayCircle, Lock, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import BuyButton from '@/components/BuyButton';

export default function CourseDetailsPage({ params }: { params: { slug: string } }) {
    const slug = params.slug as keyof typeof coursesData;
    const course = coursesData[slug];
    const [openModuleIndex, setOpenModuleIndex] = useState<number | null>(0);

    if (!course) {
        return (
            <div className="min-h-screen bg-fv-primary flex flex-col items-center justify-center text-white p-4">
                <h1 className="text-3xl font-bold mb-4">Curso no encontrado</h1>
                <Link href="/cursos" className="text-fv-accent hover:underline">Volver al Catálogo</Link>
            </div>
        );
    }

    return (
        <div className="bg-fv-primary min-h-screen">
            {/* Hero Background */}
            <div className="h-[400px] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${course.image}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-fv-primary via-fv-primary/80 to-transparent"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-64 z-10 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <span className="inline-block bg-fv-accent text-black px-3 py-1 rounded-full text-xs font-bold mb-4">CURSO ONLINE</span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">{course.title}</h1>
                            <p className="text-xl text-gray-300">{course.subtitle}</p>
                        </div>

                        {/* Description */}
                        <div className="bg-fv-secondary/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 mb-12">
                            <h2 className="text-2xl font-bold text-white mb-4">Descripción</h2>
                            <p className="text-gray-300 leading-relaxed">{course.description}</p>
                        </div>

                        {/* Curriculum */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">Temario del Curso</h2>
                            <div className="space-y-4">
                                {course.curriculum.map((module, index) => (
                                    <div key={index} className="border border-neutral-800 rounded-xl overflow-hidden bg-fv-secondary">
                                        <button
                                            onClick={() => setOpenModuleIndex(openModuleIndex === index ? null : index)}
                                            className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${openModuleIndex === index ? 'bg-fv-accent text-black' : 'bg-neutral-800 text-gray-400'}`}>
                                                    {index + 1}
                                                </div>
                                                <h3 className={`font-bold ${openModuleIndex === index ? 'text-white' : 'text-gray-300'}`}>{module.title}</h3>
                                            </div>
                                            {openModuleIndex === index ? <ChevronUp className="text-gray-400" /> : <ChevronDown className="text-gray-400" />}
                                        </button>

                                        {openModuleIndex === index && (
                                            <div className="border-t border-neutral-800 bg-black/20">
                                                {module.lessons.map((lesson, lessonIndex) => (
                                                    <div key={lessonIndex} className="p-4 pl-14 flex items-center gap-3 text-sm text-gray-400 border-b border-neutral-800/50 last:border-0 hover:text-white transition-colors">
                                                        <PlayCircle size={16} className="text-fv-accent" />
                                                        <span>{lesson}</span>
                                                        <Lock size={14} className="ml-auto opacity-50" />
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sticky Buy Box */}
                    <div className="relative">
                        <div className="sticky top-24 bg-white rounded-2xl p-8 shadow-xl text-black">
                            <div className="mb-6">
                                <p className="text-gray-500 text-sm font-bold uppercase tracking-wider mb-2">Precio Total</p>
                                <div className="flex items-end gap-2">
                                    <span className="text-4xl font-extrabold">{course.priceEUR}€</span>
                                    <span className="text-gray-500 mb-1">/ {course.priceMXN} MXN</span>
                                </div>
                            </div>

                            <BuyButton
                                slug={course.slug}
                                priceId={course.priceEUR}
                                title={course.title}
                                className="block w-full bg-black text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-neutral-800 transition-all hover:scale-105 shadow-lg mb-6 flex items-center justify-center gap-2"
                                btnText="Comprar Ahora"
                            />

                            <div className="space-y-4 mb-8">
                                {course.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                                        <CheckCircle size={18} className="text-green-600 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-200 pt-6 text-center">
                                <p className="text-xs text-gray-400 mb-2">Garantía de devolución de 15 días</p>
                                <div className="flex justify-center gap-2 opacity-50">
                                    {/* Icons for payment methods could go here */}
                                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                                    <div className="h-6 w-10 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
