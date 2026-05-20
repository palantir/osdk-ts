---
"@osdk/api": patch
---

Split `fetchPage` and `fetchPageWithErrors` into two overloads (with/without `$applyModifiers`) so the common no-modifier hover output renders as `Osdk.Instance<Q, …, PropertyKeys<Q>, {}>` instead of an expanded property union with a spurious `| undefined` (and the new struct/array properties incorrectly excluded).
