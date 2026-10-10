---
"@osdk/client": minor
"@osdk/react": minor
---

Add an opt-in `objectSetInvalidation: "recursive"` setting to the observable client and `OsdkProvider`. Resolve known dependencies from the complete object-set expression and refetch nested queries when those dependencies change. The default retains existing cache keys and invalidation behavior. Multi-object-type results, unknown RID dependencies, and embedded RDP object-cache handling remain outside this change.
