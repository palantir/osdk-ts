---
"@osdk/react-components": patch
---

Generate the props reference tables for ObjectTable, FilterList, ActionForm, CbacPicker, and DocumentViewer directly from their props interfaces so the docs can no longer drift from the source. A component-agnostic `gen-props` script regenerates any doc whose AUTOGEN markers declare a `src` file and `interface` (resolving `extends`, intersections, controlled/uncontrolled unions, and `Pick`/`Omit`), and a `check-gen-props` task (part of `pnpm turbo check`) fails on drift via `--check`.
