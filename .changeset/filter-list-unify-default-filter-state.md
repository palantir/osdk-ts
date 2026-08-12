---
"@osdk/react-components": minor
---

FilterList: every filter definition kind now seeds from one optional `defaultFilterState`, matching the `default<Feature>` convention the rest of the library uses for an uncontrolled seed. `LINKED_PROPERTY`'s `linkedFilterComponent` is now `filterComponent`, and the `initialFilterStates` prop is now `defaultFilterStates`.

Nothing is removed. Every old field is optional and `@deprecated`, and still honoured as a fallback.

To migrate:

- `PROPERTY`, `STATIC_VALUES`, `CUSTOM`: rename `filterState` to `defaultFilterState`.
- `LINKED_PROPERTY`: rename `defaultLinkedFilterState` to `defaultFilterState`, and `linkedFilterComponent` to `filterComponent`.
- Top level: rename `initialFilterStates` to `defaultFilterStates`.
- Delete rather than rename `filterState` on `HAS_LINK`, `KEYWORD_SEARCH` and `LINKED_PROPERTY`, and `linkedFilterState` on `LINKED_PROPERTY`. These have no effect, so renaming them would silently activate filters that were never active.

Also fixes the active filter count for `CUSTOM` filters, which previously counted any custom state as active. A custom filter now counts only when its own `toWhereClause` produces a clause, matching the clause FilterList actually applies.
