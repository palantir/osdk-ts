---
"@osdk/functions-testing.experimental": patch
---

`deepEqual` (used to match stub args in `when` / `whenQuery`) now recognizes Vitest/Jest asymmetric matchers (`expect.any(...)`, `expect.anything()`, `expect.stringContaining(...)`, `expect.objectContaining(...)`, etc.). Previously matchers were compared by raw object shape and silently never matched.
