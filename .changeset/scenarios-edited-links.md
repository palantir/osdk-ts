---
"@osdk/client": patch
---

Add `getEditedLinkTypes`, `getEditedLinks` (paginated, flattened to directed link triples), and `editedLinksAsyncIter` (auto-paginating, deduped by source/target pk) methods to `ScenarioClient`. Mirrors the existing `experimental_asyncIterLinks` shape on ObjectSet. Many-to-many only — one-to-many edits surface via `getEditedEntities` on the FK-owning object type. Beta — surface may change.
