import type { CreateValueTypeRequest } from "./CreateValueTypeRequest.js";
import type { ValueTypeIdInRequest } from "./ValueTypeIdInRequest.js";
/**
* Request to create multiple Value Types at once. If more than 100 CreateValueTypeRequests are provided in
* request, service will throw an error.
*
* All requests need to share identical permissioning rid, otherwise service will throw an error.
*/
export interface BatchCreateValueTypesRequest {
	valueTypesToCreate: Record<ValueTypeIdInRequest, CreateValueTypeRequest>;
}
