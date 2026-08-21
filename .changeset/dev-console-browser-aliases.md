---
"@osdk/aliases": minor
"@osdk/functions": minor
---

Add `@osdk/aliases`, extracting the alias runtime so consumers that are not Functions can read aliases without depending on `@osdk/functions`. The `Aliases` namespace exported by `@osdk/functions` is unchanged.

`@osdk/aliases/experimental` is a new browser-safe entry point for applications served to a browser, such as Developer Console apps: call `await Aliases.initAliases()` once at startup, then read values synchronously with `Aliases.custom("myAlias")`. It reads the installer's resolved values on a Marketplace-installed site and falls back to the author's declared defaults in `public/resources.json` otherwise. It sits behind the `experimental` subpath because both custom aliases and the shape of this API are provisional.

`@osdk/aliases/node` is the existing filesystem-backed runtime for code running in Node.
