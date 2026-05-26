---
"@osdk/api": patch
---

reject numeric literals on derived-property numeric expressions at compile time

The runtime never supported numeric literals as arguments to `add`/`subtract`/`multiply`/`divide`/`max`/`min` on derived properties — passing one would throw `Invariant failed: Literals for derived properties are not yet supported`. The type signature is now tightened to match the runtime, so the error surfaces at compile time instead. Pass another numeric derived property (e.g. `selectedInteger`) as the argument, or clamp/transform the value at the consumer.
