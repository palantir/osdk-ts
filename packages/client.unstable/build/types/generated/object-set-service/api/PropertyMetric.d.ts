import type { AggregationFilter } from "./AggregationFilter.js";
import type { PropertyId } from "./PropertyId.js";
/**
* A property to compute a metric for.
*/
export interface PropertyMetric {
	propertyId: PropertyId;
	filter: AggregationFilter | undefined;
}
