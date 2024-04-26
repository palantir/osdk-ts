# @osdk/client

## 0.16.0

### Minor Changes

- 97f627e: Supports more than one concurrent subscription

  Also:

  - Introduced an optional pino logger to the client
  - Fixes issues with where clauses for equality in subscriptions
  - Fixes issues with inconsistent idname and apiName's in the mapping data

- 9906a41: Foundry Platform API support
- 9906a41: Compatible version checks now use versions that are both embedded in the code and updated automatically as part of the release process.

### Patch Changes

- Updated dependencies [9906a41]
  - @osdk/shared.net@1.10.0
  - @osdk/api@1.7.0
  - @osdk/generator-converters@0.5.0

## 0.5.0

### Minor Changes

- 05a1d36b: Making list of objects enumerable in 2.0 syntax

## 0.4.1

### Patch Changes

- e1a94f22: Revert change to how we generate the built package types
- Updated dependencies [e1a94f22]
  - @osdk/shared.net@1.1.1
  - @osdk/gateway@1.1.1
  - @osdk/api@1.1.1

## 0.4.0

### Minor Changes

- a0d5e431: Update build to ship packages compliant with @arethetypeswrong/cli

### Patch Changes

- Updated dependencies [a0d5e431]
  - @osdk/shared.net@1.1.0
  - @osdk/gateway@1.1.0
  - @osdk/api@1.1.0

## 0.3.1

### Patch Changes

- 206c2275: Bump conjure-lite dependency to pick up an explicit license

## 0.3.0

### Minor Changes

- af6a26c0: Add support for object->object links through the object.$link namespace

### Patch Changes

- 07107577: Add where clause support for contains filter

## 0.2.1

### Patch Changes

- Updated dependencies [25dd12ae]
  - @osdk/shared.net@1.0.2
  - @osdk/gateway@1.0.2
  - @osdk/api@1.0.2

## 0.2.0

### Minor Changes

- 14067ad: Fix subscriptions in v2

## 0.1.1

### Patch Changes

- b07ff14: CLI can now request ontology data directly from the backend
- Updated dependencies [b07ff14]
  - @osdk/shared.net@1.0.1
  - @osdk/gateway@1.0.1
  - @osdk/api@1.0.1

## 0.1.0

### Minor Changes

- 6d81f7f: Add priliminary action support to v2

## 0.0.11

### Patch Changes

- Updated dependencies [bfd4d9a]
  - @osdk/api@1.0.0
  - @osdk/gateway@1.0.0
  - @osdk/shared.net@1.0.0

## 0.0.10

### Patch Changes

- ed78694: Fixes imports from older module resolution
- Updated dependencies [ed78694]
  - @osdk/gateway@0.0.10
  - @osdk/api@0.0.17

## 0.0.9

### Patch Changes

- 23a3515: Add deprecation notice to objects-api types
- Updated dependencies [23a3515]
  - @osdk/gateway@0.0.9
  - @osdk/api@0.0.16

## 0.0.8

### Patch Changes

- 4f73749: Re-add the types to support the ObjectSet APIs
- Updated dependencies [4f73749]
  - @osdk/gateway@0.0.8
  - @osdk/api@0.0.15

## 0.0.7

### Patch Changes

- ad425f9: Fix query return type for objects
- Updated dependencies [ad425f9]
  - @osdk/gateway@0.0.7
  - @osdk/api@0.0.14

## 0.0.6

### Patch Changes

- 25de57b: Small fixes
- Updated dependencies [11ac931]
- Updated dependencies [25de57b]
  - @osdk/api@0.0.13
  - @osdk/gateway@0.0.6

## 0.0.5

### Patch Changes

- dfc2b94: Fix OAuth login process
- Updated dependencies [dfc2b94]
  - @osdk/gateway@0.0.5
  - @osdk/api@0.0.12

## 0.0.4

### Patch Changes

- f3120fb: Move 2.0 client into @osdk/client to fix typescript 4.9 compatability in @osdk/api"
- 848404c: Handle conflicts between object, action, and query names
- Updated dependencies [f3120fb]
- Updated dependencies [848404c]
  - @osdk/gateway@0.0.4
  - @osdk/api@0.0.11

## 0.0.3

### Patch Changes

- 1674b35: Releasing clients for integration
- Updated dependencies [1674b35]
  - @osdk/gateway@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies [90cc3ae]
  - @osdk/gateway@0.0.2

## 0.0.1

### Patch Changes

- d2e9964: Removing subpath imports since TS does not resolve them when creating `.d.ts` files
- Updated dependencies [d2e9964]
  - @osdk/gateway@0.0.1
