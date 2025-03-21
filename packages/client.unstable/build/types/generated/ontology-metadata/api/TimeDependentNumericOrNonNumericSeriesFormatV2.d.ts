import type { PropertyTypeId } from "./PropertyTypeId.js";
/**
* Configuration for either numeric or non-numeric series.
*/
export interface TimeDependentNumericOrNonNumericSeriesFormatV2 {
	defaultInternalInterpolationPropertyTypeId: PropertyTypeId | undefined;
	unitPropertyTypeId: PropertyTypeId | undefined;
}
