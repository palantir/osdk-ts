# @osdk/typescript-docs-example-generator

## 0.7.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

### Patch Changes

- Updated dependencies [56c5630]
  - @osdk/typescript-sdk-docs@0.10.0

## 0.6.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

### Patch Changes

- Updated dependencies [f01a8f4]
  - @osdk/typescript-sdk-docs@0.8.0

## 0.5.0

### Minor Changes

- a1bc06f: Simulated release
- 35f2f1a: Add Media inputs/outputs for Queries

### Patch Changes

- Updated dependencies [776ae8a]
- Updated dependencies [beba0cd]
- Updated dependencies [8561a8b]
- Updated dependencies [c4d7052]
- Updated dependencies [35f2f1a]
  - @osdk/typescript-sdk-docs@0.7.0

## 0.5.0-beta.2

### Minor Changes

- 35f2f1a: Add Media inputs/outputs for Queries

### Patch Changes

- Updated dependencies [35f2f1a]
  - @osdk/typescript-sdk-docs@0.7.0-beta.2

## 0.3.0-beta.2

### Minor Changes

- 7cac2f8: Upgrade to latest spec and fix attachment template"

### Patch Changes

- Updated dependencies [7cac2f8]
  - @osdk/typescript-sdk-docs@0.5.0-beta.2

## 0.2.0-beta.0

### Minor Changes

- 81af4c8: A set of compiled examples based on the documentation YAML

### Patch Changes

- Updated dependencies [81af4c8]
  - @osdk/typescript-sdk-docs@0.4.0-beta.6
