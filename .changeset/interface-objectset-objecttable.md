---
"@osdk/react-components": patch
---

ObjectTable now honors a caller-supplied `objectSet` for interface types (previously it was ignored for interfaces and the table fell back to fetching by type, leaving only a property `where` to filter). This lets an interface-backed table be driven by a composed/filtered object set, e.g. a pivot-derived set. For an interface object set, rows expose the interface's declared properties (plus any `withProperties`); concrete-only properties are not loaded.
