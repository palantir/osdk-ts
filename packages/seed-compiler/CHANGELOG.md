# @osdk/seed-compiler

## 0.2.1

### Patch Changes

- 8dfc576: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

## 0.2.0

### Minor Changes

- d6f67f6: add seed data compiler. New `@osdk/seed-helpers` package exports `createSeed` and `SeedBuilder` for declaring typed seed objects and links. New `@osdk/seed-compiler` package compiles all top-level `.mts` files in a directory into a merged seed JSON (sorted by filename for deterministic output) for foundry-cli's local ontology server to load into SQLite on startup. Schema-aware validation (primary-key uniqueness, string format checks for `timestamp`/`date`/`datetime`/`long`/`decimal`) reads from `ontology-metadata.json` produced by the SDK generator, so the same compiler works against both ontology-as-code projects and imported ontologies.

### Patch Changes

- Updated dependencies [d6f67f6]
  - @osdk/seed-helpers@0.2.0
