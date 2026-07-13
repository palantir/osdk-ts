# @osdk/osdk-docs-context

## 0.9.0

### Minor Changes

- 566ecd3: Add the `u` (unicode) flag to regular expressions to satisfy the require-unicode-regexp lint rule

## 0.8.0

### Minor Changes

- 6010d45: Migrate @osdk/aip-core, @osdk/foundry-config-json, @osdk/seed-compiler, @osdk/seed-helpers, @osdk/oauth, @osdk/faux, and @osdk/osdk-docs-context to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eleventh increment of the repo-wide oxc migration; the standard libraries). Each package is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving.

## 0.7.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

## 0.6.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

## 0.5.0

### Minor Changes

- a1bc06f: Simulated release
- 35f2f1a: Add Media inputs/outputs for Queries

## 0.5.0-beta.2

### Minor Changes

- 35f2f1a: Add Media inputs/outputs for Queries

## 0.4.0-beta.2

### Minor Changes

- 579e518: Move new Media upload docs from 2.6 to 2.1

## 0.3.0-beta.6

### Minor Changes

- 0e863aa: Tweak media upload snippet

## 0.3.0-beta.5

### Minor Changes

- dd8c385: Update upload media ontology edits docs

## 0.3.0-beta.4

### Minor Changes

- a035fdc: Add draft of media upload docs

## 0.3.0-beta.3

### Minor Changes

- 8fe0df0: Add generated context to git

## 0.3.0-beta.2

### Minor Changes

- 9f3455d: Add a separate generator package for osdk docs context to make it independent from example package

## 0.2.0-beta.0

### Minor Changes

- 81af4c8: A set of compiled examples based on the documentation YAML
