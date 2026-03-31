---
"@osdk/react-components": minor
"@osdk/client": minor
---

Fix ObjectSet query cache key canonicalization to use flat parameters instead of a composite object, preventing redundant network fetches when re-subscribing with equivalent query options
