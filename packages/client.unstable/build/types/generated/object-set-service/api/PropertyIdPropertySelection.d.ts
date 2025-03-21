import type { PropertyId } from "./PropertyId.js";
/**
* A set of PropertyIds. May also reference runtime derived properties.
*/
export interface PropertyIdPropertySelection {
	propertyIds: Array<PropertyId>;
}
