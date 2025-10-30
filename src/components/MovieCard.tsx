export const MovieCard = () => {
    return (
        <div className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 bg-neutral-700 animate-pulse"></div>
            <div className="p-4">
                <div className="h-6 bg-neutral-700 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-neutral-700 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-neutral-700 rounded w-3/4 animate-pulse"></div>
            </div>
        </div>
    )
}