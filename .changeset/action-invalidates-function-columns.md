---
"@osdk/client": patch
"@osdk/react-components": minor
---

Fix function-backed columns rendering stale values after an action edits a related object. ObjectTable's `useFunctionColumnsData` now passes the page's row PKs as `dependsOnObjects` to the underlying `useOsdkFunctions`, and function `ColumnDefinition` locators now accept an optional `dependsOn: string[]` for declaring linked object types the function reads server-side. The action invalidation path also fans out per-type invalidation to function caches with matching `dependsOn` after the optimistic layer is removed.
