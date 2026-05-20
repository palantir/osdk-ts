---
"@osdk/react-components": patch
---

FilterList: consolidate per-item actions into a header overflow menu.

- Every filter type now renders a `...` overflow menu (including linked-property, NUMBER_RANGE, DATE_RANGE, TOGGLE, HAS_LINK).
- The standalone remove `X` is gone. Remove filter, Clear all selections, and Keep / Exclude all live inside the overflow menu and only appear when applicable.
- Keep / Exclude on linked-property filters now toggles `isExcluding` on the inner linked filter state.
- New `searchField` flag on `FilterDefinition` hides the header monocle (useful for MULTI_SELECT, which already has its own search field).
- New `actions` config on `FilterDefinition` (`search`, `overflow`, `remove`, `placement`) for fine-grained control over which header controls render. `actions.search` takes precedence over `searchField`.
