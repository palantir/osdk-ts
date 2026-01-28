# OSDK React Docs - Component Playground

A React playground application for visualizing and testing components from `@osdk/react-docs-components`.

## Getting Started

### Development

Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:8081`

### Building

Build the application for production:

```bash
pnpm build
```

### Preview

Preview the production build:

```bash
pnpm preview
```

## Usage

This playground is designed to showcase and test React components from the `@osdk/react-docs-components` package.

To add new component demonstrations:

1. Create components in `packages/react-docs-components/src`
2. Export them from the package
3. Import and showcase them in this playground's `src/App.tsx` or create new routes

## Structure

- `src/main.tsx` - Application entry point
- `src/router.tsx` - React Router configuration
- `src/App.tsx` - Main application component
- `src/App.css` - Application styles
- `src/index.css` - Global styles

## Technologies

- React 18
- TypeScript
- Vite
- React Router
