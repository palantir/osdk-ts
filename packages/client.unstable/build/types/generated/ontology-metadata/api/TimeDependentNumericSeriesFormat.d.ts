import type { NumericSeriesValueUnit } from "./NumericSeriesValueUnit.js";
import type { PropertyTypeReferenceOrNumericInternalInterpolation } from "./PropertyTypeReferenceOrNumericInternalInterpolation.js";
/**
* Configuration for numeric series.
*/
export interface TimeDependentNumericSeriesFormat {
	defaultInternalInterpolation: PropertyTypeReferenceOrNumericInternalInterpolation;
	unit: NumericSeriesValueUnit | undefined;
}
