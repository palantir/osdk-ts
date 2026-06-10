---
"@osdk/react": patch
---

Lazily import the optional `@osdk/foundry.admin` peer in platform-api admin hooks so consumer builds (e.g. Vite/Rollup) no longer fail with "X is not exported" when the optional peer is not installed.
