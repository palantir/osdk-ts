---
"@osdk/aliases": minor
---

Add the experimental asynchronous `Aliases.custom()` API for browser applications and Functions. Browsers load custom aliases from `/resources.json` at the site's origin, sharing the request across repeated and concurrent calls. Functions reuse the existing filesystem runtime.

Reject inherited JavaScript properties when looking up aliases; explicitly declared aliases with those names remain supported.
