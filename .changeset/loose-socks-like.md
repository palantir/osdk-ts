---
"@osdk/react": patch
---

Add backward compatibility to OsdkProvider2 by also providing OsdkContext

OsdkProvider2 now provides both OsdkContext2 and the original OsdkContext, enabling existing hooks like useOsdkClient and useOsdkMetadata to work with OsdkProvider2. This allows OsdkProvider2 to serve as a complete replacement for OsdkProvider while maintaining backward compatibility.
