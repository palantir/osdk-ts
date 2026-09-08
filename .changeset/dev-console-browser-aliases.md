---
"@osdk/aliases": minor
"@osdk/functions": minor
---

Add `@osdk/aliases`, extracting the alias runtime so consumers can read aliases without depending on `@osdk/functions`. Synchronous `Aliases.custom()` calls in Functions remain behaviorally unchanged, but are deprecated in favor of the new asynchronous API.

`@osdk/aliases/experimental` provides the same `await Aliases.custom("myAlias")` API in browsers and Functions. Browsers load root `resources.json`, sharing the request across repeated and concurrent calls. Functions reuse their runtime-provided filesystem configuration. The API sits behind the `experimental` subpath because custom aliases are provisional.

`@osdk/aliases/node` is the existing filesystem-backed runtime for code running in Node.
