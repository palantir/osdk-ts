---
"@osdk/react-components": patch
"@osdk/react": patch
---

Pin the `@osdk/aip-core` peerDependency range to `>=0.5.0 <1.0.0` instead of `workspace:^` so a minor bump of `@osdk/aip-core` (e.g. 0.5.0 -> 0.6.0) no longer falls out of the caret range and triggers a major-bump cascade across the release plan.
