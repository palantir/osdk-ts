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
"@osdk/typescript-sdk-docs": patch
"@osdk/unit-testing": patch
"@osdk/vite-plugin-oac": patch
---

Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries to `2.70.0`. Streaming query execution (`executeStreamingFunction`) is no longer supported so the experimental streaming-query helper now throws instead of calling it. The ontology-as-code full-metadata converters now populate the object type `aliases` and `datasources` fields, dropping redacted datasources and carrying through datasource branches and derived-property names.
