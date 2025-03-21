import type { AllPropertiesPropertySet } from "./AllPropertiesPropertySet.js";
import type { PropertyWhitelistPropertySet } from "./PropertyWhitelistPropertySet.js";
export interface PropertySet_propertyWhitelist {
	type: "propertyWhitelist";
	propertyWhitelist: PropertyWhitelistPropertySet;
}
export interface PropertySet_allProperties {
	type: "allProperties";
	allProperties: AllPropertiesPropertySet;
}
/**
* Specification of a subset of properties to use.
*/
export type PropertySet = PropertySet_propertyWhitelist | PropertySet_allProperties;
