import type { OntologyIrActionsObjectSet } from "./OntologyIrActionsObjectSet.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
/**
* Suggests the property value of the object set to the user for a parameter.
*/
export interface OntologyIrObjectQueryPropertyValue {
	objectSet: OntologyIrActionsObjectSet;
	propertyTypeId: PropertyTypeId;
}
