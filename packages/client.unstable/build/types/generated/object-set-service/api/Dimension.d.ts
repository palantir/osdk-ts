import type { ObjectTypeDimension } from "./ObjectTypeDimension.js";
import type { PropertyValueDimension } from "./PropertyValueDimension.js";
export interface Dimension_propertyValue {
	type: "propertyValue";
	propertyValue: PropertyValueDimension;
}
export interface Dimension_objectType {
	type: "objectType";
	objectType: ObjectTypeDimension;
}
/**
* How to divide objects into buckets.
*/
export type Dimension = Dimension_propertyValue | Dimension_objectType;
