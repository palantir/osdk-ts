---
"@osdk/client": minor
"@osdk/oauth": minor
---

Add `tokenStorage` option to `createPublicOauthClient` to control refresh token storage. Supports `'localStorage'` (default), `'sessionStorage'` (recommended for shared devices), or `'none'` (most secure, re-authenticates on every page load).
