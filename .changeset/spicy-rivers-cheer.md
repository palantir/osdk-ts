---
"@osdk/api": minor
"@osdk/client": minor
---

An empty `{}` operand of `$and`/`$or`/`$not` in a where clause is now a compile-time error instead of failing at runtime. Such an operand lowers to an empty AND on the wire, which some object-storage backends reject (`Core:InvalidAndFilter`), and is almost always a bug (e.g. a `cond ? {...} : {}` that fell through). Top-level `.where({})` remains a legal no-op. Adds and exports `NonEmptyWhereClause` for typing dynamically-built `$and`/`$or` arrays. Note: this tightens types, so code that previously compiled with an empty operand will now need to prune it (e.g. `.filter(v => Object.keys(v).length > 0)`).
