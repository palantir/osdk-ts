import { type ConjureContext } from "conjure-lite";
import type { GetActionTypesForObjectTypeRequest } from "../GetActionTypesForObjectTypeRequest.js";
import type { GetActionTypesForObjectTypeResponse } from "../GetActionTypesForObjectTypeResponse.js";
/**
* Gets all the action types that the object type is associated with. E.g. actions that create an object, edit
* an object, or use the object as a parameter. Also returns actions that are associated with an interface type
* that the object type implements.
*/
export declare function getActionTypesForObjectType(ctx: ConjureContext, request: GetActionTypesForObjectTypeRequest): Promise<GetActionTypesForObjectTypeResponse>;
