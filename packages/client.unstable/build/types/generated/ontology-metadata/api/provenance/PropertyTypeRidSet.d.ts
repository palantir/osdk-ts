import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { AllPropertiesPropertySet } from "./AllPropertiesPropertySet.js";
export interface PropertyTypeRidSet_allProperties {
	type: "allProperties";
	allProperties: AllPropertiesPropertySet;
}
export interface PropertyTypeRidSet_specificProperties {
	type: "specificProperties";
	specificProperties: Array<PropertyTypeRid>;
}
/**
* Set of properties to either represent all available properties on the object type or a specific subset.
*/
export type PropertyTypeRidSet = PropertyTypeRidSet_allProperties | PropertyTypeRidSet_specificProperties;
