---
"@osdk/client": patch
"@osdk/api": patch
---

fix applyAction: process every ActionResults field so useList and useLinks refresh without a manual invalidateObjectType call after actions

- tombstone deleted objects before invalidating so subscribers never observe a spurious "loading" state
- invalidate the union of object types from editedObjectTypes, added/modified/deleted objects, and both sides of added/deleted links
- narrow ActionResults.editedObjectTypes from Array&lt;String&gt; to Array&lt;string&gt;
