import type { NonNumericInternalInterpolation } from "./NonNumericInternalInterpolation.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
export interface PropertyTypeReferenceOrNonNumericInternalInterpolation_propertyType {
	type: "propertyType";
	propertyType: PropertyTypeId;
}
export interface PropertyTypeReferenceOrNonNumericInternalInterpolation_internalInterpolation {
	type: "internalInterpolation";
	internalInterpolation: NonNumericInternalInterpolation;
}
export type PropertyTypeReferenceOrNonNumericInternalInterpolation = PropertyTypeReferenceOrNonNumericInternalInterpolation_propertyType | PropertyTypeReferenceOrNonNumericInternalInterpolation_internalInterpolation;
