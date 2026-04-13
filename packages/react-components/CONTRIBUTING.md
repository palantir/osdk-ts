# Contributing to @osdk/react-components

Thanks for your interest in contributing to `@osdk/react-components`! This document covers the process for contributing to this package within the `osdk-ts` monorepo.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Development Workflow](#development-workflow)
- [Component Architecture](#component-architecture)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Storybook](#storybook)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Code Review](#code-review)
- [Changesets](#changesets)
- [Contributing to @osdk/react](#contributing-to-osdkreact)

## Getting Started

### Prerequisites

- **Node.js** (see `.nvmrc` at the repo root for the expected version; [nvm](https://github.com/nvm-sh/nvm) recommended)
- **pnpm** as the package manager (do **not** use npm or yarn)

### Repository Access

- Palantir employees can push branches directly to this repository.
- External contributors should [fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repo and open pull requests from their fork.

## Development Setup

1. Clone the repository and install dependencies from the monorepo root:
   ```sh
   git clone git@github.com:palantir/osdk-ts.git
   cd osdk-ts
   pnpm install
   ```
2. Transpile the internal dependencies that `react-components` relies on:
   ```sh
   pnpm --filter @osdk/react-components transpileAllDeps
   ```
3. Verify everything works:
   ```sh
   pnpm turbo typecheck --filter=@osdk/react-components
   pnpm turbo test --filter=@osdk/react-components
   ```

## Development Workflow

### Branch Naming

Use the format `[initials]/[short-description]`, e.g. `jd/add-date-column-support`.

### Running Commands

This is a Turborepo monorepo. Always use `--filter` to target this package:

```sh
# Type-check
pnpm turbo typecheck --filter=@osdk/react-components
# Run tests
pnpm turbo test --filter=@osdk/react-components
# Lint (ESLint + dprint)
pnpm --dir packages/react-components lint
# Auto-fix lint issues
pnpm --dir packages/react-components fix-lint
# Run vitest directly (useful during development)
pnpm --dir packages/react-components vitest run
```

> **Important:** Do **not** use `pnpm --dir /path turbo` or `cd /path && pnpm turbo`. The `--dir` flag breaks Turbo. Use `--filter` instead.

### Formatting

This project uses [dprint](https://dprint.dev/) for formatting. Format changed files before committing:

```sh
npx dprint fmt
```

The pre-commit hook runs `dprint check` and will reject unformatted code.

### Running the Example App

The `packages/e2e.sandbox.peopleapp` package serves as a live playground:

1. Create a `.env.local` file based on `.env.local.sample` in that package.
2. Transpile its dependencies: `pnpm --filter @osdk/e2e.sandbox.peopleapp transpileAllDeps`
3. Start the dev server: `pnpm --filter @osdk/e2e.sandbox.peopleapp dev`

## Component Architecture

All components follow a **layered architecture**. Understanding this pattern is required before contributing new components.

### Core Layers

1. **OSDK Component Layer** (e.g., `ObjectTable`, `FilterList`)
   - Handles data fetching using `@osdk/react` hooks
   - Converts OSDK types to primitive data structures
   - Contains no styling or UI interaction logic
2. **Base Component Layer** (e.g., `BaseTable`, `BaseFilterList`)
   - Pure UI component with **no OSDK imports**
   - Accepts only primitive props (`string[]`, plain objects, callbacks)
   - Contains all interaction logic and styling
   - Can be reused independently of OSDK
3. **Building Blocks** (optional, for complex components)
   - Sub-components and hooks that can be composed into custom layouts
   - Example: `PdfViewerToolbar`, `PdfViewerSidebar`, `usePdfViewerState`

### Adding a New Component

1. Create a new folder under `src/` (e.g., `src/my-component/`).
2. Start with the **Base component** — focus on interactions and styling first.
3. Create the **OSDK wrapper** that handles data fetching and type conversion.
4. Keep the Base component API simple using primitive types.
5. For complex components, consider a building blocks tier with sub-components and hooks.
6. Export the OSDK component (and optionally the Base component) from `src/public/experimental.ts`.

### Folder Structure

```
src/my-component/
  MyComponent.tsx          # OSDK layer
  BaseMyComponent.tsx      # Base layer (OSDK-agnostic)
  hooks/                   # Custom hooks
  components/              # Supporting sub-components
  utils/                   # Helper utilities and types
  __tests__/               # Tests
```

### Export Rules

- **OSDK components** are exported through `src/public/experimental.ts`.
- **Base components** may be exported for advanced use cases.
- **UI primitives** in `src/base-components/` are internal and must **not** be exported.

## Styling Guidelines

- **Never hardcode colors or pixel values.** Use CSS variables for all visual properties.
- **Use `--bp` design tokens first.** Any `--bp` token used must be mapped from an `--osdk` token.
- **Add default styles** to `@osdk/react-components-styles` (`index.css`), not inline.
- **Use CSS modules** (`.module.css`) for component-scoped styles.
- **Combine class names** with the `classnames` utility. Never use template literals for class names.
- **Respect CSS layers.** Component styles belong in the `osdk.components` layer; tokens belong in `osdk.tokens`.
  See the [README CSS Setup section](./README.md#css-setup) and `@osdk/react-components-styles` for details on the layering system.

## Testing

Tests use [Vitest](https://vitest.dev/) with [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) and run in a `happy-dom` environment.

### Writing Tests

- Place test files in `__tests__/` directories alongside the code they test.
- Name test files `*.test.ts` or `*.test.tsx`.
- Test the **Base component layer** independently of OSDK to keep tests fast and focused.
- Test OSDK wrapper behavior (data transformation, hook usage) separately.

### Running Tests

```sh
# Via turbo (recommended for CI parity)
pnpm turbo test --filter=@osdk/react-components
# Via vitest directly (faster iteration)
pnpm --dir packages/react-components vitest run
# Watch mode during development
pnpm --dir packages/react-components vitest
```

## Storybook

The `@osdk/react-components-storybook` package provides an interactive component playground.

### Running Storybook

```sh
# Transpile dependencies first
pnpm --filter @osdk/react-components-storybook transpileAllDeps
# Start Storybook
pnpm --filter @osdk/react-components-storybook dev
```

Storybook runs on `http://localhost:6006`.

### Writing Stories

- Story files live in `packages/react-components-storybook/src/stories/`.
- Follow the [Component Story Format (CSF)](https://storybook.js.org/docs/api/csf).
- Include stories that demonstrate the component's key states: default, loading, error, empty, and edge cases.
- Use the MSW addon for mocking API responses when needed.

## Submitting a Pull Request

1. **Create a branch** from `main` using the naming convention above.
2. **Make your changes.** Keep PRs focused on a single concern.
3. **Verify quality** before pushing:
   ```sh
   pnpm turbo typecheck --filter=@osdk/react-components
   pnpm turbo test --filter=@osdk/react-components
   pnpm --dir packages/react-components lint
   npx dprint fmt
   ```
4. **Add a changeset** (see [Changesets](#changesets) below).
5. **Run a global transpile check** to catch cross-package issues:
   ```sh
   pnpm turbo transpile
   ```
6. **Push and open a PR** against `main`. Fill out the PR template.
7. **Do not force-push** amended commits during review — push new commits so reviewers can see incremental changes.

## Code Review

- A maintainer will review your PR and may request changes.
- Respond to feedback promptly.
- Once approved and CI passes, a maintainer will merge the PR.

## Changesets

Every PR that changes published package code needs **exactly one changeset** per branch.

1. Create a file in `.changeset/` with a descriptive name (e.g., `.changeset/add-date-column.md`).
2. Use YAML front matter to list affected packages and semver bump type:
   ```md
   ---
   "@osdk/react-components":minor
   ---

   Add date column rendering support to ObjectTable
   ```
3. Write a specific summary ("add drag-and-drop reordering to filter list", not "update filter list").
4. Check `.changeset/` before creating — do not create duplicate changesets on the same branch.
5. CI will fail if a changeset is missing for changed packages.

## Contributing to @osdk/react

`@osdk/react-components` is built on top of `@osdk/react`, which provides the core data-fetching hooks. When contributing hooks, choose the right package:

| Hook type                                                           | Package                  | Example                                                          |
| ------------------------------------------------------------------- | ------------------------ | ---------------------------------------------------------------- |
| Reusable, OSDK-aware hooks not tied to a specific component         | `@osdk/react`            | `useOsdkObjects`, `useOsdkAction`, `useDebouncedCallback`        |
| Hooks that manage a specific component's internal state or UI logic | `@osdk/react-components` | `useTableSelection`, `usePdfViewerState`, `useFilterDragAndDrop` |

**Rule of thumb:** If a hook could be useful to application developers outside of any particular component, or could be shared across multiple components, it belongs in `@osdk/react`. If it is tightly coupled to a single component's rendering, interactions, or styling, it belongs in `@osdk/react-components`.

For full guidelines on contributing hooks to `@osdk/react`, see the [`@osdk/react` CONTRIBUTING.md](../react/CONTRIBUTING.md).

## License

By contributing to this project, you agree that your contributions will be licensed under the [Apache 2.0 License](../../LICENSE).
