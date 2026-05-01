---
"@osdk/api": patch
---

Remove the unused internal `Constant<Q>` type from `DerivedProperty.ts`. Disconnected from the `Builder` chain in #2858 (Remove RDP Literals); never exported, no consumers. No public-API change.
