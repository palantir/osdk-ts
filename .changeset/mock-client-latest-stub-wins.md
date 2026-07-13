---
"@osdk/unit-testing": patch
---

Re-registering a mock client stub with the same pattern now overrides the previous stub (latest registered wins) instead of being shadowed by it.
