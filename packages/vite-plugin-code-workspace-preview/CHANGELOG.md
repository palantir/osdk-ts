# @osdk/vite-plugin-code-workspace-preview

## 0.2.0

### Minor Changes

- 488376f: Configure the CI JUnit reporter in each package's vitest config instead of passing it as a turbo `--` argument. Turbo folds passthrough arguments into its global hash, so passing them there made every task in a `turbo run test` invocation a cache miss rather than only the `test` tasks. Test configuration only; no runtime or API changes.

## 0.1.0

### Minor Changes

- 574979f: Add a Vite plugin that surfaces preview runtime errors. By default, it injects a script in `code-workspaces` mode that posts uncaught errors and unhandled rejections to the parent, so the preview shows a reason instead of a blank screen.
- 93ed68b: Add the monorepolint-required `coverage` block to `vitest.config.mts` so `check-mrl` passes; no runtime change
