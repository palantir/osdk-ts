# @osdk/maker-import

## 0.4.1-beta.0

### Patch Changes

- 60aff19: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.
  - @osdk/maker@0.29.1-beta.0
  - @osdk/client.unstable@2.23.1-beta.2

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
