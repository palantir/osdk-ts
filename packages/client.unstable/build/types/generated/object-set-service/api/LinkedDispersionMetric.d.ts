import type { LinkedDispersionMetricMethod } from "./LinkedDispersionMetricMethod.js";
import type { PropertyId } from "./PropertyId.js";
/**
* A property to compute a dispersion metric for.
*/
export interface LinkedDispersionMetric {
	propertyId: PropertyId;
	method: LinkedDispersionMetricMethod;
}
