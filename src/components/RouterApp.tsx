import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './Home'

export const RouterApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
)
