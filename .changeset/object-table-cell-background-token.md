---
"@osdk/react-components": minor
---

Add `--osdk-table-cell-bg` CSS variable on `ObjectTable` / `BaseTable`
cells, and tag each `<td>` with `data-editable="true"` when the cell renders
as editable. The variable defaults to `inherit`, preserving current visuals.

Renamed `--osdk-table-cell-editable-bg` to `--osdk-table-cell-input-bg`. 

Combine the two to highlight editable cells before any row is clicked into,
without altering component logic:

```css
.my-table td[data-editable] {
  --osdk-table-cell-bg: var(--my-editable-tint);
}
```
