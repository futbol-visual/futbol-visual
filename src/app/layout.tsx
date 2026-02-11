import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "FÚTBOL VISUAL - Academia Online para Entrenadores",
    description: "Plataforma educativa premium para entrenadores de fútbol. Aprende con análisis de video y ejercicios reales.",
};

import { I18nProvider } from '@/context/i18n-context';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={`${inter.className} bg-fv-primary text-white min-h-screen flex flex-col`}>
                <I18nProvider>
                    <Navbar />
                    <main className="flex-grow pt-16">
                        {children}
                    </main>
                    <Footer />
                </I18nProvider>
            </body>
        </html>
    );
}
