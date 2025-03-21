import type { ActionsObjectSetModification } from "./ActionsObjectSetModification.js";
import type { OtherValueAllowed } from "./OtherValueAllowed.js";
import type { PropertyTypeId } from "./PropertyTypeId.js";
/**
* Generates a set of allowed values from the specified property of the objects in the objectSet.
* For example All the names from the `assignedTo` property of tickets in an objectSet.
*/
export interface ParameterObjectPropertyValueModification {
	objectSet: ActionsObjectSetModification;
	propertyTypeId: PropertyTypeId;
	otherValueAllowed: OtherValueAllowed | undefined;
}
