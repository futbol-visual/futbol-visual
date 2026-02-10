export default function BunnyVideoPlayer({
    videoId,
    libraryId = '597002', // Default to the main video library
    title
}: {
    videoId: string;
    libraryId?: string;
    title?: string;
}) {
    return (
        <div className="relative pt-[56.25%] bg-black rounded-lg overflow-hidden shadow-2xl border border-neutral-800">
            <iframe
                src={`https://iframe.mediadelivery.net/embed/${libraryId}/${videoId}?autoplay=true&loop=false&muted=false&preload=true&responsive=true`}
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                allowFullScreen={true}
                title={title || "Video Player"}
            ></iframe>
        </div>
    );
}
