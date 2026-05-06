---
"@osdk/react-components": patch
---

ObjectTable: when a column has both `renderCell` and `editable: true`, use `renderCell` while not in edit mode and the editable cell only after entering edit mode (relevant for `editMode: "manual"`). Previously `renderCell` always took precedence and editable cells never appeared.
