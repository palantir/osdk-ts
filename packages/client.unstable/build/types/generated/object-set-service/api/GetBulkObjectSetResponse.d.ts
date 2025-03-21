import type { GetObjectSetResponse } from "./GetObjectSetResponse.js";
import type { ObjectSetRid } from "./ObjectSetRid.js";
/**
* Response to GetBulkObjectSetRequest, containing a map from object set rid to responses for queried object sets.
*/
export interface GetBulkObjectSetResponse {
	objectSetResponses: Record<ObjectSetRid, GetObjectSetResponse>;
}
