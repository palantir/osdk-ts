---
"@osdk/client": patch
---

add a new View abstraction layer to fix a pageSize caching bug where multiple subscribers with different pageSize values would share cached data incorrectly
