---
"@osdk/client": patch
---

Fix interface-link pivotTo on reference-scoped (hydrated) object sets emitting an object set the backend rejects with Api:UnsupportedObjectSet when further pivoted. The observable layer now also resolves asType object sets, so observing a narrowToType or a pivoted hydrated interface set no longer throws.
