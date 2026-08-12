---
"@osdk/react-components": minor
---

FilterList: support both controlled and uncontrolled collapse. The collapse control is opted into with the new `enableCollapse` prop and no longer depends on `onCollapsedChange`, which is now purely an event listener that fires in both modes. Pass `collapsed` for controlled mode or the new `defaultCollapsed` to seed uncontrolled mode; `collapsed` takes precedence when both are given, matching `ObjectTable`'s `orderBy`/`defaultOrderBy`. Previously `collapsed` did nothing unless `onCollapsedChange` was also supplied, and setting a collapse prop without `enableCollapse` now warns in development instead of being silently ignored.
