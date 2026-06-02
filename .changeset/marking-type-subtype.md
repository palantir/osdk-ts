---
"@osdk/api": minor
"@osdk/generator-converters": patch
"@osdk/cli.cmd.typescript": patch
"@osdk/client": patch
"@osdk/faux": patch
"@osdk/foundry-sdk-generator": patch
"@osdk/generator": patch
"@osdk/generator-converters.ontologyir": patch
"@osdk/generator-converters.preview": patch
"@osdk/maker-import": patch
"@osdk/react": patch
"@osdk/seed-compiler": patch
"@osdk/shared.test": patch
"@osdk/unit-testing": patch
"@osdk/vite-plugin-oac": patch
---

Bump `foundry-platform-typescript` catalog to 2.63.0 and surface the new CBAC/MANDATORY marking subtype on `ObjectMetadata.Property`. The marking property type metadata now exposes an optional `markingType` field (`"CBAC" | "MANDATORY"`) forwarded from the v2 ontology metadata API, so consumers can distinguish classification-based markings from mandatory markings on object property columns.
