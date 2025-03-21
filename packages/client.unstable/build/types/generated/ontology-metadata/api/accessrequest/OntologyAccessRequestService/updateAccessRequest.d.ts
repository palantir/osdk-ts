import { type ConjureContext } from "conjure-lite";
import type { AccessRequestRid } from "../../AccessRequestRid.js";
import type { UpdateAccessRequestRequest } from "../UpdateAccessRequestRequest.js";
import type { UpdateAccessRequestResponse } from "../UpdateAccessRequestResponse.js";
/**
* Throws:
* - InsufficientPermissions if the user updating the request isn't the same user who created the request.
* - InvalidUpdateForAccessSubRequest if:
* - For a InternalRealmGroupAdditionSubRequest:
* - The group requested does not have roles on the ontology entity
* - The group is deleted
* - The requesting principal is a group and the requesting user is not a member of the group the user is
* requesting access on behalf of
* - The expiration is not in the future or doesn't satisfy the group's expiration settings
* - For a RoleGrantSubRequest:
* - The request principal is a group the requesting user isn't a member of
* - The role is invalid.
* - The same subrequest is edited and removed at once
* - Any of the access subrequests don't exist
*/
export declare function updateAccessRequest(ctx: ConjureContext, accessRequestRid: AccessRequestRid, updateAccessRequest: UpdateAccessRequestRequest): Promise<UpdateAccessRequestResponse>;
