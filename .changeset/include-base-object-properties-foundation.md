---
"@osdk/client": patch
---

internal plumbing for upcoming `$includeAllBaseObjectProperties` option on observable hooks; no public behavior change. adds a no-op getter on `BaseListQuery` (subclasses opt in), threads the flag through `ObjectsHelper.storeOsdkInstances`, and exposes a `$includeAllBaseObjectProperties` field on `ObserveObjectOptions` that has no consumer yet.
