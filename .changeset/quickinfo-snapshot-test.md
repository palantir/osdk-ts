---
"@osdk/api": patch
---

add quickinfo snapshot tests for high-traffic SDK surfaces (`ObjectSet`, `Osdk.Instance`, `AggregationsResults`, `Actions`, `Queries`, `DerivedProperty` builder, per-property `WhereClause` filter unions, subscribe message variants). internal-only — exercises `checker.typeToString` against curated probes and snapshots the formatted output, so future type-graph changes surface as snapshot diffs in code review. no published surface affected.
