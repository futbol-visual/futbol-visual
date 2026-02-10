'use client';

import SectionHeader from '@/components/SectionHeader';
import { CreditCard, Lock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function CheckoutPage() {
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-fv-primary flex items-center justify-center p-4">
                <div className="bg-fv-secondary border border-neutral-800 rounded-2xl p-8 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-fv-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle size={40} className="text-fv-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">¡Pago Realizado!</h2>
                    <p className="text-gray-400 mb-8">Gracias por tu compra. Ya puedes acceder a tu contenido.</p>
                    <Link href="/dashboard" className="block w-full bg-fv-accent text-black font-bold py-3 rounded-lg hover:bg-green-400 transition-colors">
                        Ir a mi Área de Alumno
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-fv-primary min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="text-gray-400 hover:text-white mb-8 block">&larr; Volver</Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-2xl font-bold text-white mb-2">Resumen del Pedido</h1>
                            <p className="text-gray-400">Estás a un paso de mejorar tu formación.</p>
                        </div>

                        <div className="bg-fv-secondary border border-neutral-800 rounded-xl p-6 flex gap-4">
                            <div className="w-20 h-20 bg-neutral-800 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518605348433-e341908d5f66?q=80&w=3540')" }}></div>
                            <div>
                                <h3 className="font-bold text-white">Máster en Análisis Táctico</h3>
                                <p className="text-sm text-gray-400">Acceso de por vida</p>
                                <p className="text-fv-accent font-bold mt-2">299€</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-neutral-800">
                            <div className="flex justify-between text-gray-400 mb-2">
                                <span>Subtotal</span>
                                <span>299€</span>
                            </div>
                            <div className="flex justify-between text-gray-400 mb-4">
                                <span>Impuestos</span>
                                <span>0€</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-white">
                                <span>Total</span>
                                <span>299€</span>
                            </div>
                            <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                                <Lock size={12} /> Pago seguro encriptado SSL 256-bit
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 text-black">
                        <h2 className="text-xl font-bold mb-6">Detalles de Pago</h2>

                        <div className="space-y-4">
                            <button className="w-full bg-[#FFC439] hover:brightness-105 transition-all text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 mb-4">
                                <span className="italic font-serif font-bold text-lg">PayPal</span>
                            </button>

                            <div className="relative flex items-center gap-2 justify-center text-gray-400 text-sm py-2">
                                <span className="w-full h-px bg-gray-200"></span>
                                <span>O paga con tarjeta</span>
                                <span className="w-full h-px bg-gray-200"></span>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handlePayment(); }}>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email</label>
                                    <input type="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none" placeholder="tu@email.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Titular de la tarjeta</label>
                                    <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none" placeholder="Como aparece en la tarjeta" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Número de tarjeta</label>
                                    <div className="relative">
                                        <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none pl-10" placeholder="0000 0000 0000 0000" />
                                        <CreditCard className="absolute left-3 top-2.5 text-gray-400" size={18} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Fecha Exp.</label>
                                        <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none" placeholder="MM/YY" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-gray-700 uppercase mb-1">CVC</label>
                                        <input type="text" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none" placeholder="123" />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isProcessing}
                                    className="w-full bg-black text-white font-bold py-4 rounded-lg hover:bg-neutral-800 transition-colors mt-6 flex items-center justify-center gap-2"
                                >
                                    {isProcessing ? 'Procesando...' : 'Pagar 299€'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
