---
"@osdk/client.unstable": minor
"@osdk/maker": patch
"@osdk/maker-experimental": patch
---

Add `addRequiredActionTypeConstraint` and `replace` interface schema migration instructions, with validation, block data conversion, and lockfile support. A replacement maps each action type constraint to its counterpart along with a mapping of its parameters, and is never finalized: it stays declared as a tombstone that blocks further migrations on its interface
