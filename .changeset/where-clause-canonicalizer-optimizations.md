---
"@osdk/client": minor
---

feat(observable): Enhance WhereClauseCanonicalizer with advanced optimization capabilities

- Add flattening of nested $and and $or clauses for simplified query structures
- Implement property filter merging within $and clauses to reduce redundancy
- Add double negation elimination for $not clauses
- Ensure consistent sorting of clauses for deterministic canonicalization
- Add comprehensive test coverage for all optimization scenarios