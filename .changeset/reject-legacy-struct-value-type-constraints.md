---
"@osdk/maker": minor
"@osdk/maker-experimental": minor
---

Remove legacy `struct` value type constraints from `AuthoringDataConstraint` and reject legacy struct constraints or base types in `defineValueType` and `importOntologyEntity`, since Ontology Metadata Service only supports `structV2`.
