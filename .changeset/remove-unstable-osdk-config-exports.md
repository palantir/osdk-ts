---
"@osdk/client": minor
---

Remove the unused `getMetaTagContent`, `getOsdkConfig`, and `OsdkConfig` exports from `@osdk/client/unstable-do-not-use`; they referenced browser/Vite-only globals (`document`, `import.meta.env`) that broke non-node environments and had no consumers.
