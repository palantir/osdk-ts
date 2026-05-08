---
"@osdk/react-components": minor
---

Expose `FilterPopover`, `FilterInput`, and `useFilterListState` as composable primitives so consumers can build custom FilterList layouts (e.g. inline horizontal toolbars). Also exports `getFilterKey`, `getFilterLabel`, `summarizeFilterValue`, and `filterHasActiveState` helpers. See the `Experimental/FilterList/Recipes/Horizontal toolbar` story for a worked example. Also adds a pointer-hover highlight to non-disabled `Combobox` items (matches the existing `[data-highlighted]` keyboard-focus treatment).
