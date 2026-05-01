# @osdk/react-components

## 0.9.0

### Minor Changes

- 4aeb07b: ObjectTable: add `onColumnHeaderClick(columnId)` prop that fires when a user clicks on a column header (excluding the dropdown menu trigger)
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

  Design tokens and component styles are now bundled in a single package. `@osdk/react-components-styles` is deprecated and will be removed in a future release.

  **Migration steps:**
  1. Remove `@osdk/react-components-styles` from your dependencies
  2. Replace your CSS imports:

     ```css
     /* Before */
     @import "@osdk/react-components-styles" layer(osdk.tokens);
     @import "@osdk/react-components/styles.css" layer(osdk.components);

     /* After */
     @import "@osdk/react-components/styles.css" layer(osdk.styles);
     ```

- e572448: Set default tooltip trigger delay to 200ms in TooltipTrigger
- f0866c7: Pass cross-filter whereClause to DateRange and NumberRange filter inputs so histograms and null counts update when other filters are applied
- 8e06dce: Add renderValue option to PropertyFilterDefinition for custom filter value display and search
- 2bb6860: Add `showCount` option to filter definitions for hiding aggregation counts in dropdown options
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
- da7def7: align FilterList API with ObjectTable: add required `objectType` prop, make `objectSet` optional
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
- d4ac875: Add text highlight annotation mode to PdfViewer with toolbar toggle button, `onTextHighlight` callback, and multi-rect annotation support via `rects` field on `PdfAnnotation`
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

- d4ac875: Add text highlight annotation mode to PdfViewer with toolbar toggle button, `onTextHighlight` callback, and multi-rect annotation support via `rects` field on `PdfAnnotation`
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
