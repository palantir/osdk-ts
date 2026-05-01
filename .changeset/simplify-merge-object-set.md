---
"@osdk/api": patch
---

Short-circuit `MergeObjectSet<Q, D>` to `Q` when `D` has no keys. Removes `WithDerivedProperties<Q, {}>` from hover output for `where`, `subscribe`, and other ObjectSet method signatures on the common no-derived-properties path. No runtime change; structurally equivalent type.
