---
"@osdk/maker": patch
---

Validate `replace` interface schema migrations: a replacement must be the only instruction of the only transition on its interface, must resolve to a locally-defined or imported interface type unrelated to the one it replaces, and must map every entity the replacement requires to a compatible, uniquely mapped source
