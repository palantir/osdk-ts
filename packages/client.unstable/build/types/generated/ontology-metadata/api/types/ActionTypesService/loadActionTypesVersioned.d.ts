import { type ConjureContext } from "conjure-lite";
import type { ActionTypeLoadVersionedRequest } from "../../ActionTypeLoadVersionedRequest.js";
import type { ActionTypeLoadVersionedResponse } from "../../ActionTypeLoadVersionedResponse.js";
/**
* Endpoint to batch load Action Types at requested versions. The returned ActionTypeLoadVersionedResponse will only
* contain Action Types that are visible to the requesting user.
* It throws if any of the requested VersionedActionTypeRid(s) is not found or if more than 100 entities are requested.
*/
export declare function loadActionTypesVersioned(ctx: ConjureContext, request: ActionTypeLoadVersionedRequest): Promise<ActionTypeLoadVersionedResponse>;
