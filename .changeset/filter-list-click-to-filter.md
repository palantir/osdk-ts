---
"@osdk/react-components": minor
---

Add `clickToFilter` to `DATE_RANGE` and `NUMBER_RANGE` property filter definitions in FilterList. When set to true, clicking a bar in the histogram replaces the filter range with that bucket's `[min, max]`. Off by default; clicking a second bar replaces the previous selection (multi-bucket / shift+click union not supported in v1).
