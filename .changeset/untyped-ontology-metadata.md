---
"@osdk/generator": patch
"@osdk/foundry-sdk-generator": patch
"@osdk/integration-testing": patch
---

Declare generated experimental ontology metadata as `unknown` without importing `@osdk/foundry.ontologies` or adding a generated dependency. Integration-testing also accepts metadata as `unknown`, avoiding type mismatches between platform SDK versions.
