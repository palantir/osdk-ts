import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
export interface PackagedEntityRid_objectTypeRid {
	type: "objectTypeRid";
	objectTypeRid: ObjectTypeRid;
}
export interface PackagedEntityRid_linkTypeRid {
	type: "linkTypeRid";
	linkTypeRid: LinkTypeRid;
}
export interface PackagedEntityRid_actionTypeRid {
	type: "actionTypeRid";
	actionTypeRid: ActionTypeRid;
}
export interface PackagedEntityRid_sharedPropertyTypeRid {
	type: "sharedPropertyTypeRid";
	sharedPropertyTypeRid: SharedPropertyTypeRid;
}
export interface PackagedEntityRid_interfaceTypeRid {
	type: "interfaceTypeRid";
	interfaceTypeRid: InterfaceTypeRid;
}
export type PackagedEntityRid = PackagedEntityRid_objectTypeRid | PackagedEntityRid_linkTypeRid | PackagedEntityRid_actionTypeRid | PackagedEntityRid_sharedPropertyTypeRid | PackagedEntityRid_interfaceTypeRid;
