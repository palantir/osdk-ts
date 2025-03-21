import type { ObjectTypeIdWithPropertyTypeIds } from "./ObjectTypeIdWithPropertyTypeIds.js";
import type { ObjectTypeRidWithPropertyTypeRids } from "./ObjectTypeRidWithPropertyTypeRids.js";
export interface ObjectTypeWithProperties_objectTypeIdWithPropertyTypeIds {
	type: "objectTypeIdWithPropertyTypeIds";
	objectTypeIdWithPropertyTypeIds: ObjectTypeIdWithPropertyTypeIds;
}
export interface ObjectTypeWithProperties_objectTypeRidWithPropertyTypeRids {
	type: "objectTypeRidWithPropertyTypeRids";
	objectTypeRidWithPropertyTypeRids: ObjectTypeRidWithPropertyTypeRids;
}
/**
* Represents an ObjectType with a selected set of properties.
*/
export type ObjectTypeWithProperties = ObjectTypeWithProperties_objectTypeIdWithPropertyTypeIds | ObjectTypeWithProperties_objectTypeRidWithPropertyTypeRids;
