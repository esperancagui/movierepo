# 🎬 MovieRepo

A modern, responsive movie discovery application built with React, TypeScript, and Vite. Browse popular movies, search through collections, save favorites, and explore detailed movie information powered by The Movie Database (TMDB) API.

![MovieRepo Preview](https://via.placeholder.com/800x400?text=MovieRepo+Preview)

## ✨ Features

- 🎥 **Browse Popular Movies** - Discover trending and popular movies
- 🔍 **Real-time Search** - Filter movies instantly as you type
- ⭐ **Favorites System** - Save your favorite movies with localStorage persistence
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🌙 **Dark Theme** - Beautiful gradient dark UI with glassmorphism effects
- ⚡ **Fast & Modern** - Built with Vite for lightning-fast performance
- 🎨 **Smooth Animations** - Engaging hover effects and transitions
- 📄 **Detailed Movie Pages** - View synopsis, ratings, release dates, and more

## 🚀 Live Demo

[View Live Demo](https://mymovierepo.vercel.app)

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **HTTP Client:** Axios
- **Icons:** React Icons
- **API:** The Movie Database (TMDB) API

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js (v18 or higher)
- npm or yarn package manager
- TMDB API Key ([Get one here](https://www.themoviedb.org/settings/api))

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/esperancagui/movierepo.git
   cd movierepo
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

Preview production build:
```bash
npm run preview
# or
yarn preview
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import project on [Vercel](https://vercel.com)
3. Add environment variable: `VITE_TMDB_API_KEY`
4. Deploy! 🚀

The `vercel.json` configuration is already set up for SPA routing.

### Other Platforms

For Netlify, add a `_redirects` file:
```
/*    /index.html   200
```

## 📂 Project Structure

```
movierepo/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── Container.tsx
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   ├── MovieCard.tsx
│   │   ├── MovieDetails.tsx
│   │   ├── MovieList.tsx
│   │   ├── Search.tsx
│   │   └── ...
│   ├── contexts/       # React contexts
│   │   └── FavoritesContext.tsx
│   ├── hooks/          # Custom hooks
│   │   └── useMovies.ts
│   ├── lib/            # Utilities and API clients
│   │   └── client.ts
│   ├── types/          # TypeScript types
│   │   └── Movie.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env                # Environment variables (not committed)
├── vercel.json         # Vercel configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json
```

## 🎨 Features in Detail

### Movie Browsing
- Grid layout with responsive columns (1-3 depending on screen size)
- Smooth hover animations with scale effects
- Gradient overlays showing movie titles and ratings
- Skeleton loading states for better UX

### Search Functionality
- Real-time filtering of loaded movies
- Responsive search bar with mobile-optimized placeholder
- Debounced search to prevent excessive filtering

### Favorites System
- Add/remove movies from favorites with one click
- Persistent storage using localStorage
- Dedicated favorites page
- Visual feedback for favorited movies

### Movie Details Page
- Hero section with backdrop image
- Sticky poster on scroll (desktop)
- Rating visualization with star icons
- Synopsis, popularity, and release date
- Responsive grid layout

## 🔑 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_TMDB_API_KEY` | Your TMDB API key | Yes |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the amazing API
- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📧 Contact

Guilherme Esperança - [@esperancagui](https://github.com/esperancagui)

Project Link: [https://github.com/esperancagui/movierepo](https://github.com/esperancagui/movierepo)

---

⭐ Star this repository if you found it helpful!
