---
"@osdk/api": minor
"@osdk/client": patch
---

Type the OCR and transcription language parameters on the experimental media transformation surface as the closed enums the platform actually declares, and export the encoding types that were previously unreachable.

These four parameters were previously `string`, so this narrows a shipped public type on the `@osdk/api/unstable` entrypoint. Existing call sites holding a `string` in those positions no longer compile, and a language the pinned platform SDK does not list must be cast until the pin moves.
