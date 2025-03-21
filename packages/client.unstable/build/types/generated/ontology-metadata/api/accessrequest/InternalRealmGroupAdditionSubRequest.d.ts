import type { GroupId } from "../GroupId.js";
import type { PrincipalId } from "../PrincipalId.js";
/**
* A request for a principal to be added to a multipass group.
*
* The principal's access to the project will be dictated by the roles granted on
* the MP group which are subject to change from the roles displayed at time
* of request.
*/
export interface InternalRealmGroupAdditionSubRequest {
	groupId: GroupId;
	principal: PrincipalId;
	expiresBy: string | undefined;
}
