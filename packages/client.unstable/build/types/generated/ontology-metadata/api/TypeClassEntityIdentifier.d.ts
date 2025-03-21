import type { ActionTypeRid } from "./ActionTypeRid.js";
import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "./SharedPropertyTypeRid.js";
export interface TypeClassEntityIdentifier_sharedPropertyTypeRid {
	type: "sharedPropertyTypeRid";
	sharedPropertyTypeRid: SharedPropertyTypeRid;
}
export interface TypeClassEntityIdentifier_objectTypeRid {
	type: "objectTypeRid";
	objectTypeRid: ObjectTypeRid;
}
export interface TypeClassEntityIdentifier_linkTypeRid {
	type: "linkTypeRid";
	linkTypeRid: LinkTypeRid;
}
export interface TypeClassEntityIdentifier_actionTypeRid {
	type: "actionTypeRid";
	actionTypeRid: ActionTypeRid;
}
export type TypeClassEntityIdentifier = TypeClassEntityIdentifier_sharedPropertyTypeRid | TypeClassEntityIdentifier_objectTypeRid | TypeClassEntityIdentifier_linkTypeRid | TypeClassEntityIdentifier_actionTypeRid;
