import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
export interface EntityRid_objectTypeRid {
	type: "objectTypeRid";
	objectTypeRid: ObjectTypeRid;
}
export interface EntityRid_linkTypeRid {
	type: "linkTypeRid";
	linkTypeRid: LinkTypeRid;
}
export interface EntityRid_actionTypeRid {
	type: "actionTypeRid";
	actionTypeRid: ActionTypeRid;
}
export interface EntityRid_interfaceTypeRid {
	type: "interfaceTypeRid";
	interfaceTypeRid: InterfaceTypeRid;
}
export interface EntityRid_sharedPropertyTypeRid {
	type: "sharedPropertyTypeRid";
	sharedPropertyTypeRid: SharedPropertyTypeRid;
}
/**
* Resource identifier of the entity which you would like to download the history of
*/
export type EntityRid = EntityRid_objectTypeRid | EntityRid_linkTypeRid | EntityRid_actionTypeRid | EntityRid_interfaceTypeRid | EntityRid_sharedPropertyTypeRid;
