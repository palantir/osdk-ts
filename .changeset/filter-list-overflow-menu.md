---
"@osdk/react-components": patch
---

FilterList: extend per-item actions to every filter type and fix linkedProperty exclude toggle.

• every filter type that supports excluding renders the `...` toggle for the inline Keep / Exclude row, including linked-property filters (toggle now flips `isExcluding` on the inner wrapped state)
• new `searchField` flag on `FilterDefinition` hides the header monocle for filters that already have their own inline search (e.g. `MULTI_SELECT`)
• extracted reusable helpers `toggleIsExcluding`, `clearFilterState`, `filterHasActiveState`, `getEffectiveFilterState`, and `getSelectedCount` from inline component logic into `filterValues.ts`
