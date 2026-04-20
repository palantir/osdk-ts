---
"@osdk/cli.common": patch
---

Build OAuth authorize and token URLs via the URL constructor instead of `node:path/posix.join`, which is not URL-aware.
