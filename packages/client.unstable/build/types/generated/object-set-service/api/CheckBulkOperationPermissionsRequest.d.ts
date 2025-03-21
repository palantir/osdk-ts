import type { VersionedObjectSetOperation } from "./VersionedObjectSetOperation.js";
import type { VersionedObjectSetRid } from "./VersionedObjectSetRid.js";
/**
* A bulk request for checking if the user has operation permission on the given versioned object set rids.
*/
export interface CheckBulkOperationPermissionsRequest {
	versionedObjectSetRids: Array<VersionedObjectSetRid>;
	operation: VersionedObjectSetOperation;
}
