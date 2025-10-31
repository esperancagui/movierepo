import { useParams } from "react-router"
import { useMovies } from "../hooks/useMovies";
import { Header } from "./Header";
import { Container } from "./Container";
import { Main } from "./Main";
import type { Movie } from "../types/Movie";
import { GoStar, GoStarFill, GoCalendar } from "react-icons/go";
import { useFavorites } from "../contexts/FavoritesContext";
import { useMemo } from "react";
import { DetailsSkeleton } from "./DetailsSkeleton";


export const MovieDetails = () => {
    const { allMovies, loading, error } = useMovies()
    const { movieId } = useParams<{ movieId: string }>();
    const movie: Movie | undefined = allMovies.find(m => m.id === Number(movieId));
    const { toggleFavorite, isFavorite } = useFavorites();

        // useMemo calcula as estrelas apenas quando movie.vote_average mudar
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



    // Early returns para loading e error
    if (loading) {
        return (
            <DetailsSkeleton />
        );
    }

    if (error) {
        return (
            <Container>
                <Header />
                <Main>
                    <div className="text-red-500 text-center p-8">Error: {error}</div>
                </Main>
            </Container>
        );
    }

    if (!movie) {
        return (
            <Container>
                <Header />
                <Main>
                    <div className="text-white text-center p-8">Movie not found</div>
                </Main>
            </Container>
        );
    }


    return (
        <Container>
            <Header />
            <Main>
                {/* Hero Section com Backdrop */}
                <div className="relative w-full h-[500px] mb-8">
                    {movie.backdrop_path && (
                        <>
                            <img
                                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
                        </>
                    )}

                    {/* Título sobreposto */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                            {movie.title}
                        </h1>
                        <div className="flex items-center gap-4 text-white/90">
                            <div className="flex items-center gap-1 text-xl">
                                {filledStars}
                                {emptyStars}
                                <span className="ml-2 text-sm">({movie.vote_average.toFixed(1)})</span>
                            </div>
                            {movie.release_date && (
                                <div className="flex items-center gap-2">
                                    <GoCalendar />
                                    <span>{new Date(movie.release_date).getFullYear()}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Conteúdo Principal */}
                <div className="px-6 md:px-12 lg:px-20 pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                        {/* Poster */}
                        <div className="lg:col-span-1">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full aspect-2/3 object-cover shadow-2xl sticky top-24"
                            />
                        </div>

                        {/* Informações */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Overview */}
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-4">Synopsis</h2>
                                <p className="text-neutral-300 text-lg leading-relaxed">
                                    {movie.overview || "No overview available."}
                                </p>
                            </div>

                            {/* Estatísticas */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="bg-neutral-800/50 backdrop-blur-sm p-4">
                                    <p className="text-neutral-400 text-sm mb-1">Rating</p>
                                    <p className="text-white text-2xl font-bold">{movie.vote_average.toFixed(1)}/10</p>
                                </div>
                                <div className="bg-neutral-800/50 backdrop-blur-sm p-4">
                                    <p className="text-neutral-400 text-sm mb-1">Popularity</p>
                                    <p className="text-white text-2xl font-bold">{Math.round(movie.popularity)}</p>
                                </div>
                                {movie.release_date && (
                                    <div className="bg-neutral-800/50 backdrop-blur-sm p-4">
                                        <p className="text-neutral-400 text-sm mb-1">Release Date</p>
                                        <p className="text-white text-xl font-bold">
                                            {new Date(movie.release_date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <button onClick={() => toggleFavorite(movie)} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold transition-colors shadow-lg">
                                {isFavorite(movie.id) ? <GoStarFill className="text-xl" /> : <GoStar className="text-xl" />}
                                {isFavorite(movie.id) ? "Remove from Favorites" : "Add to Favorites"}
                            </button>
                        </div>
                    </div>
                </div>
            </Main>
        </Container>
    )
}