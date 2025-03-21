import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
export interface AccessRequestEntityRid_objectTypeRid {
	type: "objectTypeRid";
	objectTypeRid: ObjectTypeRid;
}
export interface AccessRequestEntityRid_linkTypeRid {
	type: "linkTypeRid";
	linkTypeRid: LinkTypeRid;
}
export interface AccessRequestEntityRid_actionTypeRid {
	type: "actionTypeRid";
	actionTypeRid: ActionTypeRid;
}
export interface AccessRequestEntityRid_sharedPropertyTypeRid {
	type: "sharedPropertyTypeRid";
	sharedPropertyTypeRid: SharedPropertyTypeRid;
}
export interface AccessRequestEntityRid_interfaceTypeRid {
	type: "interfaceTypeRid";
	interfaceTypeRid: InterfaceTypeRid;
}
export interface AccessRequestEntityRid_typeGroupRid {
	type: "typeGroupRid";
	typeGroupRid: TypeGroupRid;
}
/**
* the entity rids we are requesting access for
*/
export type AccessRequestEntityRid = AccessRequestEntityRid_objectTypeRid | AccessRequestEntityRid_linkTypeRid | AccessRequestEntityRid_actionTypeRid | AccessRequestEntityRid_sharedPropertyTypeRid | AccessRequestEntityRid_interfaceTypeRid | AccessRequestEntityRid_typeGroupRid;
