# @osdk/vite-plugin-superrepo

## 0.5.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

## 0.4.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

## 0.3.0

### Minor Changes

- 3390ea2: Resolve Python objectSet/object UUID references recursively and detect edit functions via output dataType when ontologyProvenance is absent

## 0.2.0

### Minor Changes

- 3bc5ff7: Implement superrepo plugin
- 0ba4c0c: Support discovering Python edit functions

## 0.2.0-beta.1

### Minor Changes

- 0ba4c0c: Support discovering Python edit functions

## 0.2.0-beta.0

### Minor Changes

- 3bc5ff7: Implement superrepo plugin

### Patch Changes

- @osdk/client@2.8.0-beta.20
