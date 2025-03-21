import type { NonNumericSeriesValueUnit } from "./NonNumericSeriesValueUnit.js";
import type { PropertyTypeReferenceOrNonNumericInternalInterpolation } from "./PropertyTypeReferenceOrNonNumericInternalInterpolation.js";
/**
* Configuration for non-numeric series.
*/
export interface TimeDependentNonNumericSeriesFormat {
	defaultInternalInterpolation: PropertyTypeReferenceOrNonNumericInternalInterpolation;
	unit: NonNumericSeriesValueUnit | undefined;
}
