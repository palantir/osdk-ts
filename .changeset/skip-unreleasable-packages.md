---
"@osdk/tool.release": patch
---

Skip public packages that have no versions on npm during release so a new package added without trusted-publishing setup no longer blocks the pipeline, and add a PR check that fails when an unreleasable package would be merged.
