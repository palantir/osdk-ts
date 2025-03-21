import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* This status indicates that the ObjectType is reaching the end of its life and will be removed as per the deadline specified.
*/
export interface DeprecatedObjectTypeStatus {
	message: string;
	deadline: string;
	replacedBy: ObjectTypeRid | undefined;
}
