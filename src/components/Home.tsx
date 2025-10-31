import { Container } from './Container'
import { Header } from './Header'
import { Main } from './Main'
import { MovieList } from './MovieList'
import { useMovies } from '../hooks/useMovies'

export const Home = () => {
const { movies, setSearchQuery } = useMovies('popular');
  
  return (
    <Container>
      <Header onSearch={setSearchQuery} />
      <Main>
        <h1 className="text-3xl font-bold mb-4 text-neutral-50">Movies</h1>
        <MovieList moviesParam={movies} />
      </Main>
    </Container>
  )
}