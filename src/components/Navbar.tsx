'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import AuthButton from './AuthButton';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-fv-primary/90 backdrop-blur-md border-b border-fv-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-2xl font-bold text-white tracking-tighter">
                            FÚTBOL <span className="text-fv-accent">VISUAL</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/cursos" className="text-gray-300 hover:text-fv-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Cursos
                            </Link>
                            <Link href="/packs" className="text-gray-300 hover:text-fv-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Packs por Posición
                            </Link>
                            <Link href="/recursos" className="text-gray-300 hover:text-fv-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Recursos
                            </Link>
                            <Link href="/mentoria" className="text-gray-300 hover:text-fv-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Mentoría
                            </Link>
                            <Link href="/contacto" className="text-gray-300 hover:text-fv-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                Contacto
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <AuthButton />
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-fv-primary border-b border-fv-secondary">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/cursos" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Cursos
                        </Link>
                        <Link href="/packs" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Packs por Posición
                        </Link>
                        <Link href="/recursos" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Recursos
                        </Link>
                        <Link href="/mentoria" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Mentoría
                        </Link>
                        <Link href="/contacto" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Contacto
                        </Link>
                        <Link href="/dashboard" className="w-full text-left bg-fv-accent text-black px-3 py-2 rounded-md font-bold mt-4 block">
                            Acceso Alumnos
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
