---
"@osdk/client": patch
---

Scenario clients now throw the same `PalantirApiError` (including `errorName` and `parameters`) as base clients instead of a generic `UnknownError`, by reusing the parent client's fetch stack rather than double-wrapping it
