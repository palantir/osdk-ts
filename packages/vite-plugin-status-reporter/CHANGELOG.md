# @osdk/vite-plugin-status-reporter

## 0.2.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

## 0.1.0

### Minor Changes

- e729602: Will be used to emit status of the app for status server
