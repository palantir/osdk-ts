import type { CreateValueTypeFailure } from "./CreateValueTypeFailure.js";
import type { ValueTypeIdInRequest } from "./ValueTypeIdInRequest.js";
/**
* An unsuccessful response to a batch create value types request. At least one value type could not be
* created. The ids of the offending value type requests are present in this response.
*/
export interface BatchCreateValueTypeFailureResponses {
	valueTypeCreationFailures: Record<ValueTypeIdInRequest, CreateValueTypeFailure>;
}
