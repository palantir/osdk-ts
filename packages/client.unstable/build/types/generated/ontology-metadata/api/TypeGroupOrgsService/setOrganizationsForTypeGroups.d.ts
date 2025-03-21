import { type ConjureContext } from "conjure-lite";
import type { TypeGroupSetOrganizationsRequest } from "../TypeGroupSetOrganizationsRequest.js";
/**
* Endpoint to batch set organization markings on TypeGroups. The requesting user
* should have permissions to modify the specified TypeGroupRid(s) and have
* relevant permissions to apply the specified organizations' markings. At most 50 TypeGroups can be set in the
* same request.
*/
export declare function setOrganizationsForTypeGroups(ctx: ConjureContext, request: TypeGroupSetOrganizationsRequest): Promise<void>;
