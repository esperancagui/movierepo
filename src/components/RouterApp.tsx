import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './Home'
import { MovieDetails } from './MovieDetails'
import { Favorites } from './Favorites'
import { FavoritesProvider } from '../contexts/FavoritesContext';

export const RouterApp = () => (
  <FavoritesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  </FavoritesProvider>
)
