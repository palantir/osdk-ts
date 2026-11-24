---
"@osdk/seed-compiler": minor
"@osdk/seed-helpers": minor
---

Add `mergeSeedData(files, metadata)` to merge ontology and Foundry seed files and return a `Promise<FoundrySeedOutput>`. `compileSeedData` accepts both input formats and writes ontology JSON by default. Pass `"foundry"` as its fourth argument or use `--format foundry` on the CLI to write the full result.

Add `AdminSeedBuilder.addAll` to merge an existing admin seed into the builder.
