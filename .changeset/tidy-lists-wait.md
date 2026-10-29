---
"@osdk/client": patch
---

Reuse matching list refreshes during object type and full-cache invalidation. Wait briefly for list members, including pages being refilled, and batch remaining object loads when rows are absent or the list refresh fails or takes too long.
