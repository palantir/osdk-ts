---
"@osdk/client": minor
---

Move scenario APIs to `@osdk/client`, rename `EXPERIMENTAL_ScenarioClient` to `ScenarioClient`, and rename `getEditedEntities`, `editedEntitiesAsyncIter`, and `EditedEntitiesPage` to `getEditedObjects`, `editedObjectsAsyncIter`, and `EditedObjectsPage`. Keep conflict methods and their page type in beta with an `EXPERIMENTAL_DO_NOT_USE_` prefix.
