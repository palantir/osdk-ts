---
"@osdk/seed-compiler": minor
"@osdk/seed-helpers": patch
---

Reduce `@osdk/seed-compiler` to merging. Seed files are fed through a single `SeedBuilder` from `@osdk/seed-helpers`, which already validates objects, rejects duplicate primary keys, and deduplicates links — so the compiler's own wire-type tables and validator are gone, along with the `mergeSeedOutputs`, `validateSeedOutput`, and `schemaFromMetadata` exports. `compileSeedData` is the only remaining export and now takes `OntologyFullMetadata` in place of a `SchemaMap`. Sharing one builder lets a link reference objects from another seed file, and primary-key conflicts name the file that introduced them. Seed files may default-export either the `createSeed(...)` result (`{ output, context }`) or its `.output`; anything else is rejected with a message naming what was found instead. `SeedBuilder` now names the object type in its not-in-metadata error.
