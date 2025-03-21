import type { VersionedObjectSetRid } from "./VersionedObjectSetRid.js";
/**
* A bulk request for getting versioned object sets identified by given versioned object set rids.
*/
export interface GetBulkLatestVersionRequest {
	versionedObjectSetRids: Array<VersionedObjectSetRid>;
}
