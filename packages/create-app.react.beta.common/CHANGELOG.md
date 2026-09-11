# @osdk/create-app.react.beta.common

## 2.24.0

### Minor Changes

- 488376f: Configure the CI JUnit reporter in each package's vitest config instead of passing it as a turbo `--` argument. Turbo folds passthrough arguments into its global hash, so passing them there made every task in a `turbo run test` invocation a cache miss rather than only the `test` tasks. Test configuration only; no runtime or API changes.
