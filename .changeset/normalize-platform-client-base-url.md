---
"@osdk/client": patch
---

Normalize `baseUrl` in `createPlatformClient` to always end with `/`, matching `createMinimalClient` and enabling RFC 3986-correct URL resolution at call sites.
