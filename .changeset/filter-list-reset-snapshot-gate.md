---
"@osdk/react-components": patch
---

disable filter-list reset until state diverges from initial; gate the reset button via a single `canReset` prop on `BaseFilterList` and deprecate `hasVisibilityChanges`
