import { type ConjureContext } from "conjure-lite";
import type { CreateAccessRequestRequest } from "../CreateAccessRequestRequest.js";
import type { CreateAccessRequestResponse } from "../CreateAccessRequestResponse.js";
/**
* Throws:
* - InvalidAccessRequest if:
* - If for a InternalRealmGroupAdditionSubRequest:
* - The group requested does not have roles on the ontology entity
* - The group is deleted
* - The requesting principal is a group and the requesting user is not a member of the group the user is
* requesting access on behalf of
* - The expiration is not in the future or doesn't satisfy the group's expiration settings
* - If for a RoleGrantSubRequest:
* - The request principal is a group the requesting user isn't a member of
* - The role is invalid.
* - NotFound if the ontology entity doesn't exist
*/
export declare function createAccessRequest(ctx: ConjureContext, request: CreateAccessRequestRequest): Promise<CreateAccessRequestResponse>;
