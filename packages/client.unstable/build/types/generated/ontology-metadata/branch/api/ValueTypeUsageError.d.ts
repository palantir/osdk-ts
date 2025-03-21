import type { PropertyTypeValueTypeUsageError } from "./PropertyTypeValueTypeUsageError.js";
import type { SharedPropertyTypeValueTypeUsageError } from "./SharedPropertyTypeValueTypeUsageError.js";
export interface ValueTypeUsageError_propertyTypeValueTypeUsageError {
	type: "propertyTypeValueTypeUsageError";
	propertyTypeValueTypeUsageError: PropertyTypeValueTypeUsageError;
}
export interface ValueTypeUsageError_sharedPropertyTypeValueTypeUsageError {
	type: "sharedPropertyTypeValueTypeUsageError";
	sharedPropertyTypeValueTypeUsageError: SharedPropertyTypeValueTypeUsageError;
}
/**
* Validation error using a value type in the ontology.
*/
export type ValueTypeUsageError = ValueTypeUsageError_propertyTypeValueTypeUsageError | ValueTypeUsageError_sharedPropertyTypeValueTypeUsageError;
