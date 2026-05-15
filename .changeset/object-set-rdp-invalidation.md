---
"@osdk/client": patch
---

Fix ObjectSetQuery not revalidating when an action edits a type that the query's RDP traverses. Previously only ListQuery (used by useOsdkObjects) checked the RDP invalidation set; ObjectSetQuery (used by useObjectSet) only matched the base object type, leaving RDP columns stale after actions edited a linked type such as Office.
