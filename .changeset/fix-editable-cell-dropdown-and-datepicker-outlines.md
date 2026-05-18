---
"@osdk/react-components": patch
---

Fix two ObjectTable editable-cell visual issues:

- Dropdown cell no longer shows a phantom "edited" outline after clearing a
  never-set cell. `EditableCell` and `useEditableTable` now treat `null` and
  `undefined` as the same empty state when deciding whether an edit is a
  revert, so clearing a cell whose value was `undefined` removes the edit
  entry instead of leaving a stale "edited" indicator. `""` remains a
  distinct value — clearing an empty string still registers as an edit.
- Date picker cell now shows the same focus outline as the text input cell,
  and no longer renders the date picker's own box-shadow on top of the cell
  border. The cell wrapper also reserves a transparent border so focusing
  the picker doesn't shift layout.
