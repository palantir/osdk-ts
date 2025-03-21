import type { ValueTypeUsageMismatchPropertyTypeError } from "./ValueTypeUsageMismatchPropertyTypeError.js";
import type { ValueTypeUsageMismatchScaleOrPrecisionError } from "./ValueTypeUsageMismatchScaleOrPrecisionError.js";
import type { ValueTypeUsageMismatchStructFieldError } from "./ValueTypeUsageMismatchStructFieldError.js";
import type { ValueTypeUsageMissingStructFieldError } from "./ValueTypeUsageMissingStructFieldError.js";
export interface BaseValueTypeUsageError_mismatchPropertyType {
	type: "mismatchPropertyType";
	mismatchPropertyType: ValueTypeUsageMismatchPropertyTypeError;
}
export interface BaseValueTypeUsageError_mismatchStructField {
	type: "mismatchStructField";
	mismatchStructField: ValueTypeUsageMismatchStructFieldError;
}
export interface BaseValueTypeUsageError_missingStructField {
	type: "missingStructField";
	missingStructField: ValueTypeUsageMissingStructFieldError;
}
export interface BaseValueTypeUsageError_mismatchScaleOrPrecision {
	type: "mismatchScaleOrPrecision";
	mismatchScaleOrPrecision: ValueTypeUsageMismatchScaleOrPrecisionError;
}
/**
* Shared validation errors for usage of value types across property types and shared property types.
*/
export type BaseValueTypeUsageError = BaseValueTypeUsageError_mismatchPropertyType | BaseValueTypeUsageError_mismatchStructField | BaseValueTypeUsageError_missingStructField | BaseValueTypeUsageError_mismatchScaleOrPrecision;
