import type { NumericInternalInterpolation } from "./NumericInternalInterpolation.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
export interface PropertyTypeReferenceOrNumericInternalInterpolation_propertyType {
	type: "propertyType";
	propertyType: PropertyTypeId;
}
export interface PropertyTypeReferenceOrNumericInternalInterpolation_internalInterpolation {
	type: "internalInterpolation";
	internalInterpolation: NumericInternalInterpolation;
}
export type PropertyTypeReferenceOrNumericInternalInterpolation = PropertyTypeReferenceOrNumericInternalInterpolation_propertyType | PropertyTypeReferenceOrNumericInternalInterpolation_internalInterpolation;
