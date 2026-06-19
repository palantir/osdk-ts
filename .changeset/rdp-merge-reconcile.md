---
"@osdk/client": patch
---

Consolidate the observable cache object merge into one field-resolution rule. Base properties and derived (RDP) fields now reconcile in a single pass: the source query owns the base properties it loaded and the derived fields it computed, an owned field it omits clears, and otherwise the target keeps its cached value.
