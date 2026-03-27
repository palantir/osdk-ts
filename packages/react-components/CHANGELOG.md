# @osdk/react-components

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
