---
"@osdk/maker-experimental": minor
"@osdk/seed-helpers": minor
---

add seed data compiler. New `@osdk/seed-helpers` package exports `createSeed` and `SeedBuilder` for declaring typed seed objects and links. `maker-experimental` adds a `--seedDir` flag that compiles all top-level `.mts` files in a directory into a merged seed JSON (sorted by filename for deterministic output) for foundry-cli's local ontology server to load into SQLite on startup.
