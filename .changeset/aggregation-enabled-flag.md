---
"@osdk/react": minor
---

add `enabled` flag to `useOsdkAggregation` so callers can skip execution when an upstream `objectSet` is not yet resolved, matching the pattern used by `useOsdkObjects`, `useOsdkObject`, and `useOsdkFunction`
