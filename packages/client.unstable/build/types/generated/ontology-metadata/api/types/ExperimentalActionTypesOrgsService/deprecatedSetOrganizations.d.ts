import { type ConjureContext } from "conjure-lite";
import type { DeprecatedActionTypeSetOrganizationsRequest } from "../../DeprecatedActionTypeSetOrganizationsRequest.js";
/**
* This is an experimental endpoint and does not have any backwards-compatibility guarantees.
* Please contact the Ontology team if you wish to use it.
* Endpoint to batch set organization markings on ActionTypes. The requesting user
* should have permissions to modify the specified ActionTypeRid(s) and have
* relevant permissions to apply the specified organizations' markings.
*/
export declare function deprecatedSetOrganizations(ctx: ConjureContext, request: DeprecatedActionTypeSetOrganizationsRequest): Promise<void>;
