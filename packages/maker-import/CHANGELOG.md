# @osdk/maker-import

## 0.20.0

### Patch Changes

- @osdk/client.unstable@2.46.0
- @osdk/maker@0.47.0

## 0.19.0

### Minor Changes

- 566ecd3: Add the `u` (unicode) flag to regular expressions to satisfy the require-unicode-regexp lint rule

### Patch Changes

- Updated dependencies [566ecd3]
  - @osdk/maker@0.46.0
  - @osdk/client.unstable@2.43.0

## 0.18.0

### Minor Changes

- f49b4af: Migrate @osdk/maker, @osdk/maker-experimental, and @osdk/maker-import to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint. Each package is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving.

### Patch Changes

- Updated dependencies [0021ee4]
- Updated dependencies [f49b4af]
  - @osdk/client.unstable@2.42.0
  - @osdk/maker@0.45.0

## 0.17.0

### Patch Changes

- @osdk/maker@0.44.0
- @osdk/client.unstable@2.41.0

## 0.16.0

### Patch Changes

- Updated dependencies [fcde4c0]
  - @osdk/maker@0.43.0
  - @osdk/client.unstable@2.40.0

## 0.15.0

### Patch Changes

- @osdk/client.unstable@2.38.0
- @osdk/maker@0.41.0

## 0.14.0

### Patch Changes

- @osdk/client.unstable@2.37.0
- @osdk/maker@0.40.0

## 0.13.0

### Patch Changes

- Updated dependencies [59115b1]
  - @osdk/maker@0.39.0
  - @osdk/client.unstable@2.35.0

## 0.12.0

### Patch Changes

- Updated dependencies [07eaaff]
  - @osdk/maker@0.37.0
  - @osdk/client.unstable@2.34.0

## 0.11.0

### Patch Changes

- Updated dependencies [b5d0a61]
- Updated dependencies [833f47a]
  - @osdk/client.unstable@2.32.0
  - @osdk/maker@0.35.0

## 0.10.0

### Patch Changes

- @osdk/client.unstable@2.31.0
- @osdk/maker@0.34.0

## 0.9.0

### Minor Changes

- 08e921c: Bump `foundry-platform-typescript` catalog to 2.63.0 and surface the new CBAC/MANDATORY marking subtype on `ObjectMetadata.Property` via a new `typeMetadata` discriminated-union field. For marking properties, `typeMetadata` is `{ type: "marking"; subtype?: "CBAC" | "MANDATORY" }`, letting consumers distinguish classification-based markings from mandatory markings on object property columns. Future per-`type` metadata should be added as additional variants of `typeMetadata` rather than as new top-level optionals on `Property`.

### Patch Changes

- @osdk/maker@0.33.0
- @osdk/client.unstable@2.29.0

## 0.8.0

### Patch Changes

- Updated dependencies [1bc01d1]
  - @osdk/maker@0.32.0
  - @osdk/client.unstable@2.28.0

## 0.7.0

### Minor Changes

- 5ff7aa5: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.61.0` to `2.63.0`. The OntologyScenarios endpoints now expose a `preview` query-param slot, so `createScenario` and the `EXPERIMENTAL_ScenarioClient` read methods pass `{ preview: true }` directly instead of relying on a fetch-level URL rewrite.

### Patch Changes

- @osdk/client.unstable@2.27.0

## 0.6.0

### Minor Changes

- 8965bdf: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

### Patch Changes

- @osdk/maker@0.31.0
- @osdk/client.unstable@2.25.0

## 0.5.0

### Minor Changes

- 60aff19: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

### Patch Changes

- @osdk/maker@0.30.0
- @osdk/client.unstable@2.24.0

## 0.4.0

### Patch Changes

- Updated dependencies [56c2c9f]
  - @osdk/maker@0.29.0
  - @osdk/client.unstable@2.23.0

## 0.3.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

### Patch Changes

- Updated dependencies [56c5630]
- Updated dependencies [ebc5f0c]
  - @osdk/maker@0.24.0

## 0.2.0

### Minor Changes

- 9ce366a: Maker import codegen

### Patch Changes

- Updated dependencies [a6f4208]
  - @osdk/maker@0.19.0
