import type { PropertyTypeId } from "./PropertyTypeId.js";
/**
* Configuration for a time series property that can contain either numeric or non-numeric data. A boolean property
* reference is required to determine if the series is numeric or non-numeric.
*/
export interface NumericOrNonNumericSeriesValueMetadataV2 {
	isNonNumericPropertyTypeId: PropertyTypeId;
}
