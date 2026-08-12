---
"@osdk/react-components": minor
---

FilterList: support both controlled and uncontrolled collapse. `onCollapsedChange` no longer gates the collapse control — it is now purely an event listener that fires in both modes. Pass `collapsed` for controlled mode or the new `defaultCollapsed` to seed uncontrolled mode; `collapsed` takes precedence when both are given. Previously `collapsed` did nothing unless `onCollapsedChange` was also supplied. The new `enableCollapse` prop defaults to `true`, so existing collapse setups keep working and lists that had no collapse control gain one; pass `enableCollapse={false}` to opt out.
