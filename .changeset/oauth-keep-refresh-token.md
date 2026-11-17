---
"@osdk/oauth": patch
---

Keep the stored refresh token when a refresh fails without the server refusing it, such as a network error or a 5xx; `signIn()` now rejects with that error instead of redirecting to login
