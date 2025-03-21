import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { ActionTypePermissionInformation } from "./ActionTypePermissionInformation.js";
import type { LinkTypePermissionInformation } from "./LinkTypePermissionInformation.js";
import type { ObjectTypePermissionInformation } from "./ObjectTypePermissionInformation.js";
export interface BlockPermissionInformation {
	actionTypes: Record<ActionTypeRid, ActionTypePermissionInformation>;
	objectTypes: Record<ObjectTypeRid, ObjectTypePermissionInformation>;
	linkTypes: Record<LinkTypeRid, LinkTypePermissionInformation>;
}
