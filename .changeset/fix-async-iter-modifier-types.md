---
"@osdk/api": patch
---

Fix `asyncIter()` result types to reflect `$applyModifiers`, including scalar values returned by array reducers.

Preserve generic result types for `asyncIter()`, `fetchPage()`, and `fetchPageWithErrors()` when no specific modifiers are known.

Fix `fetchPageWithErrors()` to infer property security metadata from `$loadPropertySecurityMetadata`, matching `fetchPage()`. Append the new type parameter to preserve its original explicit generic parameter order.

Add typed `$applyModifiers` support to `fetchOne()` and `fetchOneWithErrors()`, including reduced arrays and extracted struct main values.

Apply modifier result types to `$link` single-object fetches, preserving selections, included RIDs, and existing explicit option type arguments. Support `$loadPropertySecurityMetadata` and include `$propertySecurities` in their result types when requested.
