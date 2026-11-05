---
"@osdk/client": patch
---

Keep observable lists loading until their requested derived-property cache entries are available, so a plain query cannot cause useOsdkObjects to return undefined entries or finish loading before the RDP response arrives.
