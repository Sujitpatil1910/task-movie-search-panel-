# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





# React + Vite
movie-panel/
├── public/
│   └── vite.svg
├── src/

│   ├── assets/                # For images, icons, and static files
│   ├── components/            # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── MovieCard.jsx
│   │   └── Pagination.jsx
│   ├── pages/                 # All individual route views/pages
│   │   ├── Home.jsx
│   │   ├── Popular.jsx
│   │   ├── TopRated.jsx
│   │   ├── Upcoming.jsx
│   │   └── SearchResult.jsx
│   ├── App.jsx                # App layout & routes
│   ├── main.jsx               # ReactDOM render & Router setup
│   └── index.css              # Tailwind or global styles
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
