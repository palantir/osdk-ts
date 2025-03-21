import { type ConjureContext } from "conjure-lite";
import type { ActionTypeLoadRequest } from "../../ActionTypeLoadRequest.js";
import type { ActionTypeLoadResponse } from "../../ActionTypeLoadResponse.js";
/**
* Endpoint to batch load Action Types. The returned ActionTypeLoadResponse will only contain Actions that
* are visible to the user.
*/
export declare function loadActionTypes(ctx: ConjureContext, onBehalfOf: string | undefined, request: ActionTypeLoadRequest): Promise<ActionTypeLoadResponse>;
