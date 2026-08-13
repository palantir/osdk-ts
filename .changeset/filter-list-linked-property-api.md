---
"@osdk/react-components": minor
---

FilterList: `LINKED_PROPERTY` filters no longer need three fields to express one value. `linkedFilterComponent` is now `filterComponent`, and `defaultLinkedFilterState` is now `defaultFilterState`.

Nothing is removed. Every old field is optional and `@deprecated`, and the renamed pair is still honoured as a fallback.

To migrate a `LINKED_PROPERTY` definition:

- Rename `linkedFilterComponent` to `filterComponent`.
- Rename `defaultLinkedFilterState` to `defaultFilterState`.
- Delete `linkedFilterState` and `filterState`. Both were required but never read, so renaming them would silently activate filters that were never active.
