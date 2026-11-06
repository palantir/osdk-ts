---
"@osdk/api": patch
"@osdk/client": patch
---

Fix `$orderBy` typing: restore property completions in `$orderBy: {}`, allow ordering by unselected properties, stop adding `$score` to results unless ordering by `"relevance"`, and default `FetchPageArgs`/`AsyncIterArgs`/`ObjectSetArgs` to accept property or `"relevance"` ordering.
