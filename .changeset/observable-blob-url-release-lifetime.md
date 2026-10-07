---
"@osdk/client": patch
---

Retain cached blob content after releasing a long-held URL so garbage collection can revoke the URL after the final reference expires.
