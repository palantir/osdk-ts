# Observable Client

The reactive layer that subscribes to object sets and lists, caches results, and re-sorts/re-filters them client-side as the cache updates.

## Language

**String-encoded numeric type**:
A property type the wire protocol serializes as a JSON string to preserve precision: `long` and `decimal`. These sort lexicographically unless compared by value. Contrast with `integer`/`double`, which arrive as JS numbers and sort numerically for free.
_Avoid_: "numeric string" (ambiguous — that's any string that looks like a number).

**Derived property (RDP)**:
A runtime-derived property produced by a `withProperties` clause on an object set (e.g. a `pivotTo(...).selectProperty(...)` selection or a `min`/`max` aggregation). Its declared type is not on the object/interface definition; it is recovered from `DerivedPropertyRuntimeMetadata`.
_Avoid_: "computed property", "synthetic property".

**Holder**:
The internal carrier object (`ObjectHolder` / `InterfaceHolder`) that backs an OSDK instance and carries definition references (`ObjectDefRef`, `InterfaceDefRef`) alongside the raw property values.
_Avoid_: "wrapper", "proxy".
