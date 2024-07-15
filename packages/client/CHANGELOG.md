# @osdk/client

## 0.20.0-beta.3

### Minor Changes

- 62bae76: Upgrades 'ws' to avoid false flag CVE
- 388dba9: Change all internal dependencies to be tilde not caret
- 57b68db: It is possible to pass a Promise<string> for ontologyRid on client creation

### Patch Changes

- Updated dependencies [b5ac8a8]
- Updated dependencies [388dba9]
- Updated dependencies [700c894]
  - @osdk/client.api@0.20.0-beta.3
  - @osdk/generator-converters@0.7.0-beta.0
  - @osdk/shared.client.impl@0.1.0-beta.0
  - @osdk/shared.net.fetch@0.1.0-beta.0
  - @osdk/api@1.9.0-beta.0

## 0.20.0-beta.2

### Minor Changes

- 7505880: Fix exports from client
- 141953f: Expose $title property in OsdkBase

### Patch Changes

- Updated dependencies [141953f]
  - @osdk/client.api@0.20.0-beta.2

## 0.20.0-beta.1

### Minor Changes

- 02c65c5: Rework $select syntax in aggregations to add support for ordering by metrics
- bfdb123: WARNING: Breaking: change action invocation to require `.applyAction`
- 7adf5c7: Refactoring packages
- 5e9d7d2: Refactored packages to move types over to client.api

### Patch Changes

- Updated dependencies [7adf5c7]
- Updated dependencies [5e9d7d2]
- Updated dependencies [67c1fd6]
  - @osdk/client.api@0.20.0-beta.1

## 0.20.0-beta.0

### Minor Changes

- 564adbf: Fixing attachment creation when converting objects from the wire
- 505b993: Experimental subscription no longer fires outOfDate when first subscribing
- a6119bd: Attachments reworked so that you can now fetch directly from object properties. Also added a helper to create an attachment object directly from a rid.
- f6d8850: Removed get, which is now replaced by fetchOne(). This has the exact same functionality and is essentially just a rename.
- 527e8ab: Objects that are $as are now linked directly to changes from source object
- a519655: Fixed issue accessing $rid when requested on an object.
- 5378312: Added batch action support for 2.0 client
- b3563e0: OSDK learns \_\_EXPERIMENTAL_strictNonNull to throw, drop objects, or return `| undefined` for properties, allowing for correct typesafety.
- dd6033a: Adds a createPlatformClient if you only need platform apis
- 4dbac7e: Fixes link direction for experiental bulk loads
- 413e511: Added attachment uploading, reading, and metadata fetching support to 2.0.
- 44add10: Standardize the use of dollar signs as prefixes for object properties that are specific to the OSDK.

### Patch Changes

- Updated dependencies [a6119bd]
- Updated dependencies [413e511]
  - @osdk/client.api@0.20.0-beta.0

## 0.19.0

### Minor Changes

- 0a64def: Adds experimental batch link support
- f9b3c72: Support importing the unstable-do-not-use from moduleResolution: node
- 978ecd5: Rexport PalantirApiError
- 978ecd5: Client is now usable for calling Platform SDK
- c9f3214: Interfaces are now mapped as views

### Patch Changes

- Updated dependencies [c9f3214]
  - @osdk/api@1.8.0
  - @osdk/generator-converters@0.6.0
  - @osdk/shared.net@1.11.0

## 0.18.0

### Minor Changes

- d183d92: Deprecated get and added fetchOne as a replacement. They function exactly the same.
- c68983b: Add fetchOneWithErrors that will add a result wrapper when fetching one object. This wrapper will either contain the data value, or an error if an error was thrown.
- f810576: Separate unstable client features from regular import

## 0.17.0

### Minor Changes

- 63ff4b2: Only producing ESM now

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
