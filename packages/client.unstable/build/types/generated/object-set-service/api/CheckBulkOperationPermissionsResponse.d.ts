import type { VersionedObjectSetRid } from "./VersionedObjectSetRid.js";
/**
* A map from versioned object set RID to whether the user has permission to perform the requested operation.
*/
export interface CheckBulkOperationPermissionsResponse {
	hasOperationOnVersionedObjectSet: Record<VersionedObjectSetRid, boolean>;
}
