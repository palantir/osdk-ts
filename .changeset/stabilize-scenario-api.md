---
"@osdk/client": minor
---

Move scenario APIs to `@osdk/client`, rename `EXPERIMENTAL_ScenarioClient` to `ScenarioClient`, and rename `getEditedEntities`, `editedEntitiesAsyncIter`, and `EditedEntitiesPage` to `getEditedObjects`, `editedObjectsAsyncIter`, and `EditedObjectsPage`. Keep rebase, conflict methods, and the conflict page type in beta with an `EXPERIMENTAL_DO_NOT_USE_` prefix. Remove `getEditedLinkTypes`; use the `linkTypes` field from `getEditedEntityTypes()` instead.
