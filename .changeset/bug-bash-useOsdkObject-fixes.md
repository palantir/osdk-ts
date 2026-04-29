---
"@osdk/react": patch
---

surface fetch errors through useOsdkObject's `error` and clear `isLoading`

When the underlying fetch fails (e.g. `PalantirApiError: Object not found`), `useOsdkObject` now returns the error through `error` and exits the loading state so consumers can render their error UI instead of waiting forever.
