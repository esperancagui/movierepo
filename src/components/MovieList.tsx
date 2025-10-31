import { useMovies } from "../hooks/useMovies"
import { MovieCard } from "./MovieCard"
import type { Movie } from "../types/Movie"

export const MovieList = ({ moviesParam }: { moviesParam?: Movie[] }) => {
    const { movies, loading, error } = useMovies()

    if (loading) return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="bg-neutral-800 overflow-hidden shadow-lg">
                    <div className="h-[600px] bg-neutral-700 animate-pulse"></div>
                </div>
            ))}
        </div>
    )

    if (error) return <div className="text-red-500 text-center p-4">Error: {error}</div>

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {moviesParam ? moviesParam.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            )) : movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}
