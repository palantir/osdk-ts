---
"@osdk/react-components": patch
---

Generate the props reference tables for components directly from their props interfaces so the docs can no longer drift from the source. A component-agnostic `gen-props` script regenerates any doc whose AUTOGEN markers declare a `src` file and `interface`, and a `check-gen-props` task (added to CI) fails on drift via `--check`.
