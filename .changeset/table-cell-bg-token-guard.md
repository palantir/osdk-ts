---
"@osdk/react-components": patch
---

Document in `table.css` why `--osdk-table-cell-bg` must stay undeclared (declaring `inherit` at `:root` turns sticky pinned cells transparent) and sanction the nested-primitive token-scoping pattern in the styling guidelines
