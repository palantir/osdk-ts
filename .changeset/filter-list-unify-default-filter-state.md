---
"@osdk/react-components": minor
---

Give every FilterList definition kind one optional `defaultFilterState` field, so the seed is spelled the same way everywhere. Previously `PROPERTY` and `STATIC_VALUES` seeded from a required `filterState`, `HAS_LINK` and `CUSTOM` required a `filterState` that was never read while seeding from `defaultFilterState` instead, `KEYWORD_SEARCH` accepted both but only read `defaultFilterState`, and `LINKED_PROPERTY` needed three fields (`linkedFilterState`, `defaultLinkedFilterState`, `filterState`) to express one value. Now `defaultFilterState` is the field on all six kinds, matching the `default<Feature>` convention the rest of the library uses for an uncontrolled seed. To migrate, rename `filterState` (or `defaultLinkedFilterState`) to `defaultFilterState` and delete the fields whose deprecation notes say they were never read.

`LINKED_PROPERTY`'s `linkedFilterComponent` gets the same treatment and is now spelled `filterComponent`, matching `PROPERTY` and `STATIC_VALUES` — the `linked` prefix carried no information, since the `LINKED_PROPERTY` discriminator already supplies it. `linkedPropertyKey` deliberately keeps its prefix: unlike a state or a component, it is typed against the _linked_ object type, so the prefix is disambiguating rather than redundant.

Nothing is removed and there is no runtime change. Every old field is now optional and `@deprecated`, and each is still read exactly where it was read before:

- `filterState` still seeds `PROPERTY` and `STATIC_VALUES`, behind `defaultFilterState`.
- `filterState` still supplies the state handed to a `CUSTOM` filter's `renderInput`, behind `defaultFilterState`. As before it does not seed, so it never reaches `toWhereClause` or the active filter count.
- `defaultLinkedFilterState` still seeds `LINKED_PROPERTY`, behind `defaultFilterState`.
- `filterState` on `HAS_LINK`, `KEYWORD_SEARCH` and `LINKED_PROPERTY`, and `linkedFilterState` on `LINKED_PROPERTY`, are still not read. They were required, so they are set on essentially every existing definition; starting to read them would silently activate filters in apps that never asked for it.

`id` and `isVisible` moved to the shared `FilterDefinitionControls` mix-in, which is not a shape change.
