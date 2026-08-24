---
"@osdk/api": minor
"@osdk/client": minor
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

Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries to `2.75.0`, which reinstates the `streamingExecute` query endpoint as a Server-Sent Events (`text/event-stream`) stream. The experimental `executeStreamingFunction` helper is reimplemented on top of it and no longer throws: it yields each result as it arrives, flattening batched results so array-returning queries emit one element at a time.
