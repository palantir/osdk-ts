# @osdk/client

## 2.1.0-beta.22

### Minor Changes

- c9da74c: Improves code quality by fixing linting errors
- 73fa373: Exports helper method to construct object sets from RIDs from internal utils

### Patch Changes

- Updated dependencies [c9da74c]
- Updated dependencies [73fa373]
  - @osdk/generator-converters@2.1.0-beta.22
  - @osdk/api@2.1.0-beta.22
  - @osdk/client.unstable@2.1.0-beta.22

## 2.1.0-beta.21

### Minor Changes

- 3ea2e79: Creates new export for internal helper functions
- 656f975: Fixes attachment upload inputs sending incorrect in browser contexts
- f34b3d4: Add ability to fetch by rid, experimentally.
- e86e91d: Internal property of Client is removed from output

### Patch Changes

- Updated dependencies [3ea2e79]
- Updated dependencies [656f975]
- Updated dependencies [f34b3d4]
- Updated dependencies [1132993]
  - @osdk/api@2.1.0-beta.21
  - @osdk/shared.net.fetch@1.1.0-beta.2
  - @osdk/generator-converters@2.1.0-beta.21
  - @osdk/shared.client.impl@1.1.0-beta.4
  - @osdk/client.unstable@2.1.0-beta.21

## 2.1.0-beta.20

### Minor Changes

- b773513: Fix onOutOfDate handler from being fired twice
- 9d35a1f: Remove unused imports
- abfe4b3: Add support for reading struct properties.
- c537e2d: Remove unused imports.

### Patch Changes

- Updated dependencies [9d35a1f]
- Updated dependencies [abfe4b3]
- Updated dependencies [c537e2d]
- Updated dependencies [bf0e3b4]
- Updated dependencies [06e66dc]
  - @osdk/generator-converters@2.1.0-beta.20
  - @osdk/client.unstable@2.1.0-beta.20
  - @osdk/api@2.1.0-beta.20

## 2.1.0-beta.19

### Minor Changes

- cddc196: Try-catches handlers called during subscription
- 720218d: OSDK Client no longer uses javascript proxies for its objects. This results in a 13% increase in construction time but at 1kb per object reduction in memory
- eb27b54: Fix URL for experimental method
- 27f0f77: Interface instances are immutable just like object instances
- a7a4aef: Removes dependency on crypto
- 6671a39: Upgrade execa where used
- a6c320d: Internal optimization to reduce memory usage for unused interface objects

### Patch Changes

- Updated dependencies [cddc196]
  - @osdk/api@2.1.0-beta.19
  - @osdk/generator-converters@2.1.0-beta.19
  - @osdk/client.unstable@2.1.0-beta.19

## 2.1.0-beta.18

### Patch Changes

- @osdk/api@2.1.0-beta.18
- @osdk/client.unstable@2.1.0-beta.18
- @osdk/generator-converters@2.1.0-beta.18

## 2.1.0-beta.17

### Patch Changes

- Updated dependencies [1b60b3d]
  - @osdk/shared.client.impl@1.1.0-beta.3
  - @osdk/api@2.1.0-beta.17
  - @osdk/client.unstable@2.1.0-beta.17
  - @osdk/generator-converters@2.1.0-beta.17

## 2.1.0-beta.16

### Minor Changes

- e5fe7c0: Adds experimental method to convert an object set into RID

### Patch Changes

- Updated dependencies [e5fe7c0]
  - @osdk/api@2.1.0-beta.16
  - @osdk/generator-converters@2.1.0-beta.16
  - @osdk/client.unstable@2.1.0-beta.16

## 2.1.0-beta.15

### Minor Changes

- 1c59d93: Allows interfaces to be used with subscribe

### Patch Changes

- @osdk/api@2.1.0-beta.15
- @osdk/client.unstable@2.1.0-beta.15
- @osdk/generator-converters@2.1.0-beta.15

## 2.1.0-beta.14

### Minor Changes

- 0a7c747: Add support for timeseries sensors.
- 91cfa3a: Fixing url parsing for client.
- 015279b: Fix use of new interfaces api with preview flag.
- 91cfa3a: Fixing URL parsing for custom entry points.
- 0c56d21: Exposing fuzzy searching.
- 6b6c8a1: Updates gateway endpoints and changes fetchContents for attachments to return a response

### Patch Changes

- Updated dependencies [0a7c747]
- Updated dependencies [91cfa3a]
- Updated dependencies [0c56d21]
- Updated dependencies [6b6c8a1]
  - @osdk/generator-converters@2.1.0-beta.14
  - @osdk/api@2.1.0-beta.14
  - @osdk/client.unstable@2.1.0-beta.14

## 2.1.0-beta.13

### Minor Changes

- c4f88a8: Removes circular dependency that may upset legacy tools like react-native

### Patch Changes

- @osdk/api@2.1.0-beta.13
- @osdk/client.unstable@2.1.0-beta.13
- @osdk/generator-converters@2.1.0-beta.13

## 2.1.0-beta.12

### Patch Changes

- @osdk/api@2.1.0-beta.12
- @osdk/client.unstable@2.1.0-beta.12
- @osdk/generator-converters@2.1.0-beta.12

## 2.1.0-beta.11

### Minor Changes

- bc1761c: Update platform API dependencies.
- 9298f75: Using new interface APIs for backend.

### Patch Changes

- Updated dependencies [bc1761c]
- Updated dependencies [9298f75]
- Updated dependencies [caf1abc]
  - @osdk/generator-converters@2.1.0-beta.11
  - @osdk/api@2.1.0-beta.11
  - @osdk/client.unstable@2.1.0-beta.11

## 2.1.0-beta.10

### Minor Changes

- 11a05cc: Updated subscribe api to make requesting properties optional
- 14624f7: Supports custom formatters in browser
- 11088aa: Fix where clause types so we don't accept more than one key in the clauses.
- d88fdb9: Adds methods to extract date strings from Dates and ISO-8601 strings

### Patch Changes

- Updated dependencies [11a05cc]
- Updated dependencies [11088aa]
  - @osdk/api@2.1.0-beta.10
  - @osdk/generator-converters@2.1.0-beta.10
  - @osdk/client.unstable@2.1.0-beta.10

## 2.1.0-beta.9

### Minor Changes

- acbfab9: Fixes where clauses for interfaces with no properties.

### Patch Changes

- Updated dependencies [acbfab9]
  - @osdk/api@2.1.0-beta.9
  - @osdk/generator-converters@2.1.0-beta.9
  - @osdk/client.unstable@2.1.0-beta.9

## 2.1.0-beta.8

### Minor Changes

- 9f3807c: Allows $in to take a readonly array
- 71dfb4c: Now export all api shapes from client, so use that dependency instead.

### Patch Changes

- Updated dependencies [9f3807c]
  - @osdk/api@2.1.0-beta.8
  - @osdk/generator-converters@2.1.0-beta.8
  - @osdk/client.unstable@2.1.0-beta.8

## 2.1.0-beta.7

### Minor Changes

- 27866a8: Removing interface argument for selecting object types. This is not supported in the new apis, and is not being used internally anywhere with the old apis.
- 0cd1603: Fixes AttachmentUpload for browser contexts
- 9018dc2: Updating platform api dependencies.

### Patch Changes

- Updated dependencies [27866a8]
- Updated dependencies [9018dc2]
- Updated dependencies [31e7d70]
  - @osdk/api@2.1.0-beta.7
  - @osdk/generator-converters@2.1.0-beta.7
  - @osdk/client.unstable@2.1.0-beta.7

## 2.1.0-beta.6

### Minor Changes

- 25fd9f0: Updating package.json to have better entry points to support react native bundlers.
- 1a89f23: Removing support for augmenting interfaces when fetching them.
- 1b2e8c9: Adds subscribe feature directly to client

### Patch Changes

- Updated dependencies [25fd9f0]
- Updated dependencies [1a89f23]
- Updated dependencies [1b2e8c9]
  - @osdk/api@2.1.0-beta.6
  - @osdk/client.unstable@2.1.0-beta.6
  - @osdk/generator-converters@2.1.0-beta.6
  - @osdk/shared.client.impl@1.1.0-beta.2
  - @osdk/shared.net.errors@2.1.0-beta.1
  - @osdk/shared.net.fetch@1.1.0-beta.1

## 2.1.0-beta.5

### Minor Changes

- fa02ebf: Adds SLS dependency for object-set-watcher API

### Patch Changes

- Updated dependencies [963addb]
- Updated dependencies [2b35ed4]
  - @osdk/shared.client.impl@1.1.0-beta.1
  - @osdk/shared.net.errors@2.1.0-beta.0
  - @osdk/client.unstable@2.1.0-beta.5
  - @osdk/shared.net.fetch@1.1.0-beta.0
  - @osdk/api@2.1.0-beta.5
  - @osdk/generator-converters@2.1.0-beta.5

## 2.1.0-beta.4

### Minor Changes

- 0dc40b0: Remove experimental non null for now.
- d12c92b: Fixes process.env.NODE_ENV handling
- 1dc0228: Change experimental code style to prevent future breaks
- d3b3f35: Add's onSuccessfulSubscribe handler to subscribe functionality

### Patch Changes

- Updated dependencies [0dc40b0]
- Updated dependencies [1dc0228]
- Updated dependencies [d3b3f35]
  - @osdk/api@2.1.0-beta.4
  - @osdk/generator-converters@2.1.0-beta.4
  - @osdk/client.unstable@2.1.0-beta.4

## 2.1.0-beta.3

### Minor Changes

- 05febf4: Adds Reference Update support in subscribe
- a06ec35: Fixes the lastFetchedValue on a Geotime Series property from reference updates
- 3703d81: Changed shared context to a version less error prone
- 6f50516: Fix bug where object return types in a query were not properly mapped when wrapped in a struct.
- 09eaf24: Update to latest platform sdks

### Patch Changes

- Updated dependencies [05febf4]
- Updated dependencies [3703d81]
- Updated dependencies [b79becf]
- Updated dependencies [09eaf24]
  - @osdk/api@2.1.0-beta.3
  - @osdk/shared.client.impl@1.1.0-beta.0
  - @osdk/generator-converters@2.1.0-beta.3
  - @osdk/client.unstable@2.1.0-beta.3

## 2.1.0-beta.2

### Patch Changes

- Updated dependencies [7d777eb]
  - @osdk/generator-converters@2.1.0-beta.2
  - @osdk/client.unstable@2.1.0-beta.2
  - @osdk/api@2.1.0-beta.2

## 2.1.0-beta.1

### Minor Changes

- 1812118: Add geotime support for OSDK.
- 8e6a5f4: Avoid type-fest's IsAny as it doesn't always work

### Patch Changes

- Updated dependencies [1812118]
- Updated dependencies [72c1905]
- Updated dependencies [6c60414]
- Updated dependencies [8e6a5f4]
  - @osdk/generator-converters@2.1.0-beta.1
  - @osdk/api@2.1.0-beta.1
  - @osdk/client.unstable@2.1.0-beta.1

## 2.1.0-beta.0

### Minor Changes

- 0dc40b0: Switch to OSDK.Instance
- d927a1d: Throws error in createClient when passed an invalid ontology RID
- d464009: improves interface api name mapping with api namespaces
- 8eb2378: Fixes where clauses when objects have an api namespace
- e548b9b: Updates subscribe to return object updates
- 5e78575: Fix queries that have response types with nested values, like arrays.
- 9af346e: Fixing proxy handlers.
- c682504: Locks dependency version of 3 internal libraries

### Patch Changes

- Updated dependencies [0dc40b0]
- Updated dependencies [03e1941]
- Updated dependencies [e548b9b]
- Updated dependencies [c682504]
  - @osdk/api@2.1.0-beta.0
  - @osdk/generator-converters@2.1.0-beta.0
  - @osdk/client.unstable@2.1.0-beta.0

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

- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [3affe49]
- Updated dependencies [b946e00]
- Updated dependencies [a2c7b37]
- Updated dependencies [0ea1a17]
- Updated dependencies [dc25fb4]
- Updated dependencies [b60e107]
- Updated dependencies [9b0617d]
- Updated dependencies [76a7adb]
- Updated dependencies [1770490]
- Updated dependencies [94105a5]
- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [5dc1241]
- Updated dependencies [a2c7b37]
- Updated dependencies [dc25fb4]
- Updated dependencies [1252d94]
- Updated dependencies [ee39a61]
- Updated dependencies [e6ade8b]
- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [a2c7b37]
- Updated dependencies [795777a]
- Updated dependencies [fe9547e]
- Updated dependencies [95f9247]
- Updated dependencies [5d6d5ab]
- Updated dependencies [d2f75f9]
- Updated dependencies [b7cd0a1]
- Updated dependencies [512ee35]
- Updated dependencies [e86c505]
- Updated dependencies [dc25fb4]
- Updated dependencies [0ce2858]
- Updated dependencies [dc25fb4]
- Updated dependencies [5d6d5ab]
- Updated dependencies [7c2db00]
- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
- Updated dependencies [fc28eae]
- Updated dependencies [ee39a61]
- Updated dependencies [56df85a]
- Updated dependencies [5d6d5ab]
- Updated dependencies [dc25fb4]
- Updated dependencies [5d6d5ab]
- Updated dependencies [a9923f3]
- Updated dependencies [1f633f7]
- Updated dependencies [d4d6605]
- Updated dependencies [5dc1241]
- Updated dependencies [64818dc]
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

## 2.0.0-beta.16

### Minor Changes

- dc25fb4: Improve query generics
- dc25fb4: Further simplify types

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
- Updated dependencies [5dc1241]
  - @osdk/generator-converters@2.0.0-beta.16
  - @osdk/api@2.0.0-beta.16
  - @osdk/shared.client@1.0.0-beta.3
  - @osdk/internal.foundry.core@0.2.0-beta.10
  - @osdk/internal.foundry.ontologiesv2@0.2.0-beta.10
  - @osdk/shared.client.impl@1.0.0-beta.3
  - @osdk/client.unstable@2.0.0-beta.16

## 2.0.0-beta.15

### Minor Changes

- dc25fb4: Simplified types

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/generator-converters@2.0.0-beta.15
  - @osdk/api@2.0.0-beta.15
  - @osdk/client.unstable@2.0.0-beta.15

## 2.0.0-beta.14

### Minor Changes

- a2c7b37: Enables better tree shaking
- 1f633f7: Removed dependency on @osdk/client.api
- d4d6605: Audited and cleaned up deps

### Patch Changes

- Updated dependencies [b60e107]
- Updated dependencies [5d6d5ab]
- Updated dependencies [a2c7b37]
- Updated dependencies [fe9547e]
- Updated dependencies [1f633f7]
- Updated dependencies [d4d6605]
  - @osdk/shared.client@1.0.0-beta.2
  - @osdk/internal.foundry.ontologiesv2@0.2.0-beta.9
  - @osdk/internal.foundry.core@0.2.0-beta.9
  - @osdk/api@2.0.0-beta.14
  - @osdk/generator-converters@2.0.0-beta.14
  - @osdk/client.unstable.osw@0.2.0-beta.1
  - @osdk/shared.client.impl@1.0.0-beta.2
  - @osdk/shared.net.errors@2.0.0-beta.1
  - @osdk/shared.net.fetch@1.0.0-beta.1
  - @osdk/client.unstable@2.0.0-beta.14

## 2.0.0-beta.13

### Minor Changes

- 1488144: Renamed definition types to metadata
- d2f75f9: Adding support for arguments in asyncIter similar to fetchPage. Arguments that are not permitted in asyncIter are nextPageToken and pageSize.
- b7cd0a1: Exposes unstable experimental features directly on client
- c28792e: Modified return type of fetchMetadata to return Object/Interface Definitions
- 26ee3bd: Updates return types of fetchMetadata to be Action and Query Definitions
- 6ab5d2e: Renamed Min_Definition to \_Definition

### Patch Changes

- Updated dependencies [5dc1241]
- Updated dependencies [1488144]
- Updated dependencies [d2f75f9]
- Updated dependencies [b7cd0a1]
- Updated dependencies [c28792e]
- Updated dependencies [26ee3bd]
- Updated dependencies [6ab5d2e]
  - @osdk/shared.client@1.0.0-beta.1
  - @osdk/generator-converters@2.0.0-beta.13
  - @osdk/api@2.0.0-beta.13
  - @osdk/client.api@2.0.0-beta.13
  - @osdk/shared.client.impl@1.0.0-beta.1
  - @osdk/client.unstable@2.0.0-beta.13

## 2.0.0-beta.12

### Minor Changes

- dc25fb4: Expose parameters on action metadata

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/generator-converters@2.0.0-beta.12
  - @osdk/client.api@2.0.0-beta.12
  - @osdk/client.unstable@2.0.0-beta.12
  - @osdk/api@2.0.0-beta.12

## 2.0.0-beta.11

### Minor Changes

- f009bb2: Remove the direct dependency on pino in favor of a similar shape
- 6eeca39: Internally refactored Action Edits types

### Patch Changes

- @osdk/client.api@2.0.0-beta.11
- @osdk/generator-converters@2.0.0-beta.11
- @osdk/client.unstable@2.0.0-beta.11
- @osdk/api@2.0.0-beta.11

## 2.0.0-beta.10

### Major Changes

- 56df85a: We now generate minimal object and interface types

### Minor Changes

- dc25fb4: Code generation now uses MinQueryDef
- 0b20066: Fixes an import
- dc25fb4: Rename MinimumActionDefinition to MinActionDef
- e6ade8b: Adds fetchMetadata method to client
- 0ae2b07: Pino is no longer listed as a peer dep due to an issue with some versions of pnpm
- 5d6d5ab: Internally refactored to support new API versions

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [94105a5]
- Updated dependencies [dc25fb4]
- Updated dependencies [1252d94]
- Updated dependencies [e6ade8b]
- Updated dependencies [95f9247]
- Updated dependencies [56df85a]
  - @osdk/generator-converters@2.0.0-beta.10
  - @osdk/client.api@2.0.0-beta.10
  - @osdk/api@2.0.0-beta.10
  - @osdk/client.unstable.osw@0.2.0-beta.0
  - @osdk/client.unstable@2.0.0-beta.10
  - @osdk/shared.client.impl@1.0.0-beta.0
  - @osdk/shared.client@1.0.0-beta.0
  - @osdk/shared.net.errors@2.0.0-beta.0
  - @osdk/shared.net.fetch@1.0.0-beta.0

## 2.0.0-beta.9

### Minor Changes

- b946e00: Emitted action definition is minimal size now

### Patch Changes

- Updated dependencies [b946e00]
  - @osdk/api@2.0.0-beta.9
  - @osdk/client.api@2.0.0-beta.9
  - @osdk/generator-converters@2.0.0-beta.9
  - @osdk/client.unstable@2.0.0-beta.9

## 2.0.0-beta.8

### Minor Changes

- 64818dc: Drop support for internal gateway package

### Patch Changes

- Updated dependencies [64818dc]
  - @osdk/client.api@2.0.0-beta.8
  - @osdk/api@2.0.0-beta.8
  - @osdk/generator-converters@2.0.0-beta.8
  - @osdk/client.unstable@2.0.0-beta.8

## 2.0.0-beta.7

### Minor Changes

- 39525b8: We now have a hard dependency on pino for type resolution. This has no effect on a project if it doesn't provide a logger to the client.
- 512ee35: Exposed editedObjectTypes for all action results and split edits based on edit type.
- fc28eae: Fetching interfaces learns $\_\_EXPERIMENTAL_selectedObjectTypes

### Patch Changes

- Updated dependencies [9b0617d]
- Updated dependencies [512ee35]
- Updated dependencies [e86c505]
- Updated dependencies [fc28eae]
- Updated dependencies [ee39a61]
  - @osdk/api@2.0.0-beta.7
  - @osdk/client.api@2.0.0-beta.7
  - @osdk/client.unstable@2.0.0-beta.7
  - @osdk/generator-converters@2.0.0-beta.7

## 2.0.0-beta.6

### Minor Changes

- 76a7adb: Use OntologyMetadataService.bulkLoadOntologyEntities in place of deprecated loadOntologyEntities
- a2c7b37: Internal refactor for TimeSeriesProperty
- 0ce2858: Improves casting between Foo.ObjectSet and ObjectSet<Foo>
- 5d6d5ab: Autofill Content-Length and Content-Type headers in API's that accept Blobs
- 96ea876: Add namespaces for objects,actions,queries so that you can enumerate them.
- 5d6d5ab: SLS dependencies are optional
- a9923f3: Adds exactDistinct to aggregations

### Patch Changes

- Updated dependencies [3affe49]
- Updated dependencies [76a7adb]
- Updated dependencies [a2c7b37]
- Updated dependencies [0ce2858]
- Updated dependencies [a9923f3]
  - @osdk/api@2.0.0-beta.6
  - @osdk/client.unstable@2.0.0-beta.6
  - @osdk/client.api@2.0.0-beta.6
  - @osdk/generator-converters@2.0.0-beta.6

## 0.22.0-beta.5

### Minor Changes

- dc25fb4: Fixes edge cases in inferred return types especially when changing object types

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/client.api@0.22.0-beta.5
  - @osdk/api@1.10.0-beta.1
  - @osdk/generator-converters@0.8.0-beta.1

## 0.22.0-beta.4

### Patch Changes

- Updated dependencies [0ea1a17]
  - @osdk/client.api@0.22.0-beta.4

## 0.22.0-beta.3

### Patch Changes

- Updated dependencies [7c2db00]
  - @osdk/api@1.10.0-beta.0
  - @osdk/client.api@0.22.0-beta.3
  - @osdk/generator-converters@0.8.0-beta.0

## 0.22.0-beta.2

### Minor Changes

- 68a8dc7: Fixes an issue that could cause an object with sub-selection to be assigned as a full object
- 081114f: Splits batchApplyAction out of applyAction

### Patch Changes

- Updated dependencies [68a8dc7]
  - @osdk/client.api@0.22.0-beta.2

## 0.22.0-beta.1

### Minor Changes

- 51fe88c: Fix edge case with never in newly generated types

### Patch Changes

- Updated dependencies [51fe88c]
  - @osdk/client.api@0.22.0-beta.1

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
