import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
export interface ReferencedObjectTypesChange {
	previousObjectTypeRidA: ObjectTypeRid;
	previousObjectTypeRidB: ObjectTypeRid;
	newObjectTypeIdA: ObjectTypeId;
	newObjectTypeIdB: ObjectTypeId;
}
