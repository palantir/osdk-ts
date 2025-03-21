import { type ConjureContext } from "conjure-lite";
import type { LoadObjectsRequest } from "../LoadObjectsRequest.js";
import type { LoadObjectsResponse } from "../LoadObjectsResponse.js";
/**
* Returns loaded `FoundryObject`s from a list of at most 10_000 object identifiers. Any provided object locator
* on an object type rid or property type rid which does not exist (or is not visible) will throw a relevant
* exception.
*
* The API can result in the following errors instead of results:
* - TooManyObjectsRequested
* - NoObjectTypeFoundForRid
* - PropertyNotFoundForRid
*/
export declare function loadObjects(ctx: ConjureContext, request: LoadObjectsRequest): Promise<LoadObjectsResponse>;
