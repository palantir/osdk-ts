import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { PropertyTypeId } from "../PropertyTypeId.js";
/**
* The id representation of a PropertyTypeId including its parent ObjectType ObjectTypeId.
*/
export interface PropertyTypeIdWithObjectTypeId {
	objectTypeId: ObjectTypeId;
	propertyTypeId: PropertyTypeId;
}
