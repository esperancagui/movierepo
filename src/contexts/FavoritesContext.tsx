import type { Movie } from "../types/Movie"
import { createContext, useContext, useEffect, useState } from "react";

interface FavoritesContextType {
    favorites: Movie[];
    addFavorite: (movie: Movie) => void;
    removeFavorite: (movieId: number) => void;
    isFavorite: (movieId: number) => boolean;
    toggleFavorite: (movie: Movie) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
    const [favorites, setFavorites] = useState<Movie[]>(() => {
        const storedFavorites = localStorage.getItem('favorites');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])

    const addFavorite = (movie: Movie) => {
        setFavorites((prev) => {
            if (prev.some(fav => fav.id === movie.id)) {
                return prev;
            }
            return [...prev, movie];
        });
    }
    const removeFavorite = (movieId: number) => {
        setFavorites(prev => prev.filter(m => m.id !== movieId));
    };
    const isFavorite = (movieId: number) => {
        return favorites.some(m => m.id === movieId);
    }
    const toggleFavorite = (movie: Movie) => {
        if (isFavorite(movie.id)) {
            removeFavorite(movie.id);
        } else {
            addFavorite(movie);
            console.log('Added to favorites:', favorites);
        }
    }
    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite, 
            removeFavorite, 
            isFavorite, 
            toggleFavorite 
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => {
    const context =  useContext(FavoritesContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoritesProvider");
    }
    return context;
}