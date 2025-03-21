import type { AggregationFilter } from "./AggregationFilter.js";
import type { PropertyId } from "./PropertyId.js";
/**
* A property to compute a percentile metric for.
*/
export interface PercentileMetric {
	propertyId: PropertyId;
	percentile: number;
	filter: AggregationFilter | undefined;
}
