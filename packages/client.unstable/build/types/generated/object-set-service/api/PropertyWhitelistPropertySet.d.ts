import type { PropertyId } from "./PropertyId.js";
/**
* Use a specified subset of properties.
*/
export interface PropertyWhitelistPropertySet {
	properties: Array<PropertyId>;
}
