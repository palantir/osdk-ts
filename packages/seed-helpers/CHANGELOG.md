# @osdk/seed-helpers

## 0.27.0

### Minor Changes

- fb5b752: Reduce `@osdk/seed-compiler` to merging. Seed files are fed through a single `SeedBuilder` from `@osdk/seed-helpers`, which already validates objects, rejects duplicate primary keys, and deduplicates links — so the compiler's own wire-type tables and validator are gone, along with the `mergeSeedOutputs`, `validateSeedOutput`, and `schemaFromMetadata` exports. `compileSeedData` is the only remaining export and now takes `OntologyFullMetadata` in place of a `SchemaMap`. Sharing one builder lets a link reference objects from another seed file, and primary-key conflicts name the file that introduced them. Seed files may default-export either the `createSeed(...)` result (`{ output, context }`) or its `.output`; anything else is rejected with a message naming what was found instead. `SeedBuilder` now names the object type in its not-in-metadata error.

## 0.26.0

### Minor Changes

- cec01e5: Introduce the `@osdk/integration-testing` package for Ontology SDK integration-testing helpers, and add `SeedClient.set` for replacing the seeded state rather than adding to it.

### Patch Changes

- Updated dependencies [342c492]
  - @osdk/api@2.56.0
  - @osdk/client@2.56.0

## 0.25.0

### Patch Changes

- Updated dependencies [c40b6e5]
- Updated dependencies [f27a119]
  - @osdk/api@2.55.0
  - @osdk/client@2.55.0

## 0.24.0

### Minor Changes

- c14abb8: Streaming query execution is not currently supported in the TypeScript OSDK, so the experimental `executeStreamingFunction` helper now throws. Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries to `2.70.0`. The ontology-as-code full-metadata converters now populate the object type `aliases` and `datasources` fields.

### Patch Changes

- Updated dependencies [c14abb8]
  - @osdk/client@2.53.0
  - @osdk/api@2.53.0

## 0.23.0

### Minor Changes

- fc3e4b9: Implement new seed builder with built-in validation

### Patch Changes

- Updated dependencies [5d92381]
- Updated dependencies [bf4580a]
- Updated dependencies [9d0b21e]
  - @osdk/api@2.52.0
  - @osdk/client@2.52.0

## 0.22.0

### Patch Changes

- @osdk/api@2.48.0

## 0.21.0

### Patch Changes

- @osdk/api@2.47.0

## 0.20.0

### Patch Changes

- @osdk/api@2.46.0

## 0.19.0

### Minor Changes

- 6010d45: Migrate @osdk/aip-core, @osdk/foundry-config-json, @osdk/seed-compiler, @osdk/seed-helpers, @osdk/oauth, @osdk/faux, and @osdk/osdk-docs-context to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eleventh increment of the repo-wide oxc migration; the standard libraries). Each package is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving.

### Patch Changes

- Updated dependencies [830d791]
  - @osdk/api@2.42.0

## 0.18.0

### Patch Changes

- Updated dependencies [9b150d7]
- Updated dependencies [15a35f2]
  - @osdk/api@2.41.0

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
