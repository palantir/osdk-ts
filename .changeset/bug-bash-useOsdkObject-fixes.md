---
"@osdk/client": patch
"@osdk/react": patch
---

fix sparse undefined slots in useOsdkObjects, accept undefined in useOsdkObject, and surface fetch errors

useOsdkObjects no longer emits a data array containing undefined slots while object subjects hydrate after the list cache key updates. useOsdkObject now accepts an undefined instance argument and short-circuits without subscribing. When the underlying fetch fails (e.g. PalantirApiError "Object not found"), useOsdkObject now surfaces the error through `error` and clears `isLoading`.
