# @osdk/generator

## 2.0.0-beta.17

### Patch Changes

- Updated dependencies [5d6d5ab]
  - @osdk/internal.foundry.core@0.2.0-beta.11
  - @osdk/generator-converters@2.0.0-beta.17
  - @osdk/api@2.0.0-beta.17

## 2.0.0-beta.16

### Minor Changes

- dc25fb4: Improve query generics
- dc25fb4: Further simplify types

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
  - @osdk/generator-converters@2.0.0-beta.16
  - @osdk/api@2.0.0-beta.16
  - @osdk/internal.foundry.core@0.2.0-beta.10

## 2.0.0-beta.15

### Minor Changes

- dc25fb4: Simplified types

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/generator-converters@2.0.0-beta.15
  - @osdk/api@2.0.0-beta.15

## 2.0.0-beta.14

### Minor Changes

- 1f633f7: Removed dependency on @osdk/client.api
- d4d6605: Audited and cleaned up deps

### Patch Changes

- Updated dependencies [5d6d5ab]
- Updated dependencies [a2c7b37]
- Updated dependencies [fe9547e]
- Updated dependencies [1f633f7]
- Updated dependencies [d4d6605]
  - @osdk/internal.foundry.core@0.2.0-beta.9
  - @osdk/api@2.0.0-beta.14
  - @osdk/generator-converters@2.0.0-beta.14

## 2.0.0-beta.13

### Minor Changes

- 1488144: Renamed definition types to metadata
- bbfebfd: Fix generation of actions with full api names
- f6e2880: Fixes query type generation
- c28792e: Modified return type of fetchMetadata to return Object/Interface Definitions
- 26ee3bd: Updates return types of fetchMetadata to be Action and Query Definitions
- 6ab5d2e: Renamed Min_Definition to \_Definition
- 885c8e4: Fixing bug for codegen on windows machines, where we would use backslashes instead of forward slashes for import paths, which should be OS agnostic.

### Patch Changes

- Updated dependencies [1488144]
- Updated dependencies [c28792e]
- Updated dependencies [26ee3bd]
- Updated dependencies [6ab5d2e]
  - @osdk/generator-converters@2.0.0-beta.13
  - @osdk/api@2.0.0-beta.13
  - @osdk/internal.foundry.core@0.2.0-beta.8

## 2.0.0-beta.12

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/generator-converters@2.0.0-beta.12
  - @osdk/api@2.0.0-beta.12

## 2.0.0-beta.11

### Patch Changes

- @osdk/generator-converters@2.0.0-beta.11
- @osdk/api@2.0.0-beta.11

## 2.0.0-beta.10

### Major Changes

- 1252d94: ESM Only
- 56df85a: We now generate minimal object and interface types

### Minor Changes

- dc25fb4: Code generation now uses MinQueryDef
- dc25fb4: Rename MinimumActionDefinition to MinActionDef

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
- Updated dependencies [1252d94]
- Updated dependencies [5d6d5ab]
- Updated dependencies [56df85a]
  - @osdk/generator-converters@2.0.0-beta.10
  - @osdk/api@2.0.0-beta.10
  - @osdk/internal.foundry.core@0.2.0-beta.7

## 2.0.0-beta.9

### Minor Changes

- b946e00: Emitted action definition is minimal size now

### Patch Changes

- Updated dependencies [b946e00]
  - @osdk/api@2.0.0-beta.9
  - @osdk/generator-converters@2.0.0-beta.9
  - @osdk/internal.foundry.core@0.2.0-beta.6

## 2.0.0-beta.8

### Minor Changes

- 96ea876: Adding js docs for actions so you can hover and see params and description.

### Patch Changes

- @osdk/api@2.0.0-beta.8
- @osdk/internal.foundry.core@0.2.0-beta.5
- @osdk/generator-converters@2.0.0-beta.8

## 2.0.0-beta.7

### Minor Changes

- 33759fb: Removes deprecated types and renames Definition to improve intellisense
- 5c89065: Generator no longer organizes imports

### Patch Changes

- Updated dependencies [9b0617d]
- Updated dependencies [5d6d5ab]
  - @osdk/api@2.0.0-beta.7
  - @osdk/internal.foundry.core@0.2.0-beta.4
  - @osdk/generator-converters@2.0.0-beta.7

## 2.0.0-beta.6

### Minor Changes

- 0a374d6: Remove legacy client
- 96ea876: Add namespaces for objects,actions,queries so that you can enumerate them.
- 6f93c8b: Generates fewer overrides to prevent potential failures

### Patch Changes

- Updated dependencies [3affe49]
- Updated dependencies [5d6d5ab]
  - @osdk/api@2.0.0-beta.6
  - @osdk/gateway@2.5.0-beta.0
  - @osdk/generator-converters@2.0.0-beta.6

## 1.14.0-beta.4

### Minor Changes

- dc25fb4: Fixes edge cases in inferred return types especially when changing object types

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/api@1.10.0-beta.1
  - @osdk/generator-converters@0.8.0-beta.1

## 1.14.0-beta.3

### Patch Changes

- Updated dependencies [7c2db00]
  - @osdk/api@1.10.0-beta.0
  - @osdk/generator-converters@0.8.0-beta.0

## 1.14.0-beta.2

### Minor Changes

- 68a8dc7: Fixes an issue that could cause an object with sub-selection to be assigned as a full object
- 081114f: Splits batchApplyAction out of applyAction

## 1.14.0-beta.1

### Minor Changes

- 51fe88c: Fix edge case with never in newly generated types

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
