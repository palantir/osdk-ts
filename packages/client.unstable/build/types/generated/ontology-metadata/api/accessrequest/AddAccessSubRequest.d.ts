import type { AccessSubRequestModification } from "./AccessSubRequestModification.js";
/**
* An update to add a subrequest to an access request.
*/
export interface AddAccessSubRequest {
	subRequestModification: AccessSubRequestModification;
}
