import { type ConjureContext } from "conjure-lite";
import type { ActionTypeGetOrganizationsRequest } from "../../ActionTypeGetOrganizationsRequest.js";
import type { ActionTypeGetOrganizationsResponse } from "../../ActionTypeGetOrganizationsResponse.js";
/**
* This is an experimental endpoint and does not have any backwards-compatibility guarantees.
* Please contact the Ontology team if you wish to use it.
* Endpoint to batch load organization rids per ActionType. The response will only contain entries for
* ActionTypeRid(s) paired with Organizations that are visible to the user.
*/
export declare function getOrganizations(ctx: ConjureContext, request: ActionTypeGetOrganizationsRequest): Promise<ActionTypeGetOrganizationsResponse>;
