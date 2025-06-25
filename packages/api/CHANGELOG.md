# @osdk/api

## 2.3.0-beta.8

### Minor Changes

- 12d599f: Export ObjectIdentifiers to ensure Osdk.Instance can be used with typeof

## 2.3.0-beta.7

### Minor Changes

- f8db93d: improve media upload (beta)

## 2.3.0-beta.6

## 2.3.0-beta.5

### Minor Changes

- e8c4aed: Fixes breaks introduced between 2.1 and 2.2

## 2.3.0-beta.4

### Minor Changes

- 43c5547: Add 'getMediaReference' method to Media
- ef46ed6: Add protection for dropping unsupported enums instead of throwing"
- 3b5ccaa: Fix orderBy argument on object load methods

## 2.3.0-beta.3

## 2.3.0-beta.2

## 2.2.0-beta.23

### Minor Changes

- 4183a55: Refactor OsdkBase to avoid breaks with type not being discoverable

## 2.2.0-beta.22

### Minor Changes

- 18ba34f: Adds the ability to generate and execute functions at pinned versions

## 2.2.0-beta.21

### Minor Changes

- 317b555: Release

## 2.2.0-beta.20

### Minor Changes

- 889e84b: Release

## 2.2.0-beta.19

## 2.2.0-beta.18

### Minor Changes

- 56aa502: Improves exposed APIs

## 2.2.0-beta.17

### Minor Changes

- c6bee50: Removes ObjectSpecifier from OsdkBase
- abe4897: Removes support for boolean primary keys
- 70b4464: Fix types for RDPs
- 791e655: Add support for geoshape and geohash action parameters.

## 2.2.0-beta.16

## 2.2.0-beta.15

### Minor Changes

- ed69666: Update conjure-lite to 0.7.1

## 2.2.0-beta.14

### Minor Changes

- 6abf078: Fixes aggregation types for datetime to include collectList and collectSet

## 2.2.0-beta.13

### Minor Changes

- 488b51c: Add support for using aggregations and GeoJSON types from runtime derived properties
- 71462e9: Updates aggregation types to support operations on additional property types

## 2.2.0-beta.12

## 2.2.0-beta.11

### Minor Changes

- 7170fd1: Fix generics for fetchPageByRid

## 2.2.0-beta.10

### Minor Changes

- 23ea0e4: Fix type break.
- 46cede4: Fix include all properties flag.

## 2.2.0-beta.9

### Minor Changes

- 12843cb: Add ability to load all underlying properties of an interface.
- f82767c: Allow using aggregation operations for boolean property types

## 2.2.0-beta.8

### Minor Changes

- 0e874b1: Exporting more entities from functions package.
- 63b2e63: Update Platform SDK Dependencies
- 26c2d95: Add experimental function to load page of objects by rid.
- 63b2e63: Supports generating queries for entrySet function types
- 63b2e63: Adds ObjectSpecifiers to generated OSDK objects

## 2.2.0-beta.7

### Minor Changes

- 7416ce4: Adds deleted objects and links returned from applyAction
- 7416ce4: Update Platform SDK Dependencies
- 805df40: Fix interface action types.

## 2.2.0-beta.6

### Minor Changes

- cddfbf9: Adds default value option to group by
- a6e5f89: Changes count, exactDistinct, and approximateDistinct to be non-nullable

## 2.2.0-beta.5

## 2.2.0-beta.4

## 2.2.0-beta.3

### Minor Changes

- 761e69d: Added type safety to createMediaReference

## 2.2.0-beta.2

### Minor Changes

- fccd9ac: "Allow selecting derived properties"

## 2.1.0

### Minor Changes

- 966d408: Rename type for base action parameter types.
- cddc196: Try-catches handlers called during subscription
- d794c19: Adding support for struct action params.
- 05febf4: Adds Reference Update support in subscribe
- 55c05f2: Remove runtime derived properties from external types.
- 0dc40b0: Switch to OSDK.Instance
- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.
- 11a05cc: Updated subscribe api to make requesting properties optional
- 7865cb6: Add support for search on struct properties.
- 9c4efe6: Support uploading media parameters through actions
- 3ea2e79: Creates new export for internal helper functions
- 1812118: Add geotime support for OSDK.
- bc1761c: Update platform API dependencies.
- 656f975: Fixes attachment upload inputs sending incorrect in browser contexts
- f1145ff: Adds support for runtime derived properties
- f446d0c: Exposes $clone from OSDK Object instances
- c80ca45: Add ability to create interfaces through actions now.
- bb8b219: Use new external packages instead of the internal ones.
- 03f95eb: Add support for interface params in actions.
- 1a89f23: Removing support for augmenting interfaces when fetching them.
- 9d35a1f: Remove unused imports
- c691c8b: Package now has experimental support for commonjs
- 749cf69: Remove experimental non null for now.
- f03e39f: Add a namespace type for listeners.
- 11088aa: Fix where clause types so we don't accept more than one key in the clauses.
- 72c1905: Fixes a bug where any/never could be interpreted wrong when used in types for determining fetch results
- 9298f75: Using new interface APIs for backend.
- f34b3d4: Add ability to fetch by rid, experimentally.
- acbfab9: Fixes where clauses for interfaces with no properties.
- 62c1d63: Add support for reading media reference property in OSDK.
- 3c9ac22: Cleaning up where clause types.
- 1591f04: Rename base property types.
- 03e1941: Add support for null filter on geo properties.
- abfe4b3: Add support for reading struct properties.
- b79becf: Modify return type for fetch single on links.
- 27866a8: Removing interface argument for selecting object types. This is not supported in the new apis, and is not being used internally anywhere with the old apis.
- e5fe7c0: Adds experimental method to convert an object set into RID
- 1b2e8c9: Adds subscribe feature directly to client
- 9f3807c: Allows $in to take a readonly array
- 0c56d21: Exposing fuzzy searching.
- e548b9b: Updates subscribe to return object updates
- ee6224b: Explicitly type aggregation types in queries.
- 1dc0228: Change experimental code style to prevent future breaks
- 6c60414: Ensure that inferred return type of ObjectSet.fetchPage where only the ObjectTypeDefinition is inferred, does not default to $notStrict
- 5fe2c8d: Remove ability to filter on entire struct.
- d3b3f35: Add's onSuccessfulSubscribe handler to subscribe functionality
- 785f663: Rename namespace so not exported from api package.
- 6b6c8a1: Updates gateway endpoints and changes fetchContents for attachments to return a response
- c537e2d: Remove unused imports.
- 73fa373: Exports helper method to construct object sets from RIDs from internal utils
- 8e6a5f4: Avoid type-fest's IsAny as it doesn't always work
- 2d5e648: Remove subscribe from experimental gate.
- 31e7d70: Fixes extra generic
- f19da8e: Remove where clause from aggregate options. This option was never actually doing anything before as it was not passed to the backend for processing, so we are removing it to prevent future confusion.

## 2.1.0-beta.31

### Minor Changes

- bb8b219: Use new external packages instead of the internal ones.
- ee6224b: Explicitly type aggregation types in queries.
- 5fe2c8d: Remove ability to filter on entire struct.

## 2.1.0-beta.30

### Minor Changes

- 966d408: Rename type for base action parameter types.
- f03e39f: Add a namespace type for listeners.
- 1591f04: Rename base property types.
- 785f663: Rename namespace so not exported from api package.
- 2d5e648: Remove subscribe from experimental gate.

## 2.1.0-beta.29

### Minor Changes

- f1145ff: Adds support for runtime derived properties

## 2.1.0-beta.28

### Minor Changes

- f446d0c: Exposes $clone from OSDK Object instances

## 2.1.0-beta.27

## 2.1.0-beta.26

### Minor Changes

- 7865cb6: Add support for search on struct properties.
- 9c4efe6: Support uploading media parameters through actions
- f19da8e: Remove where clause from aggregate options. This option was never actually doing anything before as it was not passed to the backend for processing, so we are removing it to prevent future confusion.

## 2.1.0-beta.25

### Minor Changes

- c80ca45: Add ability to create interfaces through actions now.

## 2.1.0-beta.24

### Minor Changes

- 03f95eb: Add support for interface params in actions.
- c691c8b: Package now has experimental support for commonjs
- 3c9ac22: Cleaning up where clause types.

## 2.1.0-beta.23

### Minor Changes

- d794c19: Adding support for struct action params.
- 62c1d63: Add support for reading media reference property in OSDK.

## 2.1.0-beta.22

### Minor Changes

- 73fa373: Exports helper method to construct object sets from RIDs from internal utils

## 2.1.0-beta.21

### Minor Changes

- 3ea2e79: Creates new export for internal helper functions
- 656f975: Fixes attachment upload inputs sending incorrect in browser contexts
- f34b3d4: Add ability to fetch by rid, experimentally.

## 2.1.0-beta.20

### Minor Changes

- 9d35a1f: Remove unused imports
- abfe4b3: Add support for reading struct properties.
- c537e2d: Remove unused imports.

## 2.1.0-beta.19

### Minor Changes

- cddc196: Try-catches handlers called during subscription

## 2.1.0-beta.18

## 2.1.0-beta.17

## 2.1.0-beta.16

### Minor Changes

- e5fe7c0: Adds experimental method to convert an object set into RID

## 2.1.0-beta.15

## 2.1.0-beta.14

### Minor Changes

- 0c56d21: Exposing fuzzy searching.
- 6b6c8a1: Updates gateway endpoints and changes fetchContents for attachments to return a response

## 2.1.0-beta.13

## 2.1.0-beta.12

## 2.1.0-beta.11

### Minor Changes

- bc1761c: Update platform API dependencies.
- 9298f75: Using new interface APIs for backend.

## 2.1.0-beta.10

### Minor Changes

- 11a05cc: Updated subscribe api to make requesting properties optional
- 11088aa: Fix where clause types so we don't accept more than one key in the clauses.

## 2.1.0-beta.9

### Minor Changes

- acbfab9: Fixes where clauses for interfaces with no properties.

## 2.1.0-beta.8

### Minor Changes

- 9f3807c: Allows $in to take a readonly array

## 2.1.0-beta.7

### Minor Changes

- 27866a8: Removing interface argument for selecting object types. This is not supported in the new apis, and is not being used internally anywhere with the old apis.
- 31e7d70: Fixes extra generic

## 2.1.0-beta.6

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.
- 1a89f23: Removing support for augmenting interfaces when fetching them.
- 1b2e8c9: Adds subscribe feature directly to client

## 2.1.0-beta.5

## 2.1.0-beta.4

### Minor Changes

- 0dc40b0: Remove experimental non null for now.
- 1dc0228: Change experimental code style to prevent future breaks
- d3b3f35: Add's onSuccessfulSubscribe handler to subscribe functionality

## 2.1.0-beta.3

### Minor Changes

- 05febf4: Adds Reference Update support in subscribe
- b79becf: Modify return type for fetch single on links.

## 2.1.0-beta.2

## 2.1.0-beta.1

### Minor Changes

- 1812118: Add geotime support for OSDK.
- 72c1905: Fixes a bug where any/never could be interpreted wrong when used in types for determining fetch results
- 6c60414: Ensure that inferred return type of ObjectSet.fetchPage where only the ObjectTypeDefinition is inferred, does not default to $notStrict
- 8e6a5f4: Avoid type-fest's IsAny as it doesn't always work

## 2.1.0-beta.0

### Minor Changes

- 0dc40b0: Switch to OSDK.Instance
- 03e1941: Add support for null filter on geo properties.
- e548b9b: Updates subscribe to return object updates

## 2.0.0

### Major Changes

- 3affe49: Placeholder for breaking changes
- 9b0617d: Legacy types were removed
- 1252d94: ESM Only
- fe9547e: All types from @osdk/client.api merged into @osdk/api
- 56df85a: We now generate minimal object and interface types

### Minor Changes

- dc25fb4: Code generation now uses MinQueryDef
- b946e00: Emitted action definition is minimal size now
- a2c7b37: Add docs for object sets and attachments.
- 0ea1a17: Fixes an issue where properties may not be inferred correctly when directly used in a return statement
- dc25fb4: Improve query generics
- 94105a5: Updates return type of actions to improve ease of use
- dc25fb4: Rename MinimumActionDefinition to MinActionDef
- a2c7b37: Enables better tree shaking
- dc25fb4: Further simplify types
- e6ade8b: Adds fetchMetadata method to client
- dc25fb4: Renamed definition types to metadata
- dc25fb4: Fixes edge cases in inferred return types especially when changing object types
- a2c7b37: Internal refactor for TimeSeriesProperty
- 795777a: Change how queries are executed, now use executeFunction call instead
- 95f9247: Adds In filter to Where clauses
- d2f75f9: Adding support for arguments in asyncIter similar to fetchPage. Arguments that are not permitted in asyncIter are nextPageToken and pageSize.
- b7cd0a1: Exposes unstable experimental features directly on client
- 512ee35: Exposed editedObjectTypes for all action results and split edits based on edit type.
- e86c505: Removed unused test file
- dc25fb4: Modified return type of fetchMetadata to return Object/Interface Definitions
- 0ce2858: Improves casting between Foo.ObjectSet and ObjectSet<Foo>
- dc25fb4: Expose parameters on action metadata
- 7c2db00: Updates QueryDefinition to include an optional generic argument
- dc25fb4: Simplified types
- dc25fb4: Updates return types of fetchMetadata to be Action and Query Definitions
- fc28eae: Fetching interfaces learns $\_\_EXPERIMENTAL_selectedObjectTypes
- dc25fb4: Renamed Min_Definition to \_Definition
- a9923f3: Adds exactDistinct to aggregations
- 1f633f7: Removed dependency on @osdk/client.api
- d4d6605: Audited and cleaned up deps
- 64818dc: Drop support for internal gateway package

### Patch Changes

- Updated dependencies [1252d94]
- Updated dependencies [01724ae]
- Updated dependencies [d4d6605]
- Updated dependencies [64818dc]
  - @osdk/shared.net@2.0.0

## 2.0.0-beta.16

### Minor Changes

- dc25fb4: Improve query generics
- dc25fb4: Further simplify types

### Patch Changes

- @osdk/shared.net@2.0.0-beta.6

## 2.0.0-beta.15

### Minor Changes

- dc25fb4: Simplified types

## 2.0.0-beta.14

### Major Changes

- fe9547e: All types from @osdk/client.api merged into @osdk/api

### Minor Changes

- a2c7b37: Enables better tree shaking
- 1f633f7: Removed dependency on @osdk/client.api
- d4d6605: Audited and cleaned up deps

### Patch Changes

- Updated dependencies [d4d6605]
  - @osdk/shared.net@2.0.0-beta.5

## 2.0.0-beta.13

### Minor Changes

- 1488144: Renamed definition types to metadata
- c28792e: Modified return type of fetchMetadata to return Object/Interface Definitions
- 26ee3bd: Updates return types of fetchMetadata to be Action and Query Definitions
- 6ab5d2e: Renamed Min_Definition to \_Definition

### Patch Changes

- @osdk/shared.net@2.0.0-beta.4

## 2.0.0-beta.12

## 2.0.0-beta.11

## 2.0.0-beta.10

### Major Changes

- 1252d94: ESM Only
- 56df85a: We now generate minimal object and interface types

### Minor Changes

- dc25fb4: Code generation now uses MinQueryDef
- dc25fb4: Rename MinimumActionDefinition to MinActionDef

### Patch Changes

- Updated dependencies [1252d94]
  - @osdk/shared.net@2.0.0-beta.3

## 2.0.0-beta.9

### Minor Changes

- b946e00: Emitted action definition is minimal size now

### Patch Changes

- Updated dependencies [01724ae]
  - @osdk/shared.net@2.0.0-beta.2

## 2.0.0-beta.8

### Patch Changes

- Updated dependencies [64818dc]
  - @osdk/shared.net@2.0.0-beta.1

## 2.0.0-beta.7

### Major Changes

- 9b0617d: Legacy types were removed

## 2.0.0-beta.6

### Major Changes

- 3affe49: Placeholder for breaking changes

### Patch Changes

- Updated dependencies [5d6d5ab]
  - @osdk/gateway@2.5.0-beta.0
  - @osdk/shared.net@1.13.0-beta.0

## 1.10.0-beta.1

### Minor Changes

- dc25fb4: Fixes edge cases in inferred return types especially when changing object types

## 1.10.0-beta.0

### Minor Changes

- 7c2db00: Updates QueryDefinition to include an optional generic argument

## 1.9.0

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret
- d8edf10: Fix primary key types
- 3ec7c38: Add support for queries in 2.0
- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [388dba9]
- Updated dependencies [bc89b62]
  - @osdk/shared.net@1.12.0
  - @osdk/gateway@2.4.0

## 1.9.0-beta.1

### Minor Changes

- 3ec7c38: Add support for queries in 2.0
- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [bc89b62]
  - @osdk/shared.net@1.12.0-beta.1
  - @osdk/gateway@2.4.0-beta.0

## 1.9.0-beta.0

### Minor Changes

- 388dba9: Change all internal dependencies to be tilde not caret

### Patch Changes

- Updated dependencies [388dba9]
  - @osdk/shared.net@1.12.0-beta.0

## 1.8.0

### Minor Changes

- c9f3214: Interfaces are now mapped as views

### Patch Changes

- Updated dependencies [c9f3214]
  - @osdk/gateway@2.3.0
  - @osdk/shared.net@1.11.0

## 1.7.0

### Patch Changes

- Updated dependencies [9906a41]
  - @osdk/shared.net@1.10.0

## 1.1.1

### Patch Changes

- e1a94f22: Revert change to how we generate the built package types
- Updated dependencies [e1a94f22]
  - @osdk/shared.net@1.1.1
  - @osdk/gateway@1.1.1

## 1.1.0

### Minor Changes

- a0d5e431: Update build to ship packages compliant with @arethetypeswrong/cli

### Patch Changes

- Updated dependencies [a0d5e431]
  - @osdk/shared.net@1.1.0
  - @osdk/gateway@1.1.0

## 1.0.2

### Patch Changes

- 25dd12ae: Restore files for legacy to .js instead of .cjs
- Updated dependencies [25dd12ae]
  - @osdk/shared.net@1.0.2
  - @osdk/gateway@1.0.2

## 1.0.1

### Patch Changes

- b07ff14: CLI can now request ontology data directly from the backend
- Updated dependencies [b07ff14]
  - @osdk/shared.net@1.0.1
  - @osdk/gateway@1.0.1

## 1.0.0

### Major Changes

- bfd4d9a: Stable 1.0 version

### Patch Changes

- Updated dependencies [bfd4d9a]
  - @osdk/gateway@1.0.0
  - @osdk/shared.net@1.0.0

## 0.0.17

### Patch Changes

- ed78694: Fixes imports from older module resolution
- Updated dependencies [ed78694]
  - @osdk/gateway@0.0.10

## 0.0.16

### Patch Changes

- 23a3515: Add deprecation notice to objects-api types
- Updated dependencies [23a3515]
  - @osdk/gateway@0.0.9

## 0.0.15

### Patch Changes

- 4f73749: Re-add the types to support the ObjectSet APIs
- Updated dependencies [4f73749]
  - @osdk/gateway@0.0.8

## 0.0.14

### Patch Changes

- ad425f9: Fix query return type for objects
- Updated dependencies [ad425f9]
  - @osdk/gateway@0.0.7

## 0.0.13

### Patch Changes

- 11ac931: Adding groupBy for Array types, using primary keys for actions and queries, and re-exporting more types
- 25de57b: Small fixes
- Updated dependencies [25de57b]
  - @osdk/gateway@0.0.6

## 0.0.12

### Patch Changes

- dfc2b94: Fix OAuth login process
- Updated dependencies [dfc2b94]
  - @osdk/gateway@0.0.5

## 0.0.11

### Patch Changes

- f3120fb: Move 2.0 client into @osdk/client to fix typescript 4.9 compatibility in @osdk/api"
- 848404c: Handle conflicts between object, action, and query names
- Updated dependencies [f3120fb]
- Updated dependencies [848404c]
  - @osdk/gateway@0.0.4

## 0.0.10

### Patch Changes

- 9167059: Fixing GeoJson import from namespace

## 0.0.9

### Patch Changes

- 0860ae9: Adds type information for geopoint and geoshape

## 0.0.8

### Patch Changes

- 1674b35: Releasing clients for integration
- Updated dependencies [1674b35]
  - @osdk/gateway@0.0.3

## 0.0.7

### Patch Changes

- a2b7874: Add in TimeSeries support and fixing issues during code-gen time with Queries

## 0.0.6

### Patch Changes

- 90cc3ae: Adding Object, Object Set, Attachments, and Actions implementations for OSDK V1.1
- Updated dependencies [90cc3ae]
  - @osdk/gateway@0.0.2

## 0.0.5

### Patch Changes

- d2e9964: Removing subpath imports since TS does not resolve them when creating `.d.ts` files
- Updated dependencies [d2e9964]
  - @osdk/gateway@0.0.1

## 0.0.4

### Patch Changes

- 8790640: Adds generated types, errors, and requests for public api endpoints

## 0.0.3

### Patch Changes

- 45fa1aa: Test changeset

## 0.0.2

### Patch Changes

- 9e3b32b: Initial implementation of api
