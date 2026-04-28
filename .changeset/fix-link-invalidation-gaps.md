---
"@osdk/client": patch
---

fix link query refresh for per-pk invalidation and interface-typed targets

- kick `specificLink` queries from `Store.invalidateObject` so per-pk invalidation refreshes link queries (was only handled at type-level)
- fix `SpecificLinkQuery.invalidateObjectType` so interface-implementation matching on object-type targets isn't silently skipped
- fix `BaseListQuery.rdpConfig` index collision (`SpecificLinkCacheKey.otherKeys[4]` is the link name, not the rdp config); make `rdpConfig` abstract with concrete overrides per subclass
