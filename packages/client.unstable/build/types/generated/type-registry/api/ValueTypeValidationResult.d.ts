import type { ValueTypeValidationFailure } from "./ValueTypeValidationFailure.js";
import type { ValueTypeValidationSuccess } from "./ValueTypeValidationSuccess.js";
export interface ValueTypeValidationResult_failure {
	type: "failure";
	failure: ValueTypeValidationFailure;
}
export interface ValueTypeValidationResult_success {
	type: "success";
	success: ValueTypeValidationSuccess;
}
export type ValueTypeValidationResult = ValueTypeValidationResult_failure | ValueTypeValidationResult_success;
