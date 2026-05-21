---
"@osdk/react-components": minor
---

FilterList: consolidate per-item actions into a header overflow menu.

- Every filter type now renders a `...` overflow menu (including linked-property, NUMBER_RANGE, DATE_RANGE, TOGGLE, HAS_LINK).
- The standalone remove `X` is gone. Remove filter, Clear all selections, and Keep / Exclude all live inside the overflow menu and only appear when applicable.
- Keep / Exclude on linked-property filters now toggles `isExcluding` on the inner linked filter state.
- The "N of M values" count badge that used to render alongside the inline exclude row is preserved and now renders above the filter input.
- New `controls` config on `FilterDefinition` (`search`, `overflow`, `remove`) for fine-grained control over which header controls render. `controls.search` takes precedence over `searchField`, which is now `@deprecated`.
- `controls.search` accepts `boolean | "header-start" | "header-end" | "menu"`. `"menu"` renders a "Search values" item inside the overflow menu that opens the inline search row.
- `controls.overflow` accepts `boolean | "header-start" | "header-end"` to place the `...` trigger on either side of the header.
- New exported types `FilterControlPlacement`, `FilterControlsConfig`, `FilterDefinitionControls`.
