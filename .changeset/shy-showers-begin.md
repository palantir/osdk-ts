---
"@osdk/seed-helpers": minor
"@osdk/integration-testing": minor
"@osdk/seed-compiler": patch
---

Add admin user seeding through `AdminSeedBuilder` and `createFoundrySeed`, including selection of the current user.

Rename the ontology seed helpers to `createOntologySeedWithMetadata` and `OntologySeed*`. The original exports remain available as deprecated aliases.

Use the new ontology seed exports in the seed compiler and integration-testing client. The integration-testing client now requires `@osdk/seed-helpers` 0.34.0 or later within 0.x.
