# PWWSite

A React + TypeScript single-page site built with Vite. The app uses a custom navigation sidebar for switching between pages and renders each page from `src/pages`.

## Project Overview

- Framework: React 18
- Bundler: Vite
- Language: TypeScript
- Pages: Home, Management, Research and Development, Security, Demo, Investors, Merch, Contact Us
- Main entry: `src/main.tsx`
- Root component: `src/App.tsx`
- Navigation: `src/components/NavBar/NavBar.tsx`
- Page renderer: `src/components/Core/core.tsx`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

By default, Vite starts on [http://localhost:5173](http://localhost:5173).

## Available Scripts

### `npm run dev`

Start the app in development mode with hot module replacement.

### `npm run build`

Build the app for production into the `dist` folder.

### `npm run preview`

Preview the production build locally after running `npm run build`.

### `npm test`

Run tests with Vitest.

## Dependencies

- `react`
- `react-dom`
- `react-icons`
- `react-router-dom`
- `react-scroll`

## Dev Dependencies

- `vite`
- `@vitejs/plugin-react`
- `typescript`
- `@types/react`
- `@types/react-dom`
- `@types/node`
- `vitest`
- `@testing-library/react`
- `@testing-library/jest-dom`
- `@testing-library/user-event`

## Notes

- The app loads Font Awesome and Google Fonts from the root HTML file.
- The `src/components/Core/core.tsx` component selects page components dynamically using the `mainPage` state.
- The navigation drawer is toggled using a hamburger button in `src/components/NavBar/NavBar.tsx`.
