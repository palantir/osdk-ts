---
"@osdk/react-components": minor
---

ObjectTable: support per-row edit configuration via `editable: (rowData) => boolean`, add `getRowAttributes` prop for conditional row styling via data attributes, replace `editFieldConfig.fieldComponentProps` with `editFieldConfig.getFieldComponentProps(rowData)` so editor configuration can vary per row, and add a `showEditFooter` prop to opt out of the built-in edit footer.
