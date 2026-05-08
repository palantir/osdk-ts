---
"@osdk/client": minor
"@osdk/api": minor
---

Add experimental `__EXPERIMENTAL__NOT_SUPPORTED_YET__subscribeToNoTypeObjectSet` (from `@osdk/api/unstable`). Invoke via `client(__EXPERIMENTAL__NOT_SUPPORTED_YET__subscribeToNoTypeObjectSet).subscribeToNoTypeObjectSet(rid, listener, opts?)` to subscribe to an object set RID when the underlying object/interface type is unknown. Emits change notifications without hydrating property values.
