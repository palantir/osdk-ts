import { type ConjureContext } from "conjure-lite";
import type { ActionTypeGetOrganizationsRequest } from "../../ActionTypeGetOrganizationsRequest.js";
import type { DeprecatedActionTypeGetOrganizationsResponse } from "../../DeprecatedActionTypeGetOrganizationsResponse.js";
/**
* This is an experimental endpoint and does not have any backwards-compatibility guarantees.
* Please contact the Ontology team if you wish to use it.
* Endpoint to batch load organization rids per ActionType. This endpoint throws if requesting user does not
* have relevant permissions to discover the organization for any of the action type rids requested.
* The response will only contain entries for ActionTypeRid(s) that are visible to the user.
*/
export declare function deprecatedGetOrganizations(ctx: ConjureContext, request: ActionTypeGetOrganizationsRequest): Promise<DeprecatedActionTypeGetOrganizationsResponse>;
