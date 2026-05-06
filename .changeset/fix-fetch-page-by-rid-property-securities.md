---
"@osdk/api": minor
"@osdk/client": patch
---

thread `PROPERTY_SECURITIES` through `FetchPageResult` so `$loadPropertySecurityMetadata: true` is accepted on the experimental `fetchPageByRid` client method and `$propertySecurities` is correctly typed on returned objects. add `FetchPageOptions` and `FetchPageReturn` aliases that pin the `fetchPage`-shaped slots of `FetchPageArgs`/`FetchPageResult`, and have both `fetchPage` and `fetchPageByRid` consume them so wrappers can no longer drift from the underlying call.
