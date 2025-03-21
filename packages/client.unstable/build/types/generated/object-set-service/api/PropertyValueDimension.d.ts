import type { Bucketing } from "./Bucketing.js";
import type { PropertyId } from "./PropertyId.js";
/**
* Dimension where objects get divided into buckets based on the value of a property.
*/
export interface PropertyValueDimension {
	bucketing: Bucketing;
	propertyId: PropertyId;
}
