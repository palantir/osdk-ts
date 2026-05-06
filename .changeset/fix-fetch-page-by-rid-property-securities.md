---
"@osdk/api": patch
"@osdk/client": patch
---

thread `PROPERTY_SECURITIES` through `FetchPageResult` so `$loadPropertySecurityMetadata: true` is accepted on the experimental `fetchPageByRid` client method and `$propertySecurities` is correctly typed on the returned objects.
