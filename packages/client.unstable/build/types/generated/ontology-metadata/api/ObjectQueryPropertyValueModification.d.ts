import type { ActionsObjectSetModification } from "./ActionsObjectSetModification.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
/**
* Suggests the property value of the object set to the user for a parameter.
*/
export interface ObjectQueryPropertyValueModification {
	objectSet: ActionsObjectSetModification;
	propertyTypeId: PropertyTypeId;
}
