# @osdk/react-components-styles

## 0.33.0

### Minor Changes

- bcf7007: Style number input stepper buttons with button appearance instead of input styling

## 0.32.0

## 0.31.0

## 0.30.0

### Minor Changes

- a225595: Align ActionForm input-like controls with Blueprint-style shadows, focus rings, and button hover behavior.

  Migration: remove overrides for the legacy input focus width, color, and offset CSS variables, plus the removed file picker trigger, date picker, and time picker border/border-color/focus/error border color variables (e.g. `--osdk-datetime-input-border-color`, `--osdk-datetime-input-border-color-focus`, `--osdk-datetime-input-error-border-color`, `--osdk-time-picker-input-border-color-focus`). Use `--osdk-input-focus-outline`, `--osdk-input-focus-shadow`, and the matching date picker, file picker, or time picker focus shadow tokens instead.

## 0.29.0

## 0.28.0

## 0.27.0

## 0.26.0

## 0.25.0

## 0.24.0

## 0.23.0

## 0.22.0

## 0.21.0

## 0.20.0

## 0.19.0

## 0.18.0

## 0.17.0

## 0.16.0

## 0.15.0

## 0.14.0

## 0.13.0

### Minor Changes

- 9be8339: Polish ActionForm date/time controls, boolean switch fields, form submission, popup positioning, component tokens, and FauxFoundry action typings.

## 0.12.0

## 0.11.0

## 0.10.0

## 0.9.0

## 0.8.0

## 0.7.0

## 0.6.0

## 0.5.0

## 0.4.0

### Minor Changes

- f01a8f4: improvements(build): significant reduction in build task graphs
- 5d8edf8: feat(tiff): Tiff Renderer
- 4bce409: feat(md): markdown renderer
- 1a0f772: Show "No value" for empty filter values in ListogramInput and generate $isNull instead of $eq: "" in where clauses
- c144b04: Add form field validation with onTouched mode, error display, and submit tooltip
- 957a878: Rename/improve DateTimePickerField and introduce DateRangeInputField

## 0.3.0

### Minor Changes

- 89def41: patch bump associated with BlueprintJS upgrade
- 86d0bce: Add ObjectSetField component for action forms
- 79b001e: Add FilePickerField component for attachment and media reference form fields
- b2b512e: Address FilePickerField PR review comments: memoize computed values, add aria-label, rename CSS token, add keyboard interaction tests

## 0.2.0

### Minor Changes

- ce949bd: Simulated release
- 7080b01: Add base form layout with header, footer, field components, and CSS token variables for theming
- c3da451: add marking button, category group, and validation components for CBAC picker
- c35231f: add cbac css tokens and create cbac-components package
- 3eaf3f5: Add CSS layers documentation and Tailwind CSS v4 setup instructions to READMEs
- aa908e4: Redesign filter list collapse into separate render tree and simplify header layout
- 3f4fb81: Address design review and PR review feedback for filter list: exclude strikethrough only on selected items, remove hover-to-show exclude row, fix 3-dots toggle close behavior, remove OR filter operator mode, and various UI polish
- bc46400: Add skeleton loading states and polish checkbox list, histogram, and range filter inputs
- d6c2c8b: Fix FilterList styling
- 9893b41: Add storybook
- dffac63: Fix styling nits
- d6c2c8b: Fix FilterList dropdown
- 66b7125: Add RadioButtonsField component for action form radio button inputs
- 1135a27: Update Blueprint css import
- 7a3c43d: feat(pdf): pdf-viewer component
- 447e29d: Update editable table UX and API to pass the entire row data on edit
- 4c7884f: Add custom column, multi column sort and column config
- dba18e0: Fix css build
- b373588: Styling fix with global border-box
- 35f2f1a: Add Media inputs/outputs for Queries
- 05618c3: Add validation state to editable cell
- 5ad3ba1: Fix conflicting dependencies and add docs
- 9c54ee5: Support editable cell

## 0.2.0-beta.29

### Minor Changes

- d6c2c8b: Fix FilterList styling
- d6c2c8b: Fix FilterList dropdown

## 0.2.0-beta.28

### Minor Changes

- 3eaf3f5: Add CSS layers documentation and Tailwind CSS v4 setup instructions to READMEs
- 3f4fb81: Address design review and PR review feedback for filter list: exclude strikethrough only on selected items, remove hover-to-show exclude row, fix 3-dots toggle close behavior, remove OR filter operator mode, and various UI polish

## 0.2.0-beta.27

## 0.2.0-beta.26

### Minor Changes

- c3da451: add marking button, category group, and validation components for CBAC picker
- 66b7125: Add RadioButtonsField component for action form radio button inputs

## 0.2.0-beta.25

## 0.2.0-beta.24

## 0.2.0-beta.14

### Minor Changes

- c35231f: add cbac css tokens and create cbac-components package

## 0.2.0-beta.13

### Minor Changes

- 7080b01: Add base form layout with header, footer, field components, and CSS token variables for theming
- dffac63: Fix styling nits
- b373588: Styling fix with global border-box

## 0.2.0-beta.12

### Minor Changes

- bc46400: Add skeleton loading states and polish checkbox list, histogram, and range filter inputs
- 7a3c43d: feat(pdf): pdf-viewer component

## 0.2.0-beta.11

### Minor Changes

- aa908e4: Redesign filter list collapse into separate render tree and simplify header layout

## 0.2.0-beta.10

### Minor Changes

- 05618c3: Add validation state to editable cell

## 0.2.0-beta.9

### Minor Changes

- 1135a27: Update Blueprint css import

## 0.2.0-beta.8

### Minor Changes

- 447e29d: Update editable table UX and API to pass the entire row data on edit

## 0.2.0-beta.7

### Minor Changes

- 35f2f1a: Add Media inputs/outputs for Queries

## 0.2.0-beta.6

### Minor Changes

- 9893b41: Add storybook

## 0.2.0-beta.5

### Minor Changes

- dba18e0: Fix css build

## 0.2.0-beta.4

### Minor Changes

- 9c54ee5: Support editable cell

## 0.2.0-beta.3

### Minor Changes

- 4c7884f: Add custom column, multi column sort and column config

## 0.2.0-beta.2

### Minor Changes

- 5ad3ba1: Fix conflicting dependencies and add docs

## 0.1.0-beta.1

### Minor Changes

- 30617fa: Support sorting and column pinning. Export BaseTable

## 0.1.0-beta.0

### Minor Changes

- 476604f: Apply table styling

## 0.0.1

### Minor Changes

- Initial release of styling package for OSDK React components
