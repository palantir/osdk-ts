import { type ConjureContext } from "conjure-lite";
import type { ActionTypeModifyRequest } from "../../ActionTypeModifyRequest.js";
import type { ActionTypeModifyResponse } from "../../ActionTypeModifyResponse.js";
import type { OntologyRid } from "../../OntologyRid.js";
/**
* Endpoint to modify ActionTypes.
*/
export declare function modifyActionTypes(ctx: ConjureContext, ontologyRid: OntologyRid | undefined, request: ActionTypeModifyRequest): Promise<ActionTypeModifyResponse>;
