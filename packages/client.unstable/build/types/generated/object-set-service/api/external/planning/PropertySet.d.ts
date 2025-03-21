import type { AllPropertiesPropertySet } from "./AllPropertiesPropertySet.js";
import type { PropertyAllowlistPropertySet } from "./PropertyAllowlistPropertySet.js";
export interface PropertySet_propertyAllowlist {
	type: "propertyAllowlist";
	propertyAllowlist: PropertyAllowlistPropertySet;
}
export interface PropertySet_allProperties {
	type: "allProperties";
	allProperties: AllPropertiesPropertySet;
}
/**
* See com.palantir.object.set.api.PropertySet.
*/
export type PropertySet = PropertySet_propertyAllowlist | PropertySet_allProperties;
