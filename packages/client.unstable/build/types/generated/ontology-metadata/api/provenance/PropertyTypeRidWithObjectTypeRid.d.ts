import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { PropertyTypeRid } from "../PropertyTypeRid.js";
/**
* The PropertyTypeRid with its parent ObjectTypeRid.
*/
export interface PropertyTypeRidWithObjectTypeRid {
	objectType: ObjectTypeRid;
	propertyType: PropertyTypeRid;
}
