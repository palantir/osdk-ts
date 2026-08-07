# GA-Readiness Audit — ObjectTable

Component: `@osdk/react-components/experimental/object-table`
Audited: 2026-07-15 (read-only re-audit, against `origin/main`). Source of truth: `packages/react-components/CONTRIBUTING.md`, `packages/react-components/CLAUDE.md`.

> Re-run of the 2026-07-14 audit, verified against `origin/main`. **Category B is now resolved** by #3690 (removed deprecated `onRowSelection` + dead filtering API) — only B3 (sandbox coverage) remains. The A "export headless hooks" nice-to-have also landed via #3669. Remaining blocking set: **7 items** (was 9). No override props (C1), inline token defs (D1), or documentation gaps (E1–E4) were closed.

---

## Artifact 1 — Feature Inventory

Derived from `src/object-table/ObjectTableApi.ts`. What ObjectTable does today:

- **Data source** — fetches by `objectType` (one required prop) or a supplied `objectSet`; `objectSetOptions` (union/intersect/subtract); works for object AND interface types.
- **Fetch tuning** — `pageSize` (infinite scroll, default 50), table-level `dedupeIntervalMs` (default 60s), `streamUpdates` (websocket live updates; incompatible with pivot/withProperties).
- **Columns** — `columnDefinitions` with four locator types: `property`, `rdp` (derived property), `function` (function-backed columns w/ `getFunctionParams`/`getKey`/`getValue`/`dedupeIntervalMs`/`dependsOn`), and `custom`. Per-column: `isVisible`, `pinned`, `width`/`min`/`max`, `resizable`, `orderable`, `filterable`, `columnName`.
- **Sorting** — controlled (`orderBy` + `onOrderByChanged`) and uncontrolled (`defaultOrderBy`); multi-column sort; `enableOrdering` toggle.
- **Filtering** — controlled `filter` (WhereClause) applied programmatically (live). There is no user-facing filter UI (the dead `enableFiltering`/`onFilterChanged`/`filterable` API was removed in #3690).
- **Selection** — `selectionMode` none/single/multiple; controlled (`selectedRows` + `isAllSelected`) with `onRowSelectionChanged` (rich `RowSelectionChange` payload). The legacy deprecated `onRowSelection` was removed in #3690.
- **Column management** — pinning (`enableColumnPinning` + `onColumnsPinnedChanged`), resizing (`enableColumnResizing` + `onColumnResize`), visibility/ordering config dialog (`enableColumnConfig` + `onColumnVisibilityChanged`).
- **Cell editing** — `editMode` always/manual; per-column `editable` (bool or predicate); `editFieldConfig` (dropdown/date-picker); `validateEdit`; `onCellValueChanged`; `onSubmitEdits`; `showEditFooter`.
- **Render slots** — `renderCell`, `renderHeader`, `renderCellContextMenu`, `renderEmptyState`.
- **Row interaction** — `onRowClick`; focused-row (controlled `focusedRow` + `onFocusedRowChanged`); `onColumnHeaderClick`; `getRowAttributes` (custom `data-*`); `rowHeight`.
- **Imperative** — `tableRef` → `ObjectTableHandle.getSnapshot()` (export all rows, `rowLimit`).
- **Base layer** — `BaseTable` (`BaseTableProps`, OSDK-agnostic, TanStack-table-driven) is exported, plus building blocks `ColumnConfigDialog`, `MultiColumnSortDialog`, `LoadingCell`/`LoadingCellContent`.

---

## Artifact 2 — Outstanding Tasks to GA

### A. Exports — ✅ no blocking tasks

- OSDK component `ObjectTable` (wrapped in `withOsdkMetrics` at the barrel) and base `BaseTable` both exported (`src/public/experimental/object-table.ts:20-23,43`). Role confirmed: `ObjectTable.tsx` owns the `@osdk/react` data hooks and delegates to `BaseTable` (primitives-only). Subpath resolves in `package.json` exports.
- No `src/base-components/` UI primitives exported through this barrel; `LoadingCell` consumes `SkeletonBar` internally but does not re-export it (`SkeletonBar` is separately sanctioned via `src/public/primitives.ts`). No Blueprint-provided base re-exported. Compliant with Export Rules.

**Nice-to-have (non-blocking)**
- [OPTIONAL] ✅ **Headless hooks now exported** (#3669) — the full interaction layer (`useRowSelection`, `useTableSorting`, `useColumnVisibility`, `useColumnPinning`, `useColumnResize`, `useEditableTable`, `useFocusedRow`, `useSelectionColumn`, `useCellContextMenu`) and data layer (`useObjectTableData`, `useObjectTableSnapshot`, `useFunctionColumnsData`, `useColumnDefs`) are re-exported from the barrel (`src/public/experimental/object-table.ts:65-146`). Still internal: building-block cells under `src/object-table/components/` (`AsyncValueCell`, `DropdownCellField`, `DatePickerCellField`, `TextInputCellField`, `ReadonlyDisplayCell`, `CbacMarkingCell`, `MandatoryMarkingCell`) — absence is not a blocker.
- [OPTIONAL] Composition-shape question (largely resolved by #3669): the headless tier below `BaseTable` is now reachable via the exported per-feature hooks. Remaining judgment call: there is still no single aggregate `useBaseTableState` — a consumer must compose ~10 hooks by hand to rebuild `BaseTable`'s wiring. Candidate resolution: add an aggregate hook, or document the per-feature composition recipe. Non-blocking; do not resolve here.

### B. API

- ✅ **B1 — Dead filtering API removed** (#3690). `enableFiltering`, `onFilterChanged`, and per-column `filterable` are gone from `ObjectTableApi.ts`, `ObjectTable.tsx`, and `hooks/useColumnDefs.ts` (grep on `origin/main` returns zero hits). The live controlled `filter` prop (programmatic `where`) remains. No longer a blocker.
- ✅ **B2 — Deprecated `onRowSelection` removed** (#3690). Gone from `ObjectTableApi.ts`, `ObjectTable.tsx`, and `hooks/useRowSelection.ts`; callback-observation tests migrated to `onRowSelectionChanged`. No longer a blocker.

**[REQUIRED]**
- [ ] **B3 — Sandbox does not exercise most props** — still open (unchanged by #3690, which did not touch the sandbox apps). Roughly **10 of 36** `ObjectTableProps` are used across `e2e.sandbox.peopleapp`; `e2e.sandbox.officenetwork` uses ObjectTable zero times. Exercised: `objectType`, `objectSet`, `columnDefinitions`, `selectionMode`, `defaultOrderBy`, `onSubmitEdits`, `tableRef` (`EmployeesTable.tsx:212`), plus `className`, `filter`, `pageSize` at the other two sites (`offices/page.tsx`, `action-form-filter-list-repro/page.tsx:240`). Never exercised: the controlled sort/selection/focus modes (`orderBy`/`onOrderByChanged`, `selectedRows`/`isAllSelected`/`onRowSelectionChanged`, `focusedRow`/`onFocusedRowChanged`), every event listener (`onRowClick`, `onColumnHeaderClick`, `onColumnResize`, `onColumn*Changed`), plus `renderCellContextMenu`, `renderEmptyState`, `getRowAttributes`, `rowHeight`, `editMode`, `showEditFooter`, `streamUpdates`, `onCellValueChanged`, `objectSetOptions`, `dedupeIntervalMs`. **Coverage sub-gap:** no sandbox column declares `editable: true`, so the edit path (`onSubmitEdits`, `onCellValueChanged`, `editMode`, `showEditFooter`, `editFieldConfig`) is passed but never fires end-to-end. CONTRIBUTING treats the peopleapp example as MVP definition-of-done; add coverage proving controlled modes + listeners + editing resolve end-to-end.

Types otherwise resolve cleanly: no `any`/`as any`/`@ts-expect-error`/`@ts-ignore` is needed on any ObjectTable prop (the `as` hits in the sandbox are unrelated code). Generics `<Q, RDPs, FunctionColumns>` infer for the no-columnDefinitions cases.

**Nice-to-have (non-blocking)**
- [OPTIONAL] Generic-inference friction: `EmployeesTable.tsx:212` must spell out `<Employee, RDPs, FunctionColumns>` explicitly because `RDPs`/`FunctionColumns` are only reachable through the column-locator structure — consumers hand-write the type maps twice. Worth improving inference if touching the columns API.
- [OPTIONAL] `defaultOrderBy`/`orderBy`/`onOrderByChanged` all repeat the same inline `Array<{property; direction}>` literal — extract a named `OrderByClause<Q, RDPs>` type.

### C. Features

**[REQUIRED]**
- [ ] **C1 — Hardcoded user-facing strings with no override path** (biggest gap; spans every sub-component). `ObjectTableProps` exposes **zero** string-override props — no `labels`/`strings`/`messages` object and no sub-component text-override props. The only customization slots are `renderCell`/`renderHeader`/`renderCellContextMenu`/`renderEmptyState`/`columnName`. Every literal below is hardcoded with no override:
  - **Error state** — `Table.tsx:302` `` `Error Loading Data: ${error.message}` ``. Most blocking: `renderEmptyState` is gated on `error == null` (`Table.tsx:296`), so the error path has no override or render slot at all. (The empty state IS overridable via `renderEmptyState` — not flagged.)
  - **Edit footer** — `TableEditContainer.tsx`: `"Edit Table"` (:105), `"Submit Edits"` (:119), `"Cancel"` (:110), `"Select a row to edit data…"` (:98), `` `${count} modifications` `` (:84), `"Validation error"` (:92).
  - **Editable-cell validation fallback** — `EditableCell.tsx:48` `VALIDATION_ERROR_MESSAGE = "Validation error"` (shown via tooltip when `validateEdit` rejects; caller `validateEdit` messages themselves ARE surfaced).
  - **Column config dialog** — `ColumnConfigDialog.tsx`: `"Configure Table Columns"` (:219), `"Cancel"` (:176), `"Apply"` (:183), `"Visible Columns"` (:252), `"Drag to reorder"` (:255), `"Add or Remove Columns"` (:302), `"All Columns"` (:320), `emptyMessage="No visible columns"` (:262), `"No matching columns found"` (:331), `placeholder="Search..."` (:307), `aria-label="Search available columns"` (:308).
  - **Multi-column sort dialog** — `MultiColumnSortDialog.tsx`: `"Sort on Multiple Columns"` (:214), `"Cancel"` (:167), `"Apply"` (:168), `"Add Column to Sort"` (:196), `searchPlaceholder="Search columns"` (:202), `emptyMessage="No matching columns"` (:203), sort-direction aria-label (:151).
  - **Header context menu** — `TableHeaderWithPopover.tsx`: `"Pin column"` (:262), `"Unpin Column"` (:269), `"Sort ascending"` (:278), `"Sort descending"` (:285), `"Sort on multiple columns"` (:291), `"Clear all sorts"` (:301), `"Reset Column Size"` (:307), `"Configure Columns"` (:315), header-menu aria-label (:244).
  - **Async (function-cell) states** — `components/AsyncValueCell.tsx:30` `"Error"`, `:38` `"No value"`.
  - **Selection aria-labels** — `SelectionCells.tsx:33` `"Deselect all rows"`/`"Select all rows"`, `:80` `` `Select row ${n}` ``.
  - Fix: one optional `labels`/`messages` object on `ObjectTableProps` (threaded through `BaseTableProps` to each sub-component), current literals as defaults, plus an error-state render slot for the `Table.tsx:302` case. Hardcoded defaults are fine — GA requires an override *path* for each.

- **Dark mode: ✅ PASS.** Grepped every `src/object-table/**/*.module.css` and `*.tsx` for `#`/`rgb`/`rgba`/`hsl` — zero hardcoded color literals. All colors resolve through `var(--osdk-*)` tokens (several via `color-mix` on `--osdk-intent-*`/`--osdk-background-*`). Works OOTB.

**Nice-to-have (non-blocking)**
- [OPTIONAL] TODOs (all minor): `SelectionCells.tsx:56` (ActionBoundary), `:66` (shift+space toggles twice), `hooks/useColumnVisibility.ts:81` (controlled-mode prop sync), `hooks/useSelectionColumn.tsx:52` (useLatestRef), `TableHeader.tsx:75` (right-align numeric headers). No FIXME/HACK.
- [OPTIONAL] Code quality: stray no-op statement `("");` after the `React.memo` export in `EditableCell.tsx:362`; `"Validation error"` duplicated as `EditableCell.tsx:48` constant + `TableEditContainer.tsx:92` inline literal (will drift once overrides land); `NonIdealState` (single `message` prop) is reused for both empty and error states — centralizing an override there resolves C1's error case + the empty/error asymmetry together.

### D. Styling

**[REQUIRED]**
- [ ] **D1 — Inline `--osdk-*` token definitions outside `component-tokens/`** (letter of the criterion: all `--osdk`/`--bp` mappings must live under `src/tokens/component-tokens/`). All are **nested-primitive scoping overrides** — each pushes a table-token value (or literal) into a token consumed by a *different* primitive (Select/Combobox/DatePicker/Skeleton/Dialog), scoped to a local class; **none declares a new `--osdk-table-*` token**. The styling audit judges this the sanctioned pattern, not a new-token leak — **reviewer to confirm; if sanctioned, downgrade to non-blocking.**
  - `EditableCell.module.css` — select/combobox/datetime scoping (`:49-51`, `:55-56`, `:58`, `:61`, `:101-106`, `:108`).
  - `LoadingCell.module.css:24-25` — remaps `--osdk-background-skeleton-from/to` from `--osdk-table-skeleton-color-*`.
  - `ColumnConfigDialog.module.css:25-27` — remaps `--osdk-dialog-min-width`/`-min-height`/`-body-padding` from table config tokens.
  - No inline `--bp-*` mappings; no token mappings defined in any `.tsx`.

**Nice-to-have (non-blocking)**
- [OPTIONAL] Phantom token: `--osdk-table-cell-bg` is used with an `inherit` fallback (`TableCell.module.css:26,42`) but never declared in `table.css`. Either declare it or drop the var and use `inherit` directly.
- [OPTIONAL] One consistent token file: ✅ single coherent `table.css` (42 `--osdk-table-*` tokens, logically grouped). No declared-but-unused tokens (all 42 referenced). No `calc(--token * 1)` no-ops (only a legit `* 1.5` at `ColumnConfigDialog.module.css:82`).

### E. Documentation

**[REQUIRED]**
- [ ] **E1 — BaseTable is entirely undocumented** — no BaseTable section anywhere in `docs/` (only a one-line architecture aside at `docs/UsageWithOsdk.md:15`). All 16 `BaseTableProps` (`Table.tsx:78-115`: `table`, `isLoading`, `fetchNextPage`, `onRowClick`, `onColumnHeaderClick`, `rowHeight`, `renderCellContextMenu`, `className`, `error`, `headerMenuFeatureFlags`, `editableConfig`, `getRowAttributes`, `showEditFooter`, `renderEmptyState`, `focusedRowId`, `onFocusedRowChanged`) are absent. Docs must cover the base component's props.
- [ ] **E2 — Undocumented OSDK props** — add to the Props Reference in `docs/ObjectTable.md`: `objectSet` (`Api:305`), `objectSetOptions` (`:307`), table-level `dedupeIntervalMs` (`:316`; docs only cover the function-column one, which has a different default), `pageSize` (`:337`; docs only mention "page size of 50" as prose + "No configuration required!"), `focusedRow` (`:533`), `onFocusedRowChanged` (`:543`), `onColumnHeaderClick` (`:556`), and `FunctionColumnLocator.dependsOn` (`:235`, missing from the function-column table at `docs/ObjectTable.md:294-302`).
- [ ] **E3 — Stale documented token defaults** — `docs/ObjectTable.md` Theming section is wrong vs `table.css` (and now also contradicts the corrected `docs/CSSVariables.md`). Fix these 6: `--osdk-table-header-menu-bg` (doc `custom-color-light-gray-2` → actual `transparent`, `table.css:43`), `-header-menu-border` (`:44-45`), `-header-menu-bg-hover` (`:53-55`), `-header-menu-bg-active` (`:56-58`), `--osdk-table-row-bg-hover` & `-row-bg-active` (doc `intent-primary-hover` → actual `intent-primary-rest`, `table.css:23-32`). Doc lines: `1472,1473,1476,1477,1497,1498`.
- [ ] **E4 — Storybook: no `streamUpdates` story** — the prop is now documented in prose (`docs/ObjectTable.md:80`), but the fetch-tuning feature (streamUpdates / table-level dedupe) has zero story coverage (grep of the stories dir returns nothing). Add one (MSW/mocked).

Coverage otherwise strong: Overview MDX embeds `ObjectTable.md` (`ObjectTable.mdx:18,22`); a `Default` minimal story (`ObjectTable.stories.tsx:433`); a story per major feature (data source, all four column locator types, sorting controlled/uncontrolled, selection single/multiple/controlled, pinning/resizing/column-config, editing incl. validation & per-row field config, render slots, context menu, empty state, row-click/focus/attributes/height, getSnapshot export); an 8-story `BaseTable` suite; Code panels wired via `parameters.docs.source.code`. All `ColumnDefinition` sub-props, all `--osdk-table-*` tokens (defaults stale only for the 6 above), and all emitted `data-*` attributes (`data-resizing`, `data-pinned`, `data-selected`, `data-focused`, `data-row-parity`, `data-editable`) are documented.

**Nice-to-have (non-blocking)**
- [OPTIONAL] `data-popup-open`/`data-panel-open` (base-ui internal states) undocumented — low priority.
- [OPTIONAL] Docs page is manual MDX (no `autodocs` tag) — no auto-generated ArgsTable.

---

## Summary Verdict

**Not ready (7 blocking items).** Down from 9 — category B was resolved on `origin/main` by #3690 (B1 dead filtering API, B2 deprecated `onRowSelection`), leaving only B3.

Blocking [REQUIRED] items: **B3** sandbox prop coverage, **C1** hardcoded strings without override paths, **D1** inline `--osdk` token defs (soft — reviewer may downgrade if the nested-primitive scoping pattern is sanctioned), **E1** BaseTable undocumented, **E2** undocumented OSDK props, **E3** stale token defaults, **E4** missing `streamUpdates` story.

**Biggest blocker:** C1 — the pervasive hardcoded user-facing strings (column-config dialog, multi-sort dialog, edit footer, header menu, selection aria-labels, error/function-cell states) have **no override prop at all**. A single `labels`/`messages` object threaded through `BaseTableProps` (+ an error-state render slot) is the largest and most cross-cutting change on the path to GA.

Resolved since 2026-07-14: **B1/B2** (#3690), and the A "export headless hooks" nice-to-have (#3669).

Passing outright: dark mode (C), export rules (A), token-file consistency / no-unused / no-calc-noops (D optional), type resolution without casts (B).
