import type { AccessSubRequestRid } from "../AccessSubRequestRid.js";
import type { AccessSubRequestModification } from "./AccessSubRequestModification.js";
/**
* An update to an access subrequest used in an existing request.
*/
export interface EditAccessSubRequest {
	rid: AccessSubRequestRid;
	subRequestModification: AccessSubRequestModification;
}
