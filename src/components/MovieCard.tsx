import { GoStar } from "react-icons/go";
import { GoStarFill } from "react-icons/go";
import type { Movie } from "../types/Movie";
import { Link } from "react-router";
import { useMemo } from "react";


export const MovieCard = ({ movie }: { movie: Movie }) => {

    const { filledStars, emptyStars } = useMemo(() => {
            if (!movie) {
                return { filledStars: [], emptyStars: [] };
            }
    
            const rating = Math.round(movie.vote_average / 2);
            const filled = []
            const empty = []
    
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    filled.push(<GoStarFill key={`filled-${i}`} className="text-yellow-500" />);
                } else {
                    empty.push(<GoStar key={`empty-${i}`} className="text-neutral-500" />);
                }
            }
    
            return { filledStars: filled, emptyStars: empty };
        }, [movie?.vote_average]);

    return (
        <Link to={`/movies/${movie.id}`}>

            <div
                key={movie.id}
                className="relative bg-neutral-800 overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl group"
            >
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full aspect-2/3 object-cover"
                />
                {/* Overlay com gradiente */}
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-8">
                    <h3 className="text-white text-center text-4xl font-bold px-4">
                        {movie.title}
                    </h3>
                    <div className="flex items-center mt-2">
                        {filledStars}
                        {emptyStars}
                    </div>
                </div>
            </div>
        </Link>
    )
}