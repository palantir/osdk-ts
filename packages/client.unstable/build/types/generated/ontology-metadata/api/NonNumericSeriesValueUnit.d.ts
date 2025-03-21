import type { PropertyTypeReferenceOrStringConstant } from "./PropertyTypeReferenceOrStringConstant.js";
/**
* The unit to accompany the non-numeric value of a Time Dependent property. Can be provided by a property or a
* user-inputted constant.
*/
export interface NonNumericSeriesValueUnit {
	customUnit: PropertyTypeReferenceOrStringConstant;
}
