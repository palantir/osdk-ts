import type { AccessRequestRid } from "../AccessRequestRid.js";
import type { AccessRequestVersion } from "../AccessRequestVersion.js";
import type { AccessRequestEntityRid } from "./AccessRequestEntityRid.js";
import type { AccessSubRequest } from "./AccessSubRequest.js";
/**
* Metadata pertaining to a single access request.
*/
export interface AccessRequest {
	rid: AccessRequestRid;
	version: AccessRequestVersion;
	entityRid: AccessRequestEntityRid;
	subRequests: Array<AccessSubRequest>;
}
