import { type ConjureContext } from "conjure-lite";
import type { TypeGroupGetOrganizationsRequest } from "../TypeGroupGetOrganizationsRequest.js";
import type { TypeGroupGetOrganizationsResponse } from "../TypeGroupGetOrganizationsResponse.js";
/**
* Endpoint to batch load organization rids per TypeGroup. The response will only contain entries for
* TypeGroupRid(s) paired with Organizations that are visible to the user. At most 500 TypeGroupRids can be
* requested in the same request.
*/
export declare function getOrganizationsForTypeGroups(ctx: ConjureContext, request: TypeGroupGetOrganizationsRequest): Promise<TypeGroupGetOrganizationsResponse>;
