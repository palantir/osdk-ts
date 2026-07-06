# @osdk/react-components-storybook

## 0.34.0

### Minor Changes

- 56f6317: Enable DESIGN.md and CSS export for built-in Workshop Light and Dark themes
- 6600566: Migrate @osdk/react, @osdk/react-devtools, and @osdk/react-components-storybook to lint with oxlint and format with oxfmt (configured via Ultracite) instead of ESLint and dprint (sixth increment of the repo-wide oxc migration; the React family ahead of @osdk/react-components)
- 7884819: Add Component Overview story with tabbed layout showing FilterList, ObjectTable, PdfViewer, and ActionForm
- 9e4f284: Add brand theme plugin to Storybook: theme preset picker toolbar with built-in/custom categories, interactive token mapping panel with WCAG contrast checking, style presets for radius/spacing, CSS/Markdown export, and dark mode support

### Patch Changes

- Updated dependencies [6010d45]
  - @osdk/faux@0.33.0

## 0.33.0

### Minor Changes

- 0ed0b5c: Restyle AipAgentChat to match Threads 2.0 design with light gray user bubbles, plain-text assistant messages, rounded inlined composer, centered max-width layout, and no composer divider. Add reusable Callout base component with intent-tinted backgrounds and dark mode support. Add AipAgentChat storybook stories.

### Patch Changes

- Updated dependencies [15a35f2]
  - @osdk/faux@0.32.0

## 0.32.0

### Patch Changes

- Updated dependencies [3e915ee]
  - @osdk/faux@0.31.0

## 0.31.0

### Patch Changes

- @osdk/faux@0.30.0

## 0.30.0

### Minor Changes

- c24b0cf: Align OSDK component tokens with Blueprint styling: use box-shadow instead of border for inputs, buttons, and selects; add proper dark mode token overrides; group Storybook theme presets into built-in and custom categories

### Patch Changes

- @osdk/faux@0.29.0

## 0.29.0

### Patch Changes

- @osdk/faux@0.28.0

## 0.28.0

### Minor Changes

- b237ef9: Run Storybook interaction (play-function) tests in CI via @storybook/addon-vitest, add a MultipleSelection play function, disable MSW per-request console logging, and bump @vitest/browser to the patched 3.2.5+.

### Patch Changes

- Updated dependencies [ab19740]
  - @osdk/faux@0.27.0

## 0.27.0

### Patch Changes

- Updated dependencies [79f8a6e]
  - @osdk/faux@0.26.0

## 0.26.0

### Minor Changes

- 65c742b: Add theme preset switcher toolbar to Storybook with Workshop Light, Workshop Dark, and other built-in presets

### Patch Changes

- @osdk/faux@0.25.0

## 0.25.0

### Minor Changes

- a0602d1: Fix conflicting primary keys

## 0.24.0

### Patch Changes

- Updated dependencies [08e921c]
  - @osdk/faux@0.24.0

## 0.23.0

### Minor Changes

- 46f3ef6: Import CbacPicker docs from source package instead of inlining a summary in Storybook MDX

### Patch Changes

- Updated dependencies [58922c1]
  - @osdk/faux@0.23.0

## 0.22.0

### Patch Changes

- Updated dependencies [5ff7aa5]
  - @osdk/faux@0.22.0

## 0.21.0

### Minor Changes

- e7acde5: Add per-component MDX documentation pages importing existing docs
- ef3e8c1: Sort Docs entry first within each component folder in Storybook sidebar
- a26b490: Sort attached MDX docs entries first within component folders
- 2e92b90: Enable standalone MDX documentation pages co-located with stories

## 0.20.0

### Patch Changes

- Updated dependencies [8965bdf]
  - @osdk/faux@0.21.0

## 0.19.0

### Minor Changes

- 4c53e48: Hide the DatePicker popover when its anchor scrolls out of view. Fixes an issue where the date picker in `ObjectTable` cells continued to render outside the table bounds after the cell scrolled out of the visible area.

## 0.18.0

### Patch Changes

- Updated dependencies [60aff19]
  - @osdk/faux@0.20.0

## 0.17.0

### Minor Changes

- b3229eb: Fix ObjectTable overlay menus and dialogs inside drawers and dialogs.
- 1760597: Change experimental labels to beta
- bde8026: group viewer/renderer storybook entries under DocumentViewer/Renderers, reorder WithMedia stories to appear first, and split out top-level ImageViewer/PdfViewer media stories

### Patch Changes

- @osdk/faux@0.19.0

## 0.16.0

### Minor Changes

- 7945245: add missing postal-mime dev dep so storybook dev resolves the email viewer stories

## 0.15.0

### Minor Changes

- ddeda7f: Fix custom value rendering in ObjectTable dropdown cells for non-string item types (booleans, numbers, etc.)

### Patch Changes

- @osdk/faux@0.18.0

## 0.14.0

### Patch Changes

- @osdk/faux@0.17.0

## 0.13.0

### Patch Changes

- Updated dependencies [02c796c]
- Updated dependencies [ecc5b36]
  - @osdk/faux@0.16.0

## 0.12.0

### Patch Changes

- Updated dependencies [2f3271b]
  - @osdk/faux@0.15.0

## 0.11.0

### Minor Changes

- 9be8339: Polish ActionForm date/time controls, boolean switch fields, form submission, popup positioning, component tokens, and FauxFoundry action typings.

### Patch Changes

- Updated dependencies [9be8339]
  - @osdk/faux@0.14.0

## 0.10.0

### Minor Changes

- 56c5630: Drop redundant `--config $(find-up dprint.json)` from `lint`, `fix-lint`, and `format` scripts. dprint already auto-discovers `dprint.json` by walking up from cwd; the substitution was a no-op anyway since `find-up` is an npm package, not a CLI. Also fix the `uploadMediaOntologyEdits` documentation example so its `// @ts-ignore` survives dprint reformatting (the broken `format` step had been masking this).

### Patch Changes

- Updated dependencies [56c5630]
  - @osdk/faux@0.13.0

## 0.9.0

### Patch Changes

- @osdk/faux@0.12.0

## 0.8.0

### Minor Changes

- 5dc557e: Add helperText tooltip using Popover and widen type to React.ReactNode

### Patch Changes

- @osdk/faux@0.11.0

## 0.7.0

### Minor Changes

- 4aeb07b: ObjectTable: add `onColumnHeaderClick(columnId)` prop that fires when a user clicks on a column header (excluding the dropdown menu trigger)

### Patch Changes

- @osdk/faux@0.10.0

## 0.6.0

### Minor Changes

- d40104f: Add error icon to DatePickerCell in ObjectTable
- 5835d51: Clean up storybook mock data and update examples

### Patch Changes

- Updated dependencies [df1a4f8]
  - @osdk/faux@0.9.0

## 0.5.0

### Minor Changes

- 83993d7: Export LoadingCells as building blocks

## 0.4.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs
- aba44b8: Add date picker cell to editable ObjectTable
- 5d8edf8: feat(tiff): Tiff Renderer
- 9996dd6: Add dropdown field to editable ObjectTable
- 4bce409: feat(md): markdown renderer

### Patch Changes

- Updated dependencies [f01a8f4]
- Updated dependencies [1a0f772]
  - @osdk/faux@0.8.0

## 0.3.0

### Minor Changes

- 3617bab: Add experimental tag and accessible plugins

### Patch Changes

- Updated dependencies [e8d14a0]
- Updated dependencies [2394ca7]
  - @osdk/faux@0.7.0

## 0.2.0

### Minor Changes

- 8eea31b: feat(pdf): pdf viewer recipes + fixed for form fields
- 02a095b: Support select all in controlled mode
- 9893b41: Add storybook
- d6c2c8b: Fix FilterList dropdown
- b2a32b0: Fix storybook deployment
- 7a3c43d: feat(pdf): pdf-viewer component
- 9ddf564: Add BaseTable stories and theme
- 35f2f1a: Add Media inputs/outputs for Queries
- 05618c3: Add validation state to editable cell
- 336a013: refactor(pdf): rename BasePdfRenderer/PdfRenderer to BasePdfViewer/PdfViewer, rename downloadEnabled to enableDownload, expose internal hooks, add onDownload result callback for download success/failure

### Patch Changes

- Updated dependencies [150da1a]
- Updated dependencies [abb0e0f]
- Updated dependencies [4da867d]
- Updated dependencies [b68cebd]
- Updated dependencies [35f2f1a]
- Updated dependencies [46f0a47]
- Updated dependencies [4470c0d]
  - @osdk/faux@0.6.0

## 0.2.0-beta.12

### Minor Changes

- d6c2c8b: Fix FilterList dropdown

### Patch Changes

- Updated dependencies [46f0a47]
  - @osdk/faux@0.6.0-beta.7

## 0.2.0-beta.11

### Minor Changes

- 8eea31b: feat(pdf): pdf viewer recipes + fixed for form fields

## 0.2.0-beta.10

### Patch Changes

- Updated dependencies [b68cebd]
  - @osdk/faux@0.6.0-beta.6

## 0.2.0-beta.9

### Minor Changes

- 336a013: refactor(pdf): rename BasePdfRenderer/PdfRenderer to BasePdfViewer/PdfViewer, rename downloadEnabled to enableDownload, expose internal hooks, add onDownload result callback for download success/failure

## 0.2.0-beta.8

### Minor Changes

- 7a3c43d: feat(pdf): pdf-viewer component

## 0.2.0-beta.7

### Minor Changes

- 05618c3: Add validation state to editable cell

## 0.2.0-beta.6

### Patch Changes

- Updated dependencies [4da867d]
  - @osdk/faux@0.6.0-beta.5

## 0.2.0-beta.5

### Minor Changes

- 02a095b: Support select all in controlled mode

## 0.2.0-beta.4

### Minor Changes

- 9ddf564: Add BaseTable stories and theme

## 0.2.0-beta.3

### Minor Changes

- 35f2f1a: Add Media inputs/outputs for Queries

### Patch Changes

- Updated dependencies [35f2f1a]
  - @osdk/faux@0.6.0-beta.4

## 0.2.0-beta.2

### Patch Changes

- Updated dependencies [4470c0d]
  - @osdk/faux@0.6.0-beta.3

## 0.2.0-beta.1

### Minor Changes

- b2a32b0: Fix storybook deployment

## 0.2.0-beta.0

### Minor Changes

- 9893b41: Add storybook
