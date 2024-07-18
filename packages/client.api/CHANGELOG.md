# @osdk/client.api

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
