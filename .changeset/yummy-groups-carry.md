---
"@osdk/client": patch
---

This PR introduces a new View abstraction layer to fix a pageSize caching bug where multiple subscribers with different pageSize values would share cached data incorrectly. The solution:
