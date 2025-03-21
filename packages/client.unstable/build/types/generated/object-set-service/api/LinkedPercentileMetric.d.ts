import type { PropertyId } from "./PropertyId.js";
/**
* A property to compute a percentile metric for.
*/
export interface LinkedPercentileMetric {
	propertyId: PropertyId;
	percentile: number;
}
