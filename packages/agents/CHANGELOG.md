# @osdk/agents

## 0.2.0

### Minor Changes

- 488376f: Configure the CI JUnit reporter in each package's vitest config instead of passing it as a turbo `--` argument. Turbo folds passthrough arguments into its global hash, so passing them there made every task in a `turbo run test` invocation a cache miss rather than only the `test` tasks. Test configuration only; no runtime or API changes.

### Patch Changes

- Updated dependencies [aec9d54]
- Updated dependencies [488376f]
  - @osdk/client@2.67.0
  - @osdk/functions@1.23.0

## 0.1.0

### Minor Changes

- 7e3e7c3: Add the `@osdk/agents` package, exporting `AgentConfig`: the `export const config` an agent declares alongside itself.
- 33f8f4c: Export `withClients`, `getClient`, and `getPlatformClient` from `@osdk/agents/experimental` so an agent can reach the Ontology and Platform SDK clients the platform injected into its invocation.

### Patch Changes

- @osdk/client@2.56.0
