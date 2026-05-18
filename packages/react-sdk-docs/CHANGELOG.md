# @osdk/react-sdk-docs

## 0.5.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

## 0.4.0

### Minor Changes

- f522327: Render the object-action-parameter alternative hint as a block comment so the trailing comma the template appends after non-last entries isn't swallowed by a line comment

## 0.3.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

## 0.2.0

### Minor Changes

- e431384: add react sdk docs snippets package
- 8561a8b: Render custom type fields in function doc snippets instead of empty `{}`
- 325ec58: fix snippet version key to match dev console sdk version

## 0.2.0-beta.1

### Minor Changes

- 8561a8b: Render custom type fields in function doc snippets instead of empty `{}`

## 0.2.0-beta.0

### Minor Changes

- e431384: add react sdk docs snippets package
