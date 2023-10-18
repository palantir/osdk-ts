---
"@osdk/legacy-client": patch
"@osdk/generator": patch
"@osdk/gateway": patch
"@osdk/client": patch
"@osdk/api": patch
---

Removing subpath imports since TS does not resolve them when creating `.d.ts` files
