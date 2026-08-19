---
"@osdk/aliases": minor
"@osdk/functions": minor
---

Extract the alias runtime into a new `@osdk/aliases` package so consumers that are not Functions can read aliases without depending on `@osdk/functions`.

`@osdk/functions` re-exports it, so its public `Aliases` namespace is unchanged.

The new package has two entry points. `@osdk/aliases` is browser-safe, for applications served to a browser such as Developer Console apps: call `await initAliases()` once at startup, then read values synchronously with `custom("myAlias")`. It reads the installer's resolved values from the deployment config on a Marketplace-installed site, and falls back to the author's declared defaults in `public/resources.json` when that file is absent (local development, or a site deployed without Marketplace). The fallback triggers only when that file is genuinely absent, meaning a 404 or the markup a single-page-app host serves in place of one, so a transient server error surfaces instead of silently substituting defaults for the installer's values. `@osdk/aliases/node` is the existing filesystem-backed runtime for code running in Node with a container filesystem.
