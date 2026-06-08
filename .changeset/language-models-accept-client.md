---
"@osdk/language-models": minor
---

`getOpenAiBaseUrl`/`getAnthropicBaseUrl`/`getGoogleBaseUrl`/`getFoundryToken`/`createFetch` now accept an OSDK `Client` in addition to a `PlatformClient`, resolving the underlying client context internally.
