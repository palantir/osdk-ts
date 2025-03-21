import type { BatchCreateValueTypeFailureResponses } from "./BatchCreateValueTypeFailureResponses.js";
import type { BatchCreateValueTypeSuccessResponses } from "./BatchCreateValueTypeSuccessResponses.js";
export interface BatchCreateValueTypesResponse_success {
	type: "success";
	success: BatchCreateValueTypeSuccessResponses;
}
export interface BatchCreateValueTypesResponse_failure {
	type: "failure";
	failure: BatchCreateValueTypeFailureResponses;
}
/**
* Batch value type creation is all-or-nothing. Either all the requested value types are created successfully,
* or none of them are created if a single creation request fails.
*/
export type BatchCreateValueTypesResponse = BatchCreateValueTypesResponse_success | BatchCreateValueTypesResponse_failure;
