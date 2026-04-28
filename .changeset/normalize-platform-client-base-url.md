---
"@osdk/shared.client.impl": patch
"@osdk/client": patch
---

Normalize `baseUrl` inside `createSharedClientContext` so it always ends with `/`, enabling RFC 3986-correct URL resolution at call sites. `createPlatformClient` and `createMinimalClient` rely on this normalization instead of duplicating it.
