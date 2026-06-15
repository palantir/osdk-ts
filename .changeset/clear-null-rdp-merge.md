---
"@osdk/client": patch
---

Clear a runtime-derived-property (RDP) value when it becomes null. When merging an updated object into the cache, the RDP merge previously retained the stale value if the source omitted the field, which is how a now-null derived value arrives over the wire. The source query is now authoritative for the RDP fields it computed, so a cleared derived value propagates instead of showing the old value.
