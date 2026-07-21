---
"@osdk/react-components": minor
---

Add creatable combobox support to `DropdownField`: pass `createItemFromQuery` to offer a synthetic "Create …" item that commits a user-entered value (click or Enter) coerced by the caller, with an optional `renderCreateLabel` for the item label. Works for single-select and multi-select (creatable tag input).
