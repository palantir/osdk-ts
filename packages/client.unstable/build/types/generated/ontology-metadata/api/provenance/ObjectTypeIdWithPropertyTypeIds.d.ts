import type { ObjectTypeId } from "../ObjectTypeId.js";
import type { PropertyTypeIdSet } from "./PropertyTypeIdSet.js";
/**
* An ObjectTypeId together with a set of properties referred to by id.
*/
export interface ObjectTypeIdWithPropertyTypeIds {
	objectTypeId: ObjectTypeId;
	propertyTypeIds: PropertyTypeIdSet;
}
