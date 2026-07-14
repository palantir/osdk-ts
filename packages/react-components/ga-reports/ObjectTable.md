# GA-Readiness Audit — ObjectTable

Component: `@osdk/react-components/experimental/object-table`
Audited: 2026-07-14 (read-only). Source of truth: `packages/react-components/CONTRIBUTING.md`, `packages/react-components/CLAUDE.md`.

---

## Artifact 1 — Feature Inventory

Derived from `src/object-table/ObjectTableApi.ts`. What ObjectTable does today:

- **Data source** — fetches by `objectType` (one required prop) or a supplied `objectSet`; `objectSetOptions` (union/intersect/subtract); works for object AND interface types.
- **Fetch tuning** — `pageSize` (infinite scroll), `dedupeIntervalMs`, `streamUpdates` (websocket live updates; incompatible with pivot/withProperties).
- **Columns** — `columnDefinitions` with four locator types: `property`, `rdp` (derived property), `function` (function-backed columns w/ `getFunctionParams`/`getKey`/`getValue`/`dedupeIntervalMs`/`dependsOn`), and `custom`. Per-column: `isVisible`, `pinned`, `width`/`min`/`max`, `resizable`, `orderable`, `filterable`, `columnName`.
- **Sorting** — controlled (`orderBy` + `onOrderByChanged`) and uncontrolled (`defaultOrderBy`); multi-column sort; `enableOrdering` toggle.
- **Filtering** — controlled `filter` (WhereClause) applied programmatically. `enableFiltering`/`onFilterChanged` declared but **not wired** (no filter UI — see B).
- **Selection** — `selectionMode` none/single/multiple; controlled (`selectedRows` + `isAllSelected`) with `onRowSelectionChanged` (rich `RowSelectionChange` payload) and legacy `onRowSelection` (deprecated).
- **Column management** — pinning (`enableColumnPinning` + `onColumnsPinnedChanged`), resizing (`enableColumnResizing` + `onColumnResize`), visibility/ordering config dialog (`enableColumnConfig` + `onColumnVisibilityChanged`).
- **Cell editing** — `editMode` always/manual; per-column `editable` (bool or predicate); `editFieldConfig` (dropdown/date-picker); `validateEdit`; `onCellValueChanged`; `onSubmitEdits`; `showEditFooter`.
- **Render slots** — `renderCell`, `renderHeader`, `renderCellContextMenu`, `renderEmptyState`.
- **Row interaction** — `onRowClick`; focused-row (controlled `focusedRow` + `onFocusedRowChanged`); `onColumnHeaderClick`; `getRowAttributes` (custom `data-*`); `rowHeight`.
- **Imperative** — `tableRef` → `ObjectTableHandle.getSnapshot()` (export all rows, `rowLimit`).
- **Base layer** — `BaseTable` (`BaseTableProps`, OSDK-agnostic, TanStack-table-driven) is exported, plus building blocks `ColumnConfigDialog`, `MultiColumnSortDialog`, `LoadingCell`/`LoadingCellContent`.

---

## Artifact 2 — Outstanding Tasks to GA

### A. Exports — ✅ no blocking tasks

- OSDK component `ObjectTable` and base `BaseTable` both exported (`src/public/experimental/object-table.ts:19,49`). BaseTable is the OSDK-agnostic layer — role satisfied.
- No `src/base-components/` UI primitives exported through this barrel; no Blueprint-provided primitive re-exported. Compliant with Export Rules.

**Nice-to-have (non-blocking)**
- [OPTIONAL] No hooks exported. `useObjectTableSnapshot`, `useRowSelection`, `useTableSorting`, `useColumnVisibility`, etc. (`src/object-table/hooks/`) are internal only — exporting a headless subset would let users build custom layouts (CLAUDE.md "Treat Base as headless-hook + markup"). Currently only `BaseTable` + dialogs are exposed.
- [OPTIONAL] Composition-shape question: `ColumnConfigDialog` + `MultiColumnSortDialog` + `LoadingCell`/`LoadingCellContent` are exported as loose building blocks. Tension: no headless state hook accompanies them, so consumers can render the dialogs but must re-wire state by hand. Candidate resolutions: (a) also export the paired state hooks; (b) keep dialogs internal and expose only `BaseTable`. Do not resolve here.

### B. API

**[REQUIRED]**
- [ ] **Deprecated prop still present** — `onRowSelection` marked `@deprecated` (`ObjectTableApi.ts:585`; mirror in `hooks/useRowSelection.ts:51`). Remove for GA (superseded by `onRowSelectionChanged`). It is still invoked (`useRowSelection.ts:142`) purely for back-compat.
- [ ] **Dead filtering API** — `enableFiltering` (`ObjectTableApi.ts:351`) is never destructured or read anywhere in `src/`; `onFilterChanged` (`ObjectTableApi.ts:365`) is never invoked (falls into `...props`, unread). No filter UI exists — `HeaderMenuFeatureFlags` has no `showFilterItems` (`TableHeaderWithPopover.tsx:69-79`). Also inert: per-column `filterable` feeds TanStack `enableColumnFilter` (`hooks/useColumnDefs.ts:151`) but nothing consumes it. Either implement filtering UI or strip `enableFiltering` + `onFilterChanged` (+ reconsider `filterable`). Docs already admit "table filtering UI is not yet supported" (`docs/ObjectTable.md`).
- [ ] **Sandbox does not exercise most props** — only 10 of 39 `ObjectTableProps` are used across `e2e.sandbox.peopleapp` (officenetwork has zero usages). Never exercised incl. all controlled modes except `filter`: `orderBy`/`onOrderByChanged`, `selectedRows`/`isAllSelected`/`onRowSelectionChanged`, `focusedRow`/`onFocusedRowChanged`, and every event listener (`onRowClick`, `onColumnHeaderClick`, `onColumnResize`, `onColumn*Changed`), plus `renderCellContextMenu`, `renderEmptyState`, `getRowAttributes`, `rowHeight`, `editMode`, `showEditFooter`, `streamUpdates`, `onCellValueChanged`, `objectSetOptions`, `dedupeIntervalMs`. CONTRIBUTING treats the peopleapp example as MVP definition-of-done; add coverage that proves controlled modes + listeners resolve end-to-end.

Types otherwise resolve cleanly: no `any`/`as any`/`@ts-expect-error`/`@ts-ignore` around any ObjectTable usage. The only `as` (`EmployeesTable.tsx:62`, narrowing an `unknown` function-cell payload) is inherent to the `getValue?: (cellData?: unknown) => unknown` contract, not a type-inference workaround. Generics `<Q, RDPs, FunctionColumns>` infer without casts.

**Nice-to-have (non-blocking)**
- [OPTIONAL] Dual selection callbacks (`onRowSelection` + `onRowSelectionChanged`) both fire — clunky until the deprecated one is removed.
- [OPTIONAL] `defaultOrderBy`/`orderBy`/`onOrderByChanged` all repeat the same inline `Array<{property; direction}>` literal (`ObjectTableApi.ts:420,430,442`) — extract a named `OrderByClause<Q, RDPs>` type.

### C. Features

**[REQUIRED]**
- [ ] **Hardcoded user-facing strings with no override path** (biggest gap — spans every sub-component). None of these have an override prop; the components expose no label/render props:
  - Error state — `Table.tsx:302` `` `Error Loading Data: ${error.message}` `` (only the empty state has an override via `renderEmptyState`; there is no `renderError`).
  - Function-cell states — `components/AsyncValueCell.tsx:30` `"Error"`, `:38` `"No value"`.
  - `ColumnConfigDialog.tsx` — `"Cancel"` (:176), `"Apply"` (:183), `"Configure Table Columns"` (:219), `"Visible Columns"` (:252), `"Drag to reorder"` (:255), `"No visible columns"` (:262), `"Add or Remove Columns"` (:302), `"Search..."` (:307), `aria-label="Search available columns"` (:308), `"All Columns"` (:320), `"No matching columns found"` (:331).
  - `MultiColumnSortDialog.tsx` — sort-direction aria-label (:151), `"Cancel"` (:167), `"Apply"` (:171), `"Add Column to Sort"` (:196), `"Search columns"` (:202), `"No matching columns"` (:203), `"Sort on Multiple Columns"` (:213).
  - `TableEditContainer.tsx` — `` `${count} modifications` `` (:84), `"Validation error"` (:92), `"Select a row to edit data…"` (:98), `"Edit Table"` (:105), `"Cancel"` (:110), `"Submit Edits"` (:119).
  - `TableHeaderWithPopover.tsx` — header-menu aria-label (:244), `"Pin column"` (:261), `"Unpin Column"` (:269), `"Sort ascending"` (:278), `"Sort descending"` (:285), `"Sort on multiple columns"` (:291), `"Clear all sorts"` (:300), `"Reset Column Size"` (:307), `"Configure Columns"` (:315).
  - `SelectionCells.tsx` — `"Deselect all rows"`/`"Select all rows"` (:33), `` `Select row ${n}` `` (:81).
  - `EditableCell.tsx:48` — `VALIDATION_ERROR_MESSAGE = "Validation error"` fallback.
  - Fix: add override props (a labels/`strings` object and/or `render*` slots). Hardcoded defaults are fine, but GA requires an override *path* for each.

- Dark mode: ✅ **PASS.** No hex/rgb/rgba/hsl literals anywhere in `src/object-table/` `*.module.css` or `*.tsx`; all colors resolve through `var(--osdk-*)` tokens. Only `transparent` (theme-neutral keyword) appears.

**Nice-to-have (non-blocking)**
- [OPTIONAL] 5 `TODO`s, all minor: `TableHeader.tsx:75` (right-align numeric headers), `SelectionCells.tsx:56` (ActionBoundary), `:66` (shift+space), `useSelectionColumn.tsx:52` (useLatestRef), `useColumnVisibility.ts:81` (controlled-mode prop sync). No `FIXME`/`HACK`; no obviously-broken states found.

### D. Styling

**[REQUIRED]**
- [ ] **Inline `--osdk-*` token definitions outside `table.css`** (Styling Guideline: token defaults live in `src/tokens/`). All are nested-primitive scoping overrides, not new table tokens — reviewer should confirm whether the strict rule applies, but per the letter of the criterion:
  - `EditableCell.module.css` — 14 defs re-scoping select/combobox/datetime tokens (`:49-51`, `:55-56`, `:58`, `:61`, `:101-106`, `:108`).
  - `LoadingCell.module.css:24-25` — remaps `--osdk-background-skeleton-from/to` from the table skeleton tokens.
  - `ColumnConfigDialog.module.css:25-27` — remaps `--osdk-dialog-*` from table config tokens (`--osdk-dialog-body-padding: 0`).
  - No inline `--bp-*` mappings; none define `--osdk-table-*` inline. If the pattern is sanctioned (scoping a child primitive), downgrade to non-blocking.

**Nice-to-have (non-blocking)**
- [OPTIONAL] Phantom token: `--osdk-table-cell-bg` is used with an `inherit` fallback (`TableCell.module.css:26,42`) but never declared in `table.css`. Either declare it or drop it.
- [OPTIONAL] One consistent token file: ✅ single `table.css`. No declared-but-unused tokens (all 41 used). No `calc(--token * 1)` no-ops (only a legit `* 1.5` at `ColumnConfigDialog.module.css:82`).

### E. Documentation

**[REQUIRED]**
- [ ] **BaseTable is entirely undocumented in `docs/ObjectTable.md`** — zero mentions of `BaseTable`/`BaseTableProps`. All 16 base props (`Table.tsx:78-115`, incl. `headerMenuFeatureFlags`, `editableConfig`, `fetchNextPage`, `focusedRowId`, `renderEmptyState`) are absent. Docs must cover the base component's props.
- [ ] **Undocumented OSDK props** — add to Props Reference: `objectSet` (`Api:305`, only shown as a payload field), `objectSetOptions` (`:307`), table-level `dedupeIntervalMs` (`:316`), `pageSize` (`:337`; docs' Infinite-Scrolling section wrongly implies it's non-configurable), `focusedRow` (`:533`), `onFocusedRowChanged` (`:543`), `onColumnHeaderClick` (`:556`), and `FunctionColumnLocator.dependsOn` (`:229`).
- [ ] **Stale documented token defaults** (Theming section wrong vs `table.css`): `--osdk-table-header-menu-bg` (doc `custom-color-light-gray-2` → actual `transparent`, `table.css:43`), `-header-menu-border` (`:44`), `-header-menu-bg-hover` (`:53`), `-header-menu-bg-active` (`:56`), `--osdk-table-row-bg-hover` & `-row-bg-active` (doc `intent-primary-hover` → actual `intent-primary-rest`, `table.css:24,29`). Correct the 6 defaults.
- [ ] **Storybook: no `streamUpdates` story** — the only documented major feature with zero story coverage (grep of the stories dir returns nothing). Add one (MSW/mocked).

Coverage otherwise strong: all `--osdk-table-*` tokens documented (md + `docs/CSSVariables.md`); all `ColumnDefinition` sub-props, `getSnapshot`, and public `data-*` theming attributes documented. Storybook has a manual MDX Docs page embedding `ObjectTable.md`, a `Default` minimal story, a story per major feature (selection, sorting, pinning, resizing, column-config, editing, function/RDP/custom columns, context menu, empty state, row-click/focus, export), an 8-story `BaseTable` suite, and hand-written `docs.source` on all OSDK/BaseTable stories.

**Nice-to-have (non-blocking)**
- [OPTIONAL] `data-popup-open`/`data-panel-open` (base-ui internal states) undocumented — low priority.
- [OPTIONAL] Docs page is manual MDX (no `autodocs` tag) — no auto-generated ArgsTable; consider adding or noting.

---

## Summary Verdict

**Not ready (9 blocking items).**

Blocking [REQUIRED] items: B1 deprecated `onRowSelection`, B2 dead filtering API, B3 sandbox prop coverage, C1 hardcoded strings without override paths, D1 inline `--osdk` token defs, E1 BaseTable undocumented, E2 undocumented OSDK props, E3 stale token defaults, E4 missing `streamUpdates` story.

**Biggest blocker:** C1 — the pervasive hardcoded user-facing strings (column-config dialog, multi-sort dialog, edit footer, header menu, selection aria-labels, error/function-cell states) have no override prop at all. Making them overridable is the largest and most cross-cutting change on the path to GA.

Passing outright: dark mode (C), export rules (A), token-file consistency/no-unused/no-calc-noops (D optional), type resolution without casts (B).
