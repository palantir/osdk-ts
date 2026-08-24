---
"@osdk/react-components": minor
---

FilterList: add `filterStates` for controlled filter state. Every new map replaces the filters and becomes the reset baseline, so one FilterList can show a different set of filters over its lifetime — one per tab, or per saved view. `onFilterChanged` now reports the full state map as `filterStates`, and reports a push as its own `event: "REPLACE"` carrying the clause and filtered `ObjectSet` the pushed states produce. `defaultFilterStates` and the per-definition `defaultFilterState` seeds are ignored when `filterStates` is supplied.
