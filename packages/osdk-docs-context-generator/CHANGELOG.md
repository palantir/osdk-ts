# @osdk/osdk-docs-context-generator

## 0.6.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

### Patch Changes

- Updated dependencies [56c5630]
  - @osdk/typescript-sdk-docs-examples@0.7.0

## 0.5.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

### Patch Changes

- Updated dependencies [29ab35a]
- Updated dependencies [f01a8f4]
  - @osdk/typescript-sdk-docs-examples@0.6.0

## 0.4.0

### Minor Changes

- 864fcad: Simulated release
- 35f2f1a: Add Media inputs/outputs for Queries

### Patch Changes

- Updated dependencies [a1bc06f]
- Updated dependencies [35f2f1a]
  - @osdk/typescript-sdk-docs-examples@0.5.0

## 0.4.0-beta.2

### Minor Changes

- 35f2f1a: Add Media inputs/outputs for Queries

### Patch Changes

- Updated dependencies [35f2f1a]
  - @osdk/typescript-sdk-docs-examples@0.5.0-beta.2

## 0.2.0-beta.0

### Minor Changes

- 9f3455d: Add a separate generator package for osdk docs context to make it independent from example package
