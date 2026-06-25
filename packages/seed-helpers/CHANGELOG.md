# @osdk/seed-helpers

## 0.17.0

### Patch Changes

- Updated dependencies [3e915ee]
  - @osdk/api@2.40.0

## 0.16.0

### Patch Changes

- @osdk/api@2.38.0

## 0.15.0

### Patch Changes

- @osdk/api@2.37.0

## 0.14.0

### Patch Changes

- @osdk/api@2.35.0

## 0.13.0

### Patch Changes

- Updated dependencies [db028a0]
- Updated dependencies [ab19740]
  - @osdk/api@2.34.0

## 0.12.0

### Patch Changes

- Updated dependencies [06adca1]
  - @osdk/api@2.32.0

## 0.11.0

### Patch Changes

- Updated dependencies [57cbc6d]
  - @osdk/api@2.31.0

## 0.10.0

### Patch Changes

- Updated dependencies [08e921c]
  - @osdk/api@2.29.0

## 0.9.0

### Patch Changes

- @osdk/api@2.28.0

## 0.8.0

### Patch Changes

- Updated dependencies [bd90dba]
  - @osdk/api@2.25.0

## 0.7.0

### Patch Changes

- Updated dependencies [a492285]
  - @osdk/api@2.24.0

## 0.6.0

### Patch Changes

- Updated dependencies [198f219]
- Updated dependencies [ef156b6]
- Updated dependencies [8290dd7]
  - @osdk/api@2.23.0

## 0.5.0

### Patch Changes

- Updated dependencies [1a07c91]
  - @osdk/api@2.21.0

## 0.4.0

### Patch Changes

- Updated dependencies [9eb67e4]
  - @osdk/api@2.20.0

## 0.3.0

### Patch Changes

- Updated dependencies [02c796c]
- Updated dependencies [d962309]
  - @osdk/api@2.19.0

## 0.2.0

### Minor Changes

- d6f67f6: add seed data compiler. New `@osdk/seed-helpers` package exports `createSeed` and `SeedBuilder` for declaring typed seed objects and links. New `@osdk/seed-compiler` package compiles all top-level `.mts` files in a directory into a merged seed JSON (sorted by filename for deterministic output) for foundry-cli's local ontology server to load into SQLite on startup. Schema-aware validation (primary-key uniqueness, string format checks for `timestamp`/`date`/`datetime`/`long`/`decimal`) reads from `ontology-metadata.json` produced by the SDK generator, so the same compiler works against both ontology-as-code projects and imported ontologies.

### Patch Changes

- @osdk/api@2.18.0
