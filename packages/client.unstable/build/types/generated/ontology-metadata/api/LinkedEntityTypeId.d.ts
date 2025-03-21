import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
export interface LinkedEntityTypeId_objectType {
	type: "objectType";
	objectType: ObjectTypeId;
}
export interface LinkedEntityTypeId_interfaceType {
	type: "interfaceType";
	interfaceType: InterfaceTypeRid;
}
/**
* A reference to a linked entity in InterfaceLinkTypes.
*/
export type LinkedEntityTypeId = LinkedEntityTypeId_objectType | LinkedEntityTypeId_interfaceType;
