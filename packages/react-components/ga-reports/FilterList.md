# GA-Readiness Audit — FilterList

Read-only audit. Source of truth: `packages/react-components/CONTRIBUTING.md` + `CLAUDE.md`.
Base dir paths are relative to `packages/react-components/`.

---

## Artifact 1 — Feature inventory

Derived from `src/filter-list/FilterListApi.ts` + `FilterListItemApi.ts`.

- **Data binding**: `objectType` (only required prop) drives metadata/aggregations; optional `objectSet` scopes aggregation queries and enables `onEffectiveObjectSet`.
- **Filter component types** (`FilterComponentType`): `LISTOGRAM`, `DATE_RANGE`, `NUMBER_RANGE`, `TEXT_TAGS`, `CONTAINS_TEXT`, `SINGLE_SELECT`, `MULTI_SELECT`, `SINGLE_DATE`, `MULTI_DATE`, `TIMELINE`, `TOGGLE`.
- **Filter definition kinds** (`FilterDefinitionUnion`): `PROPERTY`, `HAS_LINK`, `LINKED_PROPERTY` (auto-narrow via `reverseLinkName`, or UI-only), `KEYWORD_SEARCH`, `CUSTOM`, `STATIC_VALUES`.
- **Type-safe component/property pairing**: `ValidComponentsForPropertyType` restricts `filterComponent` to the property's wire type.
- **Where-clause output**: emits `onFilterClauseChanged(WhereClause<Q>)` (direct filters) and `onEffectiveObjectSet(ObjectSet<Q>)` (direct + linked narrowing).
- **Exclude / negate**: per-filter `isExcluding` on `BaseFilterState`; inline Keeping/Excluding dropdown.
- **Include-null**: per-filter `includeNull`.
- **Add/remove filters**: `addFilterMode` `"uncontrolled"` (built-in Add-filter popover + remove buttons) vs `"controlled"` (consumer owns `filterDefinitions`); `onFilterAdded` / `onFilterRemoved` / `onFilterVisibilityChange`.
- **Drag reorder**: `enableSorting`.
- **State hydration**: `initialFilterStates` (Map) + `serializeFilterStates`/`deserializeFilterStates`; `onFilterStateChanged` observer.
- **Header UI**: `title`, `titleIcon`, `showResetButton` + `onReset`, `showActiveFilterCount`, `collapsed` + `onCollapsedChange`.
- **Per-value display**: `renderValue`, `colorMap` (LISTOGRAM), `showCount`, `listogramConfig` (displayMode/maxVisibleItems), `formatDate` (date types only), `clickToFilter` (histogram), `showFilteredOutValues`.
- **Render slots**: `renderAddFilterButton`; base layer exposes `renderInput` (`RenderFilterInput`).
- **Base layer**: `BaseFilterList` (OSDK-agnostic, primitive props) + building blocks `FilterInput`, `FilterPopover`, `useFilterListState`, `getFilterKey`/`getFilterLabel`/`summarizeFilterValue`/`narrowObjectSet`.

---

## Artifact 2 — Outstanding tasks to GA

### A. Exports — ✅ no blocking tasks

- OSDK `FilterList` (wrapped in `withOsdkMetrics`) and base `BaseFilterList` both exported from `src/public/experimental/filter-list.ts:17,24`. ✅
- No `src/base-components/` UI primitives or Blueprint-duplicate primitives (Listogram etc.) are exported. ✅

**Nice-to-have (non-blocking)**
- [OPTIONAL] The barrel exports a large building-block surface (`FilterInput`, `FilterPopover`, `useFilterListState`, `getFilterKey`, `getFilterLabel`, `summarizeFilterValue`, `narrowObjectSet`, `NO_VALUE`, `filterHasActiveState`, `LinkedFilter`). Pattern: wide experimental surface vs. lean public API (`ObjectTableApi.ts` reference favours minimum). Tension: each export is maintenance/compat surface at GA. Candidate resolutions: (a) keep only `FilterList` + `BaseFilterList` + serialize helpers public, demote the rest to internal; (b) split a documented "building blocks" sub-path. Do not pick — design judgment.

### B. API — 3 blocking

**[REQUIRED]**
- **Dead controlled-mode prop `filterClause`** — `FilterListApi.ts:107`. Declared and JSDoc'd as "If provided, the filter clause is controlled," but grep across `src/filter-list/` finds **zero** reads (only the type declaration). `useFilterListState` destructures `onFilterClauseChanged`/`onEffectiveObjectSet`/`initialFilterStates` but never `filterClause` (`hooks/useFilterListState.ts:114-121`). The component is uncontrolled-only for the where clause: it emits `onFilterClauseChanged` but ignores an incoming `filterClause`. Docs and the Storybook `WithAllFilterTypes` code snippet actively advertise `filterClause={...}` (a no-op). Fix: implement controlled mode, or remove the prop and correct docs/story. **Biggest blocker.**
- **`@deprecated` prop on a public exported type** — `base/BaseFilterListApi.ts:68` `hasVisibilityChanges` (superseded by `canReset`). `BaseFilterListProps` is exported. Remove before GA.
- **`as` casts in a shipped consumer** — `e2e.sandbox.officenetwork/src/components/EmployeeFilters.tsx:34,42,50,58,66` each element cast `as FilterDefinitionUnion<Employee>` (incl. NUMBER_RANGE + DATE_RANGE defs), even though the array is already annotated. The peopleapp consumer (`EmployeesWithFilterList.tsx:65`) uses the same shape for LISTOGRAM/LINKED_PROPERTY with **no** casts. Reconcile: root-cause why literals need casting (likely discriminated-union/`filterState` inference under generic `C`) or strip them. Criterion requires types resolve with no casts.

**Nice-to-have (non-blocking)**
- [OPTIONAL] `filterState` is duplicated across shapes for LINKED_PROPERTY (`linkedFilterState` + a wrapping `filterState.linkedFilterState`) — awkward intermediate object; see `EmployeesWithFilterList.tsx:80-85`.

### C. Features — 2 blocking

**[REQUIRED]**
- **No user-facing string is overridable** — there is **zero** string-override surface in `FilterListApi.ts` / `FilterListItemApi.ts` / `BaseFilterListApi.ts` (no `placeholder`/`labels`/`messages`/`ariaLabel` props). Every user-facing literal below is hardcoded with no override path (hardcoded defaults are fine; the missing override is the blocker):
  - Placeholders: `base/FilterListItem.tsx:181` "Search property values...", `inputs/ContainsTextFilterInput.tsx:50` "Search..."
  - Empty/error states: `base/inputs/ListogramInput.tsx:128` & `RangeInput.tsx:635` "No values available"; `MultiSelectInput.tsx:167` / `SingleSelectInput.tsx:126` "No options available"; `MultiSelectDropdownLayout.tsx:40` / `SingleSelectInput.tsx:147` "No matching options"; `NoValueLabel.tsx:39` "No value"; `FilterInput.tsx:109` "Custom filter missing renderInput", `:156` "Unsupported filter type"; `AddFilterPopover.tsx:48` "Search filters", `:49` "No matching filters".
  - aria-labels: `BaseFilterList.tsx:86` "Expand filters"; `FilterListItem.tsx:147/166/182/190` "Search values"/"More actions"/"Search property values"/"Clear search"; `TimelineInput.tsx:93/109/119`; `SingleDateInput.tsx:77`; `ContainsTextInput.tsx:120`; `MultiDateInput.tsx:99`; `RangeInput.tsx:656`.
  - Other: `ExcludeDropdown.tsx:35` "Excluding"/"Keeping"; `FilterListHeader.tsx:86` "Collapse filters"/"Expand filters"; `FilterInputExcludeRow.tsx:85` "Approximate count of unique values".
- **Dark mode**: ✅ clean in components — no hex/rgb/rgba literals in any `src/filter-list/**/*.module.css` or `*.tsx`; all colors route through `--osdk`/`--bp` tokens. One residual: `src/tokens/component-tokens/filter-list.css:8` `--osdk-filter-list-shadow` hardcodes `rgba(0,0,0,0.1)` (theme-neutral shadow, low risk — see D/optional).

**Nice-to-have (non-blocking)**
- [OPTIONAL] No `TODO`/`FIXME`/`HACK` markers in source; no obviously broken states found.
- [OPTIONAL] `FilterInput.tsx` fans out `onFilterStateChanged` through many per-type wrappers — high branching; candidate for a lookup table.

### D. Styling — ✅ no blocking tasks

- All canonical `--osdk`/`--bp` token defaults live in `src/tokens/component-tokens/filter-list.css`. No `--bp-*` used directly in module CSS; no base mapping inlined. ✅
- The 3 inline token assignments (`base/inputs/ListogramInput.module.css:86,89`, `MultiSelectInput.module.css:52`) are **state-scoped `--osdk→--osdk` re-points** inside `[data-filtered-out]`/`.filteredOutItem` selectors (cascade override for muted rows), not base mappings — legitimate. Not flagged as blocking.

**Nice-to-have (non-blocking)**
- [OPTIONAL] `--osdk-filter-list-shadow` (`filter-list.css:8`) hardcodes `rgba(0,0,0,0.1)`; consider a shadow token analog in `base.css`.
- [OPTIONAL] Numerous `calc(--osdk-surface-spacing * 1)` no-op multipliers in `filter-list.css` (lines 45,57,73,104,132,135,157,316,418,468). Drop the `* 1`.
- [OPTIONAL] Token file mentions legacy `--osdk-filter-listogram-empty-label-*` / `--osdk-filter-null-label-*` as opt-in overrides not declared here — verify none are unused/dead.

### E. Documentation — 4 blocking

**[REQUIRED]**
- **`docs/FilterList.md` Core Props table is wrong about the required prop** — lists `objectSet` as Required=Yes and **omits `objectType` entirely**. The actual API (`FilterListApi.ts:94`) has `objectType` as the only required prop and `objectSet` optional. Correct the table.
- **Undocumented props** in `docs/FilterList.md`: `showFilteredOutValues` (`FilterListApi.ts:159`) and `onFilterVisibilityChange` (`:206`) appear in neither prop table.
- **No data-attribute documentation** — component emits data attributes (`data-empty`, `data-filtered-out`, `data-*` sortable states in `FilterListContent.tsx`/`ListogramInput.module.css`) but docs have no data-attribute section. Criterion requires all data attributes documented.
- **No base-component (`BaseFilterList`) Storybook story** — `grep BaseFilterList` across `react-components-storybook/src/` returns nothing. Base component is publicly exported but has zero stories; criterion requires ≥1 base example.

CSS tokens: ✅ fully covered — `docs/CSSVariables.md` documents 274 `--osdk-filter*` tokens vs 271 declared.
OSDK stories: ✅ Overview/Docs page embeds the mdx (`FilterList.mdx`), `Default` story present, and every major feature has a story (all filter types via `WithAllFilterTypes`, KEYWORD_SEARCH, CUSTOM, LINKED_PROPERTY, HAS_LINK, STATIC_VALUES, addFilterMode, sorting, reset, collapsed, colorMap, renderValue, initialFilterStates, ObjectTable integration); Code panel snippets provided.

**Nice-to-have (non-blocking)**
- [OPTIONAL] Storybook meta title is `"Components/FilterList"` (`FilterList.stories.tsx:147`) and the mdx sets `tags={["beta"]}` manually — CONTRIBUTING/​CLAUDE say beta components use `title: "Beta/…"` (tag auto-injected, no manual tag). Reconcile tier vs. GA intent.
- [OPTIONAL] Some story `source.code` snippets show the dead `filterClause` prop (e.g. `WithAllFilterTypes`) — fix alongside the B finding.

---

## Summary verdict

**Not ready (9 blocking items).**

Blocking count by category: B=3, C=2, E=4 (A and D clear).

**Single biggest blocker:** `filterClause` (FilterListApi.ts:107) is a dead prop — the documented controlled-mode where-clause input is never read, so controlled mode is silently broken while docs and a Storybook snippet advertise it. Either implement controlled mode or remove the prop and correct the docs/story.
