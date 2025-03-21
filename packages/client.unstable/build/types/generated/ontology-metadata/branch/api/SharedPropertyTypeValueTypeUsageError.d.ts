import type { SharedPropertyTypeRidOrIdInRequest } from "../../api/SharedPropertyTypeRidOrIdInRequest.js";
import type { BaseValueTypeUsageError } from "./BaseValueTypeUsageError.js";
/**
* Validation error using a value type with a shared property type.
*/
export interface SharedPropertyTypeValueTypeUsageError {
	sharedPropertyTypeRidOrIdInRequest: SharedPropertyTypeRidOrIdInRequest;
	error: BaseValueTypeUsageError;
}
