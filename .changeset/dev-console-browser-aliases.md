---
"@osdk/functions": minor
---

Add a browser-safe `@osdk/functions/browser-aliases` subpath so Dev Console apps can read resolved custom aliases in the browser. Call `await initAliases()` once at startup to fetch and cache the served deployment config, then read values synchronously with `custom("myAlias")`.
