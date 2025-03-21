/**
* The value type and property type are both decimal, but there is a precision or scale mismatch between them.
*/
export interface ValueTypeUsageMismatchScaleOrPrecisionError {
	valueTypeScale: number;
	valueTypePrecision: number;
	propertyScale: number | undefined;
	propertyPrecision: number | undefined;
}
