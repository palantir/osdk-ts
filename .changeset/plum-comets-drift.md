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

Bump the `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.63.0` to `2.69.0`. `@osdk/foundry.functions` is intentionally held at `2.63.0` (rather than `2.69.0`) so that `Functions.streamingExecute`, used by the experimental streaming-query helper, remains available — it was removed from the platform SDK at `2.67.0`.
