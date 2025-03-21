import type { VersionedActionTypeRid } from "./VersionedActionTypeRid.js";
/**
* ActionTypes were not found.
*/
export interface VersionedActionTypesNotFoundError {
	versionedActionTypeRids: Array<VersionedActionTypeRid>;
}
