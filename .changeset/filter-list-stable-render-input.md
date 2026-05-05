---
"@osdk/react-components": patch
---

Stop FilterList from re-rendering every filter on each value selection. The internal `renderInput` callback no longer closes over `perFilterWhereClauses`, so its identity stays stable across selections and `FilterListItem`'s memoization holds for filters whose own props did not change. The per-filter where clause is now plumbed down to each item via a new optional `whereClauseForFilter` arg on the render-input call (additive — existing custom `renderInput` consumers are unaffected).
