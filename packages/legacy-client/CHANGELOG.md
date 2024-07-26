# @osdk/legacy-client

## 2.5.0-beta.1

### Minor Changes

- e2ab8db: Fix long aggregations in legacy-client

## 2.5.0-beta.0

### Minor Changes

- cd37441: Fix primary key encoding in URLs

## 2.4.0

### Minor Changes

- c1924df: Do not restart auth flow on failed auth callback
- 388dba9: Change all internal dependencies to be tilde not caret
- 572e322: Oauth errors should include a cause now on supported platforms
- 3ec7c38: Add support for queries in 2.0
- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [388dba9]
- Updated dependencies [d8edf10]
- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/shared.net@1.12.0
  - @osdk/api@1.9.0
  - @osdk/gateway@2.4.0

## 2.4.0-beta.2

### Minor Changes

- 572e322: Oauth errors should include a cause now on supported platforms
- 3ec7c38: Add support for queries in 2.0
- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/api@1.9.0-beta.1
  - @osdk/shared.net@1.12.0-beta.1
  - @osdk/gateway@2.4.0-beta.0

## 2.4.0-beta.1

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret

### Patch Changes

- Updated dependencies [388dba9]
  - @osdk/shared.net@1.12.0-beta.0
  - @osdk/api@1.9.0-beta.0

## 2.4.0-beta.0

### Minor Changes

- c1924df: Do not restart auth flow on failed auth callback

## 2.3.0

### Minor Changes

- 6b03c55: Fix legacy-client to handle fetch token errors

### Patch Changes

- Updated dependencies [c9f3214]
- Updated dependencies [c9f3214]
  - @osdk/gateway@2.3.0
  - @osdk/api@1.8.0
  - @osdk/shared.net@1.11.0

## 2.2.1

### Patch Changes

- 212f651: Add fetchOne, that is get replacement without result wrapper
- e690399: Fix $rid, $apiName and $primaryKey population
- 212f651: Deprecate get and add fetchOneWithErrors, which functionally is the same

## 2.2.0

### Minor Changes

- 11434b9: Deprecated bulk actions with renamed batchActions functionality
- 948c634: Add pivot to functionality and deprecate searchAround calls
- 9906a41: Add fetchPageWithErrors
- 9906a41: Add fetch page without result wrapper
- 9906a41: add asyncIter
- 9906a41: FetchPageWithErrors type fix
- 9906a41: Add missing error handlers to LoadObjectSetErrorHandler
- 3c51797: Upgrade luxon to 3.4.4

### Patch Changes

- Updated dependencies [9906a41]
  - @osdk/shared.net@1.10.0
  - @osdk/api@1.7.0

## 1.1.1

### Patch Changes

- e1a94f22: Revert change to how we generate the built package types
- Updated dependencies [e1a94f22]
  - @osdk/shared.net@1.1.1
  - @osdk/gateway@1.1.1
  - @osdk/api@1.1.1

## 1.1.0

### Minor Changes

- a0d5e431: Update build to ship packages compliant with @arethetypeswrong/cli

### Patch Changes

- Updated dependencies [a0d5e431]
  - @osdk/shared.net@1.1.0
  - @osdk/gateway@1.1.0
  - @osdk/api@1.1.0

## 1.0.4

### Patch Changes

- a6e61428: Go back to typescript private instead of #private for localDate and timestamp dateTime member

## 1.0.3

### Patch Changes

- ef7f8d8e: Ensure that ontology objects actions and queries have enumerable keys

## 1.0.2

### Patch Changes

- 25dd12ae: Restore files for legacy to .js instead of .cjs
- Updated dependencies [25dd12ae]
  - @osdk/shared.net@1.0.2
  - @osdk/gateway@1.0.2
  - @osdk/api@1.0.2

## 1.0.1

### Patch Changes

- b07ff14: CLI can now request ontology data directly from the backend
- Updated dependencies [b07ff14]
  - @osdk/shared.net@1.0.1
  - @osdk/gateway@1.0.1
  - @osdk/api@1.0.1

## 1.0.0

### Major Changes

- bfd4d9a: Stable 1.0 version

### Patch Changes

- Updated dependencies [bfd4d9a]
  - @osdk/api@1.0.0
  - @osdk/gateway@1.0.0
  - @osdk/shared.net@1.0.0

## 0.0.17

### Patch Changes

- ed78694: Fixes imports from older module resolution
- Updated dependencies [ed78694]
  - @osdk/gateway@0.0.10
  - @osdk/api@0.0.17

## 0.0.16

### Patch Changes

- b59cb10: Adding backwards compatibility for internal types

## 0.0.15

### Patch Changes

- 23a3515: Add deprecation notice to objects-api types
- Updated dependencies [23a3515]
  - @osdk/gateway@0.0.9
  - @osdk/api@0.0.16

## 0.0.14

### Patch Changes

- 4f73749: Re-add the types to support the ObjectSet APIs
- Updated dependencies [4f73749]
  - @osdk/gateway@0.0.8
  - @osdk/api@0.0.15

## 0.0.13

### Patch Changes

- ad425f9: Fix query return type for objects
- Updated dependencies [ad425f9]
  - @osdk/gateway@0.0.7
  - @osdk/api@0.0.14

## 0.0.12

### Patch Changes

- 4f9758d: Fixing Query response type for Objects

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

- Updated dependencies [0860ae9]
  - @osdk/api@0.0.9

## 0.0.6

### Patch Changes

- e22ce70: Adding proper support for reserved keywords in properties

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
