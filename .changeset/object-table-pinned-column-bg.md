---
"@osdk/react-components": patch
---

Fix `ObjectTable` pinned columns rendering with a transparent background, causing scrolled cells from non-pinned columns to bleed through and overlap pinned text. Regression introduced in v0.18.0 by the `--osdk-table-cell-bg` token — declaring `--osdk-table-cell-bg: inherit` at `:root` silently resolved to the guaranteed-invalid value (no parent to inherit from), so `var(--osdk-table-cell-bg)` fell back to `transparent`. The default is now expressed as a `var()` fallback (`var(--osdk-table-cell-bg, inherit)`) so unset cells inherit the row background while consumer overrides still apply.
