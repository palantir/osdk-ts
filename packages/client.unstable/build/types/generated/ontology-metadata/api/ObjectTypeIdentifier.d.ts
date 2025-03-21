import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
export interface ObjectTypeIdentifier_objectTypeId {
	type: "objectTypeId";
	objectTypeId: ObjectTypeId;
}
export interface ObjectTypeIdentifier_objectTypeRid {
	type: "objectTypeRid";
	objectTypeRid: ObjectTypeRid;
}
/**
* Union type to represent the different identifiers for ObjectType(s) in load requests.
*/
export type ObjectTypeIdentifier = ObjectTypeIdentifier_objectTypeId | ObjectTypeIdentifier_objectTypeRid;
