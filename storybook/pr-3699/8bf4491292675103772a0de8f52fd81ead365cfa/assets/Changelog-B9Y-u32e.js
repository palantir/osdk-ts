import{j as e}from"./iframe-dax33wrH.js";import{useMDXComponents as o}from"./index-By9SU4M_.js";import{b as i,c as r}from"./blocks-DZ43z-eb.js";import"./preload-helper--ptp1-jN.js";import"./index-CXweuEQF.js";import"./index-V0evU-dd.js";import"./index-h35Ko0_v.js";const s=`# @osdk/react-components

## 0.39.0

### Minor Changes

- 7e1aade: Extend oxfmt formatting to css, scss, and html in oxc-migrated packages. These file types were previously left unformatted (dprint had no css/html plugin); they are now covered by oxfmt and reformatted accordingly. yaml stays excluded because the only yaml in migrated packages is mustache-template documentation that oxfmt would corrupt.

## 0.38.0

### Minor Changes

- a08d0c4: Export ObjectTable's hooks so consumers can build a custom table. \`useObjectTableData\` now takes a single options object instead of positional arguments. Consumers building their own table with these hooks should install a \`@tanstack/react-table\` version matching the one this package depends on to avoid type incompatibilities.
- fea14b8: Generate the props reference tables for components directly from their props interfaces so the docs can no longer drift from the source. A component-agnostic \`gen-props\` script regenerates any doc whose AUTOGEN markers declare a \`src\` file and \`interface\`, and a \`check-gen-props\` task (added to CI) fails on drift via \`--check\`.
- 1b33456: Enable the require-await lint rule: drop the redundant \`async\` keyword from test callbacks that never await, and keep intentionally-async (Promise-returning) functions as-is
- cb30380: BasePdfViewer now accepts a Uint8Array or Blob as its \`src\`, in addition to the existing URL string and ArrayBuffer inputs.

## 0.37.0

### Minor Changes

- df15011: Detect actions and resolve memo component names in the component tree, and clarify the components and cache-hit-rate copy

## 0.36.0

### Minor Changes

- 12e5e63: Add \`--osdk-button-border-radius\` token so a theme can round buttons independently of inputs/cards.
- 566ecd3: Add the \`u\` (unicode) flag to regular expressions to satisfy the require-unicode-regexp lint rule

## 0.35.0

### Minor Changes

- cbcdce1: Re-enable the oxlint rules the \`**/*.{js,mjs,cjs}\` override had disabled and delete the override, so JS build scripts, bin shims, and config files are held to the same ruleset as TypeScript. Changes are behavior-preserving (lint/format fixes to build tooling only).
- e39a728: Migrate @osdk/react-components to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint, with package-specific rule carve-outs in a nested oxlint config
- 908ad19: Reduce checkbox icon size and center checkmark within the checkbox

## 0.34.0

### Minor Changes

- 0ed0b5c: Restyle AipAgentChat to match Threads 2.0 design with light gray user bubbles, plain-text assistant messages, rounded inlined composer, centered max-width layout, and no composer divider. Add reusable Callout base component with intent-tinted backgrounds and dark mode support. Add AipAgentChat storybook stories.
- d24cc61: Pin the \`@osdk/aip-core\` peerDependency range to \`>=0.5.0 <1.0.0\` instead of \`workspace:^\` so a minor bump of \`@osdk/aip-core\` (e.g. 0.5.0 -> 0.6.0) no longer falls out of the caret range and triggers a major-bump cascade across the release plan.
- afc63a7: Restore the AIP chat entry points (\`@osdk/react/experimental/aip\` and \`@osdk/react-components/experimental/aip-agent-chat\`) and publish \`@osdk/aip-core\` so the optional peer dependency resolves from the registry.

## 0.33.0

### Minor Changes

- bcf7007: Style number input stepper buttons with button appearance instead of input styling

## 0.32.0

### Minor Changes

- 137978c: ObjectTable now honors a caller-supplied \`objectSet\` for interface types (previously it was ignored for interfaces and the table fell back to fetching by type, leaving only a property \`where\` to filter). This lets an interface-backed table be driven by a composed/filtered object set, e.g. a pivot-derived set. For an interface object set, rows expose the interface's declared properties (plus any \`withProperties\`); concrete-only properties are not loaded.

## 0.31.0

### Minor Changes

- c24b0cf: Align OSDK component tokens with Blueprint styling: use box-shadow instead of border for inputs, buttons, and selects; add proper dark mode token overrides; group Storybook theme presets into built-in and custom categories

## 0.30.0

### Minor Changes

- 083b82e: Fix filter list focus outline clipping by switching overflow from hidden to clip
- a225595: Align ActionForm input-like controls with Blueprint-style shadows, focus rings, and button hover behavior.

  Migration: remove overrides for the legacy input focus width, color, and offset CSS variables, plus the removed file picker trigger, date picker, and time picker border/border-color/focus/error border color variables (e.g. \`--osdk-datetime-input-border-color\`, \`--osdk-datetime-input-border-color-focus\`, \`--osdk-datetime-input-error-border-color\`, \`--osdk-time-picker-input-border-color-focus\`). Use \`--osdk-input-focus-outline\`, \`--osdk-input-focus-shadow\`, and the matching date picker, file picker, or time picker focus shadow tokens instead.

## 0.29.0

### Minor Changes

- ee3bce8: Fix PDF viewer toolbar download saving an invalid filename.
- ee3bce8: Add \`downloadFileName\` prop to set the PDF download name.
- e553390: Fix inaccurate docs: drop stale \`@beta\` install pins (now older than \`latest\`) so all setup pages agree on untagged installs, soften the "every \`--osdk-*\` token maps to a \`--bp-*\` token" claim (some hold raw values), simplify the Layers section to user-facing setup, and remove \`@osdk/cbac-components\` install/style references now that CBAC components are merged into \`@osdk/react-components\`.

## 0.28.0

### Minor Changes

- c00ec4a: Add edit-component agent skill for contribution
- 4fcf89e: Add include/exclude and clear-all controls to FilterList linked-property and has-link filters. The overflow (…) menu now surfaces from the filter's component type, so the controls appear for empty and just-added filters without pre-filling any state, and the open overflow (…) button shows an active state. For has-link filters, "Excluding" filters to objects that do not have the link.
- 37344db: Render CBAC and MANDATORY marking property columns in \`ObjectTable\`. Columns backed by marking properties whose \`typeMetadata.markingType\` is \`"CBAC"\` now render via the \`CbacBanner\`, and \`"MANDATORY"\` marking columns render one pill per marking on the row. Columns whose marking subtype isn't surfaced by the platform fall back to the previous default rendering.

## 0.27.0

### Minor Changes

- 820bc7b: Fix listogram bar border-radius distortion and use theme-aware background token
- 3c39c10: Merge \`@osdk/cbac-components\` into \`@osdk/react-components\`. The CBAC picker (\`CbacPicker\`, \`CbacPickerDialog\`, \`CbacBanner\`, \`BaseCbacPicker\`, \`BaseCbacBanner\`, \`BaseCbacPickerDialog\`, \`MaxClassificationField\`, and selection-logic utilities) is now exported from \`@osdk/react-components/experimental/cbac-picker\`. The legacy \`@osdk/cbac-components\` package remains in the repository for reference but is no longer the source of truth.
- f30c848: - new \`focusedRow\` / \`onFocusedRowChanged\` props expose controlled focus state (typed \`PrimaryKeyType<Q> | null\`).
- 2d40fb6: Update getSnapshot() implementation to fetch data separately from table rendering, capping concurrent function-column requests during snapshot collection

## 0.26.0

### Minor Changes

- 67d5449: Replace \`xlsx\` dependency with \`xlsx-republish\`, a community republish of the latest SheetJS CDN release (\`0.20.3\`) back to npm. The maintainer-published \`xlsx\` on npm is pinned at \`0.18.5\` (which has a known prototype-pollution CVE) and SheetJS now distributes fixed releases only via their own CDN, so npm consumers cannot get a patched version through the registry.

## 0.25.0

### Minor Changes

- 8e8ace3: fix filter-list date histogram x-axis to keep default short-month tick labels when \`formatDate\` is provided; \`formatDate\` now only drives the subtitle, tooltip, and From/To picker text
- 5a80373: FilterList now separates "No value" (null/undefined) from a literal empty string. null and undefined are grouped under a single "No value" option, while an empty string is its own option rendered as "(empty string)". Selecting "No value" is now represented by the exported \`NO_VALUE\` sentinel in \`selectedValues\` (mapping to \`$isNull\`), whereas a literal empty string maps to an equality filter.
- 4db9a03: Add an ObjectTable tableRef snapshot API for reading visible row data and explicitly fetching up to a row limit.
- c660ee6: ObjectTable: clear a function/derived-property cell when its value disappears from a resolved query result instead of retaining the stale previous value.
- 9081e32: use $title/$primaryKey special filters in object components and harden the observable matcher

  ObjectSelectField now searches via the generic $title filter instead of resolving the title property from object metadata, and ObjectTable derives its row-selection object set via $primaryKey so interface-typed tables also produce a derived set on partial selection. The observable where-clause matcher no longer throws when $startsWith is evaluated against a null $title.

## 0.24.0

### Minor Changes

- 2bc0b1a: disable filter-list reset until state diverges from initial; gate the reset button via a single \`canReset\` prop on \`BaseFilterList\` and deprecate \`hasVisibilityChanges\`
- ab08d53: fix broken guide links in README by using absolute URLs so they resolve on npm
- f13c85a: Update ObjectTable header select-all checkbox aria label to reflect actual action (deselect when rows are selected)

## 0.23.0

### Minor Changes

- 4a2110e: Make the filter-list exclude row Clear all button reliably right-align against consumer CSS resets.
- 8c8038e: Fix "Failed to load null count" error on date and number range filters when no cross-filter is active. The null-count aggregation no longer wraps an empty where clause inside \`$and\`, which the aggregation API rejects.
- 5b87e4a: ObjectTable: clicking the header select-all checkbox now deselects all rows whenever any rows are selected (including the indeterminate state). Previously a partial selection promoted to "select all" on click, requiring a second click to clear.
- ceeabb5: Fix static FilterList values rendering as filtered out and keep filtered-out values accessible.
- c3752ce: Temporarily remove the AIP chat entry points and AIP dependencies.

## 0.22.0

### Minor Changes

- d209762: Reset datetime picker time to the current wall-clock time when clicking Today.
- bd90dba: Add end-to-end support for \`scenarioReference\` action parameters:
  - \`@osdk/api\` adds \`"scenarioReference"\` to \`ActionMetadata.DataType.BaseActionParameterTypes\` and a matching \`scenarioReference: ScenarioClient\` entry in \`DataValueClientToWire\` (structurally typed as \`{ getScenarioReference(): { scenarioRid } }\` to avoid a circular dep on \`@osdk/client\`).
  - \`@osdk/generator-converters\` maps the wire \`scenarioReference\` variant into the primitive type.
  - Generated SDKs now emit \`ActionParam.PrimitiveType<"scenarioReference">\` (resolves to \`ScenarioClient\`) for scenarioReference parameters, instead of throwing at SDK build time.
  - \`@osdk/client\`'s \`toDataValue\` accepts a \`ScenarioClient\` and serializes it to the rid string the platform expects.
  - \`@osdk/react-components\`'s ActionForm renders scenarioReference parameters as \`UNSUPPORTED\` for now.

  Enables \`client(ScenarioMerge).applyAction({ scenario })\` end-to-end in generated SDKs.

## 0.21.0

### Minor Changes

- 44c5f57: Add documentation MDX pages to Storybook sidebar (Welcome, Guides, Styling, Tokens, Hooks)
- 837ea03: ObjectTable: expose \`streamUpdates\` prop that opts the table into websocket-driven live updates when matching objects are added, updated, or removed in Foundry. Forwarded to both \`useObjectSet\` and \`useOsdkObjects\`.
- 0907d00: Fix \`NotFoundError: removeChild\` crashes when zooming or switching documents in \`PdfViewer\`. Annotation overlays are now rendered as siblings of pdfjs content (using measured page coordinates) instead of portaled into pdfjs-owned DOM. \`AnnotationPortalTarget\` now exposes \`left\`/\`top\`/\`width\`/\`height\`/\`transform\` in place of \`container\`. Annotation remeasures triggered by zoom, rotation, and container resize are now coalesced to one \`requestAnimationFrame\` tick, eliminating O(annotated pages) \`getBoundingClientRect\` reads on every pinch-zoom event.
- 4c53e48: Hide the DatePicker popover when its anchor scrolls out of view. Fixes an issue where the date picker in \`ObjectTable\` cells continued to render outside the table bounds after the cell scrolled out of the visible area.

## 0.20.0

### Minor Changes

- 2c491f4: filter-list: forward formatDate to single-date, multi-date, and timeline inputs so date formatting is consistent across all date-typed filters
- dfc4226: \`FilterList\` now supports combining linked-property and direct-property filters via a single objectSet. Pass the unfiltered scope as \`objectSet\` and the new \`onEffectiveObjectSet\` observer receives the fully-narrowed \`ObjectSet\` (direct + linked filters applied) on every filter change. Adds optional \`LinkedPropertyFilterDefinition.reverseLinkName\` (opt-in: set it to make the filter narrow \`objectSet\` via a pivot round-trip; omit it for UI-only behavior) and \`showFilteredOutValues\`, which renders count=0 greyed-out rows for values present in the unfiltered scope but absent under an active filter. Filtered-out rows apply symmetrically to both direct-property facets (Listogram, MultiSelect, SingleSelect) and linked-property facets configured with \`MULTI_SELECT\` / \`SINGLE_SELECT\` / \`LISTOGRAM\` sub-components.

  Existing \`filterClause\` / \`onFilterClauseChanged\` props still work and continue to emit a \`WhereClause<Q>\` covering direct filters (LINKED_PROPERTY narrowing cannot be expressed as a \`WhereClause<Q>\` and surfaces only through \`onEffectiveObjectSet\`). Linked filters are composed via the new exported \`narrowObjectSet(objectSet, whereClause, linkedFilters)\` helper for consumers building their own headless pipelines.

  Linked-property facets compare against the raw unfiltered \`objectSet\` when computing filtered-out rows, so a value whose source rows were filtered out by either direct or linked sibling filters still renders as a count=0 row.

- 7c1c639: FilterList: extend per-item actions to every filter type and fix linkedProperty exclude toggle.

  • every filter type that supports excluding renders the \`...\` toggle for the inline Keep / Exclude row, including linked-property filters (toggle now flips \`isExcluding\` on the inner wrapped state)
  • new \`searchField\` flag on \`FilterDefinition\` hides the header monocle for filters that already have their own inline search (e.g. \`MULTI_SELECT\`)
  • extracted reusable helpers \`toggleIsExcluding\`, \`clearFilterState\`, \`filterHasActiveState\`, \`getEffectiveFilterState\`, and \`getSelectedCount\` from inline component logic into \`filterValues.ts\`

- 7f8e93b: thread \`renderValue\` through \`LinkedPropertyFilter\` inputs

## 0.19.0

### Minor Changes

- cffbe7c: Add ActionForm guide links and document unsupported ActionForm features.
- a218b1a: right-align Clear all in FilterList exclude row
- b5d7e7b: fix filter-list "no value" baseline and range hyphen vertical alignment
- bb0817b: Fix misleading patterns in @osdk/react and @osdk/react-components docs that were confusing downstream coding agents and humans alike.

  • react-sdk-docs \`reactProviderSetup\` and \`clientSetup\` snippets now pass a real ontology RID placeholder to \`createClient\` instead of \`{{{packageName}}}\` (which resolves to the npm SDK package name, not the ontology RID)
  • Stop pretending \`$\` is exported from the user's SDK — \`$\` is a local alias users sometimes create; docs now use \`client(Type)\` directly, matching the pattern already used in getting-started.md / cache-management.md
  • Standardize the SDK placeholder on \`@my/osdk\` across all docs (was a mix of \`@my/osdk\`, \`@YourApp/sdk\`, \`@your-app/sdk\`) and add a \`:::note About @my/osdk\` callout to each react-components doc that imports from it
  • Fix several broken/missing imports in code snippets: \`cache-management.md\` setup block was using \`createClient\` / \`createObservableClient\` / \`authProvider\` without importing or defining any of them; \`advanced-queries.md\` derived-property fragments were missing \`Employee\` and \`useOsdkObjects\` imports
  • Fix \`querying-data.md\` self-referential typo "_Stable - available from both \`@osdk/react\` and \`@osdk/react\`_" → second should be \`@osdk/react/experimental\`
  • Fix \`advanced-queries.md\` duplicate \`const { data }\` declaration that would not compile
  • Remove unused \`useOsdkObject\` import from one \`advanced-queries.md\` snippet
  • Install commands now show npm / pnpm / yarn alternatives with a tip block recommending users skip the step if their tooling already installs dependencies — fixes Pilot running \`pnpm\` in npm-managed projects and the install-race-with-harness issue

- b3229eb: Fix ObjectTable overlay menus and dialogs inside drawers and dialogs.
- 1760597: Change experimental labels to beta
- 64652ed: Fix \`ObjectTable\` pinned columns rendering with a transparent background, causing scrolled cells from non-pinned columns to bleed through and overlap pinned text. Regression introduced in v0.18.0 by the \`--osdk-table-cell-bg\` token — declaring \`--osdk-table-cell-bg: inherit\` at \`:root\` silently resolved to the guaranteed-invalid value (no parent to inherit from), so \`var(--osdk-table-cell-bg)\` fell back to \`transparent\`. The default is now expressed as a \`var()\` fallback (\`var(--osdk-table-cell-bg, inherit)\`) so unset cells inherit the row background while consumer overrides still apply.
- 4c0bdaf: Add \`<OsdkThemeProvider>\` and \`useOsdkTheme\` (from \`@osdk/react-components/experimental/theme\`) for opt-in theming.
- dad4c44: Support disabled fields in ActionForm field definitions.

## 0.18.0

### Minor Changes

- b0de21b: ActionForm fields now show an \`Edited\` tag after users edit them.
- 1f63510: Add built-in dark mode token overrides. Components now react automatically to \`prefers-color-scheme: dark\` and to the \`[data-bp-color-scheme="dark"]\` / \`.bp6-dark\` attribute selectors, matching the Foundry custom widgets dark theme guidance.
- aad8d52: filter-list: match "No value" row gap to regular row gap so it doesn't look visually tighter than its neighbors
- f6f92fb: Fix broken CSS custom property references that used non-existent token names
- 19d5612: Fix two ObjectTable editable-cell visual issues:
  - Dropdown cell no longer shows a phantom "edited" outline after clearing a
    never-set cell. \`EditableCell\` and \`useEditableTable\` now treat \`null\` and
    \`undefined\` as the same empty state when deciding whether an edit is a
    revert, so clearing a cell whose value was \`undefined\` removes the edit
    entry instead of leaving a stale "edited" indicator. \`""\` remains a
    distinct value — clearing an empty string still registers as an edit.
  - Date picker cell now shows the same focus outline as the text input cell,
    and no longer renders the date picker's own box-shadow on top of the cell
    border. The cell wrapper also reserves a transparent border so focusing
    the picker doesn't shift layout.

- 5c20aba: Add \`--osdk-table-cell-bg\` CSS variable on \`ObjectTable\` / \`BaseTable\`
  cells, and tag each \`<td>\` with \`data-editable="true"\` when the cell renders
  as editable. The variable defaults to \`inherit\`, preserving current visuals.

  Renamed \`--osdk-table-cell-editable-bg\` to \`--osdk-table-cell-input-bg\`.

  Combine the two to highlight editable cells before any row is clicked into,
  without altering component logic:

  \`\`\`css
  .my-table td[data-editable] {
    --osdk-table-cell-bg: var(--my-editable-tint);
  }
  \`\`\`

- ca8ef7c: ObjectTable: drop the redundant \`selectedRowIds\` field from the \`RowSelectionChange\` payload delivered to \`onRowSelectionChanged\`. The primary keys are still available via \`selectedRows.map(r => r.$primaryKey)\`. \`selectedRowIds\` was redundant with \`selectedRows\` and was kept only as a transitional alias.
- 5ca0da3: Replace hardcoded table header menu colors with surface tokens and align table row hover/active to \`--osdk-intent-primary-rest\` for better dark theme compatibility.

## 0.17.0

### Minor Changes

- 773194c: \`ObjectTable\` now accepts an optional \`renderEmptyState\` prop for overriding the default "No Data" indicator with a custom \`ReactNode\`.
- 546c673: Fix page scroll being blocked when opening a date picker in an editable ObjectTable
- 962ede9: prevent height jumps in SingleSelectInput, MultiSelectInput, and TextTagsInput during loading
- 3548f5e: ObjectTable:
  - Fix "select all" + scroll: newly-loaded rows are now checked and the header checkbox stays in sync. \`onRowSelection\` refires in uncontrolled mode with the expanded id list as new pages load.
  - Add \`onRowSelectionChanged(change)\` callback that delivers a \`RowSelectionChange\` payload with \`selectedRowIds\`, \`selectedRows\`, \`isSelectAll\`, and a derived \`objectSet\` (full underlying set on "select all", otherwise narrowed by \`$primaryKey\`).
  - Deprecate \`onRowSelection\` in favor of \`onRowSelectionChanged\`. The legacy callback continues to fire for backwards compatibility.

- 6400c8b: Remove DocxViewer. \`.docx\` files now fall through to the DocumentViewer unsupported-file state. The \`docx-preview\` dependency, \`DocxViewer\`/\`BaseDocxViewer\` exports, \`./experimental/docx-viewer\` entrypoint, \`ViewerType.Docx\`, and \`docxViewerProps\` on \`DocumentViewer\` are removed. Removed primarily because rendering untrusted \`.docx\` directly in the browser via \`docx-preview\` parses arbitrary attacker-controlled Office Open XML in the host page; we'd rather route DOCX through a server-side decode pipeline (e.g. MIO transform → PDF) than ship a client-side parser as an attack surface. Consumers should pre-convert DOCX to PDF and use \`PdfViewer\`, or supply their own viewer.
- ddeda7f: Fix custom value rendering in ObjectTable dropdown cells for non-string item types (booleans, numbers, etc.)

## 0.16.0

### Minor Changes

- f62c9e2: Add DocumentViewer with MIME-type routing, ImageViewer, VideoViewer, DocxViewer, ExcelViewer, EmailViewer, XmlViewer components, and OSDK Media wrappers for TiffRenderer and MarkdownRenderer
- 7ee1fa3: ObjectTable \`EditFieldConfig.getFieldComponentProps\` now receives a second \`edits\` argument with the row's pending cell edits (keyed by columnId), so editor configuration can react to other in-progress edits within the same row.
- cf496ff: filter-list: round number range histogram min/max to integers for integer property types so dragging or clicking a bucket no longer emits fractional values that break downstream filters
- bfe05b5: Widen \`renderValue\` return type on FilterList property and static-values filter definitions from \`string\` to \`ReactNode\` so callers can render custom React components (e.g. avatars, anchors) for filter values. When \`renderValue\` returns a non-string \`ReactNode\`, search matching falls back to the raw value.
- 11f585d: Histogram date filter: From and To inputs now open independent single-month popovers with Today/Clear actions, replacing the shared two-month range calendar that was confusing users next to the histogram bars

## 0.15.0

### Minor Changes

- 108ac50: Cap long ActionForm select dropdowns so they scroll inside dialogs.
- 4bc17cc: Fix editable date field incorrectly showing edited border after click-in/click-out without changes
- 99ec28c: Fix page scroll being blocked when opening a dropdown in an editable ObjectTable
- d10ed5e: Add rich item label rendering to ActionForm dropdown fields.
- 47eb27c: Add object set scoping to ObjectSelectField.
- 73738dd: Show unsupported ActionForm field types and recommend CUSTOM fields.

## 0.14.0

### Minor Changes

- 69ebc43: Fix function-backed columns and lists with derived properties rendering stale values after an action edits a related object. ObjectTable's \`useFunctionColumnsData\` now passes the page's row PKs as \`dependsOnObjects\` to the underlying \`useOsdkFunctions\`, and function \`ColumnDefinition\` locators now accept an optional \`dependsOn: string[]\` for declaring linked object types the function reads server-side. Lists whose \`withProperties\` traverse linked types now also revalidate when an action edits one of those linked types. The action invalidation path fans out per-type invalidation in a single walk while the optimistic layer is still on top, so fresh values land in truth before the optimistic layer drops.
- 48d5ed2: Add \`AipAgentChat\` component — an OSDK-aware chat surface that wraps \`useChat\` from \`@osdk/react/experimental/aip\` against a Foundry LMS model. Importing the component is sufficient; consumers do not need to import \`useChat\` or \`foundryModel\` themselves. Also exports \`BaseAipAgentChat\` for advanced use with consumer-managed chat state.
- 19159ce: Add contrib skill
- d6a3194: Show selected filter values with count 0 when they are absent from aggregation results
- 082e4e6: Expose \`FilterPopover\`, \`FilterInput\`, and \`useFilterListState\` as composable primitives so consumers can build custom FilterList layouts (e.g. inline horizontal toolbars). Also exports \`getFilterKey\`, \`getFilterLabel\`, \`summarizeFilterValue\`, and \`filterHasActiveState\` helpers. See the \`Experimental/FilterList/Recipes/Horizontal toolbar\` story for a worked example. Also adds a pointer-hover highlight to non-disabled \`Combobox\` items (matches the existing \`[data-highlighted]\` keyboard-focus treatment).
- 85dde6e: Dedupe empty/null aggregation rows across all FilterList property filters. \`usePropertyAggregation\` now collapses any combination of \`null\`, \`undefined\`, and \`""\` buckets returned by the backend into a single "No value" row, so dropdown, multi-select, and text-tag filters no longer show two or more "No value" entries when the underlying aggregation produces multiple empty groupings. Whitespace-only strings remain as their literal value, matching Workshop. The behavior previously lived in \`ListogramInput\` only; lifting it into the hook covers every consumer. Adds a shared \`dedupeEmptyAggregationRows\` helper exported from \`utils/filterValues.ts\` for downstream reuse.
- 5165618: Fix layout flash in FilterList multi-select and single-select inputs during sibling-aggregation refetch. Previously, when a listogram checkbox toggled and triggered a refetch in sibling filters, MULTI_SELECT and SINGLE_SELECT inputs briefly stacked "Loading options..." and "Updating..." above the combobox, pushing the panel layout down and snapping back when the fetch completed. Both inputs now use the same useStableData pattern already used by ListogramInput and RangeInput: the last non-loading values are preserved across refetch so the combobox stays mounted with its prior options and chips, with no inline loading hint. The "Loading options..." empty-state still shows on genuine first load; "No options available" still shows when the aggregation resolves to empty.
- 082e4e6: Date input fields are now shared across action-form, filter-list, and object-table. The new \`shared/calendar/\` module exports \`DatePicker\` and \`DateRangePicker\` (extracted from action-form's \`DatetimePickerField\` / \`DateRangeInputField\`). Filter-list date filters render the shared popover calendar instead of native \`<input type="date">\` so every viewer sees the same \`YYYY-MM-DD\` regardless of browser locale. Date-range histograms now render as SVG with axis grid lines, count labels above each bar, locale-aware short month tick labels (e.g. \`Jan\`/\`Feb\` in English, localized in other browser locales) for monthly buckets and \`yyyy\` for yearly, plus a period subtitle. New \`formatDate\` callback on date filter definitions overrides the displayed string everywhere — picker idle text, histogram tooltip, period subtitle, x-tick labels, and chip text — without affecting the underlying ISO value. New \`clickToFilter\` flag on \`DATE_RANGE\` and \`NUMBER_RANGE\` filters enables clicking or dragging across histogram bars to set the range; drag-to-select uses pointer events with \`setPointerCapture\` for touch support and \`pointercancel\` cleanup. The previously plumbed-but-unused \`parseDate\` callback was removed; the shared pickers own input parsing.

  Visual polish from review feedback: the "No value" label now has its own \`--osdk-filter-no-value-font-size\` CSS variable so the inline empty row in a histogram and the trailing row from \`NullValueWrapper\` render at the same size in all contexts; the listogram empty row also matches the null-wrapper's checkbox-to-label gap. Listogram bucket counts and null-row counts now use compact number formatting (\`1.2K\`, \`1.5M\`) with the full count exposed via \`title\` for a11y. Filter-list inputs and \`FilterPopover\` triggers were bumped to body-medium to match the rest of the codebase, and \`RangeInput\`'s outer Clear button and \`ContainsTextInput\`'s inline clear-X no longer cause layout shift when toggled (always rendered with \`visibility: hidden\` when inactive). \`DateRangePicker\` now exposes a \`modal\` prop (mirroring \`DatePicker\`) so callers can nest it inside another popover without the dismiss layer swallowing outer clicks.

- f45ab11: Fix filter list dropdown positioning: flip above trigger when near container bottom, hide when anchor scrolls out of view
- 662a0c7: Pin form footer in height-constrained containers so fields scroll independently
- 6344e8b: Strip time to local midnight in DatetimePickerField onChange when showTime is false
- 53ffbcc: Fix styling of empty dropdown
- 3943b67: Fix boolean properties rendering as empty in ObjectTable
- bcf9078: Add auto-size (fit to width) toggle to PDF viewer toolbar
- 81314f2: Fix dropdown field triggering validation when popover opens

## 0.13.0

### Minor Changes

- 53e5f4f: Cap the Combobox popup at 320px (configurable via \`--osdk-combobox-popup-max-height\`) with overflow scrolling. Long option lists no longer push other UI off-screen — they scroll inside the popup. A short browser window still gets a smaller cap because the rule resolves to \`min(320px, var(--available-height))\`.
- aca2466: Standardize "No value" rendering in FilterList — introduce a shared \`NoValueLabel\` component (italic, muted) used by listogram buckets, single-select and multi-select dropdown options, multi-select chips, text-tag chips, and the \`NullValueWrapper\` include-null row. Adds an \`isEmptyValue\` helper. The \`NullValueWrapper\` include-null row's default visual flips from upright/default-color to italic/muted so it matches the dropdown and listogram surfaces. Legacy \`--osdk-filter-listogram-empty-label-color\`, \`--osdk-filter-listogram-empty-label-font-style\`, \`--osdk-filter-null-label-color\`, \`--osdk-filter-null-label-font-family\`, \`--osdk-filter-null-label-font-size\`, and \`--osdk-filter-null-label-line-height\` tokens are honored as opt-in overrides on the listogram and null-wrapper containers; consumers who explicitly set them continue to override the new italic-muted defaults.
- fe39be0: Stabilize per-filter where-clause references inside \`useFilterListState\` via deep-equality caching, so \`FilterInput.memo\` holds when the cross-filter context for a given filter is unchanged across selections. Eliminates redundant aggregation requests on every value selection. Internal-only — no public API changes.
- 76ab0a3: ObjectTable: Fix bug when cell is marked edited on clicking into and out of an empty cell
- 72e928b: ObjectTable: support per-row edit configuration via \`editable: (rowData) => boolean\`, add \`getRowAttributes\` prop for conditional row styling via data attributes, replace \`editFieldConfig.fieldComponentProps\` with \`editFieldConfig.getFieldComponentProps(rowData)\` so editor configuration can vary per row, and add a \`showEditFooter\` prop to opt out of the built-in edit footer.
- 9be8339: Polish ActionForm date/time controls, boolean switch fields, form submission, popup positioning, component tokens, and FauxFoundry action typings.

## 0.12.0

### Minor Changes

- d15d3cf: Add Blueprint-style design tokens for buttons, inputs, and table rows
- 56c5630: Drop redundant \`--config $(find-up dprint.json)\` from \`lint\`, \`fix-lint\`, and \`format\` scripts. dprint already auto-discovers \`dprint.json\` by walking up from cwd; the substitution was a no-op anyway since \`find-up\` is an npm package, not a CLI. Also fix the \`uploadMediaOntologyEdits\` documentation example so its \`// @ts-ignore\` survives dprint reformatting (the broken \`format\` step had been masking this).
- b187c09: ObjectTable: when a column has both \`renderCell\` and \`editable: true\`, use \`renderCell\` while not in edit mode and the editable cell only after entering edit mode (relevant for \`editMode: "manual"\`). Previously \`renderCell\` always took precedence and editable cells never appeared.
- 7a0c187: add \`onFilterVisibilityChange\` callback to \`FilterList\` that fires when filters are reordered, added, or removed, returning all filters in display order with their visibility state. Useful for persisting filter configuration in saved states.
- 5d0c6b7: Fix Action Form popover dismissal inside dialog portals.

## 0.11.0

### Minor Changes

- 82c7210: update @osdk/react peer dependency range to ^2.8.0 to track its alignment with the @osdk/client fixed group
- 203331e: GA: promote modern hooks from \`@osdk/react/experimental\` to the main entry, rename \`@osdk/react/experimental/admin\` → \`@osdk/react/platform-apis\`, consolidate to a single \`OsdkProvider\`. Promote \`ObservableClient\` and supporting types out of \`@osdk/client/unstable-do-not-use\` to a new stable \`@osdk/client/observable\` entry so the GA hooks no longer depend on a "do not use" entry point. The previous import paths and symbol names are kept as \`@deprecated\` shims so 0.x consumers can upgrade without code changes.

  #### \`@osdk/client\` (minor)
  - new stable entry point \`@osdk/client/observable\` exposes \`createObservableClient\`, \`ObservableClient\` (and its \`CacheEntry\`, \`CacheSnapshot\`, \`CanonicalizedOptions\`, \`CanonicalizeOptionsInput\`, \`Observer\`, \`ObserveLinks\`, \`ObserveAggregationArgs\`, \`ObserveFunctionCallbackArgs\`, \`ObserveFunctionOptions\`, \`ObserveObjectCallbackArgs\`, \`ObserveObjectsCallbackArgs\`, \`ObserveObjectSetArgs\`, \`Unsubscribable\` types), and the supporting \`ActionSignatureFromDef\`, \`QueryParameterType\`, \`QueryReturnType\` types
  - these symbols are still re-exported from \`@osdk/client/unstable-do-not-use\` as \`@deprecated\` shims; new code should import from \`@osdk/client/observable\`

  #### \`@osdk/react\` (minor)
  - \`OsdkProvider\`, \`useOsdkObjects\`, \`useOsdkObject\`, \`useOsdkAction\`, \`useLinks\`, \`useObjectSet\`, \`useOsdkAggregation\`, \`useOsdkFunction\`, \`useOsdkFunctions\`, \`useStableObjectSet\`, \`useRegisterUserAgent\`, \`useDebouncedCallback\`, devtools registry re-exports are now exported directly from \`@osdk/react\`
  - admin / CBAC platform hooks (\`useFoundryUser\`, \`useCurrentFoundryUser\`, \`useFoundryUsersList\`, \`useMarkings\`, \`useMarkingCategories\`, \`useUserViewMarkings\`, \`useCbacBanner\`, \`useCbacMarkingRestrictions\`) now live at \`@osdk/react/platform-apis\` and still require the optional \`@osdk/foundry.admin\` + \`@osdk/foundry.core\` peers
  - the previous \`OsdkProvider2\` is now just \`OsdkProvider\`. The legacy \`OsdkProvider\` body is gone, but \`useOsdkClient\` and \`useOsdkMetadata\` keep working since the new provider supplies the same \`client\` shape
  - \`<OsdkProvider>\` no longer accepts an \`observableClient\` prop. The provider always derives its \`ObservableClient\` from \`client\` so the two cannot diverge. Tests that need to stub the observable layer should import \`TestOsdkProvider\` from \`@osdk/react/testing\`. \`OsdkProvider2\` (the deprecated alias) inherits this — it also no longer accepts \`observableClient\`
  - \`useOsdkClient2\` is unified into \`useOsdkClient\`; the unified hook now reads from the modern context (same \`client\` shape)
  - \`peerDependencies\` on \`@osdk/api\` and \`@osdk/client\` resolve to \`^2.15.0\` so \`@osdk/react@2.15\` cannot install against a \`@osdk/client\` that lacks the new \`./observable\` entry

  #### \`@osdk/react-components\` (patch)
  - update internal imports for \`@osdk/react\` GA — \`@osdk/react/experimental\` → \`@osdk/react\` and \`@osdk/react/experimental/admin\` → \`@osdk/react/platform-apis\`
  - update \`QueryParameterType\` import from \`@osdk/client/unstable-do-not-use\` → \`@osdk/client/observable\`
  - bump \`@osdk/react\` peer range to \`^2.15.0\`

  #### \`@osdk/react-devtools\` (patch)
  - update observable-related imports from \`@osdk/client/unstable-do-not-use\` → \`@osdk/client/observable\`

  #### \`@osdk/cbac-components\` (patch)
  - update internal imports for \`@osdk/react\` GA — \`@osdk/react/experimental\` → \`@osdk/react\` and \`@osdk/react/experimental/admin\` → \`@osdk/react/platform-apis\`

  #### Compatibility shims

  These keep working in \`@osdk/react@2.15\` and \`@osdk/client@2.15\`, marked \`@deprecated\` so editors surface a strikethrough:
  - \`import { ... } from "@osdk/react/experimental"\` re-exports everything now exported from \`@osdk/react\`, plus \`OsdkProvider as OsdkProvider2\` and \`useOsdkClient as useOsdkClient2\`
  - \`import { ... } from "@osdk/react/experimental/admin"\` re-exports everything now exported from \`@osdk/react/platform-apis\`
  - \`import { createObservableClient, ObservableClient, ... } from "@osdk/client/unstable-do-not-use"\` re-exports the symbols now in \`@osdk/client/observable\`
  - \`import { ... } from "@osdk/react/experimental/aip"\` is unchanged — AIP is still in beta

  These shims will be removed in a future major.

  #### Migration

  For consumers upgrading from \`@osdk/react@0.x\`:
  - \`import { ... } from "@osdk/react/experimental"\` → \`import { ... } from "@osdk/react"\`
  - \`import { ... } from "@osdk/react/experimental/admin"\` → \`import { ... } from "@osdk/react/platform-apis"\` (still requires the optional \`@osdk/foundry.admin\` + \`@osdk/foundry.core\` peers)
  - \`<OsdkProvider2 ...>\` → \`<OsdkProvider ...>\` (the modern provider takes the bare name)
  - if you were passing \`observableClient={...}\` to \`<OsdkProvider>\` or \`<OsdkProvider2>\` (in tests), import \`TestOsdkProvider\` from \`@osdk/react/testing\` and use that instead — production code does not need to change
  - \`useOsdkClient2()\` → \`useOsdkClient()\` (the unified hook reads from the modern context — same \`client\` shape, no API change at the call site)
  - bump \`@osdk/client\` and \`@osdk/api\` to \`^2.15.0\` to satisfy the new peer ranges

  For consumers reaching directly into \`@osdk/client/unstable-do-not-use\` for observable APIs:
  - \`import { createObservableClient, ObservableClient, ... } from "@osdk/client/unstable-do-not-use"\` → \`import { ... } from "@osdk/client/observable"\`
  - the symbols moved: \`createObservableClient\`, \`ObservableClient\`, \`CacheEntry\`, \`CacheSnapshot\`, \`CanonicalizedOptions\`, \`CanonicalizeOptionsInput\`, \`Observer\`, \`ObserveLinks\`, \`ObserveAggregationArgs\`, \`ObserveFunctionCallbackArgs\`, \`ObserveFunctionOptions\`, \`ObserveObjectCallbackArgs\`, \`ObserveObjectsCallbackArgs\`, \`ObserveObjectSetArgs\`, \`Unsubscribable\`, \`ActionSignatureFromDef\`, \`QueryParameterType\`, \`QueryReturnType\`

## 0.10.0

### Minor Changes

- b355bc3: Add CONTRIBUTING.md for @osdk/react and @osdk/react-components
- 9b45e7b: Add form section support to BaseForm with collapsible groups, multi-column grid, and custom submit button
- 3a4528c: Add ObjectSelect field for selecting object instances in action forms
- 5dc557e: Add helperText tooltip using Popover and widen type to React.ReactNode

### Patch Changes

- Updated dependencies [f747fa3]
- Updated dependencies [d892397]
- Updated dependencies [c5a6047]
- Updated dependencies [45be476]
- Updated dependencies [b355bc3]
- Updated dependencies [20e9678]
  - @osdk/react@0.17.0

## 0.9.0

### Minor Changes

- 4aeb07b: ObjectTable: add \`onColumnHeaderClick(columnId)\` prop that fires when a user clicks on a column header (excluding the dropdown menu trigger)
- 7b457a5: Fix function column with derived properties

### Patch Changes

- Updated dependencies [aa78c78]
- Updated dependencies [7b457a5]
  - @osdk/react@0.16.0

## 0.8.0

### Minor Changes

- d9b03eb: document @osdk/client version compat and install-time error recovery in AGENTS.md
- 5a733c0: Improve DropdownField with searchable input, multi-select checkboxes, clear button, and fix Select positioning
- 52ff28c: simplify conditional objectset aggregation args and add filtered objectset story
- 3b8decf: Switch vitest pool from forks to threads to fix CI flake
- a0bbaf9: fix ObjectTable zebra row colors flipping while scrolling — striping is now keyed off the row's data index instead of its DOM position
- 5835d51: Fix type definitions in FilterList LinkedProperty and ObjectTable function column
- d40104f: Add error icon to DatePickerCell in ObjectTable

### Patch Changes

- Updated dependencies [d9b03eb]
- Updated dependencies [d8842f4]
  - @osdk/react@0.15.0

## 0.7.0

### Minor Changes

- 594df08: Add BaseForm storybook
- 22b4e35: Add horizontal orientation support to RadioButtonsField
- 83993d7: Export LoadingCells as building blocks
- 5a45dc0: Fix stableObjectSet by using a useStableObjectSet hook

### Patch Changes

- Updated dependencies [5a45dc0]
  - @osdk/react@0.14.0

## 0.6.0

### Minor Changes

- 4f3c57c: Update docs to use new per-component experimental import paths

## 0.5.0

### Minor Changes

- e456da5: Add Fetch-User-Agent tracing headers for React layer network calls

### Patch Changes

- Updated dependencies [58248f8]
- Updated dependencies [e456da5]
  - @osdk/react@0.13.0

## 0.4.0

### Minor Changes

- da434c9: Merge @osdk/react-components-styles into @osdk/react-components

  Design tokens and component styles are now bundled in a single package. \`@osdk/react-components-styles\` is deprecated and will be removed in a future release.

  **Migration steps:**
  1. Remove \`@osdk/react-components-styles\` from your dependencies
  2. Replace your CSS imports:

     \`\`\`css
     /* Before */
     @import "@osdk/react-components-styles" layer(osdk.tokens);
     @import "@osdk/react-components/styles.css" layer(osdk.components);

     /* After */
     @import "@osdk/react-components/styles.css" layer(osdk.styles);
     \`\`\`

- e572448: Set default tooltip trigger delay to 200ms in TooltipTrigger
- f0866c7: Pass cross-filter whereClause to DateRange and NumberRange filter inputs so histograms and null counts update when other filters are applied
- 8e06dce: Add renderValue option to PropertyFilterDefinition for custom filter value display and search
- 2bb6860: Add \`showCount\` option to filter definitions for hiding aggregation counts in dropdown options
- f01a8f4: improvements(build): significant reduction in build task graphs
- aba44b8: Add date picker cell to editable ObjectTable
- 5d8edf8: feat(tiff): Tiff Renderer
- 81ac0a1: Prevent committing overlapping date ranges and fix backspace after invalid input revert
- 9996dd6: Add dropdown field to editable ObjectTable
- 4bce409: feat(md): markdown renderer
- 51739ae: Polyfill Promise.withResolvers for pdfjs-dist Node 18 test compatibility
- 1a0f772: Show "No value" for empty filter values in ListogramInput and generate $isNull instead of $eq: "" in where clauses
- c144b04: Add form field validation with onTouched mode, error display, and submit tooltip
- 7f4824a: Downgrade react-markdown to ^9.0.3
- e5a652b: Pin TZ=UTC in vitest config to prevent locale-dependent test failures
- 0c04731: Add individual subpath exports for experimental component groups (filter-list, object-table, pdf-viewer, markdown-renderer, action-form)
- c9c4424: Add STATIC_VALUES filter definition type for providing fixed value lists without OSDK aggregation
- f9033fb: Consolidate onFilterClauseChanged into a single useEffect on whereClause, fixing missing callback when initialFilterStates is set and a stale closure bug in clearFilterState
- 6c1f444: Add date-fns and date-fns-tz dependencies
- 957a878: Rename/improve DateTimePickerField and introduce DateRangeInputField

### Patch Changes

- Updated dependencies [f01a8f4]
- Updated dependencies [f34a1ce]
  - @osdk/react@0.12.0

## 0.3.0

### Minor Changes

- bb087ce: Ship docs folder in npm package and use relative paths in AGENTS.md
- f8b9f12: Cache results from useOsdkFunctions
- 236a88b: Downgrade react-day-picker from v9 to ^8.10.0
- 0b349bd: Fix returned objectSet in ObjectSetQuery
- c4ff35c: add shared prerequisites page and storybook link to docusaurus site
- 8eba901: fix relative links in component docs for docusaurus compatibility
- 89def41: patch bump associated with BlueprintJS upgrade
- da7def7: align FilterList API with ObjectTable: add required \`objectType\` prop, make \`objectSet\` optional
- 86d0bce: Add ObjectSetField component for action forms
- 79b001e: Add FilePickerField component for attachment and media reference form fields
- b2b512e: Address FilePickerField PR review comments: memoize computed values, add aria-label, rename CSS token, add keyboard interaction tests
- f871d5c: Paginate objects for function queries and configure max concurrent requests to handle large dataset
- 3617bab: Export MultiColumnSortDialog as a building block
- 6786113: Add dedupeIntervalMs prop to ObjectTable to configure the dedupe interval for caching network requests

### Patch Changes

- Updated dependencies [f8b9f12]
- Updated dependencies [12f9b36]
- Updated dependencies [51ccca8]
- Updated dependencies [f871d5c]
- Updated dependencies [ec06b26]
  - @osdk/react@0.11.0

## 0.2.0

### Minor Changes

- ce949bd: Simulated release
- 9f76365: Follow-up cleanups from ActionForm PR
- 9720083: Add AGENTS.md files for AI IDE context
- 813f4cb: Add DatetimePickerField component
- fffbb68: Add DropdownField component with searchable combobox and multi-select support
- d4ac875: Add text highlight annotation mode to PdfViewer with toolbar toggle button, \`onTextHighlight\` callback, and multi-rect annotation support via \`rects\` field on \`PdfAnnotation\`
- 8eea31b: feat(pdf): pdf viewer recipes + fixed for form fields
- 993c023: ObjectTable supports objectSet input
- 32c27d7: Added useOsdkFunctions to @osdk/react to execute multiple functions in parallel. This is used by ObjectTable to fetch function-backed columns
- 7080b01: Add base form layout with header, footer, field components, and CSS token variables for theming
- b4bf087: add complex and aggregation filter input components
- 02a095b: Support select all in controlled mode
- dbbfb6f: Add experimental ActionForm component with field renderers, form state hook, and tests
- e19ff03: Add TextAreaField component using @base-ui Input with render prop for native textarea rendering
- 4ad9b36: Add NumberInputField component
- c3da451: add marking button, category group, and validation components for CBAC picker
- c35231f: add cbac css tokens and create cbac-components package
- 3eaf3f5: Add CSS layers documentation and Tailwind CSS v4 setup instructions to READMEs
- 073a5b1: Add ESLint rules for code quality, React best practices, and JSX accessibility
- 9ff2eca: Add function-backed column query
- 6516ff9: Fix multiple setData calls
- 06095fa: Restructure FilterList into base and osdk layers
- aa908e4: Redesign filter list collapse into separate render tree and simplify header layout
- 3f4fb81: Address design review and PR review feedback for filter list: exclude strikethrough only on selected items, remove hover-to-show exclude row, fix 3-dots toggle close behavior, remove OR filter operator mode, and various UI polish
- f6649a5: add collapsible panel, select all, include/exclude toggle, per-item colors, histogram display modes, and session persistence support to filter list
- e4840fa: Add exclude dropdown, in-filter search, hover-reveal actions, remove button to filter list items, thread objectSet through aggregation hooks so prefiltered sets are respected, and add FilterList storybook stories and documentation
- 08b979a: Thread objectSet through filter aggregation hooks and add FilterList documentation
- 7542c11: add remove button to filter list items and memoize dnd accessibility props
- bc46400: Add skeleton loading states and polish checkbox list, histogram, and range filter inputs
- d6c2c8b: Fix FilterList styling
- fcc4971: Refactor filter list where clause generation for consistent exclude wrapping and integer clamping
- 29095f5: fix where clause generation for compound property filters and remove useEffect in useFilterListState
- 9893b41: Add storybook
- 82573b8: Pin react-day-picker to 9.1.0
- dffac63: Fix styling nits
- d6c2c8b: Fix FilterList dropdown
- 7347abe: Update README
- 66b7125: Add RadioButtonsField component for action form radio button inputs
- 1135a27: Update Blueprint css import
- 7a3c43d: feat(pdf): pdf-viewer component
- 0bf4c53: add e2e sandbox filter list demos and remove unused filter types
- a198fc5: Fix header cell not aligned
- 532d0d7: Fix lint errors
- 074a754: Display function-backed column
- 6ec2110: Add CustomField component for user-defined field renderers in ActionForm
- 727fd0e: fix dual @types/react version mismatch
- 76ee40a: Fix column resize and value change ux
- 447e29d: Update editable table UX and API to pass the entire row data on edit
- 6019278: auto-compute peer dependency ranges from changelog history for react and react-components
- 4c7884f: Add custom column, multi column sort and column config
- 4ffe6f5: add filter list state management and where clause builder
- dba18e0: Fix css build
- b373588: Styling fix with global border-box
- 52b70aa: Fix onRowClick triggered on row selection
- 525f277: add filter-list base containers, simple input components, and switch base component
- 35f2f1a: Add Media inputs/outputs for Queries
- 05618c3: Add validation state to editable cell
- fb9383c: Fix table crashes on remount
- 5f52808: fix(pdf): fix issue with pdf viewer worker import
- 00677eb: Upgrade Storybook to v10 and add MCP addon.
- 336a013: refactor(pdf): rename BasePdfRenderer/PdfRenderer to BasePdfViewer/PdfViewer, rename downloadEnabled to enableDownload, expose internal hooks, add onDownload result callback for download success/failure
- 5ad3ba1: Fix conflicting dependencies and add docs
- edbe438: FilterList base components with drag-and-drop sorting and tokenized styling
- 07a6fdb: use SkeletonBar component in table loading cells instead of inline skeleton divs
- 4187b2b: Fix shift click to select from last selected and header menu styles
- 9c54ee5: Support editable cell

## 0.2.0-beta.29

### Minor Changes

- 4ad9b36: Add NumberInputField component
- d6c2c8b: Fix FilterList styling
- d6c2c8b: Fix FilterList dropdown

## 0.2.0-beta.28

### Minor Changes

- 3eaf3f5: Add CSS layers documentation and Tailwind CSS v4 setup instructions to READMEs
- 3f4fb81: Address design review and PR review feedback for filter list: exclude strikethrough only on selected items, remove hover-to-show exclude row, fix 3-dots toggle close behavior, remove OR filter operator mode, and various UI polish

## 0.2.0-beta.27

### Minor Changes

- 32c27d7: Added useOsdkFunctions to @osdk/react to execute multiple functions in parallel. This is used by ObjectTable to fetch function-backed columns
- 6019278: auto-compute peer dependency ranges from changelog history for react and react-components

## 0.2.0-beta.26

### Minor Changes

- 8eea31b: feat(pdf): pdf viewer recipes + fixed for form fields
- c3da451: add marking button, category group, and validation components for CBAC picker
- 073a5b1: Add ESLint rules for code quality, React best practices, and JSX accessibility
- 82573b8: Pin react-day-picker to 9.1.0
- 66b7125: Add RadioButtonsField component for action form radio button inputs
- 6ec2110: Add CustomField component for user-defined field renderers in ActionForm

### Patch Changes

- Updated dependencies [520398c]
- Updated dependencies [ffc6efe]
- Updated dependencies [4a856cb]
- Updated dependencies [b0930e4]
  - @osdk/client@2.8.0-beta.29
  - @osdk/api@2.8.0-beta.29
  - @osdk/react@0.10.0-beta.14

## 0.2.0-beta.25

### Minor Changes

- d4ac875: Add text highlight annotation mode to PdfViewer with toolbar toggle button, \`onTextHighlight\` callback, and multi-rect annotation support via \`rects\` field on \`PdfAnnotation\`
- e19ff03: Add TextAreaField component using @base-ui Input with render prop for native textarea rendering

### Patch Changes

- Updated dependencies [f294f5a]
- Updated dependencies [2855223]
- Updated dependencies [d284bf2]
- Updated dependencies [b68cebd]
  - @osdk/client@2.8.0-beta.28
  - @osdk/react@0.10.0-beta.13
  - @osdk/api@2.8.0-beta.28

## 0.2.0-beta.24

### Minor Changes

- 813f4cb: Add DatetimePickerField component
- e4840fa: Add exclude dropdown, in-filter search, hover-reveal actions, remove button to filter list items, thread objectSet through aggregation hooks so prefiltered sets are respected, and add FilterList storybook stories and documentation

### Patch Changes

- Updated dependencies [46dfbec]
  - @osdk/react@0.10.0-beta.12

## 0.2.0-beta.23

### Minor Changes

- c35231f: add cbac css tokens and create cbac-components package
- 5f52808: fix(pdf): fix issue with pdf viewer worker import
- 336a013: refactor(pdf): rename BasePdfRenderer/PdfRenderer to BasePdfViewer/PdfViewer, rename downloadEnabled to enableDownload, expose internal hooks, add onDownload result callback for download success/failure
- 07a6fdb: use SkeletonBar component in table loading cells instead of inline skeleton divs

### Patch Changes

- Updated dependencies [fceb4ce]
  - @osdk/client@2.8.0-beta.27
  - @osdk/api@2.8.0-beta.27
  - @osdk/react@0.10.0-beta.11

## 0.2.0-beta.22

### Minor Changes

- 7080b01: Add base form layout with header, footer, field components, and CSS token variables for theming
- 08b979a: Thread objectSet through filter aggregation hooks and add FilterList documentation
- dffac63: Fix styling nits
- b373588: Styling fix with global border-box

### Patch Changes

- Updated dependencies [b1e8bba]
- Updated dependencies [599426b]
- Updated dependencies [60b5ffb]
- Updated dependencies [61e33ab]
  - @osdk/react@0.10.0-beta.11
  - @osdk/client@2.8.0-beta.26
  - @osdk/api@2.8.0-beta.26

## 0.2.0-beta.21

### Minor Changes

- fffbb68: Add DropdownField component with searchable combobox and multi-select support

### Patch Changes

- @osdk/api@2.8.0-beta.24
- @osdk/client@2.8.0-beta.24
- @osdk/react@0.10.0-beta.10

## 0.2.0-beta.20

### Minor Changes

- 9ff2eca: Add function-backed column query
- 6516ff9: Fix multiple setData calls
- bc46400: Add skeleton loading states and polish checkbox list, histogram, and range filter inputs
- 7a3c43d: feat(pdf): pdf-viewer component
- 532d0d7: Fix lint errors
- 074a754: Display function-backed column

### Patch Changes

- Updated dependencies [4bb9769]
  - @osdk/api@2.8.0-beta.23
  - @osdk/client@2.8.0-beta.23
  - @osdk/react@0.10.0-beta.10

## 0.2.0-beta.19

### Minor Changes

- 9f76365: Follow-up cleanups from ActionForm PR
- dbbfb6f: Add experimental ActionForm component with field renderers, form state hook, and tests
- aa908e4: Redesign filter list collapse into separate render tree and simplify header layout

### Patch Changes

- Updated dependencies [dbbfb6f]
- Updated dependencies [cbfa135]
- Updated dependencies [f4604c2]
  - @osdk/react@0.10.0-beta.10
  - @osdk/client@2.8.0-beta.22
  - @osdk/api@2.8.0-beta.22

## 0.2.0-beta.18

### Minor Changes

- fcc4971: Refactor filter list where clause generation for consistent exclude wrapping and integer clamping
- 29095f5: fix where clause generation for compound property filters and remove useEffect in useFilterListState
- 7347abe: Update README
- a198fc5: Fix header cell not aligned
- 00677eb: Upgrade Storybook to v10 and add MCP addon.

### Patch Changes

- Updated dependencies [c40444b]
- Updated dependencies [dda14be]
  - @osdk/client@2.8.0-beta.21
  - @osdk/react@0.10.0-beta.9
  - @osdk/api@2.8.0-beta.21

## 0.2.0-beta.17

### Minor Changes

- 7542c11: add remove button to filter list items and memoize dnd accessibility props
- 05618c3: Add validation state to editable cell

### Patch Changes

- @osdk/api@2.8.0-beta.20
- @osdk/client@2.8.0-beta.20
- @osdk/react@0.10.0-beta.8

## 0.2.0-beta.16

### Minor Changes

- 06095fa: Restructure FilterList into base and osdk layers
- f6649a5: add collapsible panel, select all, include/exclude toggle, per-item colors, histogram display modes, and session persistence support to filter list
- 1135a27: Update Blueprint css import

### Patch Changes

- @osdk/api@2.8.0-beta.19
- @osdk/client@2.8.0-beta.19
- @osdk/react@0.10.0-beta.8

## 0.2.0-beta.15

### Minor Changes

- 02a095b: Support select all in controlled mode

### Patch Changes

- Updated dependencies [c8384de]
  - @osdk/client@2.8.0-beta.18
  - @osdk/api@2.8.0-beta.18
  - @osdk/react@0.10.0-beta.8

## 0.2.0-beta.14

### Minor Changes

- fb9383c: Fix table crashes on remount

## 0.2.0-beta.13

### Minor Changes

- 76ee40a: Fix column resize and value change ux
- edbe438: FilterList base components with drag-and-drop sorting and tokenized styling

### Patch Changes

- Updated dependencies [8c30908]
  - @osdk/client@2.8.0-beta.17
  - @osdk/api@2.8.0-beta.17
  - @osdk/react@0.10.0-beta.8

## 0.2.0-beta.12

### Minor Changes

- 9720083: Add AGENTS.md files for AI IDE context

### Patch Changes

- Updated dependencies [9720083]
- Updated dependencies [09e5659]
- Updated dependencies [8a82492]
- Updated dependencies [2ebe62c]
  - @osdk/react@0.10.0-beta.8
  - @osdk/client@2.8.0-beta.16
  - @osdk/api@2.8.0-beta.16

## 0.2.0-beta.11

### Minor Changes

- 447e29d: Update editable table UX and API to pass the entire row data on edit

## 0.2.0-beta.10

### Minor Changes

- b4bf087: add complex and aggregation filter input components
- 0bf4c53: add e2e sandbox filter list demos and remove unused filter types
- 35f2f1a: Add Media inputs/outputs for Queries

### Patch Changes

- Updated dependencies [9156827]
- Updated dependencies [e64bf0b]
- Updated dependencies [baba327]
- Updated dependencies [d1ad4d1]
- Updated dependencies [35f2f1a]
- Updated dependencies [71e28ef]
  - @osdk/react@0.10.0-beta.7
  - @osdk/client@2.8.0-beta.14
  - @osdk/api@2.8.0-beta.14

## 0.2.0-beta.9

### Minor Changes

- 4187b2b: Fix shift click to select from last selected and header menu styles

## 0.2.0-beta.8

### Minor Changes

- 993c023: ObjectTable supports objectSet input

### Patch Changes

- Updated dependencies [993c023]
- Updated dependencies [8825f8c]
  - @osdk/react@0.10.0-beta.6
  - @osdk/client@2.8.0-beta.12
  - @osdk/api@2.8.0-beta.12

## 0.2.0-beta.7

### Minor Changes

- 52b70aa: Fix onRowClick triggered on row selection

## 0.2.0-beta.6

### Minor Changes

- 9893b41: Add storybook

## 0.2.0-beta.5

### Minor Changes

- dba18e0: Fix css build

### Patch Changes

- @osdk/api@2.8.0-beta.8
- @osdk/client@2.8.0-beta.8
- @osdk/react@0.10.0-beta.4

## 0.2.0-beta.4

### Minor Changes

- 9c54ee5: Support editable cell

### Patch Changes

- Updated dependencies [4cd7389]
  - @osdk/client@2.8.0-beta.7
  - @osdk/api@2.8.0-beta.7
  - @osdk/react@0.10.0-beta.4

## 0.2.0-beta.3

### Minor Changes

- 50bd461: add combobox, select, and switch base components
- 727fd0e: fix dual @types/react version mismatch
- 4c7884f: Add custom column, multi column sort and column config
- 4ffe6f5: add filter list state management and where clause builder

### Patch Changes

- Updated dependencies [8c60682]
- Updated dependencies [15e1686]
- Updated dependencies [727fd0e]
- Updated dependencies [c9d954d]
- Updated dependencies [044eb80]
- Updated dependencies [9d234b9]
  - @osdk/client@2.8.0-beta.6
  - @osdk/react@0.10.0-beta.4
  - @osdk/api@2.8.0-beta.6

## 0.2.0-beta.2

### Minor Changes

- 5ad3ba1: Fix conflicting dependencies and add docs

### Patch Changes

- Updated dependencies [26cec61]
- Updated dependencies [0d174a2]
  - @osdk/client@2.8.0-beta.3
  - @osdk/react@0.10.0-beta.2
  - @osdk/api@2.8.0-beta.3

## 0.1.0-beta.6

### Minor Changes

- cac3e9a: Add ActionFormApi

### Patch Changes

- Updated dependencies [db28747]
  - @osdk/react@0.9.0-beta.10

## 0.1.0-beta.5

### Minor Changes

- 30617fa: Support sorting and column pinning. Export BaseTable

### Patch Changes

- Updated dependencies [43d342e]
- Updated dependencies [24730c7]
- Updated dependencies [ecd18e2]
  - @osdk/react@0.9.0-beta.9
  - @osdk/client@2.7.0-beta.14
  - @osdk/api@2.7.0-beta.14

## 0.1.0-beta.4

### Minor Changes

- 476604f: Apply table styling

### Patch Changes

- Updated dependencies [fb83808]
  - @osdk/client@2.7.0-beta.13
  - @osdk/api@2.7.0-beta.13
  - @osdk/react@0.9.0-beta.8

## 0.1.0-beta.3

### Minor Changes

- 9cd0b26: Add base UI component and css module

### Patch Changes

- Updated dependencies [acf6331]
- Updated dependencies [6cfe14a]
- Updated dependencies [ec6ad57]
- Updated dependencies [38d5958]
- Updated dependencies [56ba08f]
- Updated dependencies [d5cfc38]
  - @osdk/react@0.9.0-beta.7
  - @osdk/client@2.7.0-beta.11
  - @osdk/api@2.7.0-beta.11

## 0.1.0-beta.2

### Minor Changes

- 9c9fb9b: Row selection, column resize, filter clause

### Patch Changes

- Updated dependencies [6b27d8a]
- Updated dependencies [ba3159c]
- Updated dependencies [0395d4b]
  - @osdk/client@2.7.0-beta.9
  - @osdk/react@0.9.0-beta.6
  - @osdk/api@2.7.0-beta.9

## 0.1.0-beta.1

### Minor Changes

- 139913d: ObjectTable first impl
- 800103e: Update README

### Patch Changes

- Updated dependencies [c9ca08d]
- Updated dependencies [c332598]
- Updated dependencies [0b2cd91]
  - @osdk/api@2.7.0-beta.6
  - @osdk/client@2.7.0-beta.6
  - @osdk/react@0.9.0-beta.4

## 0.1.0-beta.0

### Minor Changes

- d03ddbb: Add new @osdk/react-components package with FilterList and ObjectTable APIs

### Patch Changes

- Updated dependencies [dc33f68]
  - @osdk/client@2.7.0-beta.5
  - @osdk/api@2.7.0-beta.5
  - @osdk/react@0.9.0-beta.3

## 0.0.0

Initial package setup.
`;function a(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(i,{title:"Docs/Changelog"}),`
`,e.jsx(r,{children:s})]})}function f(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(a,{...n})}):a()}export{f as default};
