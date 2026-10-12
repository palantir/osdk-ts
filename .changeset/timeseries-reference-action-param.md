---
"@osdk/api": minor
"@osdk/client": patch
"@osdk/faux": patch
"@osdk/foundry-sdk-generator": patch
"@osdk/generator": patch
"@osdk/generator-converters": patch
"@osdk/generator-converters.ontologyir": patch
"@osdk/generator-converters.preview": patch
"@osdk/maker": patch
"@osdk/maker-experimental": patch
"@osdk/maker-import": patch
"@osdk/react": patch
"@osdk/react-components": patch
"@osdk/react-sdk-docs": patch
"@osdk/seed-compiler": patch
"@osdk/seed-helpers": patch
"@osdk/typescript-sdk-docs": patch
"@osdk/unit-testing": patch
"@osdk/vite-plugin-oac": patch
---

Add support for the `timeSeriesReference` Action parameter type and bump the `@osdk/foundry.*` / `@osdk/internal.foundry.*` catalog entries to `2.83.0`. Action metadata generation now recognizes `timeSeriesReference` parameters (exposed via the new `TimeSeriesReference` type), the form renderer treats them as unsupported fields, and the maker import path maps them through.
