# @osdk/seed-helpers

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
