---
"@osdk/api": minor
---

Reject unknown top-level keys in `aggregate()` options (e.g. a misspelled group-by key or a non-existent `$orderBy`). These were previously accepted by the type checker and silently ignored at runtime.
