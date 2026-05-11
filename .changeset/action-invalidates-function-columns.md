---
"@osdk/client": patch
"@osdk/react-components": minor
---

Fix function-backed columns and lists with derived properties rendering stale values after an action edits a related object. ObjectTable's `useFunctionColumnsData` now passes the page's row PKs as `dependsOnObjects` to the underlying `useOsdkFunctions`, and function `ColumnDefinition` locators now accept an optional `dependsOn: string[]` for declaring linked object types the function reads server-side. Lists whose `withProperties` traverse linked types now also revalidate when an action edits one of those linked types. The action invalidation path fans out per-type invalidation in a single walk while the optimistic layer is still on top, so fresh values land in truth before the optimistic layer drops.
