# @osdk/generator

## 1.14.0-beta.0

### Minor Changes

- ac4f4fd: Notable changes:
  - `{{actionApiName}}$Params` is deprecated in favor of `ActionParams${{actionApiName}}`.
  - All generated `{{actionApiName}}$Params` objects are now exported from generated code.
  - All `{{actionApiName}}$Params` are marked as `readonly`.
  - Some types that are now only needed in `@osdk/client` have been moved back out of `@osdk/client.api`.
  - Generated `ActionParams${{actionApiName}}` are simpler and do not rely on type mapping for the keys, the array'ness, nor multiplicity.
  - `AttachmentUpload.name` is now `readonly`.
- 7494995: Internal changes to file paths
- 1770490: URLs in jsdoc now link to palantir.com

## 1.13.0

### Minor Changes

- 8c76c1a: Adds VersionBound to actions
- e2ab8db: Fix long aggregations in legacy-client

## 1.13.0-beta.1

### Minor Changes

- e2ab8db: Fix long aggregations in legacy-client

## 1.13.0-beta.0

### Minor Changes

- 8c76c1a: Adds VersionBound to actions

## 1.12.0

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret
- 5378312: Added batch action support for 2.0 client
- 3ec7c38: Add support for queries in 2.0
- 0ecd42b: Generates 2.0's Ontology.ts in a typescript 5.5.0-beta safe way
- bc89b62: Spelling fixes and spell check in CI
- 116d848: Interface inherited properties are now generated

### Patch Changes

- Updated dependencies [388dba9]
- Updated dependencies [d8edf10]
- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/generator-converters@0.7.0
  - @osdk/api@1.9.0
  - @osdk/gateway@2.4.0

## 1.12.0-beta.2

### Minor Changes

- 3ec7c38: Add support for queries in 2.0
- bc89b62: Spelling fixes and spell check in CI
- 116d848: Interface inherited properties are now generated

### Patch Changes

- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/api@1.9.0-beta.1
  - @osdk/generator-converters@0.7.0-beta.1
  - @osdk/gateway@2.4.0-beta.0

## 1.12.0-beta.1

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret

### Patch Changes

- Updated dependencies [388dba9]
  - @osdk/generator-converters@0.7.0-beta.0
  - @osdk/api@1.9.0-beta.0

## 1.12.0-beta.0

### Minor Changes

- 5378312: Added batch action support for 2.0 client
- 0ecd42b: Generates 2.0's Ontology.ts in a typescript 5.5.0-beta safe way

## 1.11.0

### Minor Changes

- c9f3214: Adds support for latest api definitions
- c9f3214: Interfaces are now mapped as views

### Patch Changes

- Updated dependencies [c9f3214]
- Updated dependencies [c9f3214]
  - @osdk/gateway@2.3.0
  - @osdk/api@1.8.0
  - @osdk/generator-converters@0.6.0

## 1.10.0

### Minor Changes

- 11434b9: Deprecated bulk actions with renamed batchActions functionality
- 948c634: Add pivot to functionality and deprecate searchAround calls
- 9906a41: Extract package generation
- 9906a41: Compatible version checks now use versions that are both embedded in the code and updated automatically as part of the release process.
- f7287ae: For 2.0, fixes codegen version matching in snapshot builds

### Patch Changes

- @osdk/api@1.7.0
- @osdk/generator-converters@0.5.0

## 1.1.1

### Patch Changes

- e1a94f22: Revert change to how we generate the built package types
- Updated dependencies [e1a94f22]
  - @osdk/gateway@1.1.1
  - @osdk/api@1.1.1

## 1.1.0

### Minor Changes

- a0d5e431: Update build to ship packages compliant with @arethetypeswrong/cli

### Patch Changes

- Updated dependencies [a0d5e431]
  - @osdk/gateway@1.1.0
  - @osdk/api@1.1.0

## 1.0.4

### Patch Changes

- Updated dependencies [25dd12ae]
  - @osdk/gateway@1.0.2
  - @osdk/api@1.0.2

## 1.0.3

### Patch Changes

- 52ff84a8: Fix 2.0 OSDK generation for ontologies with no objects in them"
- 693478bd: Alphabetize property names when generating object definitions

## 1.0.2

### Patch Changes

- c51fc4a9: Block OSDK generation into directories that don't exist or are empty
- 0b51485b: OSDK generation now works correctly on ontologies that have 0 objects/actions/queries

## 1.0.1

### Patch Changes

- b07ff14: CLI can now request ontology data directly from the backend
- Updated dependencies [b07ff14]
  - @osdk/gateway@1.0.1
  - @osdk/api@1.0.1

## 1.0.0

### Major Changes

- bfd4d9a: Stable 1.0 version

### Patch Changes

- Updated dependencies [bfd4d9a]
  - @osdk/api@1.0.0
  - @osdk/gateway@1.0.0

## 0.0.16

### Patch Changes

- ed78694: Fixes imports from older module resolution
- Updated dependencies [ed78694]
  - @osdk/gateway@0.0.10
  - @osdk/api@0.0.17

## 0.0.15

### Patch Changes

- b59cb10: Adding backward compatibility for internal types

## 0.0.14

### Patch Changes

- 23a3515: Add deprecation notice to objects-api types
- Updated dependencies [23a3515]
  - @osdk/gateway@0.0.9
  - @osdk/api@0.0.16

## 0.0.13

### Patch Changes

- 4f73749: Re-add the types to support the ObjectSet APIs
- Updated dependencies [4f73749]
  - @osdk/gateway@0.0.8
  - @osdk/api@0.0.15

## 0.0.12

### Patch Changes

- ad425f9: Fix query return type for objects
- Updated dependencies [ad425f9]
  - @osdk/gateway@0.0.7
  - @osdk/api@0.0.14

## 0.0.11

### Patch Changes

- 11ac931: Adding groupBy for Array types, using primary keys for actions and queries, and re-exporting more types
- 25de57b: Small fixes
- Updated dependencies [11ac931]
- Updated dependencies [25de57b]
  - @osdk/api@0.0.13
  - @osdk/gateway@0.0.6

## 0.0.10

### Patch Changes

- dfc2b94: Fix OAuth login process
- Updated dependencies [dfc2b94]
  - @osdk/gateway@0.0.5
  - @osdk/api@0.0.12

## 0.0.9

### Patch Changes

- f3120fb: Move 2.0 client into @osdk/client to fix typescript 4.9 compatibility in @osdk/api"
- 848404c: Handle conflicts between object, action, and query names
- Updated dependencies [f3120fb]
- Updated dependencies [848404c]
  - @osdk/gateway@0.0.4
  - @osdk/api@0.0.11

## 0.0.8

### Patch Changes

- Updated dependencies [9167059]
  - @osdk/api@0.0.10

## 0.0.7

### Patch Changes

- 7fc9fdc: Adjusting package structure to match existing
- Updated dependencies [0860ae9]
  - @osdk/api@0.0.9

## 0.0.6

### Patch Changes

- e22ce70: Adding proper support for reserved keywords in properties
- 66cb4ce: Fixing generator for integration

## 0.0.5

### Patch Changes

- 70719db: Fixing nits, and adding support for legacy reserved word back-compat

## 0.0.4

### Patch Changes

- 1674b35: Releasing clients for integration
- Updated dependencies [1674b35]
  - @osdk/api@0.0.8
  - @osdk/gateway@0.0.3

## 0.0.3

### Patch Changes

- a2b7874: Add in TimeSeries support and fixing issues during code-gen time with Queries
- Updated dependencies [a2b7874]
  - @osdk/api@0.0.7

## 0.0.2

### Patch Changes

- 90cc3ae: Adding Object, Object Set, Attachments, and Actions implementations for OSDK V1.1
- Updated dependencies [90cc3ae]
  - @osdk/api@0.0.6
  - @osdk/gateway@0.0.2

## 0.0.1

### Patch Changes

- d2e9964: Removing subpath imports since TS does not resolve them when creating `.d.ts` files
- Updated dependencies [d2e9964]
  - @osdk/gateway@0.0.1
