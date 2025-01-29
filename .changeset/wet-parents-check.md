---
"@osdk/client": patch
"@osdk/api": patch
---

Remove where clause from aggregate options. This option was never actually doing anything before as it was not passed to the backend for processing, so we are removing it to prevent future confusion.
