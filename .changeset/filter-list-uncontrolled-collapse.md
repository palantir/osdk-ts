---
"@osdk/react-components": minor
---

FilterList: make collapse an uncontrolled feature. Collapse is opted into with the new `enableCollapse` prop, and from then on the component owns the state: the control works without `onCollapsedChange`, which becomes a pure observer. Adds `defaultCollapsed` to seed the initial state, and deprecates `collapsed`, which previously did nothing at all unless `onCollapsedChange` was also supplied. Setting `defaultCollapsed` without `enableCollapse` now warns in development instead of doing nothing.
