# @osdk/client.api

## 2.0.0-beta.13

### Minor Changes

- d2f75f9: Adding support for arguments in asyncIter similar to fetchPage. Arguments that are not permitted in asyncIter are nextPageToken and pageSize.
- b7cd0a1: Exposes unstable experimental features directly on client
- 26ee3bd: Updates return types of fetchMetadata to be Action and Query Definitions
- 6ab5d2e: Renamed Min_Definition to \_Definition

### Patch Changes

- Updated dependencies [1488144]
- Updated dependencies [c28792e]
- Updated dependencies [26ee3bd]
- Updated dependencies [6ab5d2e]
  - @osdk/api@2.0.0-beta.13

## 2.0.0-beta.12

### Minor Changes

- dc25fb4: Expose parameters on action metadata

### Patch Changes

- @osdk/api@2.0.0-beta.12

## 2.0.0-beta.11

### Patch Changes

- @osdk/api@2.0.0-beta.11

## 2.0.0-beta.10

### Major Changes

- 56df85a: We now generate minimal object and interface types

### Minor Changes

- dc25fb4: Code generation now uses MinQueryDef
- 94105a5: Updates return type of actions to improve ease of use
- dc25fb4: Rename MinimumActionDefinition to MinActionDef
- e6ade8b: Adds fetchMetadata method to client
- 95f9247: Adds In filter to Where clauses

### Patch Changes

- Updated dependencies [dc25fb4]
- Updated dependencies [dc25fb4]
- Updated dependencies [1252d94]
- Updated dependencies [56df85a]
  - @osdk/api@2.0.0-beta.10

## 2.0.0-beta.9

### Patch Changes

- Updated dependencies [b946e00]
  - @osdk/api@2.0.0-beta.9

## 2.0.0-beta.8

### Minor Changes

- 64818dc: Drop support for internal gateway package

### Patch Changes

- @osdk/api@2.0.0-beta.8

## 2.0.0-beta.7

### Minor Changes

- 512ee35: Exposed editedObjectTypes for all action results and split edits based on edit type.
- e86c505: Removed unused test file
- fc28eae: Fetching interfaces learns $\_\_EXPERIMENTAL_selectedObjectTypes

### Patch Changes

- Updated dependencies [9b0617d]
  - @osdk/api@2.0.0-beta.7

## 2.0.0-beta.6

### Minor Changes

- a2c7b37: Internal refactor for TimeSeriesProperty
- 0ce2858: Improves casting between Foo.ObjectSet and ObjectSet<Foo>
- a9923f3: Adds exactDistinct to aggregations

### Patch Changes

- Updated dependencies [3affe49]
  - @osdk/api@2.0.0-beta.6

## 0.22.0-beta.5

### Minor Changes

- dc25fb4: Fixes edge cases in inferred return types especially when changing object types

### Patch Changes

- Updated dependencies [dc25fb4]
  - @osdk/api@1.10.0-beta.1

## 0.22.0-beta.4

### Minor Changes

- 0ea1a17: Fixes an issue where properties may not be inferred correctly when directly used in a return statement

## 0.22.0-beta.3

### Patch Changes

- Updated dependencies [7c2db00]
  - @osdk/api@1.10.0-beta.0

## 0.22.0-beta.2

### Minor Changes

- 68a8dc7: Fixes an issue that could cause an object with sub-selection to be assigned as a full object

## 0.22.0-beta.1

### Minor Changes

- 51fe88c: Fix edge case with never in newly generated types

## 0.22.0-beta.0

### Minor Changes

- a2c7b37: Add docs for object sets and attachments.
- 795777a: Change how queries are executed, now use executeFunction call instead

## 0.21.0

### Minor Changes

- 2deb4d9: Fixing types for within and intersects so they don't take more than the permitted keys
- e54f413: Marks things as @internal to clean up API requirements

## 0.21.0-beta.1

## 0.21.0-beta.0

### Minor Changes

- 2deb4d9: Fixing types for within and intersects so they don't take more than the permitted keys
- e54f413: Marks things as @internal to clean up API requirements

## 0.20.0

### Minor Changes

- b5ac8a8: Fix dependencies to be peer only
- 141953f: Expose $title property in OsdkBase
- a6119bd: Attachments reworked so that you can now fetch directly from object properties. Also added a helper to create an attachment object directly from a rid.
- 034f7ea: Add support for no query time series pulls.
- 388dba9: Change all internal dependencies to be tilde not caret
- d8edf10: Fix primary key types
- 3ec7c38: Add support for queries in 2.0
- 7adf5c7: Refactoring packages
- 700c894: Directly depends on @osdk/api instead of peer
- bc89b62: Spelling fixes and spell check in CI
- 3615522: Fix primary key type on action edits
- 489d13f: Add support for timeseries in 2.0 syntax.
- dec005b: Add final method call to request context header
- 5e9d7d2: Refactored packages to move types over to client.api
- 413e511: Added attachment uploading, reading, and metadata fetching support to 2.0.
- 67c1fd6: interface instance $primaryKey is now `string | number` instead of `unknown`

### Patch Changes

- Updated dependencies [388dba9]
- Updated dependencies [d8edf10]
- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/api@1.9.0

## 0.20.0-beta.4

### Minor Changes

- 3ec7c38: Add support for queries in 2.0
- bc89b62: Spelling fixes and spell check in CI

### Patch Changes

- Updated dependencies [3ec7c38]
- Updated dependencies [bc89b62]
  - @osdk/api@1.9.0-beta.1

## 0.20.0-beta.3

### Minor Changes

- b5ac8a8: Fix dependencies to be peer only
- 388dba9: Change all internal dependencies to be tilde not caret
- 700c894: Directly depends on @osdk/api instead of peer

### Patch Changes

- Updated dependencies [388dba9]
  - @osdk/api@1.9.0-beta.0

## 0.20.0-beta.2

### Minor Changes

- 141953f: Expose $title property in OsdkBase

## 0.20.0-beta.1

### Minor Changes

- 7adf5c7: Refactoring packages
- 5e9d7d2: Refactored packages to move types over to client.api
- 67c1fd6: interface instance $primaryKey is now `string | number` instead of `unknown`

## 0.20.0-beta.0

### Minor Changes

- a6119bd: Attachments reworked so that you can now fetch directly from object properties. Also added a helper to create an attachment object directly from a rid.
- 413e511: Added attachment uploading, reading, and metadata fetching support to 2.0.
