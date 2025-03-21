import type { ActionsObjectSet } from "./ActionsObjectSet.js";
import type { OtherValueAllowed } from "./OtherValueAllowed.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
/**
* Generates a set of allowed values from the specified property of the objects in the objectSet.
* For example All the names from the `assignedTo` property of tickets in an objectSet.
*/
export interface ParameterObjectPropertyValue {
	objectSet: ActionsObjectSet;
	propertyTypeId: PropertyTypeId;
	otherValueAllowed: OtherValueAllowed | undefined;
}
