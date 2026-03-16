---
"@osdk/api": patch
"@osdk/client": patch
"@osdk/functions": patch
---

Add media transformation support via `transformAndWait` method on the `Media` interface and standalone helper in `@osdk/functions`. This submits a transformation job, polls until completion, and returns the transformed content.
