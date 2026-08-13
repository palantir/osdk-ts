---
"@osdk/react-components": minor
---

FilterList: filter definitions now seed from one optional `defaultFilterState`, matching the `default<Feature>` convention the rest of the library uses for an uncontrolled seed, and the `initialFilterStates` prop is now `defaultFilterStates`.

`id` and `isVisible` moved onto the shared `FilterDefinitionControls` mix-in. They were already declared on most kinds individually; every kind now accepts both.

Nothing is removed. Every old field is optional and `@deprecated`, and still honoured as a fallback.

To migrate:

- `PROPERTY`, `STATIC_VALUES`: rename `filterState` to `defaultFilterState`. The seed is now optional, so a `filterState` that only held an empty state (`{ type: "EXACT_MATCH", values: [] }` and friends) can be deleted instead — the filter starts empty either way.
- Top level: rename `initialFilterStates` to `defaultFilterStates`.
- Delete rather than rename `filterState` on `HAS_LINK` and `KEYWORD_SEARCH`. It has no effect, so renaming it would silently activate filters that were never active.
- `CUSTOM`: rename `filterState` to `defaultFilterState` to start filtering the object set.
