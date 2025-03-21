import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
export interface AliasEntityIdentifier_sharedPropertyTypeRid {
	type: "sharedPropertyTypeRid";
	sharedPropertyTypeRid: SharedPropertyTypeRid;
}
export interface AliasEntityIdentifier_objectTypeRid {
	type: "objectTypeRid";
	objectTypeRid: ObjectTypeRid;
}
export type AliasEntityIdentifier = AliasEntityIdentifier_sharedPropertyTypeRid | AliasEntityIdentifier_objectTypeRid;
