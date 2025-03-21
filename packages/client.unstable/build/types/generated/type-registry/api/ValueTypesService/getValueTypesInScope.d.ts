import { type ConjureContext } from "conjure-lite";
import type { GetValueTypesInScopeRequest } from "../GetValueTypesInScopeRequest.js";
import type { GetValueTypesInScopeResponse } from "../GetValueTypesInScopeResponse.js";
/**
* Returns the set of Value Type Rids available within a scope defined by the request.
*/
export declare function getValueTypesInScope(ctx: ConjureContext, request: GetValueTypesInScopeRequest): Promise<GetValueTypesInScopeResponse>;
