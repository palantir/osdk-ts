---
"@osdk/client": minor
"@osdk/react": minor
---

Fix `observeObjectSet`/`useObjectSet` returning underlying object-type property names (e.g. `documentId`) instead of interface shared-property-type names (e.g. `mediaId`) for interface base object sets. Interface results are now re-projected to the interface view, optimistic updates are matched and projected correctly, and invalidating an implementing object type revalidates the set. Adds a `resolveToObjectType` option (interface bases only) to opt into raw object instances.
