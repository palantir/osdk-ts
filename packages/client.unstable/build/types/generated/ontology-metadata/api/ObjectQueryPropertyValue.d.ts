import type { ActionsObjectSet } from "./ActionsObjectSet.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
/**
* Suggests the property value of the object set to the user for a parameter.
*/
export interface ObjectQueryPropertyValue {
	objectSet: ActionsObjectSet;
	propertyTypeId: PropertyTypeId;
}
