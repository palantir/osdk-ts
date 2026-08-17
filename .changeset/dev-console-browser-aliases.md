---
"@osdk/functions": minor
---

Add a browser-safe `@osdk/functions/browser-aliases` subpath so Dev Console apps can read resolved custom aliases in the browser. Call `await initAliases()` once at startup to fetch and cache the config, then read values synchronously with `custom("myAlias")`. Pass `path: DEFAULT_DECLARATIONS_PATH` during local development to read the authored defaults from `public/resources.json`, since the installed deployment config only exists on a hosted site.
