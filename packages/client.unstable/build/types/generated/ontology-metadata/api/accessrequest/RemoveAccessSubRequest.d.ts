import type { AccessSubRequestRid } from "../AccessSubRequestRid.js";
/**
* An update to remove the subrequest with the specified RID from an access request.
*/
export interface RemoveAccessSubRequest {
	rid: AccessSubRequestRid;
}
