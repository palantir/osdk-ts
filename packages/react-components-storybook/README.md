# @osdk/react-components-storybook

This package contains Storybook stories showcasing the components from `@osdk/react-components`.

## Development

To run the Storybook locally:

```bash
pnpm install
pnpm dev
```

The Storybook will be available at http://localhost:6006

## Running interaction tests

Stories with a `play` function are run as interaction tests in a headless
Chromium browser via [`@storybook/addon-vitest`](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon).
A failing `play` assertion fails the test (and CI).

Chromium is **not** an npm dependency — the `playwright` package (a devDependency
here) downloads the matching browser binary into a shared cache. Install it once
per machine:

```bash
# from the repo root
pnpm install

# install the Chromium binary once (no --with-deps needed on macOS)
pnpm --filter @osdk/react-components-storybook exec playwright install chromium

# build the browser bundles of the workspace packages the stories import
pnpm turbo transpileBrowser --filter='@osdk/react-components-storybook^...'

# run all interaction tests
pnpm --filter @osdk/react-components-storybook test-storybook
```

Useful variants:

```bash
# a single story file (the argument is a substring match on the file path)
pnpm --filter @osdk/react-components-storybook exec vitest run ObjectTable.stories

# watch mode
pnpm --filter @osdk/react-components-storybook exec vitest
```

These use `--filter` so they work from anywhere in the repo. The Vitest config
that turns stories into tests lives in this package, so running a bare
`pnpm exec vitest …` from the repo root instead picks up the root Vitest setup
and reports "No test files found". If you'd rather use the short
`pnpm exec vitest …` form, `cd packages/react-components-storybook` first.

Notes:

- If you're already running `pnpm dev`, it rebuilds the dependencies on change,
  so you can skip the `transpileBrowser` step.
- `--with-deps` (used in CI) is Linux-only; it installs OS system libraries.
- In CI the tests run in a dedicated job that only triggers when
  `@osdk/react-components` or `@osdk/react-components-storybook` changes.

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
