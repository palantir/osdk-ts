---
"@osdk/api": patch
"@osdk/client": patch
"@osdk/functions": patch
---

Add media transformation support via `transformAndWait` method on the `Media` interface and `createMediaFromReference` helper in `@osdk/functions`. The `transformAndWait` method takes a `Transformation` object directly, submits a transformation job, polls until completion, and returns the transformed content. Use `createMediaFromReference(client, mediaRef)` to construct a `Media` object from a raw `MediaReference`.
