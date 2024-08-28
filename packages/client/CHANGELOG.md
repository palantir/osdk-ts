# @osdk/client

## 0.22.0-beta.0

### Minor Changes

- ac4f4fd: Notable changes:
  - `{{actionApiName}}$Params` is deprecated in favor of `ActionParams${{actionApiName}}`.
  - All generated `{{actionApiName}}$Params` objects are now exported from generated code.
  - All `{{actionApiName}}$Params` are marked as `readonly`.
  - Some types that are now only needed in `@osdk/client` have been moved back out of `@osdk/client.api`.
  - Generated `ActionParams${{actionApiName}}` are simpler and do not rely on type mapping for the keys, the array'ness, nor multiplicity.
  - `AttachmentUpload.name` is now `readonly`.
- f86f8d0: Re-enable X-OSDK-Request-Context header
- a2c7b37: Add docs for object sets and attachments.
- 5a41e5e: Adds version compatibility checks to Queries
- 795777a: Change how queries are executed, now use executeFunction call instead

### Patch Changes

- Updated dependencies [a2c7b37]
- Updated dependencies [795777a]
  - @osdk/client.api@0.22.0-beta.0

## 0.21.0

### Minor Changes

- 2deb4d9: Fixing types for within and intersects so they don't take more than the permitted keys
- e54f413: Marks things as @internal to clean up API requirements
- 6387a92: Makes defining process.env.NODE_ENV optional
- f91cd58: Temporarily disable X-OSDK-Request-Context header
- 651c1b8: Fixes rids in interfaces

### Patch Changes

- Updated dependencies [2deb4d9]
- Updated dependencies [e54f413]
  - @osdk/client.api@0.21.0

## 0.21.0-beta.1

### Minor Changes

- f91cd58: Temporarily disable X-OSDK-Request-Context header

### Patch Changes

- @osdk/client.api@0.21.0-beta.1

## 0.21.0-beta.0

### Minor Changes

- 2deb4d9: Fixing types for within and intersects so they don't take more than the permitted keys
- e54f413: Marks things as @internal to clean up API requirements
- 6387a92: Makes defining process.env.NODE_ENV optional
- 651c1b8: Fixes rids in interfaces

### Patch Changes

- Updated dependencies [2deb4d9]
- Updated dependencies [e54f413]
  - @osdk/client.api@0.21.0-beta.0

## 0.20.0

### Minor Changes

- 7505880: Fix exports from client
- 02c65c5: Rework $select syntax in aggregations to add support for ordering by metrics
- 564adbf: Fixing attachment creation when converting objects from the wire
- 141953f: Expose $title property in OsdkBase
- 505b993: Experimental subscription no longer fires outOfDate when first subscribing
- a6119bd: Attachments reworked so that you can now fetch directly from object properties. Also added a helper to create an attachment object directly from a rid.
- bfdb123: WARNING: Breaking: change action invocation to require `.applyAction`
- 62bae76: Upgrades 'ws' to avoid false flag CVE
- 034f7ea: Add support for no query time series pulls.
- f6d8850: Removed get, which is now replaced by fetchOne(). This has the exact same functionality and is essentially just a rename.
- 388dba9: Change all internal dependencies to be tilde not caret
- 527e8ab: Objects that are $as are now linked directly to changes from source object
- a519655: Fixed issue accessing $rid when requested on an object.
- 7afa226: Fix action params that take objects to correctly parse out primary key.
- 57b68db: It is possible to pass a Promise<string> for ontologyRid on client creation
- 5378312: Added batch action support for 2.0 client
- 3ec7c38: Add support for queries in 2.0
- b3563e0: OSDK learns \_\_EXPERIMENTAL_strictNonNull to throw, drop objects, or return `| undefined` for properties, allowing for correct typesafety.
- 7adf5c7: Refactoring packages
- 4824449: Fix asyncIter to fetch subsequent pages
- dd6033a: Adds a createPlatformClient if you only need platform apis
- bc89b62: Spelling fixes and spell check in CI
- 4dbac7e: Fixes link direction for experimental bulk loads
- 489d13f: Add support for timeseries in 2.0 syntax.
- 8cff4f0: Adding more package exports
- dec005b: Add final method call to request context header
- 5e9d7d2: Refactored packages to move types over to client.api
- 413e511: Added attachment uploading, reading, and metadata fetching support to 2.0.
- 44add10: Standardize the use of dollar signs as prefixes for object properties that are specific to the OSDK.
- a92e032: ClientCache now uses a key field as the cache key instead of the entire client

### Patch Changes

- Updated dependencies [b5ac8a8]
- Updated dependencies [141953f]
- Updated dependencies [a6119bd]
- Updated dependencies [034f7ea]
- Updated dependencies [388dba9]
- Updated dependencies [d8edf10]
- Updated dependencies [3ec7c38]
- Updated dependencies [7adf5c7]
- Updated dependencies [700c894]
- Updated dependencies [bc89b62]
- Updated dependencies [3615522]
- Updated dependencies [489d13f]
- Updated dependencies [dec005b]
- Updated dependencies [5e9d7d2]
- Updated dependencies [413e511]
- Updated dependencies [67c1fd6]
  - @osdk/client.api@0.20.0
  - @osdk/generator-converters@0.7.0
  - @osdk/shared.client.impl@0.1.0
  - @osdk/shared.net.fetch@0.1.0
  - @osdk/api@1.9.0
  - @osdk/client.unstable.osw@0.1.0
  - @osdk/shared.net.errors@1.1.0
  - @osdk/client.unstable@0.1.0

## 0.20.0-beta.4

### Minor Changes

- 7afa226: Fix action params that take objects to correctly parse out primary key.
- 3ec7c38: Add support for queries in 2.0
- 4824449: Fix asyncIter to fetch subsequent pages
- bc89b62: Spelling fixes and spell check in CI
- a92e032: ClientCache now uses a key field as the cache key instead of the entire client

### Patch Changes

- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/client.api@0.20.0-beta.4
  - @osdk/api@1.9.0-beta.1
  - @osdk/generator-converters@0.7.0-beta.1
  - @osdk/client.unstable.osw@0.1.0-beta.0
  - @osdk/shared.client.impl@0.1.0-beta.1
  - @osdk/shared.net.errors@1.1.0-beta.0
  - @osdk/shared.net.fetch@0.1.0-beta.1
  - @osdk/client.unstable@0.1.0-beta.0

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
- 4dbac7e: Fixes link direction for experimental bulk loads
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
- 978ecd5: Reexport PalantirApiError
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
  - Fixes issues with inconsistent id name and apiName's in the mapping data

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

- 6d81f7f: Add preliminary action support to v2

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

- f3120fb: Move 2.0 client into @osdk/client to fix typescript 4.9 compatibility in @osdk/api"
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
