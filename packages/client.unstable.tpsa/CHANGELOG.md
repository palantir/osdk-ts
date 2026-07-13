# @osdk/client.unstable.tpsa

## 0.15.0

### Minor Changes

- 1b33456: Enable the require-await lint rule: drop the redundant `async` keyword from test callbacks that never await, and keep intentionally-async (Promise-returning) functions as-is

## 0.14.0

### Minor Changes

- 0021ee4: Migrate @osdk/client, @osdk/client.unstable, and @osdk/client.unstable.tpsa to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eighth and ninth increments of the repo-wide oxc migration). The conjure-generated src/generated trees in @osdk/client.unstable and @osdk/client.unstable.tpsa are re-included (linted and oxfmt-formatted, matching the prior ESLint + dprint coverage) via per-package nested oxlint configs; @osdk/client's newly-surfaced error-level lint rules are turned off in its nested config to keep the change behavior-preserving.

## 0.13.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

## 0.12.0

### Minor Changes

- bab1421: Add check for bundling to ensure entry points work even if dev deps change.

## 0.11.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

## 0.10.0

### Minor Changes

- 322c5bc: Simulated release
- 35f2f1a: Add Media inputs/outputs for Queries

## 0.10.0-beta.2

### Minor Changes

- 35f2f1a: Add Media inputs/outputs for Queries

## 0.7.0

### Patch Changes

- 322c5bc: Simulated release

## 0.4.0

### Patch Changes

- 322c5bc: Simulated release

## 0.3.0

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.

## 0.3.0-beta.0

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.

## 0.2.0

### Minor Changes

- 1252d94: ESM Only
- d4d6605: Audited and cleaned up deps

## 0.2.0-beta.1

### Minor Changes

- d4d6605: Audited and cleaned up deps

## 0.2.0-beta.0

### Minor Changes

- 1252d94: ESM Only
