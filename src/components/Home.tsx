import { Container } from './Container'
import { Header } from './Header'
import { Main } from './Main'
import { MovieList } from './MovieList'
import { MovieCard } from './MovieCard'

export const Home = () => {
  return (
    <Container>
      <Header />
      <Main>
        <h1 className="text-3xl font-bold mb-4 text-neutral-50">Movies</h1>
        <MovieList>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </MovieList>
      </Main>
    </Container>
  )
}