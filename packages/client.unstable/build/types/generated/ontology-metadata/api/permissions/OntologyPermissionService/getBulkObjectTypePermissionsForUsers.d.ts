import { type ConjureContext } from "conjure-lite";
import type { GetBulkObjectTypePermissionsForUsersRequest } from "../GetBulkObjectTypePermissionsForUsersRequest.js";
import type { GetBulkObjectTypePermissionsForUsersResponse } from "../GetBulkObjectTypePermissionsForUsersResponse.js";
/**
* Returns permissions that other users have on the ObjectTypes provided. The result is scoped down to the
* permissions that the calling authHeader has. If the provided authHeader does not have a certain permission,
* the value returned in the response is not well defined, because we can't tell the provided authHeader whether
* another user has a certain permission if they don't have it themselves. For example, if the provided authHeader
* cannot edit a object type, then the returned boolean for whether another user has edit access to that object type
* can be either true or false. In other words, this endpoint only provides accurate information about
* permissions that the provided authHeader themselves have.
*
* Any object types that the provided auth header does not have view access to will not be returned in the
* response. Limited to at most 50 entries per call.
*/
export declare function getBulkObjectTypePermissionsForUsers(ctx: ConjureContext, request: GetBulkObjectTypePermissionsForUsersRequest): Promise<GetBulkObjectTypePermissionsForUsersResponse>;
