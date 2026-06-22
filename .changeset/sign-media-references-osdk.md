---
"@osdk/api": patch
"@osdk/client": patch
"@osdk/react": patch
---

Expose `$signMediaReferences` opt-in on `useOsdkObjects`, `fetchPage`, `asyncIter`, and `observeList` so callers can request signed `MediaReference.token` values on list/search paths. Bumps the platform SDK catalog to 2.64.0.
