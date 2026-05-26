---
"@osdk/client": patch
---

Add `getEditedEntityTypes`, `getEditedEntities` (paginated), and `editedEntitiesAsyncIter` (auto-paginating, deduped) methods to `ScenarioClient`. Lets consumers discover which object types and primary keys have been edited within a scenario for diff and merge workflows. Beta — surface may change.
