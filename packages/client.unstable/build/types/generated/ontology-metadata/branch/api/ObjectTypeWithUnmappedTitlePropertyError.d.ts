import type { ObjectTypeRid } from "../../api/ObjectTypeRid.js";
/**
* An error representing when none of an object type's datasources map the title property of the object type.
*/
export interface ObjectTypeWithUnmappedTitlePropertyError {
	objectType: ObjectTypeRid;
}
