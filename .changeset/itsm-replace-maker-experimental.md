---
"@osdk/maker-experimental": patch
---

Convert `replace` interface schema migrations to block data, referencing the replacement and each mapped property, link type constraint, action type constraint, and parameter by rid. Imported interface types no longer carry their schema migrations into the block data, and mapping to an imported SPT-backed property is rejected until it has an input shape to reference
