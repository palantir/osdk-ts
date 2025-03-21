import type { AccessRequestEntityRid } from "./AccessRequestEntityRid.js";
import type { AccessSubRequestModification } from "./AccessSubRequestModification.js";
/**
* A request for access to an ontology entity. AccessSubRequests can be used in conjunction to
* grant the desired permissions on an ontology entity. The title and description properties
* are not stored in the access request but rather, just passed through to the approvals service.
*/
export interface CreateAccessRequestRequest {
	title: string;
	description: string | undefined;
	entityRid: AccessRequestEntityRid;
	subRequests: Array<AccessSubRequestModification>;
}
