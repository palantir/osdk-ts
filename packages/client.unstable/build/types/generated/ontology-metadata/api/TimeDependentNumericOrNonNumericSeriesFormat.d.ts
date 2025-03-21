import type { PropertyTypeId } from "./PropertyTypeId.js";
/**
* Configuration for either numeric or non-numeric series.
*/
export interface TimeDependentNumericOrNonNumericSeriesFormat {
	defaultInternalInterpolationPropertyTypeId: PropertyTypeId;
	unitPropertyTypeId: PropertyTypeId;
	isNonNumericPropertyTypeId: PropertyTypeId;
}
