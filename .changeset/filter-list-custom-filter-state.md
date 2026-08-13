---
"@osdk/react-components": minor
---

FilterList: a `CUSTOM` filter's seed now filters the object set, not just the input.

`CUSTOM` was the one kind whose seed only pre-filled `renderInput`: the value showed as selected while the data stayed unfiltered. It now seeds the filter's state like every other kind, so it reaches `toWhereClause` and the active filter count. If you set `filterState` (or `defaultFilterState`) to a value your `toWhereClause` turns into a clause, that clause now applies from mount — check any `CUSTOM` definition whose seed is a meaningful value rather than an empty or "show everything" one.

`filterState` and `defaultFilterState` are now read as one chain, `defaultFilterState` winning, so renaming preserves the value.

Also fixes the active filter count for `CUSTOM` filters, which counted any custom state as active. One now counts only when its `toWhereClause` produces a clause, matching what FilterList actually applies — so a seed that filters nothing no longer inflates the count.
