---
"@osdk/client": patch
"@osdk/faux": patch
"@osdk/foundry-sdk-generator": patch
"@osdk/generator": patch
"@osdk/generator-converters": patch
"@osdk/generator-converters.ontologyir": patch
"@osdk/generator-converters.preview": patch
"@osdk/maker-experimental": patch
"@osdk/maker-import": patch
"@osdk/react": patch
"@osdk/react-sdk-docs": patch
"@osdk/seed-compiler": patch
"@osdk/seed-helpers": patch
"@osdk/typescript-sdk-docs": patch
"@osdk/unit-testing": patch
"@osdk/vite-plugin-oac": patch
---

Streaming query execution is not currently supported in the TypeScript OSDK, so the experimental `executeStreamingFunction` helper now throws. Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries to `2.70.0`. The ontology-as-code full-metadata converters now populate the object type `aliases` and `datasources` fields.
