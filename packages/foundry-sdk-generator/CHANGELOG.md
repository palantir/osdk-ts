# @osdk/foundry-sdk-generator

## 1.3.7

### Patch Changes

- 35d976b: Bump --beta to 2.0.0-beta.8

## 1.3.6

### Patch Changes

- 47b5a58: Update beta dependency to fix beta package generation

## 1.3.5

### Patch Changes

- 090cd28: Generator does not retry on failure

## 1.3.4

### Patch Changes

- Updated dependencies [52317e9]
  - @osdk/generator@1.13.3
  - @osdk/legacy-client@2.5.1

## 1.3.3

### Patch Changes

- ef2018e: Fixed an edge case where generation caused compile errors
- bf5d49e: --beta now loads from the beta package
- Updated dependencies [ef2018e]
  - @osdk/generator@1.13.2
  - @osdk/legacy-client@2.5.1

## 1.3.2

### Patch Changes

- b5870b3: Added ExactDistinct Aggregations to the TS-OSDK
- Updated dependencies [18d251a]
- Updated dependencies [b5870b3]
  - @osdk/legacy-client@2.5.1
  - @osdk/generator@1.13.1
  - @osdk/gateway@2.4.1
  - @osdk/api@1.9.1
  - @osdk/client@0.21.1
  - @osdk/client.api@0.21.1

## 1.3.1

### Patch Changes

- 74e035c: Restore cjs exports

## 1.3.0

### Patch Changes

- Updated dependencies [2deb4d9]
- Updated dependencies [e54f413]
- Updated dependencies [6387a92]
- Updated dependencies [f91cd58]
- Updated dependencies [cd37441]
- Updated dependencies [8c76c1a]
- Updated dependencies [651c1b8]
- Updated dependencies [e2ab8db]
  - @osdk/client.api@0.21.0
  - @osdk/client@0.21.0
  - @osdk/legacy-client@2.5.0
  - @osdk/generator@1.13.0

## 1.3.0-beta.1

### Patch Changes

- Updated dependencies [f91cd58]
- Updated dependencies [e2ab8db]
  - @osdk/client@0.21.0-beta.1
  - @osdk/legacy-client@2.5.0-beta.1
  - @osdk/generator@1.13.0-beta.1
  - @osdk/client.api@0.21.0-beta.1

## 1.3.0-beta.0

### Patch Changes

- Updated dependencies [2deb4d9]
- Updated dependencies [e54f413]
- Updated dependencies [6387a92]
- Updated dependencies [cd37441]
- Updated dependencies [8c76c1a]
- Updated dependencies [651c1b8]
  - @osdk/client.api@0.21.0-beta.0
  - @osdk/client@0.21.0-beta.0
  - @osdk/legacy-client@2.5.0-beta.0
  - @osdk/generator@1.13.0-beta.0

## 1.2.0

### Minor Changes

- 6bf66d5: Actually fix the script to run
- 141953f: Expose $title property in OsdkBase
- fee51a3: Add interface support
- 388dba9: Change all internal dependencies to be tilde not caret
- bc89b62: Spelling fixes and spell check in CI
- 029d816: Fixes bin script being interpreted as esm

### Patch Changes

- Updated dependencies [b5ac8a8]
- Updated dependencies [7505880]
- Updated dependencies [02c65c5]
- Updated dependencies [564adbf]
- Updated dependencies [141953f]
- Updated dependencies [505b993]
- Updated dependencies [a6119bd]
- Updated dependencies [c1924df]
- Updated dependencies [bfdb123]
- Updated dependencies [62bae76]
- Updated dependencies [034f7ea]
- Updated dependencies [f6d8850]
- Updated dependencies [388dba9]
- Updated dependencies [527e8ab]
- Updated dependencies [a519655]
- Updated dependencies [7afa226]
- Updated dependencies [572e322]
- Updated dependencies [57b68db]
- Updated dependencies [d8edf10]
- Updated dependencies [5378312]
- Updated dependencies [3ec7c38]
- Updated dependencies [0ecd42b]
- Updated dependencies [b3563e0]
- Updated dependencies [7adf5c7]
- Updated dependencies [4824449]
- Updated dependencies [700c894]
- Updated dependencies [dd6033a]
- Updated dependencies [bc89b62]
- Updated dependencies [3615522]
- Updated dependencies [4dbac7e]
- Updated dependencies [489d13f]
- Updated dependencies [8cff4f0]
- Updated dependencies [116d848]
- Updated dependencies [dec005b]
- Updated dependencies [5e9d7d2]
- Updated dependencies [413e511]
- Updated dependencies [44add10]
- Updated dependencies [67c1fd6]
- Updated dependencies [a92e032]
  - @osdk/client.api@0.20.0
  - @osdk/client@0.20.0
  - @osdk/legacy-client@2.4.0
  - @osdk/generator@1.12.0
  - @osdk/api@1.9.0
  - @osdk/gateway@2.4.0

## 1.2.0-beta.4

### Minor Changes

- 6bf66d5: Actually fix the script to run
- 029d816: Fixes bin script being interpreted as esm

## 1.2.0-beta.3

### Minor Changes

- fee51a3: Add interface support
- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [7afa226]
- Updated dependencies [572e322]
- Updated dependencies [3ec7c38]
- Updated dependencies [4824449]
- Updated dependencies [bc89b62]
- Updated dependencies [116d848]
- Updated dependencies [a92e032]
  - @osdk/client@0.20.0-beta.4
  - @osdk/legacy-client@2.4.0-beta.2
  - @osdk/client.api@0.20.0-beta.4
  - @osdk/generator@1.12.0-beta.2
  - @osdk/api@1.9.0-beta.1
  - @osdk/gateway@2.4.0-beta.0

## 1.2.0-beta.2

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret

### Patch Changes

- Updated dependencies [388dba9]
  - @osdk/legacy-client@2.4.0-beta.1
  - @osdk/generator@1.12.0-beta.1
  - @osdk/api@1.9.0-beta.0

## 1.2.0-beta.1

### Minor Changes

- 141953f: Expose $title property in OsdkBase

### Patch Changes

- @osdk/legacy-client@2.4.0-beta.0

## 1.2.0-beta.0

### Patch Changes

- Updated dependencies [c1924df]
- Updated dependencies [5378312]
- Updated dependencies [0ecd42b]
  - @osdk/legacy-client@2.4.0-beta.0
  - @osdk/generator@1.12.0-beta.0

## 1.1.1

### Patch Changes

- 212f651: Add fetchOne, that is get replacement without result wrapper
- e690399: Fix $rid, $apiName and $primaryKey population
- 212f651: Deprecate get and add fetchOneWithErrors, which functionally is the same
- Updated dependencies [212f651]
- Updated dependencies [e690399]
- Updated dependencies [212f651]
  - @osdk/legacy-client@2.2.1

## 1.1.0

### Minor Changes

- 11434b9: Deprecated bulk actions with renamed batchActions functionality
- 948c634: Add pivot to functionality and deprecate searchAround calls
- 9906a41: add asyncIter

### Patch Changes

- Updated dependencies [11434b9]
- Updated dependencies [948c634]
- Updated dependencies [9906a41]
- Updated dependencies [9906a41]
- Updated dependencies [9906a41]
- Updated dependencies [9906a41]
- Updated dependencies [9906a41]
- Updated dependencies [9906a41]
- Updated dependencies [9906a41]
- Updated dependencies [f7287ae]
- Updated dependencies [3c51797]
  - @osdk/legacy-client@2.2.0
  - @osdk/generator@1.10.0
  - @osdk/api@1.7.0

## 1.0.0

### Major Changes

- Creating first major version of sdk generator with 1.0 version of typescript OSDK

## 0.201.1

### Patch Changes

- e1a94f22: Revert change to how we generate the built package types
- Updated dependencies [e1a94f22]
  - @osdk/legacy-client@1.1.1
  - @osdk/generator@1.1.1
  - @osdk/gateway@1.1.1
  - @osdk/api@1.1.1

## 0.201.0

### Minor Changes

- a0d5e431: Update build to ship packages compliant with @arethetypeswrong/cli

### Patch Changes

- 8c5b85c1: Better error handling around server errors when getting ontology metadata
- Updated dependencies [a0d5e431]
  - @osdk/legacy-client@1.1.0
  - @osdk/generator@1.1.0
  - @osdk/gateway@1.1.0
  - @osdk/api@1.1.0

## 0.200.6

### Patch Changes

- Updated dependencies [a6e61428]
  - @osdk/legacy-client@1.0.4

## 0.200.5

### Patch Changes

- 7ef64883: Fix generated package.json to have default export at the end to prevent runtime errors
- Updated dependencies [ef7f8d8e]
  - @osdk/legacy-client@1.0.3

## 0.200.4

### Patch Changes

- 35803ca0: Fix back-compat break where the script exports were removed

## 0.200.3

### Patch Changes

- 67eea35e: Fixing bundling for package generation

## 0.200.2

### Patch Changes

- fa50ae80: Fixing package generation

## 0.200.1

### Patch Changes

- Updated dependencies [25dd12ae]
  - @osdk/legacy-client@1.0.2
  - @osdk/gateway@1.0.2
  - @osdk/api@1.0.2
  - @osdk/generator@1.0.4

## 0.200.0

### Minor Changes

- 61f48963: test bump

## 0.0.1

### Patch Changes

- 82e53f7d: Releasing foundry-sdk-generator
- Updated dependencies [52ff84a8]
- Updated dependencies [693478bd]
  - @osdk/generator@1.0.3
