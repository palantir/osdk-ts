---
"@osdk/functions": minor
---

Add a browser-safe `@osdk/functions/browser-aliases` subpath so Dev Console apps can read custom aliases in the browser. Call `await initAliases()` once at startup, then read values synchronously with `custom("myAlias")`. It reads the installer's resolved values from the deployment config on a Marketplace-installed site, and falls back to the author's declared defaults in `public/resources.json` when that file is absent (local development, or a site deployed without Marketplace). The fallback triggers only on a 404, so a transient server error surfaces instead of silently substituting defaults for the installer's values.
