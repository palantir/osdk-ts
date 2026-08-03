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
"@osdk/seed-compiler": patch
"@osdk/unit-testing": patch
"@osdk/vite-plugin-oac": patch
---

Bump `@osdk/foundry.*` and `@osdk/internal.foundry.ontologies` catalog entries from `2.63.0` to `2.70.0`. `@osdk/foundry.functions` stopped generating a binding for the still-served `streamingExecute` query endpoint in `2.67.0`, so the client now declares that one endpoint locally.
