import { Container } from "./Container";
import { Header } from "./Header";
import { Main } from "./Main";
import { MovieList } from "./MovieList";
import { useFavorites } from "../contexts/FavoritesContext";

export const Favorites = () => {
    const { favorites } = useFavorites();

    return (
        <Container>
            <Header />
            <Main>
                {favorites.length === 0 && (
                    <p className="text-neutral-400 mb-6">You have no favorite movies yet.</p>
                )}
                <h1 className="text-3xl font-bold mb-4 text-neutral-50">Favorites</h1>
                <MovieList moviesParam={favorites}/>
            </Main>
        </Container>
    )
}