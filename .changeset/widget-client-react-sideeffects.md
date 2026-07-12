---
"@osdk/widget.client-react": patch
---

Mark the package as side-effect-free (`"sideEffects": false`) so consumers' bundlers can tree-shake unused exports (e.g. dropping `FoundryWidget` when only `useFoundryWidgetContext` is imported).
