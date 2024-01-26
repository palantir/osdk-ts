# @osdk/generator

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

- b59cb10: Adding backcompatibility for internal types

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

- f3120fb: Move 2.0 client into @osdk/client to fix typescript 4.9 compatability in @osdk/api"
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

- e22ce70: Adding proper support for reservered keywords in properties
- 66cb4ce: Fixing generator for integration

## 0.0.5

### Patch Changes

- 70719db: Fixing nits, and adding support for legacy reservered word backcompat

## 0.0.4

### Patch Changes

- 1674b35: Releasing clients for integration
- Updated dependencies [1674b35]
  - @osdk/api@0.0.8
  - @osdk/gateway@0.0.3

## 0.0.3

### Patch Changes

- a2b7874: Addin TimeSeries support and fixing issues during code-gen time with Queries
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
