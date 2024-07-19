# @osdk/foundry-sdk-generator

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
