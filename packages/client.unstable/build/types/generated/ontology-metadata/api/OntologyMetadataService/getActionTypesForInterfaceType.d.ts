import { type ConjureContext } from "conjure-lite";
import type { GetActionTypesForInterfaceTypeRequest } from "../GetActionTypesForInterfaceTypeRequest.js";
import type { GetActionTypesForInterfaceTypeResponse } from "../GetActionTypesForInterfaceTypeResponse.js";
/**
* Gets all the action types that the interface type is associated with. E.g. actions that create an interface
* object, edit an interface object, or use the interface as a parameter. Also returns actions that are
* associated with an interface type that the interface type extends.
*/
export declare function getActionTypesForInterfaceType(ctx: ConjureContext, request: GetActionTypesForInterfaceTypeRequest): Promise<GetActionTypesForInterfaceTypeResponse>;
