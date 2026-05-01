---
"@osdk/api": patch
---

add hover-types snapshot test for `ObjectSet` user-facing methods. internal-only — exercises `checker.typeToString` against curated probes and snapshots the formatted output, so future type-graph changes surface as snapshot diffs in code review. no published surface affected.
