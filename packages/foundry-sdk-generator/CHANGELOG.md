# @osdk/foundry-sdk-generator

## 2.0.8-rc.4

### Patch Changes

- a83ab34: Generated packages should have proper package.json
- a83ab34: Generated packages now use ^ dependencies on @osdk/api and @osdk/client
  - @osdk/api@2.0.8-rc.4
  - @osdk/client@2.0.8-rc.4
  - @osdk/generator@2.0.8-rc.4

## 2.0.8-rc.3

### Patch Changes

- @osdk/client@2.0.8-rc.3
- @osdk/generator@2.0.8-rc.3
- @osdk/api@2.0.8-rc.3

## 2.0.8-rc.1

### Patch Changes

- Updated dependencies
  - @osdk/client@2.0.8-rc.1
  - @osdk/generator@2.0.8-rc.1
  - @osdk/api@2.0.8-rc.1

## 2.0.8-rc.0

### Patch Changes

- Updated dependencies
  - @osdk/shared.net@2.0.3-rc.0
  - @osdk/client@2.0.8-rc.0
  - @osdk/generator@2.0.8-rc.0
  - @osdk/api@2.0.8-rc.0

## 2.0.7

### Patch Changes

- 0ff5e50: Update to latest platform sdks
- Updated dependencies
  - @osdk/api@2.0.7
  - @osdk/generator@2.0.7
  - @osdk/client@2.0.7

## 2.0.6

### Patch Changes

- Updated dependencies
  - @osdk/shared.net@2.0.2
  - @osdk/client@2.0.6
  - @osdk/generator@2.0.6
  - @osdk/api@2.0.6

## 2.0.5

### Patch Changes

- Updated dependencies
  - @osdk/api@2.0.5
  - @osdk/generator@2.0.5
  - @osdk/client@2.0.5

## 2.0.4

### Patch Changes

- Updated dependencies
  - @osdk/client@2.0.4
  - @osdk/api@2.0.4
  - @osdk/generator@2.0.4

## 2.0.3

### Patch Changes

- 7132212: Fixes being unable to generate in dev console without --beta
- Updated dependencies
  - @osdk/generator@2.0.3
  - @osdk/client@2.0.3
  - @osdk/api@2.0.3

## 2.0.2

### Patch Changes

- 85e03ec: Prepare foundry-sdk-generator for GA
- 05b7934: Rework namespace codegen
- Updated dependencies
  - @osdk/generator@2.0.2
  - @osdk/client@2.0.2
  - @osdk/api@2.0.2

## 2.0.1

### Patch Changes

- @osdk/client@2.0.1
- @osdk/internal.foundry.core@0.2.1
- @osdk/internal.foundry.ontologies@0.2.1
- @osdk/internal.foundry.ontologiesv2@0.2.1
- @osdk/shared.net@2.0.1
- @osdk/generator@2.0.1
- @osdk/api@2.0.1

## 2.0.0

### Major Changes

- 1252d94: ESM Only

### Minor Changes

- ff718df: Fixes an issue where ambiguous ontology api names can conflict. Used rid instead.
- 9eb7c6e: Properly handles \_\_dirname
- 45b8178: Generation now works with or without https prefix on stack name
- 9eb7c6e: Upgrades version of rollup used internally
- e6ade8b: Adds fetchMetadata method to client
- a6486f6: Add peer dependency on client for code generation.
- 0a374d6: Remove legacy client
- 9eb7c6e: Restore cjs exports
- 1f633f7: Removed dependency on @osdk/client.api
- d4d6605: Audited and cleaned up deps

### Patch Changes

- Updated dependencies
  - @osdk/client@2.0.0
  - @osdk/internal.foundry.ontologiesv2@0.2.0
  - @osdk/internal.foundry.ontologies@0.2.0
  - @osdk/internal.foundry.core@0.2.0
  - @osdk/generator@2.0.0
  - @osdk/api@2.0.0
  - @osdk/shared.net@2.0.0

## 1.3.0

### Patch Changes

- Updated dependencies
  - @osdk/client.api@0.21.0
  - @osdk/client@0.21.0
  - @osdk/legacy-client@2.5.0
  - @osdk/generator@1.13.0

## 1.2.0

### Minor Changes

- 6bf66d5: Actually fix the script to run
- 141953f: Expose $title property in OsdkBase
- fee51a3: Add interface support
- 388dba9: Change all internal dependencies to be tilde not caret
- bc89b62: Spelling fixes and spell check in CI
- 029d816: Fixes bin script being interpreted as esm

### Patch Changes

- Updated dependencies
  - @osdk/client.api@0.20.0
  - @osdk/client@0.20.0
  - @osdk/legacy-client@2.4.0
  - @osdk/generator@1.12.0
  - @osdk/api@1.9.0
  - @osdk/gateway@2.4.0.0

## 1.1.1

### Patch Changes

- 212f651: Add fetchOne, that is get replacement without result wrapper
- e690399: Fix $rid, $apiName and $primaryKey population
- 212f651: Deprecate get and add fetchOneWithErrors, which functionally is the same
- Updated dependencies
  - @osdk/legacy-client@2.2.1

## 1.1.0

### Minor Changes

- 11434b9: Deprecated bulk actions with renamed batchActions functionality
- 948c634: Add pivot to functionality and deprecate searchAround calls
- 9906a41: add asyncIter

### Patch Changes

- Updated dependencies
  - @osdk/legacy-client@2.2.0
  - @osdk/generator@1.10.0
  - @osdk/api@1.7.0

## 1.0.0

### Major Changes

- Creating first major version of sdk generator with 1.0 version of typescript OSDK

## 0.201.1

### Patch Changes

- e1a94f22: Revert change to how we generate the built package types
- Updated dependencies
  - @osdk/legacy-client@1.1.1
  - @osdk/generator@1.1.1
  - @osdk/gateway@1.1.1
  - @osdk/api@1.1.1

## 0.201.0

### Minor Changes

- a0d5e431: Update build to ship packages compliant with @arethetypeswrong/cli

### Patch Changes

- 8c5b85c1: Better error handling around server errors when getting ontology metadata
- Updated dependencies
  - @osdk/legacy-client@1.1.0
  - @osdk/generator@1.1.0
  - @osdk/gateway@1.1.0
  - @osdk/api@1.1.0

## 0.200.6

### Patch Changes

- Updated dependencies
  - @osdk/legacy-client@1.0.4

## 0.200.5

### Patch Changes

- 7ef64883: Fix generated package.json to have default export at the end to prevent runtime errors
- Updated dependencies
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

- Updated dependencies
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
- Updated dependencies
  - @osdk/generator@1.0.3
