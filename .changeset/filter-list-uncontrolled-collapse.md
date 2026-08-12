---
"@osdk/react-components": minor
---

FilterList: make collapse an uncontrolled feature. The collapse control now always renders and works without `onCollapsedChange`, which becomes a pure observer. Adds `defaultCollapsed` to seed the initial state and `enableCollapse` (default `true`) to remove the control; deprecates `collapsed`, which previously did nothing at all unless `onCollapsedChange` was also supplied.
