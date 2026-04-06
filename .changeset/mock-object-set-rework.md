---
"@osdk/functions-testing.experimental": patch
---

Rework mock client stubbing API: rename whenObjectSet to when, add standalone createMockObjectSet with whenObjectSet for registering stubs on object sets directly, and support ObjectSet as many-link value in createMockOsdkObject
