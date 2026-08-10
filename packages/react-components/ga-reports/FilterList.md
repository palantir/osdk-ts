<!-- cspell:words zpoh officenetwork peopleapp OOTB autodocs -->

# GA-Readiness Audit — FilterList

Read-only audit. Source of truth: `packages/react-components/CONTRIBUTING.md` + `CLAUDE.md`.
Base dir paths are relative to `packages/react-components/`.
Re-audited 2026-08-10 against `zpoh/ga` @ `ee3b3ed8ee`.

> **What changed:** `docs/FilterList.md` now generates its prop tables from source (#3463 AUTOGEN), which closes both documentation-accuracy blockers — the Core Props table is correct about `objectType`/`objectSet`, and `showFilteredOutValues`/`onFilterVisibilityChange` are covered. **Categories B and C are entirely unchanged**, and the AUTOGEN table now publishes the dead `filterClause` prop verbatim, which makes B1 more visible rather than less. Blocking set: **7** (was 9).

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

**[REQUIRED] — all three unchanged as of 2026-08-10**
- [ ] **Dead controlled-mode prop `filterClause`** — still at `FilterListApi.ts:107`. Declared and JSDoc'd as "If provided, the filter clause is controlled," but grep across `src/filter-list/` still finds **zero** reads (only the type declaration). The component remains uncontrolled-only for the where clause: it emits `onFilterClauseChanged` but ignores an incoming `filterClause`. **Now worse:** the regenerated Props Reference publishes it as a first-class prop with its "the filter clause is controlled" JSDoc intact (`docs/FilterList.md:72`), and four Storybook stories pass it (`FilterList.stories.tsx:508,1667,1802,1917`) plus its `argTypes` entry (`:194`) — so the no-op is advertised in more places than before. Fix: implement controlled mode, or remove the prop and correct docs/stories. **Still the biggest blocker.**
- [ ] **`@deprecated` prop on a public exported type** — still `base/BaseFilterListApi.ts:64` `hasVisibilityChanges` (superseded by `canReset`). `BaseFilterListProps` is exported. Remove before GA. (The internal `useFilterVisibility` return field of the same name is fine — it is not public surface.)
- [ ] **`as` casts in a shipped consumer** — unchanged: `e2e.sandbox.officenetwork/src/components/EmployeeFilters.tsx:34,42,50,58,66` each element cast `as FilterDefinitionUnion<Employee>` (incl. NUMBER_RANGE + DATE_RANGE defs), even though the array is already annotated. The peopleapp consumer (`EmployeesWithFilterList.tsx:65`) uses the same shape for LISTOGRAM/LINKED_PROPERTY with **no** casts. Reconcile: root-cause why literals need casting (likely discriminated-union/`filterState` inference under generic `C`) or strip them. Criterion requires types resolve with no casts.

**Nice-to-have (non-blocking)**
- [OPTIONAL] `filterState` is duplicated across shapes for LINKED_PROPERTY (`linkedFilterState` + a wrapping `filterState.linkedFilterState`) — awkward intermediate object; see `EmployeesWithFilterList.tsx:80-85`.

### C. Features — 2 blocking

**[REQUIRED]**
- [ ] **No user-facing string is overridable** — unchanged; there is still **zero** string-override surface in `FilterListApi.ts` / `FilterListItemApi.ts` / `BaseFilterListApi.ts` (no `placeholder`/`labels`/`messages`/`ariaLabel` props). `ObjectTable` shipped the pattern to copy in #3697 (`src/object-table/ObjectTableLabels.tsx` — a context-backed `Partial<Labels>` bag merged over defaults). Every user-facing literal below is hardcoded with no override path (hardcoded defaults are fine; the missing override is the blocker):
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

### E. Documentation — 2 blocking (was 4)

**[REQUIRED]**
- [ ] **No data-attribute documentation** — unchanged. The component emits data attributes (`data-empty`, `data-filtered-out`, `data-*` sortable states in `FilterListContent.tsx`/`ListogramInput.module.css`) but `docs/FilterList.md` still has no data-attribute section (grep for `data-` in the doc returns nothing). Criterion requires all data attributes documented.
- [ ] **No base-component (`BaseFilterList`) Storybook story** — unchanged. `grep BaseFilterList` across `react-components-storybook/src/` still returns nothing. Base component is publicly exported but has zero stories; criterion requires ≥1 base example.

- ✅ **Core Props table now correct** (#3463). `docs/FilterList.md:65-95` is an AUTOGEN block generated from `FilterListApi.ts`: `objectType` is listed first and marked **Required**, `objectSet` is listed as optional. The hand-maintained table that had these inverted is gone.
- ✅ **Previously undocumented props now covered** — `showFilteredOutValues` and `onFilterVisibilityChange` both appear in the AUTOGEN table with their full JSDoc. The per-definition types are also AUTOGEN'd now (`PropertyFilterDefinition`, `KeywordSearchFilterDefinition`, `HasLinkFilterDefinition`, `LinkedPropertyFilterDefinition`, `CustomFilterDefinition`, `StaticValuesFilterDefinition` at `docs/FilterList.md:116-294`).

CSS tokens: ✅ still fully covered — every token declared in `src/tokens/component-tokens/filter-list.css` is present in `docs/CSSVariables.md`.
OSDK stories: ✅ Overview/Docs page embeds the mdx (`FilterList.mdx`), `Default` story present, and every major feature has a story (all filter types via `WithAllFilterTypes`, KEYWORD_SEARCH, CUSTOM, LINKED_PROPERTY, HAS_LINK, STATIC_VALUES, addFilterMode, sorting, reset, collapsed, colorMap, renderValue, initialFilterStates, ObjectTable integration); Code panel snippets provided.

**Nice-to-have (non-blocking)**
- [OPTIONAL] Storybook meta title is `"Components/FilterList"` (`FilterList.stories.tsx:147`) and the mdx sets `tags={["beta"]}` manually — CONTRIBUTING/​CLAUDE say beta components use `title: "Beta/…"` (tag auto-injected, no manual tag). Reconcile tier vs. GA intent.
- [OPTIONAL] Some story `source.code` snippets show the dead `filterClause` prop (e.g. `WithAllFilterTypes`) — fix alongside the B finding.

---

## Summary verdict

**Not ready (7 blocking items).** Down from 9.

Blocking count by category: B=3, C=2, E=2 (A and D clear).

Resolved since the first audit: both documentation-accuracy blockers, via the AUTOGEN props tables (#3463) — the Core Props table's inverted `objectType`/`objectSet` requirement, and the undocumented `showFilteredOutValues`/`onFilterVisibilityChange`.

**Single biggest blocker (unchanged, and now more exposed):** `filterClause` (`FilterListApi.ts:107`) is a dead prop — the documented controlled-mode where-clause input is never read, so controlled mode is silently broken. Regenerating the docs propagated its "the filter clause is controlled" JSDoc straight into the published Props Reference (`docs/FilterList.md:72`), and four Storybook stories pass it. Either implement controlled mode or remove the prop and correct the docs/stories.
