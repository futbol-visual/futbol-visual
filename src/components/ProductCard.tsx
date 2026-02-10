import Link from 'next/link';
import { ArrowRight, Clock, Video } from 'lucide-react';
import BuyButton from './BuyButton';

interface ProductCardProps {
    title: string;
    description: string;
    priceMXN: number;
    priceEUR: number;
    image: string;
    type: 'course' | 'pack';
    slug: string;
}

export default function ProductCard({ title, description, priceMXN, priceEUR, image, type, slug }: ProductCardProps) {
    const isCourse = type === 'course';
    const linkHref = isCourse ? `/cursos` : `/packs`; // Ideally this would link to specific product details

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-fv-secondary border border-neutral-800 hover:border-fv-accent/50 transition-all duration-300">
            <div className="aspect-[16/9] overflow-hidden bg-neutral-800 relative">
                {/* Image overlay */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${image}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-fv-secondary to-transparent opacity-80"></div>

                <div className="absolute bottom-4 left-4 right-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${isCourse ? 'bg-fv-accent text-black' : 'bg-white/20 text-white backdrop-blur-md'}`}>
                        {isCourse ? 'Curso Completo' : 'Pack por Posición'}
                    </span>
                    <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
                </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm text-gray-400 mb-6 line-clamp-3">
                    {description}
                </p>

                <div className="mt-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">{priceEUR}€</span>
                            <span className="text-xs text-gray-500">{priceMXN} MXN</span>
                        </div>
                        {isCourse ? (
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                <Clock size={16} />
                                <span>+10 Horas</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                                <Video size={16} />
                                <span>Ejercicios</span>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        {isCourse ? (
                            <Link
                                href={`/cursos/${slug}`}
                                className="flex items-center justify-center rounded-lg border border-neutral-700 bg-transparent px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black"
                            >
                                Ver Temario
                            </Link>
                        ) : (
                            <Link
                                href={`/packs`}
                                className="flex items-center justify-center rounded-lg border border-neutral-700 bg-transparent px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-black"
                            >
                                + Info
                            </Link>
                        )}

                        <BuyButton
                            slug={slug}
                            priceId={priceEUR}
                            title={title}
                            className="flex items-center justify-center rounded-lg bg-white px-4 py-3 text-sm font-bold text-black transition-colors hover:bg-fv-accent cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
