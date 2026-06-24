# @osdk/vite-plugin-oac

## 0.37.0

### Patch Changes

- Updated dependencies [397ce96]
- Updated dependencies [1796140]
  - @osdk/client.unstable@2.39.0
  - @osdk/maker@0.42.0
  - @osdk/api@2.39.0
  - @osdk/generator-converters.ontologyir@2.39.0
  - @osdk/cli@0.63.0

## 0.36.0

### Patch Changes

- @osdk/api@2.38.0
- @osdk/client.unstable@2.38.0
- @osdk/generator-converters.ontologyir@2.38.0
- @osdk/faux@0.30.0
- @osdk/maker@0.41.0
- @osdk/cli@0.62.0

## 0.35.0

### Patch Changes

- @osdk/cli@0.61.0
- @osdk/api@2.37.0
- @osdk/client.unstable@2.37.0
- @osdk/generator-converters.ontologyir@2.37.0
- @osdk/faux@0.29.0
- @osdk/maker@0.40.0

## 0.34.0

### Patch Changes

- @osdk/api@2.36.0
- @osdk/client.unstable@2.36.0
- @osdk/generator-converters.ontologyir@2.36.0
- @osdk/cli@0.60.0

## 0.33.0

### Patch Changes

- Updated dependencies [59115b1]
  - @osdk/maker@0.39.0
  - @osdk/api@2.35.0
  - @osdk/client.unstable@2.35.0
  - @osdk/generator-converters.ontologyir@2.35.0
  - @osdk/cli@0.59.0
  - @osdk/faux@0.28.0

## 0.32.0

### Patch Changes

- Updated dependencies [07eaaff]
- Updated dependencies [4a25731]
- Updated dependencies [db028a0]
- Updated dependencies [48eb46e]
- Updated dependencies [ab19740]
  - @osdk/generator-converters.ontologyir@2.34.0
  - @osdk/maker@0.37.0
  - @osdk/api@2.34.0
  - @osdk/faux@0.27.0
  - @osdk/cli@0.58.0
  - @osdk/client.unstable@2.34.0

## 0.31.0

### Patch Changes

- Updated dependencies [cae84bd]
- Updated dependencies [9e602f2]
- Updated dependencies [0032d94]
- Updated dependencies [a9de941]
  - @osdk/maker@0.36.0
  - @osdk/generator-converters.ontologyir@2.33.0
  - @osdk/api@2.33.0
  - @osdk/client.unstable@2.33.0
  - @osdk/cli@0.57.0

## 0.30.0

### Patch Changes

- Updated dependencies [b5d0a61]
- Updated dependencies [06adca1]
- Updated dependencies [833f47a]
- Updated dependencies [79f8a6e]
  - @osdk/generator-converters.ontologyir@2.32.0
  - @osdk/client.unstable@2.32.0
  - @osdk/maker@0.35.0
  - @osdk/api@2.32.0
  - @osdk/faux@0.26.0
  - @osdk/cli@0.56.0

## 0.29.0

### Patch Changes

- Updated dependencies [57cbc6d]
  - @osdk/api@2.31.0
  - @osdk/cli@0.55.0
  - @osdk/client.unstable@2.31.0
  - @osdk/generator-converters.ontologyir@2.31.0
  - @osdk/faux@0.25.0
  - @osdk/maker@0.34.0

## 0.28.0

### Patch Changes

- @osdk/api@2.30.0
- @osdk/client.unstable@2.30.0
- @osdk/generator-converters.ontologyir@2.30.0
- @osdk/cli@0.54.0

## 0.27.0

### Minor Changes

- 08e921c: Bump `foundry-platform-typescript` catalog to 2.63.0 and surface the new CBAC/MANDATORY marking subtype on `ObjectMetadata.Property` via a new `typeMetadata` discriminated-union field. For marking properties, `typeMetadata` is `{ type: "marking"; subtype?: "CBAC" | "MANDATORY" }`, letting consumers distinguish classification-based markings from mandatory markings on object property columns. Future per-`type` metadata should be added as additional variants of `typeMetadata` rather than as new top-level optionals on `Property`.

### Patch Changes

- Updated dependencies [08e921c]
  - @osdk/api@2.29.0
  - @osdk/faux@0.24.0
  - @osdk/generator-converters.ontologyir@2.29.0
  - @osdk/maker@0.33.0
  - @osdk/cli@0.53.0
  - @osdk/client.unstable@2.29.0

## 0.26.0

### Patch Changes

- Updated dependencies [58922c1]
- Updated dependencies [1bc01d1]
  - @osdk/faux@0.23.0
  - @osdk/maker@0.32.0
  - @osdk/api@2.28.0
  - @osdk/client.unstable@2.28.0
  - @osdk/generator-converters.ontologyir@2.28.0
  - @osdk/cli@0.52.0

## 0.25.0

### Minor Changes

- 5ff7aa5: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.61.0` to `2.63.0`. The OntologyScenarios endpoints now expose a `preview` query-param slot, so `createScenario` and the `EXPERIMENTAL_ScenarioClient` read methods pass `{ preview: true }` directly instead of relying on a fetch-level URL rewrite.

### Patch Changes

- Updated dependencies [5ff7aa5]
  - @osdk/faux@0.22.0
  - @osdk/generator-converters.ontologyir@2.27.0
  - @osdk/api@2.27.0
  - @osdk/client.unstable@2.27.0
  - @osdk/cli@0.51.0

## 0.24.0

### Patch Changes

- @osdk/api@2.26.0
- @osdk/client.unstable@2.26.0
- @osdk/generator-converters.ontologyir@2.26.0
- @osdk/cli@0.50.0

## 0.23.0

### Minor Changes

- 8965bdf: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

### Patch Changes

- Updated dependencies [8965bdf]
- Updated dependencies [bd90dba]
  - @osdk/faux@0.21.0
  - @osdk/generator-converters.ontologyir@2.25.0
  - @osdk/api@2.25.0
  - @osdk/maker@0.31.0
  - @osdk/cli@0.49.0
  - @osdk/client.unstable@2.25.0

## 0.22.0

### Minor Changes

- 60aff19: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

### Patch Changes

- Updated dependencies [a492285]
- Updated dependencies [60aff19]
- Updated dependencies [d087189]
  - @osdk/api@2.24.0
  - @osdk/faux@0.20.0
  - @osdk/generator-converters.ontologyir@2.24.0
  - @osdk/maker@0.30.0
  - @osdk/cli@0.48.0
  - @osdk/client.unstable@2.24.0

## 0.21.0

### Patch Changes

- Updated dependencies [198f219]
- Updated dependencies [56c2c9f]
- Updated dependencies [ef156b6]
- Updated dependencies [8290dd7]
  - @osdk/api@2.23.0
  - @osdk/maker@0.29.0
  - @osdk/cli@0.47.0
  - @osdk/client.unstable@2.23.0
  - @osdk/generator-converters.ontologyir@2.23.0
  - @osdk/faux@0.19.0

## 0.20.0

### Patch Changes

- Updated dependencies [dea392c]
- Updated dependencies [d8f3dfd]
  - @osdk/generator-converters.ontologyir@2.22.0
  - @osdk/maker@0.28.0
  - @osdk/cli@0.46.0
  - @osdk/api@2.22.0
  - @osdk/client.unstable@2.22.0

## 0.19.0

### Patch Changes

- Updated dependencies [1a07c91]
- Updated dependencies [6bca4fd]
- Updated dependencies [5b89f25]
- Updated dependencies [b98e084]
  - @osdk/api@2.21.0
  - @osdk/maker@0.27.0
  - @osdk/generator-converters.ontologyir@2.21.0
  - @osdk/faux@0.18.0
  - @osdk/cli@0.45.0
  - @osdk/client.unstable@2.21.0

## 0.18.0

### Patch Changes

- Updated dependencies [9eb67e4]
  - @osdk/api@2.20.0
  - @osdk/faux@0.17.0
  - @osdk/maker@0.26.0
  - @osdk/cli@0.44.0
  - @osdk/client.unstable@2.20.0
  - @osdk/generator-converters.ontologyir@2.20.0

## 0.17.0

### Patch Changes

- Updated dependencies [02c796c]
- Updated dependencies [46c553f]
- Updated dependencies [ecc5b36]
- Updated dependencies [d962309]
  - @osdk/faux@0.16.0
  - @osdk/api@2.19.0
  - @osdk/generator-converters.ontologyir@2.19.0
  - @osdk/maker@0.25.0
  - @osdk/cli@0.43.0
  - @osdk/client.unstable@2.19.0

## 0.16.0

### Patch Changes

- Updated dependencies [2f3271b]
  - @osdk/faux@0.15.0
  - @osdk/api@2.18.0
  - @osdk/client.unstable@2.18.0
  - @osdk/generator-converters.ontologyir@2.18.0
  - @osdk/cli@0.42.0

## 0.15.0

### Patch Changes

- Updated dependencies [147166c]
- Updated dependencies [9be8339]
  - @osdk/api@2.17.0
  - @osdk/faux@0.14.0
  - @osdk/cli@0.41.0
  - @osdk/client.unstable@2.17.0
  - @osdk/generator-converters.ontologyir@2.17.0

## 0.14.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

### Patch Changes

- Updated dependencies [56c5630]
- Updated dependencies [ebc5f0c]
- Updated dependencies [17d7ba2]
  - @osdk/api@2.16.0
  - @osdk/cli@0.40.0
  - @osdk/client.unstable@2.16.0
  - @osdk/faux@0.13.0
  - @osdk/generator-converters.ontologyir@2.16.0
  - @osdk/maker@0.24.0

## 0.13.0

### Patch Changes

- @osdk/api@2.15.0
- @osdk/client.unstable@2.15.0
- @osdk/generator-converters.ontologyir@2.15.0
- @osdk/faux@0.12.0
- @osdk/maker@0.23.0
- @osdk/cli@0.39.0

## 0.12.0

### Patch Changes

- Updated dependencies [02a5765]
- Updated dependencies [bab1421]
- Updated dependencies [2f40eee]
- Updated dependencies [20e9678]
  - @osdk/generator-converters.ontologyir@2.14.0
  - @osdk/maker@0.22.0
  - @osdk/client.unstable@2.14.0
  - @osdk/cli@0.38.0
  - @osdk/api@2.14.0
  - @osdk/faux@0.11.0

## 0.11.0

### Patch Changes

- @osdk/api@2.13.0
- @osdk/client.unstable@2.13.0
- @osdk/generator-converters.ontologyir@2.13.0
- @osdk/faux@0.10.0
- @osdk/maker@0.21.0
- @osdk/cli@0.37.0

## 0.10.0

### Patch Changes

- Updated dependencies [df1a4f8]
- Updated dependencies [df1a4f8]
- Updated dependencies [9225ee3]
- Updated dependencies [91f34a9]
  - @osdk/cli@0.36.0
  - @osdk/faux@0.9.0
  - @osdk/maker@0.20.0
  - @osdk/api@2.12.0
  - @osdk/client.unstable@2.12.0
  - @osdk/generator-converters.ontologyir@2.12.0

## 0.9.0

### Patch Changes

- Updated dependencies [a6f4208]
  - @osdk/generator-converters.ontologyir@2.11.0
  - @osdk/client.unstable@2.11.0
  - @osdk/maker@0.19.0
  - @osdk/api@2.11.0
  - @osdk/cli@0.35.0

## 0.8.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs

### Patch Changes

- Updated dependencies [f01a8f4]
- Updated dependencies [151d258]
- Updated dependencies [1a0f772]
- Updated dependencies [b1b8a8b]
  - @osdk/generator-converters.ontologyir@2.10.0
  - @osdk/client.unstable@2.10.0
  - @osdk/maker@0.18.0
  - @osdk/faux@0.8.0
  - @osdk/api@2.10.0
  - @osdk/cli@0.34.0

## 0.7.0

### Patch Changes

- Updated dependencies [b90fb8e]
- Updated dependencies [cbc8e9c]
- Updated dependencies [e8d14a0]
- Updated dependencies [40fe279]
- Updated dependencies [3390ea2]
- Updated dependencies [2394ca7]
- Updated dependencies [492db18]
  - @osdk/maker@0.17.0
  - @osdk/api@2.9.0
  - @osdk/faux@0.7.0
  - @osdk/cli@0.33.0
  - @osdk/generator-converters.ontologyir@2.9.0
  - @osdk/client.unstable@2.9.0

## 0.6.0

### Minor Changes

- 150da1a: Simulated release
- 35f2f1a: Add Media inputs/outputs for Queries
- 00677eb: Upgrade Storybook to v10 and add MCP addon.

### Patch Changes

- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [150da1a]
- Updated dependencies [150da1a]
- Updated dependencies [322c5bc]
- Updated dependencies [cc7f505]
- Updated dependencies [4bb9769]
- Updated dependencies [8f92197]
- Updated dependencies [abb0e0f]
- Updated dependencies [4762f4b]
- Updated dependencies [f294f5a]
- Updated dependencies [963626f]
- Updated dependencies [f487a6a]
- Updated dependencies [4da867d]
- Updated dependencies [e462938]
- Updated dependencies [6499ff9]
- Updated dependencies [908b519]
- Updated dependencies [0e45a37]
- Updated dependencies [fcf81ba]
- Updated dependencies [ab50d31]
- Updated dependencies [034081a]
- Updated dependencies [77aa4a9]
- Updated dependencies [fd3f6d3]
- Updated dependencies [9ee82f4]
- Updated dependencies [0df859a]
- Updated dependencies [ef0cd72]
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
- Updated dependencies [cde6b85]
- Updated dependencies [e0ba9eb]
- Updated dependencies [32c6a0c]
- Updated dependencies [972bda6]
- Updated dependencies [12fe33f]
- Updated dependencies [6941b4f]
- Updated dependencies [46f0a47]
- Updated dependencies [e9f9f58]
- Updated dependencies [4470c0d]
- Updated dependencies [eac64f4]
- Updated dependencies [61e33ab]
  - @osdk/api@2.8.0
  - @osdk/cli@0.32.0
  - @osdk/client.unstable@2.8.0
  - @osdk/faux@0.6.0
  - @osdk/generator-converters.ontologyir@2.8.0
  - @osdk/maker@0.16.0

## 0.6.0-beta.33

### Patch Changes

- Updated dependencies [46f0a47]
  - @osdk/generator-converters.ontologyir@2.8.0-beta.32
  - @osdk/faux@0.6.0-beta.7
  - @osdk/api@2.8.0-beta.32
  - @osdk/client.unstable@2.8.0-beta.32
  - @osdk/cli@0.32.0-beta.5

## 0.6.0-beta.32

### Patch Changes

- @osdk/api@2.8.0-beta.31
- @osdk/client.unstable@2.8.0-beta.31
- @osdk/generator-converters.ontologyir@2.8.0-beta.31

## 0.6.0-beta.31

### Patch Changes

- Updated dependencies [4ef6adc]
  - @osdk/api@2.8.0-beta.30
  - @osdk/client.unstable@2.8.0-beta.30
  - @osdk/generator-converters.ontologyir@2.8.0-beta.30

## 0.6.0-beta.30

### Patch Changes

- Updated dependencies [4a856cb]
  - @osdk/api@2.8.0-beta.29
  - @osdk/client.unstable@2.8.0-beta.29
  - @osdk/generator-converters.ontologyir@2.8.0-beta.29

## 0.6.0-beta.29

### Patch Changes

- Updated dependencies [f294f5a]
- Updated dependencies [d284bf2]
- Updated dependencies [684b6c6]
- Updated dependencies [b68cebd]
- Updated dependencies [12fe33f]
  - @osdk/api@2.8.0-beta.28
  - @osdk/maker@0.16.0-beta.14
  - @osdk/faux@0.6.0-beta.6
  - @osdk/generator-converters.ontologyir@2.8.0-beta.28
  - @osdk/client.unstable@2.8.0-beta.28

## 0.6.0-beta.28

### Patch Changes

- @osdk/api@2.8.0-beta.27
- @osdk/client.unstable@2.8.0-beta.27
- @osdk/generator-converters.ontologyir@2.8.0-beta.27
- @osdk/cli@0.32.0-beta.4

## 0.6.0-beta.27

### Patch Changes

- Updated dependencies [9ee82f4]
- Updated dependencies [60b5ffb]
- Updated dependencies [61e33ab]
  - @osdk/maker@0.16.0-beta.13
  - @osdk/api@2.8.0-beta.26
  - @osdk/client.unstable@2.8.0-beta.26
  - @osdk/generator-converters.ontologyir@2.8.0-beta.26

## 0.6.0-beta.26

### Patch Changes

- Updated dependencies [0df859a]
  - @osdk/api@2.8.0-beta.25
  - @osdk/client.unstable@2.8.0-beta.25
  - @osdk/generator-converters.ontologyir@2.8.0-beta.25

## 0.6.0-beta.25

### Patch Changes

- Updated dependencies [77aa4a9]
  - @osdk/maker@0.16.0-beta.12
  - @osdk/api@2.8.0-beta.24
  - @osdk/client.unstable@2.8.0-beta.24
  - @osdk/generator-converters.ontologyir@2.8.0-beta.24

## 0.6.0-beta.24

### Patch Changes

- Updated dependencies [cc7f505]
- Updated dependencies [4bb9769]
- Updated dependencies [0e45a37]
- Updated dependencies [fcf81ba]
- Updated dependencies [fd3f6d3]
- Updated dependencies [32c6a0c]
  - @osdk/maker@0.16.0-beta.11
  - @osdk/api@2.8.0-beta.23
  - @osdk/generator-converters.ontologyir@2.8.0-beta.23
  - @osdk/client.unstable@2.8.0-beta.23

## 0.6.0-beta.23

### Patch Changes

- @osdk/api@2.8.0-beta.22
- @osdk/client.unstable@2.8.0-beta.22
- @osdk/generator-converters.ontologyir@2.8.0-beta.22

## 0.6.0-beta.22

### Minor Changes

- 00677eb: Upgrade Storybook to v10 and add MCP addon.

### Patch Changes

- @osdk/api@2.8.0-beta.21
- @osdk/client.unstable@2.8.0-beta.21
- @osdk/generator-converters.ontologyir@2.8.0-beta.21

## 0.6.0-beta.21

### Patch Changes

- @osdk/api@2.8.0-beta.20
- @osdk/client.unstable@2.8.0-beta.20
- @osdk/generator-converters.ontologyir@2.8.0-beta.20

## 0.6.0-beta.20

### Patch Changes

- Updated dependencies [4da867d]
- Updated dependencies [cde6b85]
  - @osdk/faux@0.6.0-beta.5
  - @osdk/generator-converters.ontologyir@2.8.0-beta.19
  - @osdk/api@2.8.0-beta.19
  - @osdk/client.unstable@2.8.0-beta.19

## 0.6.0-beta.19

### Patch Changes

- Updated dependencies [4762f4b]
  - @osdk/generator-converters.ontologyir@2.8.0-beta.18
  - @osdk/api@2.8.0-beta.18
  - @osdk/client.unstable@2.8.0-beta.18

## 0.6.0-beta.18

### Patch Changes

- Updated dependencies [8c30908]
  - @osdk/api@2.8.0-beta.17
  - @osdk/client.unstable@2.8.0-beta.17
  - @osdk/generator-converters.ontologyir@2.8.0-beta.17

## 0.6.0-beta.17

### Patch Changes

- Updated dependencies [6941b4f]
  - @osdk/client.unstable@2.8.0-beta.16
  - @osdk/maker@0.16.0-beta.10
  - @osdk/api@2.8.0-beta.16
  - @osdk/generator-converters.ontologyir@2.8.0-beta.16

## 0.6.0-beta.16

### Patch Changes

- @osdk/api@2.8.0-beta.15
- @osdk/client.unstable@2.8.0-beta.15
- @osdk/generator-converters.ontologyir@2.8.0-beta.15

## 0.6.0-beta.15

### Minor Changes

- 35f2f1a: Add Media inputs/outputs for Queries

### Patch Changes

- Updated dependencies [35f2f1a]
  - @osdk/api@2.8.0-beta.14
  - @osdk/cli@0.32.0-beta.3
  - @osdk/client.unstable@2.8.0-beta.14
  - @osdk/faux@0.6.0-beta.4
  - @osdk/generator-converters.ontologyir@2.8.0-beta.14
  - @osdk/maker@0.16.0-beta.8

## 0.6.0-beta.14

### Patch Changes

- Updated dependencies [4470c0d]
  - @osdk/faux@0.6.0-beta.3
  - @osdk/api@2.8.0-beta.13
  - @osdk/client.unstable@2.8.0-beta.13
  - @osdk/generator-converters.ontologyir@2.8.0-beta.13

## 0.6.0-beta.13

### Patch Changes

- @osdk/api@2.8.0-beta.12
- @osdk/client.unstable@2.8.0-beta.12
- @osdk/generator-converters.ontologyir@2.8.0-beta.12

## 0.6.0-beta.12

### Patch Changes

- Updated dependencies [f487a6a]
- Updated dependencies [acb4ed6]
  - @osdk/client.unstable@2.8.0-beta.11
  - @osdk/maker@0.16.0-beta.7
  - @osdk/api@2.8.0-beta.11
  - @osdk/generator-converters.ontologyir@2.8.0-beta.11

## 0.6.0-beta.11

### Patch Changes

- Updated dependencies [963626f]
- Updated dependencies [972bda6]
  - @osdk/maker@0.16.0-beta.6
  - @osdk/client.unstable@2.8.0-beta.10
  - @osdk/api@2.8.0-beta.10
  - @osdk/generator-converters.ontologyir@2.8.0-beta.10

## 0.6.0-beta.10

### Patch Changes

- Updated dependencies [ef0cd72]
  - @osdk/cli@0.32.0-beta.2

## 0.6.0-beta.9

### Patch Changes

- Updated dependencies [abb0e0f]
  - @osdk/generator-converters.ontologyir@2.8.0-beta.9
  - @osdk/faux@0.6.0-beta.2
  - @osdk/api@2.8.0-beta.9
  - @osdk/client.unstable@2.8.0-beta.9

## 0.6.0-beta.8

### Patch Changes

- @osdk/api@2.8.0-beta.8
- @osdk/client.unstable@2.8.0-beta.8
- @osdk/generator-converters.ontologyir@2.8.0-beta.8

## 0.6.0-beta.7

### Patch Changes

- Updated dependencies [034081a]
  - @osdk/client.unstable@2.8.0-beta.7
  - @osdk/maker@0.16.0-beta.5
  - @osdk/api@2.8.0-beta.7
  - @osdk/generator-converters.ontologyir@2.8.0-beta.7

## 0.6.0-beta.6

### Patch Changes

- Updated dependencies [ab50d31]
- Updated dependencies [2b15836]
- Updated dependencies [e0ba9eb]
  - @osdk/maker@0.16.0-beta.4
  - @osdk/api@2.8.0-beta.6
  - @osdk/client.unstable@2.8.0-beta.6
  - @osdk/generator-converters.ontologyir@2.8.0-beta.6

## 0.6.0-beta.5

### Patch Changes

- Updated dependencies [8f92197]
- Updated dependencies [6499ff9]
- Updated dependencies [5b938ef]
- Updated dependencies [e9f9f58]
  - @osdk/maker@0.16.0-beta.3
  - @osdk/client.unstable@2.8.0-beta.5
  - @osdk/api@2.8.0-beta.5
  - @osdk/generator-converters.ontologyir@2.8.0-beta.5

## 0.6.0-beta.4

### Patch Changes

- @osdk/api@2.8.0-beta.4
- @osdk/client.unstable@2.8.0-beta.4
- @osdk/generator-converters.ontologyir@2.8.0-beta.4

## 0.6.0-beta.3

### Patch Changes

- @osdk/api@2.8.0-beta.3
- @osdk/client.unstable@2.8.0-beta.3
- @osdk/generator-converters.ontologyir@2.8.0-beta.3

## 0.6.0-beta.2

### Patch Changes

- Updated dependencies [e462938]
  - @osdk/client.unstable@2.8.0-beta.2
  - @osdk/maker@0.16.0-beta.2
  - @osdk/api@2.8.0-beta.2
  - @osdk/generator-converters.ontologyir@2.8.0-beta.2

## 0.5.0-beta.14

### Patch Changes

- @osdk/api@2.7.0-beta.14
- @osdk/client.unstable@2.7.0-beta.14
- @osdk/generator-converters.ontologyir@2.7.0-beta.14

## 0.5.0-beta.13

### Patch Changes

- Updated dependencies [fb83808]
- Updated dependencies [ab1957f]
- Updated dependencies [862910e]
  - @osdk/api@2.7.0-beta.13
  - @osdk/faux@0.5.0-beta.4
  - @osdk/client.unstable@2.7.0-beta.13
  - @osdk/generator-converters.ontologyir@2.7.0-beta.13

## 0.5.0-beta.12

### Patch Changes

- Updated dependencies [c773e8f]
- Updated dependencies [bb9d25c]
  - @osdk/maker@0.15.0-beta.8
  - @osdk/api@2.7.0-beta.12
  - @osdk/client.unstable@2.7.0-beta.12
  - @osdk/generator-converters.ontologyir@2.7.0-beta.12

## 0.5.0-beta.11

### Patch Changes

- Updated dependencies [d5cfc38]
  - @osdk/api@2.7.0-beta.11
  - @osdk/client.unstable@2.7.0-beta.11
  - @osdk/generator-converters.ontologyir@2.7.0-beta.11

## 0.5.0-beta.10

### Patch Changes

- Updated dependencies [db44f6b]
- Updated dependencies [24a1e29]
  - @osdk/faux@0.5.0-beta.3
  - @osdk/api@2.7.0-beta.10
  - @osdk/client.unstable@2.7.0-beta.10
  - @osdk/generator-converters.ontologyir@2.7.0-beta.10

## 0.5.0-beta.9

### Patch Changes

- Updated dependencies [8381ac2]
- Updated dependencies [c95f3bc]
  - @osdk/generator-converters.ontologyir@2.7.0-beta.9
  - @osdk/client.unstable@2.7.0-beta.9
  - @osdk/maker@0.15.0-beta.7
  - @osdk/api@2.7.0-beta.9

## 0.5.0-beta.8

### Patch Changes

- @osdk/api@2.7.0-beta.8
- @osdk/client.unstable@2.7.0-beta.8
- @osdk/generator-converters.ontologyir@2.7.0-beta.8

## 0.5.0-beta.7

### Patch Changes

- @osdk/api@2.7.0-beta.7
- @osdk/client.unstable@2.7.0-beta.7
- @osdk/generator-converters.ontologyir@2.7.0-beta.7

## 0.5.0-beta.6

### Patch Changes

- Updated dependencies [9088072]
- Updated dependencies [c9ca08d]
- Updated dependencies [bb8d059]
- Updated dependencies [33e10e3]
  - @osdk/maker@0.15.0-beta.4
  - @osdk/api@2.7.0-beta.6
  - @osdk/client.unstable@2.7.0-beta.6
  - @osdk/generator-converters.ontologyir@2.7.0-beta.6

## 0.5.0-beta.5

### Patch Changes

- Updated dependencies [dc33f68]
  - @osdk/generator-converters.ontologyir@2.7.0-beta.5
  - @osdk/api@2.7.0-beta.5
  - @osdk/client.unstable@2.7.0-beta.5

## 0.5.0-beta.4

### Patch Changes

- Updated dependencies [1e3c147]
- Updated dependencies [e743064]
  - @osdk/api@2.7.0-beta.4
  - @osdk/maker@0.15.0-beta.3
  - @osdk/client.unstable@2.7.0-beta.4
  - @osdk/generator-converters.ontologyir@2.7.0-beta.4

## 0.5.0-beta.3

### Patch Changes

- Updated dependencies [448763f]
  - @osdk/api@2.7.0-beta.3
  - @osdk/client.unstable@2.7.0-beta.3
  - @osdk/generator-converters.ontologyir@2.7.0-beta.3

## 0.5.0-beta.2

### Minor Changes

- 03db734: Move platform SDK deps to pnpm catalog

### Patch Changes

- Updated dependencies [03db734]
- Updated dependencies [448caa8]
  - @osdk/generator-converters.ontologyir@2.7.0-beta.2
  - @osdk/faux@0.5.0-beta.2
  - @osdk/maker@0.15.0-beta.2
  - @osdk/api@2.7.0-beta.2
  - @osdk/client.unstable@2.7.0-beta.2
  - @osdk/cli@0.31.0-beta.2

## 0.4.0-beta.13

### Patch Changes

- Updated dependencies [84f0eef]
- Updated dependencies [486ef7e]
- Updated dependencies [ea077c6]
  - @osdk/generator-converters.ontologyir@2.6.0-beta.13
  - @osdk/faux@0.4.0-beta.6
  - @osdk/api@2.6.0-beta.13
  - @osdk/client.unstable@2.6.0-beta.13
  - @osdk/cli@0.30.0-beta.5

## 0.4.0-beta.12

### Patch Changes

- @osdk/api@2.6.0-beta.12
- @osdk/client.unstable@2.6.0-beta.12
- @osdk/generator-converters.ontologyir@2.6.0-beta.12

## 0.4.0-beta.11

### Patch Changes

- Updated dependencies [a26bfab]
- Updated dependencies [88ac696]
  - @osdk/maker@0.14.0-beta.15
  - @osdk/api@2.6.0-beta.11
  - @osdk/client.unstable@2.6.0-beta.11
  - @osdk/generator-converters.ontologyir@2.6.0-beta.11

## 0.4.0-beta.10

### Patch Changes

- Updated dependencies [3fbb596]
  - @osdk/generator-converters.ontologyir@2.6.0-beta.10
  - @osdk/faux@0.4.0-beta.5
  - @osdk/api@2.6.0-beta.10
  - @osdk/client.unstable@2.6.0-beta.10
  - @osdk/cli@0.30.0-beta.4

## 0.4.0-beta.9

### Patch Changes

- Updated dependencies [9ddb3b4]
- Updated dependencies [b307201]
  - @osdk/maker@0.14.0-beta.13
  - @osdk/api@2.6.0-beta.9
  - @osdk/client.unstable@2.6.0-beta.9
  - @osdk/generator-converters.ontologyir@2.6.0-beta.9

## 0.4.0-beta.8

### Patch Changes

- Updated dependencies [a1ffb20]
- Updated dependencies [e62c692]
  - @osdk/generator-converters.ontologyir@2.6.0-beta.8
  - @osdk/faux@0.4.0-beta.4
  - @osdk/api@2.6.0-beta.8
  - @osdk/client.unstable@2.6.0-beta.8
  - @osdk/cli@0.30.0-beta.3

## 0.4.0-beta.7

### Patch Changes

- Updated dependencies [5e4aabd]
  - @osdk/maker@0.14.0-beta.12
  - @osdk/api@2.6.0-beta.7
  - @osdk/client.unstable@2.6.0-beta.7
  - @osdk/generator-converters.ontologyir@2.6.0-beta.7

## 0.4.0-beta.6

### Patch Changes

- Updated dependencies [6532b54]
- Updated dependencies [b959085]
  - @osdk/maker@0.14.0-beta.10
  - @osdk/api@2.6.0-beta.6
  - @osdk/client.unstable@2.6.0-beta.6
  - @osdk/generator-converters.ontologyir@2.6.0-beta.6

## 0.4.0-beta.5

### Patch Changes

- Updated dependencies [55e104e]
- Updated dependencies [949646b]
- Updated dependencies [2556c64]
  - @osdk/maker@0.14.0-beta.9
  - @osdk/api@2.6.0-beta.5
  - @osdk/client.unstable@2.6.0-beta.5
  - @osdk/generator-converters.ontologyir@2.6.0-beta.5

## 0.4.0-beta.4

### Patch Changes

- Updated dependencies [98cdfee]
- Updated dependencies [7fd788b]
- Updated dependencies [e7bf02a]
  - @osdk/faux@0.4.0-beta.3
  - @osdk/client.unstable@2.6.0-beta.4
  - @osdk/maker@0.14.0-beta.7
  - @osdk/api@2.6.0-beta.4
  - @osdk/generator-converters.ontologyir@2.6.0-beta.4

## 0.4.0-beta.3

### Patch Changes

- Updated dependencies [a03ea8d]
  - @osdk/maker@0.14.0-beta.5
  - @osdk/api@2.6.0-beta.3
  - @osdk/client.unstable@2.6.0-beta.3
  - @osdk/generator-converters.ontologyir@2.6.0-beta.3

## 0.4.0-beta.2

### Minor Changes

- 84e61fc: Add propertyValueFormatting type to property metadata

### Patch Changes

- Updated dependencies [84e61fc]
- Updated dependencies [c4f8529]
- Updated dependencies [f7ae38a]
- Updated dependencies [aca0e5d]
- Updated dependencies [878c2eb]
  - @osdk/generator-converters.ontologyir@2.6.0-beta.2
  - @osdk/faux@0.4.0-beta.2
  - @osdk/api@2.6.0-beta.2
  - @osdk/maker@0.14.0-beta.4
  - @osdk/client.unstable@2.6.0-beta.2
  - @osdk/cli@0.30.0-beta.2

## 0.3.0-beta.15

### Patch Changes

- Updated dependencies [7f22c27]
  - @osdk/maker@0.13.0-beta.16
  - @osdk/api@2.5.0-beta.15
  - @osdk/client.unstable@2.5.0-beta.15
  - @osdk/generator-converters.ontologyir@2.5.0-beta.15

## 0.3.2

### Patch Changes

- @osdk/api@2.5.2
- @osdk/client.unstable@2.5.2
- @osdk/generator-converters.ontologyir@2.5.2

## 0.3.1

### Patch Changes

- Updated dependencies [099b4d8]
  - @osdk/api@2.5.1
  - @osdk/client.unstable@2.5.1
  - @osdk/generator-converters.ontologyir@2.5.1

## 0.3.0

### Patch Changes

- 150da1a: Simulated release
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [322c5bc]
- Updated dependencies [150da1a]
- Updated dependencies [150da1a]
- Updated dependencies [322c5bc]
- Updated dependencies [6da8fd2]
- Updated dependencies [37eb75b]
- Updated dependencies [a6f49e9]
- Updated dependencies [a6f49e9]
- Updated dependencies [f025f30]
- Updated dependencies [1b60527]
- Updated dependencies [7160276]
- Updated dependencies [9c9110c]
- Updated dependencies [7cdab1d]
- Updated dependencies [a00d2ed]
- Updated dependencies [40d43c2]
- Updated dependencies [d815339]
- Updated dependencies [f9b6dc4]
- Updated dependencies [07083e1]
- Updated dependencies [b1c99bf]
- Updated dependencies [11fd3fb]
- Updated dependencies [5f72188]
- Updated dependencies [3d7461d]
- Updated dependencies [5fd12eb]
- Updated dependencies [7bdac45]
- Updated dependencies [37eb75b]
- Updated dependencies [7b97128]
- Updated dependencies [f194536]
- Updated dependencies [76905f5]
- Updated dependencies [a96d89e]
- Updated dependencies [f2dbc3d]
- Updated dependencies [7bdac45]
- Updated dependencies [20962bc]
- Updated dependencies [cbcf2ad]
- Updated dependencies [04fe946]
- Updated dependencies [052a96b]
- Updated dependencies [ca1fabe]
- Updated dependencies [e48be06]
- Updated dependencies [7f0ad5c]
- Updated dependencies [712dfbe]
  - @osdk/api@2.5.0
  - @osdk/cli@0.29.0
  - @osdk/client.unstable@2.5.0
  - @osdk/faux@0.3.0
  - @osdk/generator-converters.ontologyir@2.5.0
  - @osdk/maker@0.13.0

## 0.3.0-rc.15

### Patch Changes

- Updated dependencies [37eb75b]
  - @osdk/api@2.5.0-rc.15
  - @osdk/client.unstable@2.5.0-rc.15
  - @osdk/generator-converters.ontologyir@2.5.0-rc.15
  - @osdk/cli@0.29.0-rc.6

## 0.3.0-beta.14

### Patch Changes

- Updated dependencies [9dd5a63]
- Updated dependencies [e62408b]
- Updated dependencies [b7edfb5]
  - @osdk/client.unstable@2.5.0-beta.14
  - @osdk/maker@0.13.0-beta.14
  - @osdk/generator-converters.ontologyir@2.5.0-beta.14
  - @osdk/api@2.5.0-beta.14

## 0.3.0-beta.13

### Patch Changes

- Updated dependencies [d815339]
  - @osdk/maker@0.13.0-beta.13
  - @osdk/api@2.5.0-beta.13
  - @osdk/client.unstable@2.5.0-beta.13
  - @osdk/generator-converters.ontologyir@2.5.0-beta.13

## 0.3.0-beta.12

### Patch Changes

- Updated dependencies [f025f30]
- Updated dependencies [7f0ad5c]
  - @osdk/maker@0.13.0-beta.12
  - @osdk/api@2.5.0-beta.12
  - @osdk/client.unstable@2.5.0-beta.12
  - @osdk/generator-converters.ontologyir@2.5.0-beta.12

## 0.3.0-beta.11

### Patch Changes

- Updated dependencies [5fd12eb]
- Updated dependencies [7b97128]
- Updated dependencies [f2dbc3d]
- Updated dependencies [712dfbe]
  - @osdk/maker@0.13.0-beta.11
  - @osdk/api@2.5.0-beta.11
  - @osdk/client.unstable@2.5.0-beta.11
  - @osdk/generator-converters.ontologyir@2.5.0-beta.11

## 0.3.0-beta.10

### Patch Changes

- Updated dependencies [11fd3fb]
  - @osdk/maker@0.13.0-beta.10
  - @osdk/api@2.5.0-beta.10
  - @osdk/client.unstable@2.5.0-beta.10
  - @osdk/generator-converters.ontologyir@2.5.0-beta.10

## 0.3.0-beta.9

### Patch Changes

- Updated dependencies [1b60527]
  - @osdk/maker@0.13.0-beta.9
  - @osdk/api@2.5.0-beta.9
  - @osdk/client.unstable@2.5.0-beta.9
  - @osdk/generator-converters.ontologyir@2.5.0-beta.9

## 0.3.0-beta.8

### Patch Changes

- Updated dependencies [f9b6dc4]
- Updated dependencies [b1c99bf]
- Updated dependencies [ca1fabe]
  - @osdk/maker@0.13.0-beta.8
  - @osdk/api@2.5.0-beta.8
  - @osdk/client.unstable@2.5.0-beta.8
  - @osdk/generator-converters.ontologyir@2.5.0-beta.8

## 0.3.0-beta.7

### Patch Changes

- Updated dependencies [07083e1]
  - @osdk/maker@0.13.0-beta.6
  - @osdk/api@2.5.0-beta.7
  - @osdk/client.unstable@2.5.0-beta.7
  - @osdk/generator-converters.ontologyir@2.5.0-beta.7

## 0.3.0-beta.6

### Patch Changes

- Updated dependencies [cbcf2ad]
- Updated dependencies [04fe946]
  - @osdk/generator-converters.ontologyir@2.5.0-beta.6
  - @osdk/maker@0.13.0-beta.5
  - @osdk/faux@0.3.0-beta.6
  - @osdk/client.unstable@2.5.0-beta.6
  - @osdk/api@2.5.0-beta.6
  - @osdk/cli@0.29.0-beta.5

## 0.3.0-beta.5

### Patch Changes

- Updated dependencies [3d7461d]
- Updated dependencies [052a96b]
  - @osdk/faux@0.3.0-beta.5
  - @osdk/api@2.5.0-beta.5
  - @osdk/client.unstable@2.5.0-beta.5
  - @osdk/generator-converters.ontologyir@2.5.0-beta.5

## 0.3.0-beta.4

### Patch Changes

- Updated dependencies [a00d2ed]
- Updated dependencies [a96d89e]
  - @osdk/generator-converters.ontologyir@2.5.0-beta.4
  - @osdk/maker@0.13.0-beta.4
  - @osdk/faux@0.3.0-beta.4
  - @osdk/cli@0.29.0-beta.4
  - @osdk/api@2.5.0-beta.4
  - @osdk/client.unstable@2.5.0-beta.4

## 0.3.0-beta.3

### Patch Changes

- Updated dependencies [7bdac45]
- Updated dependencies [7bdac45]
- Updated dependencies [20962bc]
- Updated dependencies [e48be06]
  - @osdk/generator-converters.ontologyir@2.5.0-beta.3
  - @osdk/maker@0.13.0-beta.3
  - @osdk/faux@0.3.0-beta.3
  - @osdk/api@2.5.0-beta.3
  - @osdk/cli@0.29.0-beta.3
  - @osdk/client.unstable@2.5.0-beta.3

## 0.3.0-beta.2

### Patch Changes

- Updated dependencies [7160276]
- Updated dependencies [9c9110c]
- Updated dependencies [7cdab1d]
- Updated dependencies [40d43c2]
- Updated dependencies [5f72188]
- Updated dependencies [f194536]
- Updated dependencies [76905f5]
  - @osdk/api@2.5.0-beta.2
  - @osdk/faux@0.3.0-beta.2
  - @osdk/generator-converters.ontologyir@2.5.0-beta.2
  - @osdk/maker@0.13.0-beta.2
  - @osdk/cli@0.29.0-beta.2
  - @osdk/client.unstable@2.5.0-beta.2

## 0.2.0-beta.18

### Patch Changes

- Updated dependencies [3ff44da]
- Updated dependencies [367cc04]
- Updated dependencies [283905f]
- Updated dependencies [e62a890]
- Updated dependencies [94beece]
  - @osdk/maker@0.12.0-beta.21
  - @osdk/cli@0.28.0-beta.18
  - @osdk/api@2.4.0-beta.17
  - @osdk/client.unstable@2.4.0-beta.17
  - @osdk/generator-converters.ontologyir@2.4.0-beta.17
  - @osdk/faux@0.2.0-beta.17

## 0.2.0-beta.17

### Patch Changes

- @osdk/cli@0.28.0-beta.17
- @osdk/api@2.4.0-beta.16
- @osdk/client.unstable@2.4.0-beta.16
- @osdk/generator-converters.ontologyir@2.4.0-beta.16
- @osdk/faux@0.2.0-beta.16
- @osdk/maker@0.12.0-beta.19

## 0.2.0-beta.16

### Patch Changes

- @osdk/api@2.4.0-beta.15
- @osdk/client.unstable@2.4.0-beta.15
- @osdk/generator-converters.ontologyir@2.4.0-beta.15
- @osdk/faux@0.2.0-beta.15
- @osdk/maker@0.12.0-beta.18
- @osdk/cli@0.28.0-beta.16

## 0.2.0-beta.15

### Patch Changes

- Updated dependencies [f1f587b]
- Updated dependencies [641bc0c]
- Updated dependencies [25bae67]
- Updated dependencies [5c76e33]
  - @osdk/maker@0.12.0-beta.17
  - @osdk/client.unstable@2.4.0-beta.14
  - @osdk/cli@0.28.0-beta.15
  - @osdk/generator-converters.ontologyir@2.4.0-beta.14
  - @osdk/api@2.4.0-beta.14
  - @osdk/faux@0.2.0-beta.14

## 0.2.0-beta.14

### Patch Changes

- Updated dependencies [4bc848b]
  - @osdk/faux@0.2.0-beta.13
  - @osdk/api@2.4.0-beta.13
  - @osdk/maker@0.12.0-beta.16
  - @osdk/cli@0.28.0-beta.14
  - @osdk/client.unstable@2.4.0-beta.13
  - @osdk/generator-converters.ontologyir@2.4.0-beta.13

## 0.2.0-beta.13

### Patch Changes

- Updated dependencies [a1736f3]
- Updated dependencies [c621638]
  - @osdk/maker@0.12.0-beta.15
  - @osdk/api@2.4.0-beta.12
  - @osdk/client.unstable@2.4.0-beta.12
  - @osdk/generator-converters.ontologyir@2.4.0-beta.12
  - @osdk/faux@0.2.0-beta.12
  - @osdk/cli@0.28.0-beta.13

## 0.2.0-beta.12

### Patch Changes

- Updated dependencies [d384b4c]
- Updated dependencies [02be685]
  - @osdk/maker@0.12.0-beta.14
  - @osdk/faux@0.2.0-beta.11
  - @osdk/cli@0.28.0-beta.12
  - @osdk/api@2.4.0-beta.11
  - @osdk/client.unstable@2.4.0-beta.11
  - @osdk/generator-converters.ontologyir@2.4.0-beta.11

## 0.2.0-beta.11

### Patch Changes

- Updated dependencies [666787f]
  - @osdk/maker@0.12.0-beta.12
  - @osdk/api@2.4.0-beta.10
  - @osdk/client.unstable@2.4.0-beta.10
  - @osdk/generator-converters.ontologyir@2.4.0-beta.10
  - @osdk/faux@0.2.0-beta.10
  - @osdk/cli@0.28.0-beta.11

## 0.2.0-beta.10

### Patch Changes

- Updated dependencies [b0955ef]
- Updated dependencies [defc2cf]
- Updated dependencies [9101bad]
  - @osdk/maker@0.12.0-beta.11
  - @osdk/api@2.4.0-beta.9
  - @osdk/faux@0.2.0-beta.9
  - @osdk/cli@0.28.0-beta.10
  - @osdk/client.unstable@2.4.0-beta.9
  - @osdk/generator-converters.ontologyir@2.4.0-beta.9

## 0.2.0-beta.9

### Patch Changes

- Updated dependencies [dbd13b6]
  - @osdk/cli@0.28.0-beta.9

## 0.2.0-beta.8

### Patch Changes

- Updated dependencies [4dffba1]
- Updated dependencies [9f4fe9e]
  - @osdk/maker@0.12.0-beta.10
  - @osdk/api@2.4.0-beta.8
  - @osdk/faux@0.2.0-beta.8
  - @osdk/cli@0.28.0-beta.8
  - @osdk/client.unstable@2.4.0-beta.8
  - @osdk/generator-converters.ontologyir@2.4.0-beta.8

## 0.2.0-beta.7

### Patch Changes

- Updated dependencies [ac0029e]
  - @osdk/maker@0.12.0-beta.9
  - @osdk/api@2.4.0-beta.7
  - @osdk/client.unstable@2.4.0-beta.7
  - @osdk/generator-converters.ontologyir@2.4.0-beta.7
  - @osdk/faux@0.2.0-beta.7
  - @osdk/cli@0.28.0-beta.7

## 0.2.0-beta.6

### Patch Changes

- Updated dependencies [764e5f1]
  - @osdk/client.unstable@2.4.0-beta.6
  - @osdk/maker@0.12.0-beta.8
  - @osdk/generator-converters.ontologyir@2.4.0-beta.6
  - @osdk/api@2.4.0-beta.6
  - @osdk/faux@0.2.0-beta.6
  - @osdk/cli@0.28.0-beta.6

## 0.2.0-beta.5

### Patch Changes

- Updated dependencies [1c1c2c4]
- Updated dependencies [75fbd09]
  - @osdk/generator-converters.ontologyir@2.4.0-beta.5
  - @osdk/faux@0.2.0-beta.5
  - @osdk/maker@0.12.0-beta.7
  - @osdk/api@2.4.0-beta.5
  - @osdk/client.unstable@2.4.0-beta.5
  - @osdk/cli@0.28.0-beta.5

## 0.2.0-beta.4

### Patch Changes

- Updated dependencies [a01b8d4]
  - @osdk/client.unstable@2.4.0-beta.4
  - @osdk/maker@0.12.0-beta.5
  - @osdk/generator-converters.ontologyir@2.4.0-beta.4
  - @osdk/api@2.4.0-beta.4
  - @osdk/faux@0.2.0-beta.4
  - @osdk/cli@0.28.0-beta.4

## 0.2.0-beta.3

### Patch Changes

- Updated dependencies [988bf66]
  - @osdk/client.unstable@2.4.0-beta.3
  - @osdk/maker@0.12.0-beta.3
  - @osdk/generator-converters.ontologyir@2.4.0-beta.3
  - @osdk/api@2.4.0-beta.3
  - @osdk/faux@0.2.0-beta.3
  - @osdk/cli@0.28.0-beta.3

## 0.2.0-beta.2

### Patch Changes

- Updated dependencies [8bb08eb]
- Updated dependencies [29d2ada]
- Updated dependencies [8c95154]
- Updated dependencies [c32dcf2]
- Updated dependencies [5994895]
  - @osdk/maker@0.12.0-beta.2
  - @osdk/api@2.4.0-beta.2
  - @osdk/faux@0.2.0-beta.2
  - @osdk/cli@0.28.0-beta.2
  - @osdk/client.unstable@2.4.0-beta.2
  - @osdk/generator-converters.ontologyir@2.4.0-beta.2

## 0.1.0-beta.5

### Patch Changes

- Updated dependencies [79cb6eb]
- Updated dependencies [0cc9cad]
  - @osdk/maker@0.11.0-beta.14
  - @osdk/client.unstable@2.3.0-beta.10
  - @osdk/generator-converters.ontologyir@2.3.0-beta.10
  - @osdk/api@2.3.0-beta.10
  - @osdk/faux@0.1.0-beta.6
  - @osdk/cli@0.27.0-beta.10

## 0.1.0-beta.4

### Patch Changes

- Updated dependencies [1847bcb]
- Updated dependencies [3ae0cfd]
- Updated dependencies [7d232fb]
- Updated dependencies [60b0029]
- Updated dependencies [0abeec3]
  - @osdk/maker@0.11.0-beta.12
  - @osdk/client.unstable@2.3.0-beta.9
  - @osdk/generator-converters.ontologyir@2.3.0-beta.9
  - @osdk/api@2.3.0-beta.9
  - @osdk/faux@0.1.0-beta.5
  - @osdk/cli@0.27.0-beta.9

## 0.1.0-beta.3

### Patch Changes

- Updated dependencies [12d599f]
  - @osdk/api@2.3.0-beta.8
  - @osdk/faux@0.1.0-beta.4
  - @osdk/maker@0.11.0-beta.11
  - @osdk/cli@0.27.0-beta.8
  - @osdk/client.unstable@2.3.0-beta.8
  - @osdk/generator-converters.ontologyir@2.3.0-beta.8

## 0.1.0-beta.2

### Minor Changes

- f8db93d: improve media upload (beta)

### Patch Changes

- Updated dependencies [f8db93d]
  - @osdk/generator-converters.ontologyir@2.3.0-beta.7
  - @osdk/client.unstable@2.3.0-beta.7
  - @osdk/maker@0.11.0-beta.8
  - @osdk/faux@0.1.0-beta.3
  - @osdk/api@2.3.0-beta.7
  - @osdk/cli@0.27.0-beta.7

## 0.1.0-beta.1

### Patch Changes

- Updated dependencies [52ed4a8]
- Updated dependencies [77674dd]
- Updated dependencies [c305ea8]
- Updated dependencies [7901ae0]
- Updated dependencies [9839eab]
- Updated dependencies [e99a614]
- Updated dependencies [ab2ef22]
- Updated dependencies [1608ba5]
- Updated dependencies [9839eab]
- Updated dependencies [dc7d201]
- Updated dependencies [ad18c80]
  - @osdk/cli@0.27.0-beta.6
  - @osdk/maker@0.11.0-beta.7
  - @osdk/client.unstable@2.3.0-beta.6
  - @osdk/faux@0.1.0-beta.2
  - @osdk/generator-converters.ontologyir@2.3.0-beta.6
  - @osdk/api@2.3.0-beta.6
