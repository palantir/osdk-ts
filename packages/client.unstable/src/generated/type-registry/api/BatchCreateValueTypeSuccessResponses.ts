/**/
import type { ValueTypeIdInRequest } from "./ValueTypeIdInRequest.js";
import type { CreateValueTypeResponse } from "./CreateValueTypeResponse.js";

/**
 * A successful response to a batch create value types request. All ids present in the request should be
 * present in this response.
 */
export interface BatchCreateValueTypeSuccessResponses {
valueTypesCreated: Record<ValueTypeIdInRequest, CreateValueTypeResponse>;
}