import { useState, useEffect, useMemo } from 'react';
import { tmdbFetch } from '../lib/client';
import type { Movie } from '../types/Movie';

const MIN_LOADING_TIME = 500;

export const useMovies = (category: string = 'popular', page: number = 1) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState<string>('')

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true)
            setError(null)

            const startTime = Date.now();

            try {
                const data = await tmdbFetch(`/movie/${category}`, { page })

                const elapsedTime = Date.now() - startTime;
                const remainingTime = MIN_LOADING_TIME - elapsedTime;

                if (remainingTime > 0) {
                    await new Promise(resolve => setTimeout(resolve, remainingTime));
                }

                setMovies(data.results)
            } catch (error) {
                setError('Failed to fetch movies')
            } finally {
                setLoading(false)
            }
        }

        fetchMovies()
    }, [category, page])

    // Filtra os filmes baseado na query
    const filteredMovies = useMemo(() => {
        if (!searchQuery.trim()) return movies;

        return movies.filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [movies, searchQuery]);

    return {
        movies: filteredMovies,
        allMovies: movies, // retorna todos sem filtro se precisar
        loading,
        error,
        searchQuery,
        setSearchQuery
    }
}