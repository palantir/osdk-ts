---
"@osdk/client": patch
---

Fix multiple useOsdkObjects hooks that share the same query incorrectly sharing a page size. Each hook now respects its configured pageSize, or the default of 100, regardless of subscription order.
