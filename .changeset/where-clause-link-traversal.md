---
"@osdk/api": minor
"@osdk/client": minor
"@osdk/react-components": minor
---

add link traversal support to WhereClause

WhereClause now accepts link-keyed entries that the OSDK expands to ObjectSet pivot+intersect compositions when applying `where()`. FilterList emits these as part of `filterClause` so direct property facet counts reflect linked-filter selection automatically — no external pivot-and-intersect helper is required.

• new `LinkWhereClause<T>` public type on `@osdk/api`
• `.where()` runtime detects link entries via the `$reverseLink` sentinel and composes searchAround → filter → searchAround → intersect against the base; `$and`/`$or`/`$not` compose via intersect/union/subtract
• filter-list `LINKED_PROPERTY` case emits `{ [linkName]: { $reverseLink, ...inner } }`
• new `reverseLinkName` field on `LinkedPropertyFilterDefinition` feeds the emitted `$reverseLink`
