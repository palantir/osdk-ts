import type { VersionedActionTypeRid } from "./VersionedActionTypeRid.js";
/**
* Request to batch load ActionTypes at specified version. No more than 100 should be requested.
*/
export interface ActionTypeLoadVersionedRequest {
	actionTypes: Array<VersionedActionTypeRid>;
}
