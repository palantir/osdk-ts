---
"@osdk/client": patch
"@osdk/api": patch
"@osdk/faux": patch
---

fix applyAction: process every ActionResults field so useList and useLinks refresh without a manual invalidateObjectType call after actions

- mark deleted objects with a "tombstone" sentinel in the cache (so subscribers immediately see object: undefined) before invalidating, instead of triggering a refetch that would 404 against the just-deleted object
- kick every cached specificLink query per type in editedObjectTypes via Store.invalidateLinkQueriesForType, so link queries refresh after actions (object/list queries already pick up changes through the per-object pipeline)
- narrow ActionResults.editedObjectTypes from Array&lt;String&gt; to Array&lt;string&gt;
- fix BaseListQuery.rdpConfig: it read otherKeys[RDP_IDX=4] which is LINK_NAME_IDX in SpecificLinkCacheKey, returning the link name string as the RDP config and corrupting derived ObjectCacheKeys; rdpConfig is now abstract with concrete overrides on ListQuery and SpecificLinkQuery
- faux: FauxDataStore.registerLink/unregisterLink now report FK-side modifications so FauxDataStoreBatch can record a modifyObject edit alongside addLink/deleteLink for foreign-key-backed links
- faux: FauxDataStoreBatch.removeLink now records a deleteLink edit so action responses include link deletions
- faux: FauxOntology.registerActionType accepts an optional `{ returnLargeScaleEdits }` flag to simulate largeScaleEdits responses in tests
