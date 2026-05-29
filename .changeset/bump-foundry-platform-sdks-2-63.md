---
"@osdk/client": patch
"@osdk/faux": patch
"@osdk/foundry-sdk-generator": patch
"@osdk/generator": patch
"@osdk/generator-converters": patch
"@osdk/generator-converters.ontologyir": patch
"@osdk/generator-converters.preview": patch
"@osdk/maker-import": patch
"@osdk/react": patch
"@osdk/react-sdk-docs": patch
"@osdk/seed-compiler": patch
"@osdk/typescript-sdk-docs": patch
"@osdk/unit-testing": patch
"@osdk/vite-plugin-oac": patch
---

Bump `@osdk/foundry.*` and `@osdk/internal.foundry.*` catalog entries from `2.61.0` to `2.63.0`. The OntologyScenarios endpoints now expose a `preview` query-param slot, so `createScenario` and the `EXPERIMENTAL_ScenarioClient` read methods pass `{ preview: true }` directly instead of relying on a fetch-level URL rewrite.
