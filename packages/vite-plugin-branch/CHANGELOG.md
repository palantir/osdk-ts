# @osdk/vite-plugin-branch

## 2.67.0

### Minor Changes

- aec9d54: Inject the current Foundry branch into a CSP-safe HTML meta tag so switching git branches cannot reuse a stale branch from Vite's optimized dependency cache. The client reads this runtime value from the document, while the Vite plugin accepts the server-only `FOUNDRY_BRANCH_RID` override during development and production builds. Replace any `VITE_FOUNDRY_BRANCH_RID` override with `FOUNDRY_BRANCH_RID`.
- 488376f: Configure the CI JUnit reporter in each package's vitest config instead of passing it as a turbo `--` argument. Turbo folds passthrough arguments into its global hash, so passing them there made every task in a `turbo run test` invocation a cache miss rather than only the `test` tasks. Test configuration only; no runtime or API changes.

## 2.66.0

## 2.65.0

## 2.64.0

## 2.63.0

## 2.62.0

### Minor Changes

- dc46b5d: Add branch-aware local development and update CLI branch detection.
