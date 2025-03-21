import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { PropertyTypeRidSet } from "./PropertyTypeRidSet.js";
/**
* An ObjectTypeRid together with a set of properties referred to by rid.
*/
export interface ObjectTypeRidWithPropertyTypeRids {
	objectTypeRid: ObjectTypeRid;
	propertyTypeRids: PropertyTypeRidSet;
}
