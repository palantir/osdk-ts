import type { AggregationFilter } from "./AggregationFilter.js";
import type { DispersionMetricMethod } from "./DispersionMetricMethod.js";
import type { PropertyId } from "./PropertyId.js";
/**
* A property to compute a dispersion metric for.
*/
export interface DispersionMetric {
	propertyId: PropertyId;
	method: DispersionMetricMethod;
	filter: AggregationFilter | undefined;
}
