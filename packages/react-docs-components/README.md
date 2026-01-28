# @osdk/react-docs-components

React components library for OSDK documentation.

## Installation

```bash
pnpm add @osdk/react-docs-components
```

## Usage

```tsx
import { YourComponent } from "@osdk/react-docs-components";

function App() {
  return <YourComponent />;
}
```

## Development

### Building

Build the package:

```bash
pnpm turbo transpileEsm
pnpm turbo transpileCjs
pnpm turbo transpileBrowser
pnpm turbo transpileTypes
```

### Testing

Run tests:

```bash
pnpm test
```

### Type Checking

Check types:

```bash
pnpm turbo typecheck
```

### Linting

Lint the code:

```bash
pnpm lint
```

Fix linting issues:

```bash
pnpm fix-lint
```

## Playground

To visualize and test components, use the companion playground application:

```bash
cd ../osdk-react-docs
pnpm dev
```

## Structure

- `src/` - Source files
  - `index.ts` - Main exports
  - `public/experimental.ts` - Experimental features
- `build/` - Compiled output
  - `esm/` - ES modules
  - `cjs/` - CommonJS modules
  - `browser/` - Browser builds
  - `types/` - TypeScript declarations
