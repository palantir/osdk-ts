---
"@osdk/react": patch
---

add `useObservableClient` hook so consumers can call cache invalidation methods (`invalidateObjects`, `invalidateObjectType`, `invalidateFunction`, …) from inside the React tree below `OsdkProvider`. Replaces the use case the removed `observableClient` prop served.
