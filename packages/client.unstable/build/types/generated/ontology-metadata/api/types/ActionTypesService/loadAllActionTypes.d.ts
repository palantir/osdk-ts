import { type ConjureContext } from "conjure-lite";
import type { ActionTypeLoadAllRequest } from "../../ActionTypeLoadAllRequest.js";
import type { ActionTypeLoadResponse } from "../../ActionTypeLoadResponse.js";
/**
* Endpoint to batch load ActionTypes. The returned ActionTypeLoadResponse will only contain ActionTypes that are
* visible to the user.
*/
export declare function loadAllActionTypes(ctx: ConjureContext, onBehalfOf: string | undefined, request: ActionTypeLoadAllRequest): Promise<ActionTypeLoadResponse>;
