---
"@osdk/client": minor
---

Add experimental `__EXPERIMENTAL__NOT_SUPPORTED_YET__withFetch` to scope a custom fetch to a derived client. The user-supplied fetch sits at the base of the wrap chain, so OSDK's auth, retry, and header layers still apply on top. Enables per-request `keepAlive`, `AbortSignal`, and custom headers without affecting the parent client.
