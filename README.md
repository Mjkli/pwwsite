# PWWSite

Source code for [pww.mjkli.com](https://pww.mjkli.com)

A React + TypeScript single-page application built with Vite. The site features a responsive navigation system and dynamic page routing for multiple business sections.

## Project Overview

- **Framework:** React 18
- **Bundler:** Vite
- **Language:** TypeScript
- **Testing:** Vitest with jsdom environment
- **Infrastructure:** Terraform (CloudFront CDN, S3, Route53 DNS)
- **Main entry:** `src/main.tsx`
- **Root component:** `src/App.tsx`

## Pages

The application includes the following pages located in `src/pages/`:

- **Home** - Homepage
- **Demo** - Demo page
- **Management** - Management section
- **RnD** - Research and Development
- **Security** - Security information
- **Investment** - Investment opportunities
- **Merch** - Merchandise
- **Contact** - Contact form

## Components

Located in `src/components/`:

- **Core** - Main page renderer component that dynamically loads pages
- **NavBar** - Responsive navigation sidebar with hamburger menu toggle
- **Header** - Application header
- **Footer** - Application footer
- **PageTabs** - Tab navigation component
- **SlideShow** - Image carousel/slideshow component

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The app will start at [http://localhost:5173](http://localhost:5173) with hot module replacement enabled.

## Available Scripts

- **`npm run dev`** - Start development server with HMR
- **`npm run build`** - Create production build in the `dist` folder
- **`npm run preview`** - Preview production build locally
- **`npm test`** - Run test suite with Vitest

## Dependencies

- `react` - UI library
- `react-dom` - React DOM utilities
- `react-icons` - Icon library
- `react-router-dom` - Client-side routing
- `react-scroll` - Scroll utilities
- `vitest` - Unit testing framework

## Dev Dependencies

- `vite` - Build tool
- `@vitejs/plugin-react` - Vite React plugin
- `typescript` - Type checking
- `@types/react` & `@types/react-dom` - React type definitions
- `@types/node` - Node.js type definitions
- `@testing-library/react` - React testing utilities
- `@testing-library/jest-dom` - DOM testing matchers
- `@testing-library/user-event` - User interaction simulation
- `@vitest/coverage-v8` - Code coverage reporting
- `jsdom` - DOM implementation for testing

## Testing

Tests are configured with Vitest and jsdom. Test setup file is located at `src/tests/setup.ts`. Coverage reports are generated in HTML format.

## Infrastructure

Terraform configuration files in `tf-infra/` handle:
- **CloudFront** - CDN distribution
- **S3** - Static asset hosting
- **Route53** - DNS management

## Notes

- The `Core` component dynamically renders pages based on the `mainPage` state
- Navigation state is managed via the `NavBar` component
- Static assets (images, etc.) are configured to be hosted from S3 with proper URLs for production deployments

