# @osdk/react-components-storybook

This package contains Storybook stories showcasing the components from `@osdk/react-components`.

## Development

```bash
pnpm install
pnpm turbo transpileBrowser --filter=@osdk/react-components  # one-time, generates styles.css
pnpm dev
```

The Storybook will be available at http://localhost:6006

Changes to `@osdk/react`, `@osdk/react-components`, and `@osdk/api` source files are picked up automatically via HMR.

## Features

- Interactive component demonstrations
- Multiple variations and states for each component
- Mock data using FauxFoundry for realistic examples
- MSW (Mock Service Worker) integration for API mocking

## Components

### ObjectTable

The ObjectTable component is showcased with the following variations:

- Default multi-selection mode
- Single selection mode
- No selection mode
- With context menu
- Custom column widths

The stories use mock Employee data with various properties and relationships to demonstrate the full capabilities of the ObjectTable component.
