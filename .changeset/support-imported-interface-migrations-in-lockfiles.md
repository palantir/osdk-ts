---
"@osdk/maker": minor
"@osdk/maker-import": minor
---

Preserve imported interface schema migration opt-in metadata and enforce family-wide opt-in across imported interface extensions. An imported interface that reports no opt-in state is left alone rather than treated as opted out, so only an ontology whose imported metadata says the parent is opted out will now fail to build.
