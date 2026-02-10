export default function SectionHeader({ title, subtitle, centered = false }: { title: string | React.ReactNode, subtitle?: string, centered?: boolean }) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
                {title} <span className="text-fv-accent">.</span>
            </h2>
            {subtitle && (
                <p className={`text-lg text-gray-400 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
