import type { PropertyTypeId } from "../PropertyTypeId.js";
import type { AllPropertiesPropertySet } from "./AllPropertiesPropertySet.js";
export interface PropertyTypeIdSet_allProperties {
	type: "allProperties";
	allProperties: AllPropertiesPropertySet;
}
export interface PropertyTypeIdSet_specificProperties {
	type: "specificProperties";
	specificProperties: Array<PropertyTypeId>;
}
/**
* Set of properties to either represent all available properties on the object type or a specific subset.
*/
export type PropertyTypeIdSet = PropertyTypeIdSet_allProperties | PropertyTypeIdSet_specificProperties;
