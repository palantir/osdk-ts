# @osdk/client

## 2.0.8-rc.4

### Patch Changes

- @osdk/api@2.0.8-rc.4
- @osdk/client.unstable@2.0.8-rc.4
- @osdk/generator-converters@2.0.8-rc.4

## 2.0.8-rc.3

### Patch Changes

- @osdk/generator-converters@2.0.8-rc.3
- @osdk/client.unstable@2.0.8-rc.3
- @osdk/api@2.0.8-rc.3

## 2.0.8-rc.1

### Patch Changes

- a27d559: Fixes process.env.NODE_ENV handling
  - @osdk/generator-converters@2.0.8-rc.1
  - @osdk/client.unstable@2.0.8-rc.1
  - @osdk/api@2.0.8-rc.1

## 2.0.8-rc.0

### Patch Changes

- 078ed56: Changed shared context to a version less error prone
- 078ed56: Fix bug where object return types in a query were not properly mapped when wrapped in a struct.
- 078ed56: Remove experimental non null for now.
- 1da5942: Change experimental code style to prevent future breaks
- Updated dependencies
  - @osdk/shared.client.impl@1.0.3-rc.0
  - @osdk/api@2.0.8-rc.0
  - @osdk/generator-converters@2.0.8-rc.0
  - @osdk/client.unstable@2.0.8-rc.0

## 2.0.7

### Patch Changes

- 0ff5e50: Update to latest platform sdks
- Updated dependencies
  - @osdk/api@2.0.7
  - @osdk/generator-converters@2.0.7
  - @osdk/client.unstable@2.0.7

## 2.0.6

### Patch Changes

- bd2207b: Changed shared context to a version less error prone
- Updated dependencies
  - @osdk/shared.client.impl@1.0.2
  - @osdk/generator-converters@2.0.6
  - @osdk/client.unstable@2.0.6
  - @osdk/api@2.0.6

## 2.0.5

### Patch Changes

- Updated dependencies
  - @osdk/api@2.0.5
  - @osdk/generator-converters@2.0.5
  - @osdk/client.unstable@2.0.5

## 2.0.4

### Patch Changes

- 7f29753: Avoid type-fest's IsAny as it doesn't always work
- Updated dependencies
  - @osdk/api@2.0.4
  - @osdk/generator-converters@2.0.4
  - @osdk/client.unstable@2.0.4

## 2.0.3

### Patch Changes

- @osdk/generator-converters@2.0.3
- @osdk/client.unstable@2.0.3
- @osdk/api@2.0.3

## 2.0.2

### Patch Changes

- 1edf95b: Switch to OSDK.Instance
- 135bddc: improves interface api name mapping with api namespaces
- 51354c5: Fixes where clauses when objects have an api namespace
- 4c5e0ae: Fix queries that have response types with nested values, like arrays.
- ba1c42a: Fixing proxy handlers.
- 51354c5: Locks dependency version of 3 internal libraries
- Updated dependencies
  - @osdk/api@2.0.2
  - @osdk/generator-converters@2.0.2
  - @osdk/client.unstable@2.0.2

## 2.0.1

### Patch Changes

- Updated dependencies
  - @osdk/shared.client@1.0.1
  - @osdk/internal.foundry.core@0.2.1
  - @osdk/internal.foundry.ontologiesv2@0.2.1
  - @osdk/shared.client.impl@1.0.1
  - @osdk/generator-converters@2.0.1
  - @osdk/api@2.0.1
  - @osdk/client.unstable@2.0.1

## 2.0.0

### Major Changes

- 56df85a: We now generate minimal object and interface types

### Minor Changes

- 39525b8: We now have a hard dependency on pino for type resolution. This has no effect on a project if it doesn't provide a logger to the client.
- ac4f4fd: Notable changes:
  - `{{actionApiName}}$Params` is deprecated in favor of `ActionParams${{actionApiName}}`.
  - All generated `{{actionApiName}}$Params` objects are now exported from generated code.
  - All `{{actionApiName}}$Params` are marked as `readonly`.
  - Some types that are now only needed in `@osdk/client` have been moved back out of `@osdk/client.api`.
  - Generated `ActionParams${{actionApiName}}` are simpler and do not rely on type mapping for the keys, the array'ness, nor multiplicity.
  - `AttachmentUpload.name` is now `readonly`.
- f86f8d0: Re-enable X-OSDK-Request-Context header
- dc25fb4: Code generation now uses MinQueryDef
- b946e00: Emitted action definition is minimal size now
- a2c7b37: Add docs for object sets and attachments.
- dc25fb4: Improve query generics
- 0b20066: Fixes an import
- 76a7adb: Use OntologyMetadataService.bulkLoadOntologyEntities in place of deprecated loadOntologyEntities
- dc25fb4: Rename MinimumActionDefinition to MinActionDef
- 51fe88c: Fix edge case with never in newly generated types
- 68a8dc7: Fixes an issue that could cause an object with sub-selection to be assigned as a full object
- a2c7b37: Enables better tree shaking
- dc25fb4: Further simplify types
- e6ade8b: Adds fetchMetadata method to client
- f009bb2: Remove the direct dependency on pino in favor of a similar shape
- dc25fb4: Renamed definition types to metadata
- dc25fb4: Fixes edge cases in inferred return types especially when changing object types
- 5a41e5e: Adds version compatibility checks to Queries
- a2c7b37: Internal refactor for TimeSeriesProperty
- 795777a: Change how queries are executed, now use executeFunction call instead
- d2f75f9: Adding support for arguments in asyncIter similar to fetchPage. Arguments that are not permitted in asyncIter are nextPageToken and pageSize.
- b7cd0a1: Exposes unstable experimental features directly on client
- 512ee35: Exposed editedObjectTypes for all action results and split edits based on edit type.
- 0ae2b07: Pino is no longer listed as a peer dep due to an issue with some versions of pnpm
- 6eeca39: Internally refactored Action Edits types
- dc25fb4: Modified return type of fetchMetadata to return Object/Interface Definitions
- 0ce2858: Improves casting between Foo.ObjectSet and ObjectSet<Foo>
- dc25fb4: Expose parameters on action metadata
- 5d6d5ab: Internally refactored to support new API versions
- dc25fb4: Simplified types
- dc25fb4: Updates return types of fetchMetadata to be Action and Query Definitions
- fc28eae: Fetching interfaces learns $\_\_EXPERIMENTAL_selectedObjectTypes
- 5d6d5ab: Autofill Content-Length and Content-Type headers in API's that accept Blobs
- dc25fb4: Renamed Min_Definition to \_Definition
- 96ea876: Add namespaces for objects,actions,queries so that you can enumerate them.
- 5d6d5ab: SLS dependencies are optional
- a9923f3: Adds exactDistinct to aggregations
- 1f633f7: Removed dependency on @osdk/client.api
- d4d6605: Audited and cleaned up deps
- 64818dc: Drop support for internal gateway package
- 081114f: Splits batchApplyAction out of applyAction

### Patch Changes

- Updated dependencies
  - @osdk/internal.foundry.ontologiesv2@0.2.0
  - @osdk/internal.foundry.core@0.2.0
  - @osdk/generator-converters@2.0.0
  - @osdk/api@2.0.0
  - @osdk/shared.client@1.0.0
  - @osdk/client.unstable@2.0.0
  - @osdk/client.unstable.osw@0.2.0
  - @osdk/shared.client.impl@1.0.0
  - @osdk/shared.net.errors@2.0.0
  - @osdk/shared.net.fetch@1.0.0

## 0.21.0

### Minor Changes

- 2deb4d9: Fixing types for within and intersects so they don't take more than the permitted keys
- e54f413: Marks things as @internal to clean up API requirements
- 6387a92: Makes defining process.env.NODE_ENV optional
- f91cd58: Temporarily disable X-OSDK-Request-Context header
- 651c1b8: Fixes rids in interfaces

### Patch Changes

- Updated dependencies
  - @osdk/client.api@0.21.0

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

- Updated dependencies
  - @osdk/client.api@0.20.0
  - @osdk/generator-converters@0.7.0
  - @osdk/shared.client.impl@0.1.0
  - @osdk/shared.net.fetch@0.1.0
  - @osdk/api@1.9.0
  - @osdk/client.unstable.osw@0.1.0
  - @osdk/shared.net.errors@1.1.0
  - @osdk/client.unstable@0.1.0

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

- Updated dependencies
  - @osdk/shared.net@1.10.0
  - @osdk/api@1.7.0
  - @osdk/generator-converters@0.5.0

## 0.5.0

### Minor Changes

- 05a1d36b: Making list of objects enumerable in 2.0 syntax

## 0.4.1

### Patch Changes

- e1a94f22: Revert change to how we generate the built package types
- Updated dependencies
  - @osdk/shared.net@1.1.1
  - @osdk/gateway@1.1.1
  - @osdk/api@1.1.1

## 0.4.0

### Minor Changes

- a0d5e431: Update build to ship packages compliant with @arethetypeswrong/cli

### Patch Changes

- Updated dependencies
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

- Updated dependencies
  - @osdk/shared.net@1.0.2
  - @osdk/gateway@1.0.2
  - @osdk/api@1.0.2

## 0.2.0

### Minor Changes

- 14067ad: Fix subscriptions in v2

## 0.1.1

### Patch Changes

- b07ff14: CLI can now request ontology data directly from the backend
- Updated dependencies
  - @osdk/shared.net@1.0.1
  - @osdk/gateway@1.0.1
  - @osdk/api@1.0.1

## 0.1.0

### Minor Changes

- 6d81f7f: Add preliminary action support to v2

## 0.0.11

### Patch Changes

- Updated dependencies
  - @osdk/api@1.0.0
  - @osdk/gateway@1.0.0
  - @osdk/shared.net@1.0.0

## 0.0.10

### Patch Changes

- ed78694: Fixes imports from older module resolution
- Updated dependencies
  - @osdk/gateway@0.0.10
  - @osdk/api@0.0.17

## 0.0.9

### Patch Changes

- 23a3515: Add deprecation notice to objects-api types
- Updated dependencies
  - @osdk/gateway@0.0.9
  - @osdk/api@0.0.16

## 0.0.8

### Patch Changes

- 4f73749: Re-add the types to support the ObjectSet APIs
- Updated dependencies
  - @osdk/gateway@0.0.8
  - @osdk/api@0.0.15

## 0.0.7

### Patch Changes

- ad425f9: Fix query return type for objects
- Updated dependencies
  - @osdk/gateway@0.0.7
  - @osdk/api@0.0.14

## 0.0.6

### Patch Changes

- 25de57b: Small fixes
- Updated dependencies
  - @osdk/api@0.0.13
  - @osdk/gateway@0.0.6

## 0.0.5

### Patch Changes

- dfc2b94: Fix OAuth login process
- Updated dependencies
  - @osdk/gateway@0.0.5
  - @osdk/api@0.0.12

## 0.0.4

### Patch Changes

- f3120fb: Move 2.0 client into @osdk/client to fix typescript 4.9 compatibility in @osdk/api"
- 848404c: Handle conflicts between object, action, and query names
- Updated dependencies
  - @osdk/gateway@0.0.4
  - @osdk/api@0.0.11

## 0.0.3

### Patch Changes

- 1674b35: Releasing clients for integration
- Updated dependencies
  - @osdk/gateway@0.0.3

## 0.0.2

### Patch Changes

- Updated dependencies
  - @osdk/gateway@0.0.2

## 0.0.1

### Patch Changes

- d2e9964: Removing subpath imports since TS does not resolve them when creating `.d.ts` files
- Updated dependencies
  - @osdk/gateway@0.0.1
