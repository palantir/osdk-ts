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

Bump `foundry-platform-typescript` catalog to 2.63.0 and surface the new CBAC/MANDATORY marking subtype on `ObjectMetadata.Property` via a new `typeMetadata` discriminated-union field. For marking properties, `typeMetadata` is `{ type: "marking"; subtype?: "CBAC" | "MANDATORY" }`, letting consumers distinguish classification-based markings from mandatory markings on object property columns. Future per-`type` metadata should be added as additional variants of `typeMetadata` rather than as new top-level optionals on `Property`.
