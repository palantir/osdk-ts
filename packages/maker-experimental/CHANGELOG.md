# @osdk/maker-experimental

## 0.40.0

### Minor Changes

- 62f9714: Re-enable the `unicorn/no-useless-switch-case` oxlint rule and drop the redundant empty `case` labels that fell straight through to `default`. Behavior-preserving with no runtime or API changes.

### Patch Changes

- Updated dependencies [62f9714]
  - @osdk/maker@0.49.0
  - @osdk/api@2.48.0
  - @osdk/client.unstable@2.48.0
  - @osdk/generator-converters.ontologyir@2.48.0
  - @osdk/generator-converters.preview@0.30.0

## 0.39.0

### Patch Changes

- @osdk/api@2.47.0
- @osdk/client.unstable@2.47.0
- @osdk/generator-converters.ontologyir@2.47.0
- @osdk/maker@0.48.0
- @osdk/generator-converters.preview@0.29.0

## 0.38.0

### Patch Changes

- @osdk/api@2.46.0
- @osdk/client.unstable@2.46.0
- @osdk/generator-converters.ontologyir@2.46.0
- @osdk/maker@0.47.0
- @osdk/generator-converters.preview@0.28.0

## 0.37.0

### Minor Changes

- 93958d7: Support interface link actions in maker-experimental

### Patch Changes

- Updated dependencies [93958d7]
- Updated dependencies [db2bfa2]
  - @osdk/generator-converters.ontologyir@2.45.0
  - @osdk/generator-converters.preview@0.27.0
  - @osdk/api@2.45.0
  - @osdk/client.unstable@2.45.0

## 0.36.0

### Minor Changes

- 1b33456: Enable the require-await lint rule: drop the redundant `async` keyword from test callbacks that never await, and keep intentionally-async (Promise-returning) functions as-is

### Patch Changes

- Updated dependencies [1b33456]
  - @osdk/client.unstable@2.44.0
  - @osdk/api@2.44.0
  - @osdk/generator-converters.ontologyir@2.44.0

## 0.35.0

### Minor Changes

- 566ecd3: Add the `u` (unicode) flag to regular expressions to satisfy the require-unicode-regexp lint rule

### Patch Changes

- Updated dependencies [da96711]
- Updated dependencies [566ecd3]
  - @osdk/generator-converters.ontologyir@2.43.0
  - @osdk/maker@0.46.0
  - @osdk/api@2.43.0
  - @osdk/client.unstable@2.43.0

## 0.34.0

### Minor Changes

- f49b4af: Migrate @osdk/maker, @osdk/maker-experimental, and @osdk/maker-import to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint. Each package is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving.

### Patch Changes

- Updated dependencies [830d791]
- Updated dependencies [0021ee4]
- Updated dependencies [f49b4af]
  - @osdk/api@2.42.0
  - @osdk/client.unstable@2.42.0
  - @osdk/maker@0.45.0
  - @osdk/generator-converters.ontologyir@2.42.0

## 0.33.0

### Patch Changes

- Updated dependencies [9b150d7]
- Updated dependencies [15a35f2]
  - @osdk/api@2.41.0
  - @osdk/maker@0.44.0
  - @osdk/client.unstable@2.41.0
  - @osdk/generator-converters.ontologyir@2.41.0
  - @osdk/generator-converters.preview@0.26.0

## 0.32.0

### Patch Changes

- Updated dependencies [fcde4c0]
- Updated dependencies [3e915ee]
  - @osdk/maker@0.43.0
  - @osdk/api@2.40.0
  - @osdk/client.unstable@2.40.0
  - @osdk/generator-converters.ontologyir@2.40.0
  - @osdk/generator-converters.preview@0.25.0

## 0.31.0

### Minor Changes

- 397ce96: support interface action type constraint in maker experimental

### Patch Changes

- Updated dependencies [397ce96]
- Updated dependencies [1796140]
  - @osdk/client.unstable@2.39.0
  - @osdk/maker@0.42.0
  - @osdk/api@2.39.0
  - @osdk/generator-converters.ontologyir@2.39.0

## 0.30.0

### Patch Changes

- @osdk/api@2.38.0
- @osdk/client.unstable@2.38.0
- @osdk/generator-converters.ontologyir@2.38.0
- @osdk/maker@0.41.0
- @osdk/generator-converters.preview@0.24.0

## 0.29.0

### Patch Changes

- @osdk/api@2.37.0
- @osdk/client.unstable@2.37.0
- @osdk/generator-converters.ontologyir@2.37.0
- @osdk/maker@0.40.0
- @osdk/generator-converters.preview@0.23.0

## 0.28.0

### Patch Changes

- Updated dependencies [59115b1]
  - @osdk/maker@0.39.0
  - @osdk/generator-converters.preview@0.22.0
  - @osdk/api@2.35.0
  - @osdk/client.unstable@2.35.0
  - @osdk/generator-converters.ontologyir@2.35.0

## 0.27.0

### Minor Changes

- 07eaaff: Fix function backed actions with interfaces
- d9a1c65: Fix FBA metadata
- 5957560: Fix parameter required validation for function backed actions

### Patch Changes

- Updated dependencies [07eaaff]
- Updated dependencies [4a25731]
- Updated dependencies [db028a0]
- Updated dependencies [48eb46e]
- Updated dependencies [ab19740]
  - @osdk/generator-converters.ontologyir@2.34.0
  - @osdk/maker@0.37.0
  - @osdk/api@2.34.0
  - @osdk/client.unstable@2.34.0
  - @osdk/generator-converters.preview@0.21.0

## 0.26.0

### Minor Changes

- cae84bd: Fix optional inputs for OAC FBA
- cf7c06b: Add more type support for empty backing datasets

### Patch Changes

- Updated dependencies [cae84bd]
- Updated dependencies [9e602f2]
- Updated dependencies [0032d94]
- Updated dependencies [a9de941]
  - @osdk/maker@0.36.0
  - @osdk/generator-converters.ontologyir@2.33.0
  - @osdk/api@2.33.0
  - @osdk/client.unstable@2.33.0

## 0.25.0

### Minor Changes

- b5d0a61: transitive OAC imports
- 833f47a: add support for interface action type constraint in ontology as code
- 1bb7513: external recommendations

### Patch Changes

- Updated dependencies [b5d0a61]
- Updated dependencies [06adca1]
- Updated dependencies [833f47a]
  - @osdk/generator-converters.ontologyir@2.32.0
  - @osdk/client.unstable@2.32.0
  - @osdk/maker@0.35.0
  - @osdk/api@2.32.0
  - @osdk/generator-converters.preview@0.20.0

## 0.24.0

### Patch Changes

- Updated dependencies [57cbc6d]
  - @osdk/api@2.31.0
  - @osdk/client.unstable@2.31.0
  - @osdk/generator-converters.ontologyir@2.31.0
  - @osdk/maker@0.34.0
  - @osdk/generator-converters.preview@0.19.0

## 0.23.0

### Patch Changes

- Updated dependencies [08e921c]
  - @osdk/api@2.29.0
  - @osdk/generator-converters.ontologyir@2.29.0
  - @osdk/generator-converters.preview@0.18.0
  - @osdk/maker@0.33.0
  - @osdk/client.unstable@2.29.0

## 0.22.0

### Minor Changes

- 1bc01d1: Add property validation for direct datasources

### Patch Changes

- Updated dependencies [1bc01d1]
  - @osdk/maker@0.32.0
  - @osdk/api@2.28.0
  - @osdk/client.unstable@2.28.0
  - @osdk/generator-converters.ontologyir@2.28.0
  - @osdk/generator-converters.preview@0.17.0

## 0.21.0

### Patch Changes

- Updated dependencies [8965bdf]
- Updated dependencies [bd90dba]
  - @osdk/generator-converters.ontologyir@2.25.0
  - @osdk/generator-converters.preview@0.15.0
  - @osdk/api@2.25.0
  - @osdk/maker@0.31.0
  - @osdk/client.unstable@2.25.0

## 0.20.0

### Minor Changes

- 466aa8a: fix value type block gen

### Patch Changes

- Updated dependencies [a492285]
- Updated dependencies [60aff19]
- Updated dependencies [d087189]
  - @osdk/api@2.24.0
  - @osdk/generator-converters.ontologyir@2.24.0
  - @osdk/generator-converters.preview@0.14.0
  - @osdk/maker@0.30.0
  - @osdk/client.unstable@2.24.0

## 0.19.0

### Minor Changes

- 56c2c9f: write static object file

### Patch Changes

- Updated dependencies [198f219]
- Updated dependencies [56c2c9f]
- Updated dependencies [ef156b6]
- Updated dependencies [8290dd7]
  - @osdk/api@2.23.0
  - @osdk/maker@0.29.0
  - @osdk/client.unstable@2.23.0
  - @osdk/generator-converters.ontologyir@2.23.0
  - @osdk/generator-converters.preview@0.13.0

## 0.18.0

### Minor Changes

- dea392c: Fix maker experimental imports
- d8f3dfd: fix imported interface shapes

### Patch Changes

- Updated dependencies [dea392c]
- Updated dependencies [d8f3dfd]
  - @osdk/generator-converters.ontologyir@2.22.0
  - @osdk/generator-converters.preview@0.12.0
  - @osdk/maker@0.28.0
  - @osdk/api@2.22.0
  - @osdk/client.unstable@2.22.0

## 0.17.0

### Minor Changes

- 6bca4fd: fix cbac default nullability
- 5b89f25: Fix IDP packaging
- b98e084: fix interface resolution for action logic rules

### Patch Changes

- Updated dependencies [1a07c91]
- Updated dependencies [6bca4fd]
- Updated dependencies [5b89f25]
- Updated dependencies [b98e084]
  - @osdk/api@2.21.0
  - @osdk/maker@0.27.0
  - @osdk/generator-converters.ontologyir@2.21.0
  - @osdk/client.unstable@2.21.0
  - @osdk/generator-converters.preview@0.11.0

## 0.16.0

### Minor Changes

- b05a5bc: remove jiti
- be93bc8: Support value types

### Patch Changes

- Updated dependencies [9eb67e4]
  - @osdk/api@2.20.0
  - @osdk/maker@0.26.0
  - @osdk/client.unstable@2.20.0
  - @osdk/generator-converters.ontologyir@2.20.0
  - @osdk/generator-converters.preview@0.10.0

## 0.15.0

### Minor Changes

- 46c553f: fix interface bugs

### Patch Changes

- Updated dependencies [02c796c]
- Updated dependencies [46c553f]
- Updated dependencies [d962309]
  - @osdk/api@2.19.0
  - @osdk/generator-converters.ontologyir@2.19.0
  - @osdk/maker@0.25.0
  - @osdk/client.unstable@2.19.0
  - @osdk/generator-converters.preview@0.9.0

## 0.14.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).
- ebc5f0c: Experimental function backed actions in OAC

### Patch Changes

- Updated dependencies [56c5630]
- Updated dependencies [ebc5f0c]
- Updated dependencies [17d7ba2]
  - @osdk/api@2.16.0
  - @osdk/client.unstable@2.16.0
  - @osdk/generator-converters.ontologyir@2.16.0
  - @osdk/generator-converters.preview@0.8.0
  - @osdk/maker@0.24.0

## 0.13.0

### Patch Changes

- @osdk/api@2.15.0
- @osdk/client.unstable@2.15.0
- @osdk/maker@0.23.0

## 0.12.0

### Minor Changes

- 2f40eee: Support edits history

### Patch Changes

- Updated dependencies [02a5765]
- Updated dependencies [bab1421]
- Updated dependencies [2f40eee]
- Updated dependencies [20e9678]
  - @osdk/maker@0.22.0
  - @osdk/client.unstable@2.14.0
  - @osdk/api@2.14.0

## 0.11.0

### Patch Changes

- @osdk/api@2.13.0
- @osdk/client.unstable@2.13.0
- @osdk/maker@0.21.0

## 0.10.0

### Patch Changes

- Updated dependencies [9225ee3]
- Updated dependencies [91f34a9]
  - @osdk/maker@0.20.0
  - @osdk/api@2.12.0
  - @osdk/client.unstable@2.12.0

## 0.9.0

### Minor Changes

- a6f4208: configure entity perms in OAC

### Patch Changes

- Updated dependencies [a6f4208]
  - @osdk/client.unstable@2.11.0
  - @osdk/maker@0.19.0
  - @osdk/api@2.11.0

## 0.8.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs
- b1b8a8b: Support string analyzers
- 32691ed: Make compass resource shape optional for output datasets
- 9333a4a: Support imports in maker experimental

### Patch Changes

- Updated dependencies [f01a8f4]
- Updated dependencies [151d258]
- Updated dependencies [b1b8a8b]
  - @osdk/client.unstable@2.10.0
  - @osdk/maker@0.18.0
  - @osdk/api@2.10.0

## 0.7.0

### Minor Changes

- 492db18: Expand the set of types acceptable in references

### Patch Changes

- Updated dependencies [b90fb8e]
- Updated dependencies [cbc8e9c]
- Updated dependencies [e8d14a0]
- Updated dependencies [2394ca7]
- Updated dependencies [492db18]
  - @osdk/maker@0.17.0
  - @osdk/api@2.9.0
  - @osdk/client.unstable@2.9.0

## 0.6.0

### Minor Changes

- 425cb92: Simulated release
- f487a6a: Maker experimental
- e462938: Support PSGs in OAC
- a73bafd: Fix link type block data gen
- fd3f6d3: Add support for empty backing datasources
- 9ee82f4: Dedupe many-to-many PK property names in datasource
- 771e3e6: Update datasource generation
- 764fe55: Support multi block-generation-result outputs.
- e8ca289: Fix key resolution
- 35f2f1a: Add Media inputs/outputs for Queries
- 4ec5877: Fix link dataset shapes
- eac64f4: Link backing dataset generation

### Patch Changes

- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [cc7f505]
- Updated dependencies [4bb9769]
- Updated dependencies [8f92197]
- Updated dependencies [f294f5a]
- Updated dependencies [963626f]
- Updated dependencies [f487a6a]
- Updated dependencies [e462938]
- Updated dependencies [6499ff9]
- Updated dependencies [0e45a37]
- Updated dependencies [fcf81ba]
- Updated dependencies [ab50d31]
- Updated dependencies [034081a]
- Updated dependencies [77aa4a9]
- Updated dependencies [fd3f6d3]
- Updated dependencies [9ee82f4]
- Updated dependencies [0df859a]
- Updated dependencies [5b938ef]
- Updated dependencies [d284bf2]
- Updated dependencies [4ef6adc]
- Updated dependencies [60b5ffb]
- Updated dependencies [7fa6de3]
- Updated dependencies [2b15836]
- Updated dependencies [684b6c6]
- Updated dependencies [8c30908]
- Updated dependencies [acb4ed6]
- Updated dependencies [e8ca289]
- Updated dependencies [4a856cb]
- Updated dependencies [b68cebd]
- Updated dependencies [35f2f1a]
- Updated dependencies [e0ba9eb]
- Updated dependencies [972bda6]
- Updated dependencies [6941b4f]
- Updated dependencies [e9f9f58]
- Updated dependencies [eac64f4]
- Updated dependencies [61e33ab]
  - @osdk/api@2.8.0
  - @osdk/client.unstable@2.8.0
  - @osdk/maker@0.16.0

## 0.6.0-beta.9

### Minor Changes

- 4ec5877: Fix link dataset shapes

### Patch Changes

- @osdk/api@2.8.0-beta.32
- @osdk/client.unstable@2.8.0-beta.32

## 0.6.0-beta.8

### Minor Changes

- a73bafd: Fix link type block data gen
- e8ca289: Fix key resolution

### Patch Changes

- Updated dependencies [e8ca289]
  - @osdk/maker@0.16.0-beta.15

## 0.6.0-beta.7

### Minor Changes

- 771e3e6: Update datasource generation

### Patch Changes

- Updated dependencies [f294f5a]
- Updated dependencies [d284bf2]
- Updated dependencies [684b6c6]
- Updated dependencies [b68cebd]
  - @osdk/api@2.8.0-beta.28
  - @osdk/maker@0.16.0-beta.14
  - @osdk/client.unstable@2.8.0-beta.28

## 0.6.0-beta.6

### Minor Changes

- 9ee82f4: Dedupe many-to-many PK property names in datasource

### Patch Changes

- Updated dependencies [9ee82f4]
- Updated dependencies [60b5ffb]
- Updated dependencies [61e33ab]
  - @osdk/maker@0.16.0-beta.13
  - @osdk/api@2.8.0-beta.26
  - @osdk/client.unstable@2.8.0-beta.26

## 0.6.0-beta.5

### Minor Changes

- fd3f6d3: Add support for empty backing datasources
- 764fe55: Support multi block-generation-result outputs.

### Patch Changes

- Updated dependencies [cc7f505]
- Updated dependencies [4bb9769]
- Updated dependencies [0e45a37]
- Updated dependencies [fcf81ba]
- Updated dependencies [fd3f6d3]
  - @osdk/maker@0.16.0-beta.11
  - @osdk/api@2.8.0-beta.23
  - @osdk/client.unstable@2.8.0-beta.23

## 0.6.0-beta.4

### Minor Changes

- 35f2f1a: Add Media inputs/outputs for Queries

### Patch Changes

- Updated dependencies [35f2f1a]
  - @osdk/api@2.8.0-beta.14
  - @osdk/client.unstable@2.8.0-beta.14
  - @osdk/maker@0.16.0-beta.8

## 0.6.0-beta.3

### Minor Changes

- f487a6a: Maker experimental

### Patch Changes

- Updated dependencies [f487a6a]
- Updated dependencies [acb4ed6]
  - @osdk/client.unstable@2.8.0-beta.11
  - @osdk/maker@0.16.0-beta.7
  - @osdk/api@2.8.0-beta.11

## 0.6.0-beta.2

### Minor Changes

- e462938: Support PSGs in OAC

### Patch Changes

- @osdk/api@2.8.0-beta.2

## 0.3.0

### Patch Changes

- 425cb92: Simulated release
- a6f49e9: Fix Maker Rid Generation
- Updated dependencies [322c5bc]
- Updated dependencies [7160276]
- Updated dependencies [7bdac45]
- Updated dependencies [37eb75b]
- Updated dependencies [7b97128]
- Updated dependencies [76905f5]
- Updated dependencies [20962bc]
- Updated dependencies [052a96b]
- Updated dependencies [ca1fabe]
- Updated dependencies [e48be06]
  - @osdk/api@2.5.0

## 0.3.0-beta.5

### Minor Changes

- e62408b: Fix Maker Rid Generation

### Patch Changes

- Updated dependencies [b7edfb5]
  - @osdk/api@2.5.0-beta.14

## 0.3.0-beta.4

### Patch Changes

- @osdk/api@2.5.0-beta.4

## 0.3.0-beta.3

### Patch Changes

- Updated dependencies [7bdac45]
- Updated dependencies [20962bc]
- Updated dependencies [e48be06]
  - @osdk/api@2.5.0-beta.3

## 0.3.0-beta.2

### Patch Changes

- Updated dependencies [7160276]
- Updated dependencies [76905f5]
  - @osdk/api@2.5.0-beta.2

## 0.2.0-beta.0

### Minor Changes

- 3ff44da: Existing OTs as action parameters in OAC

### Patch Changes

- @osdk/api@2.4.0-beta.17
