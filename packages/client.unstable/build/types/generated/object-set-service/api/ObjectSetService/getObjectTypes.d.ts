import { type ConjureContext } from "conjure-lite";
import type { GetObjectTypesRequest } from "../GetObjectTypesRequest.js";
import type { GetObjectTypesResponse } from "../GetObjectTypesResponse.js";
/**
* Returns types of objects that can be present in the supplied object set based on its definition at the time
* of the request.
*
* Note that this endpoint does not perform a full evaluation of the supplied object set - the guarantees provided
* are that only the returned object types can be present in the supplied object set at the time of the request.
* It is not however guaranteed that there in fact is at least one object of each returned object type - consider
* using aggregations instead if false-positives are not desired.
*
* Note that object types belonging to an object set can change over time - this information should be treated as
* dynamic and should not be persisted or treated as immutable.
*/
export declare function getObjectTypes(ctx: ConjureContext, request: GetObjectTypesRequest): Promise<GetObjectTypesResponse>;
