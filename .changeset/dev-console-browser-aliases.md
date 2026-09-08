---
"@osdk/aliases": minor
"@osdk/functions": minor
---

Add `@osdk/aliases`, extracting the alias runtime so consumers that are not Functions can read aliases without depending on `@osdk/functions`. Synchronous `Aliases.custom()` calls in Functions remain behaviorally unchanged, but are deprecated ahead of a future asynchronous API.

`@osdk/aliases/experimental` is a new browser-safe entry point for applications served to a browser, such as Developer Console apps: call `await Aliases.custom("myAlias")`. The first call loads root `resources.json`; repeated and concurrent calls share the cached request. The file contains author defaults during local development and installer-resolved values on a Marketplace-installed site. The API sits behind the `experimental` subpath because custom aliases are provisional.

`@osdk/aliases/node` is the existing filesystem-backed runtime for code running in Node.
