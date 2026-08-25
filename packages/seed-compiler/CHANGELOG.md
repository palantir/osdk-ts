# @osdk/seed-compiler

## 0.14.0

### Minor Changes

- bbbeca8: Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries to `2.75.0`, which reinstates the `streamingExecute` query endpoint as a Server-Sent Events (`text/event-stream`) stream. The experimental `executeStreamingFunction` helper is reimplemented on top of it and no longer throws: it yields each result as it arrives, flattening batched results so array-returning queries emit one element at a time.

### Patch Changes

- Updated dependencies [e879ad7]
- Updated dependencies [bbbeca8]
- Updated dependencies [6cf2be9]
  - @osdk/client@2.60.0
  - @osdk/api@2.60.0
  - @osdk/seed-helpers@0.29.0

## 0.13.0

### Minor Changes

- ab557b4: Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries to `2.73.0`. `ObjectTypeInterfaceImplementation` now requires an `actionTypes` field, and the generally available media set `read`, `info`, `metadata` and `uploadMedia` endpoints no longer accept a `preview` parameter.

### Patch Changes

- Updated dependencies [ab557b4]
- Updated dependencies [38c812b]
  - @osdk/client@2.58.0
  - @osdk/seed-helpers@0.28.0
  - @osdk/api@2.58.0

## 0.12.0

### Minor Changes

- fb5b752: Reduce `@osdk/seed-compiler` to merging. Seed files are fed through a single `SeedBuilder` from `@osdk/seed-helpers`, which already validates objects, rejects duplicate primary keys, and deduplicates links — so the compiler's own wire-type tables and validator are gone, along with the `mergeSeedOutputs`, `validateSeedOutput`, and `schemaFromMetadata` exports. `compileSeedData` is the only remaining export and now takes `OntologyFullMetadata` in place of a `SchemaMap`. Sharing one builder lets a link reference objects from another seed file, and primary-key conflicts name the file that introduced them. Seed files may default-export either the `createSeed(...)` result (`{ output, context }`) or its `.output`; anything else is rejected with a message naming what was found instead. `SeedBuilder` now names the object type in its not-in-metadata error.

### Patch Changes

- Updated dependencies [fb5b752]
  - @osdk/seed-helpers@0.27.0

## 0.11.0

### Patch Changes

- Updated dependencies [cec01e5]
  - @osdk/seed-helpers@0.26.0

## 0.10.0

### Minor Changes

- c14abb8: Streaming query execution is not currently supported in the TypeScript OSDK, so the experimental `executeStreamingFunction` helper now throws. Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries to `2.70.0`. The ontology-as-code full-metadata converters now populate the object type `aliases` and `datasources` fields.

### Patch Changes

- Updated dependencies [c14abb8]
  - @osdk/seed-helpers@0.24.0

## 0.9.0

### Patch Changes

- Updated dependencies [fc3e4b9]
  - @osdk/seed-helpers@0.23.0

## 0.8.0

### Minor Changes

- 566ecd3: Add the `u` (unicode) flag to regular expressions to satisfy the require-unicode-regexp lint rule

## 0.7.0

### Minor Changes

- 6010d45: Migrate @osdk/aip-core, @osdk/foundry-config-json, @osdk/seed-compiler, @osdk/seed-helpers, @osdk/oauth, @osdk/faux, and @osdk/osdk-docs-context to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (eleventh increment of the repo-wide oxc migration; the standard libraries). Each package is reformatted with oxfmt, with its newly-surfaced error-level lint rules turned off in a nested oxlint config to keep the change behavior-preserving.

### Patch Changes

- Updated dependencies [6010d45]
  - @osdk/seed-helpers@0.19.0

## 0.6.0

### Minor Changes

- 08e921c: Bump `foundry-platform-typescript` catalog to 2.63.0 and surface the new CBAC/MANDATORY marking subtype on `ObjectMetadata.Property` via a new `typeMetadata` discriminated-union field. For marking properties, `typeMetadata` is `{ type: "marking"; subtype?: "CBAC" | "MANDATORY" }`, letting consumers distinguish classification-based markings from mandatory markings on object property columns. Future per-`type` metadata should be added as additional variants of `typeMetadata` rather than as new top-level optionals on `Property`.

### Patch Changes

- @osdk/seed-helpers@0.10.0

## 0.5.0

### Minor Changes

- 5ff7aa5: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.61.0` to `2.63.0`. The OntologyScenarios endpoints now expose a `preview` query-param slot, so `createScenario` and the `EXPERIMENTAL_ScenarioClient` read methods pass `{ preview: true }` directly instead of relying on a fetch-level URL rewrite.

## 0.4.0

### Minor Changes

- 8965bdf: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

### Patch Changes

- @osdk/seed-helpers@0.8.0

## 0.3.0

### Minor Changes

- 60aff19: Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.57.0` to `2.61.0`. Includes type-fixups for the new `applyScenario` / `scenarioReference` discriminated-union variants and the now-required `QueryParameterV2.required` field.

### Patch Changes

- @osdk/seed-helpers@0.7.0

## 0.2.0

### Minor Changes

- d6f67f6: add seed data compiler. New `@osdk/seed-helpers` package exports `createSeed` and `SeedBuilder` for declaring typed seed objects and links. New `@osdk/seed-compiler` package compiles all top-level `.mts` files in a directory into a merged seed JSON (sorted by filename for deterministic output) for foundry-cli's local ontology server to load into SQLite on startup. Schema-aware validation (primary-key uniqueness, string format checks for `timestamp`/`date`/`datetime`/`long`/`decimal`) reads from `ontology-metadata.json` produced by the SDK generator, so the same compiler works against both ontology-as-code projects and imported ontologies.

### Patch Changes

- Updated dependencies [d6f67f6]
  - @osdk/seed-helpers@0.2.0
