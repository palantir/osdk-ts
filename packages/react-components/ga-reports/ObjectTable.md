<!-- cspell:words zpoh officenetwork peopleapp OOTB autodocs -->

# GA-Readiness Audit — ObjectTable

Component: `@osdk/react-components/experimental/object-table`
Audited: 2026-08-10 (read-only re-audit, against `zpoh/ga` @ `ee3b3ed8ee`). Source of truth: `packages/react-components/CONTRIBUTING.md`, `packages/react-components/CLAUDE.md`.

> Re-run of the 2026-07-15 audit. **C1 is resolved** by #3697 (`labels` override bag covering every flagged string). **D1 is resolved** by clarification — CONTRIBUTING.md:186-195 now explicitly sanctions nested-primitive scoping. **E1 is resolved** by #3755 (generated `BaseTableProps` table in `docs/ObjectTableOverview.md`). **E2 is all but resolved** by the AUTOGEN props tables (#3463) — only `FunctionColumnLocator.dependsOn` remains. Remaining blocking set: **4 items** (was 7). B3 (sandbox coverage), E3 (stale token defaults), and E4 (`streamUpdates` story) are unchanged.

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
- **String overrides** — `labels?: Partial<ObjectTableLabels>` (#3697): every user-facing string in the table and its dialogs/menus/cells, supplied via context and merged over built-in English defaults.
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

### C. Features — ✅ no blocking tasks

- ✅ **C1 — String overrides landed** (#3697). `ObjectTableProps.labels?: Partial<ObjectTableLabels>` (`ObjectTableApi.ts:627`) is threaded to every sub-component via `ObjectTableLabelsProvider` context (`src/object-table/ObjectTableLabels.tsx`), with `DEFAULT_OBJECT_TABLE_LABELS` supplying the previous literals. Verified coverage of the whole 2026-07-15 list: error state (`errorLoadingData`) and empty state (`noData`) — so the previously un-overridable error path at `Table.tsx:302` now has a path; edit footer (6 keys); editable-cell validation fallback (`cellValidationError`); column config dialog (11 keys); multi-column sort dialog (7 keys); header context menu (9 keys); async function-cell states (`cellError`, `cellNoValue`); selection aria-labels (3 keys). `BaseTable` accepts the same `labels` prop, and nested providers merge, so a dialog can override a subset. `ObjectTableLabels` is exported (`src/public/experimental/object-table.ts:41`) and the prop is documented (`docs/ObjectTable.md:119`, `docs/ObjectTableOverview.md:69,122`).
- **Dark mode: ✅ PASS.** Grepped every `src/object-table/**/*.module.css` and `*.tsx` for `#`/`rgb`/`rgba`/`hsl` — zero hardcoded color literals. All colors resolve through `var(--osdk-*)` tokens (several via `color-mix` on `--osdk-intent-*`/`--osdk-background-*`). Works OOTB.

**Nice-to-have (non-blocking)**
- [OPTIONAL] TODOs (all minor): `SelectionCells.tsx:56` (ActionBoundary), `:66` (shift+space toggles twice), `hooks/useColumnVisibility.ts:81` (controlled-mode prop sync), `hooks/useSelectionColumn.tsx:52` (useLatestRef), `TableHeader.tsx:75` (right-align numeric headers). No FIXME/HACK.
- [OPTIONAL] Code quality: stray no-op statement `("");` after the `React.memo` export in `EditableCell.tsx:362`; `"Validation error"` duplicated as `EditableCell.tsx:48` constant + `TableEditContainer.tsx:92` inline literal (will drift once overrides land); `NonIdealState` (single `message` prop) is reused for both empty and error states — centralizing an override there resolves C1's error case + the empty/error asymmetry together.

### D. Styling — ✅ no blocking tasks

- ✅ **D1 — Resolved by clarification.** The reviewer question is settled in the package's own rules: `CONTRIBUTING.md:186-195` ("Exception — nested-primitive scoping") and `CLAUDE.md` both now state that a `.module.css` MAY assign to a token owned by another primitive, scoped to a local class, and that this is a cascade override rather than a token declaration — so it does **not** belong in `src/tokens/`. The three sites (`EditableCell.module.css` select/combobox/datetime scoping; `LoadingCell.module.css:24-25`; `ColumnConfigDialog.module.css:25-27`) all match the sanctioned shape and are fed from `--osdk-table-*` tokens. Code unchanged; no longer a blocker.
- ✅ Phantom token closed: `--osdk-table-cell-bg` is now deliberate and documented — `table.css:37` carries the comment explaining why a token defaulting to `inherit` cannot be declared, and it is documented at `docs/ObjectTable.md:1599` and `docs/CSSVariables.md:1374` (#3764).

**Nice-to-have (non-blocking)**
- [OPTIONAL] One consistent token file: ✅ single coherent `table.css`, logically grouped. No declared-but-unused tokens. No `calc(--token * 1)` no-ops (only a legit `* 1.5` at `ColumnConfigDialog.module.css:82`).

### E. Documentation

**[REQUIRED]**
- [ ] **E2 — One undocumented sub-prop left: `FunctionColumnLocator.dependsOn`** (`ObjectTableApi.ts:240`) is still missing from the function-column table at `docs/ObjectTable.md:297-304`. Everything else in the 2026-07-15 E2 list is now covered by the AUTOGEN props tables (#3463): `objectSet`, `objectSetOptions`, table-level `dedupeIntervalMs`, `pageSize`, `focusedRow`, `onFocusedRowChanged`, `onColumnHeaderClick` all appear in `docs/ObjectTable.md:77-121` and `docs/ObjectTableOverview.md:27-71`. Note the function-column table is hand-written, not AUTOGEN — regenerating won't pick `dependsOn` up.
- [ ] **E3 — Stale documented token defaults** — unchanged. `docs/ObjectTable.md` Theming section still contradicts `table.css` (and the now-correct `docs/CSSVariables.md:1357-1358,1399-1405`). Fix these 6: `--osdk-table-header-menu-bg` (doc `custom-color-light-gray-2` → actual `transparent`, `table.css:46`), `-header-menu-border` (`:47`), `-header-menu-bg-hover` (`:54`), `-header-menu-bg-active` (`:57`), `--osdk-table-row-bg-hover` & `-row-bg-active` (doc `intent-primary-hover` → actual `intent-primary-rest`, `table.css:23,28`). Doc lines: `1551,1552,1556,1557,1577,1578`.
- [ ] **E4 — Storybook: no `streamUpdates` story** — unchanged. Grep of `react-components-storybook/src/` for `streamUpdates` still returns nothing. Add one (MSW/mocked).

- ✅ **E1 — BaseTable now documented** (#3755). `docs/ObjectTableOverview.md:100-124` carries an AUTOGEN `BaseTableProps` table generated from `src/object-table/Table.tsx`, and the twelve members that previously had no JSDoc were documented in that PR. The `labels` prop added by #3697 is included (`:122`).

Coverage otherwise strong: Overview MDX embeds `ObjectTable.md` (`ObjectTable.mdx:18,22`); a `Default` minimal story (`ObjectTable.stories.tsx:433`); a story per major feature (data source, all four column locator types, sorting controlled/uncontrolled, selection single/multiple/controlled, pinning/resizing/column-config, editing incl. validation & per-row field config, render slots, context menu, empty state, row-click/focus/attributes/height, getSnapshot export); an 8-story `BaseTable` suite; Code panels wired via `parameters.docs.source.code`. All `ColumnDefinition` sub-props, all `--osdk-table-*` tokens (defaults stale only for the 6 above), and all emitted `data-*` attributes (`data-resizing`, `data-pinned`, `data-selected`, `data-focused`, `data-row-parity`, `data-editable`) are documented.

**Nice-to-have (non-blocking)**
- [OPTIONAL] `data-popup-open`/`data-panel-open` (base-ui internal states) undocumented — low priority.
- [OPTIONAL] Docs page is manual MDX (no `autodocs` tag) — no auto-generated ArgsTable.

---

## Summary Verdict

**Close (4 blocking items).** Down from 7. Categories A, C and D are now entirely clear.

Blocking [REQUIRED] items: **B3** sandbox prop coverage, **E2** `FunctionColumnLocator.dependsOn` undocumented, **E3** stale token defaults in `docs/ObjectTable.md`, **E4** missing `streamUpdates` story.

**Biggest blocker:** B3 — sandbox coverage, now by a wide margin the only substantial item left. Re-counted on `zpoh/ga`: `objectSetOptions`, `dedupeIntervalMs`, `streamUpdates`, `onOrderByChanged`, `enableOrdering`, `selectedRows`, `onRowSelectionChanged`, every column-management flag and callback (`enableColumnPinning`/`onColumnsPinnedChanged`/`enableColumnResizing`/`onColumnResize`/`enableColumnConfig`/`onColumnVisibilityChanged`), `editMode`, `onCellValueChanged`, `showEditFooter`, `renderCellContextMenu`, `renderEmptyState`, `onRowClick`, `focusedRow`/`onFocusedRowChanged`, `onColumnHeaderClick`, `getRowAttributes`, `rowHeight`, and the new `labels` prop all have **zero** occurrences across `e2e.sandbox.peopleapp` and `e2e.sandbox.officenetwork`. E2/E3/E4 are each a small, well-scoped edit.

Resolved since 2026-07-15: **C1** (#3697 `labels`), **D1** (sanctioned by `CONTRIBUTING.md:186-195`), **E1** (#3755 BaseTableProps table), most of **E2** (#3463 AUTOGEN props), and the `--osdk-table-cell-bg` phantom-token nice-to-have (#3764).
Resolved earlier: **B1/B2** (#3690), A "export headless hooks" (#3669).

Passing outright: exports (A), string overrides + dark mode (C), styling (D), type resolution without casts (B).
