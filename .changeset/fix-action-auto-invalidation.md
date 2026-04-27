---
"@osdk/client": patch
"@osdk/api": patch
"@osdk/faux": patch
---

fix applyAction: process every ActionResults field so useList and useLinks refresh without a manual invalidateObjectType call after actions

- mark deleted objects with a "tombstone" sentinel in the cache (so subscribers immediately see object: undefined) before invalidating, instead of triggering a refetch that would 404 against the just-deleted object
- invalidate the union of object types from editedObjectTypes, added/modified/deleted objects, and both sides of added/deleted links
- narrow ActionResults.editedObjectTypes from Array&lt;String&gt; to Array&lt;string&gt;
- faux: FauxDataStoreBatch.removeLink now records a deleteLink edit so action responses include link deletions
- faux: FauxOntology.registerActionType accepts an optional `{ returnLargeScaleEdits }` flag to simulate largeScaleEdits responses in tests
