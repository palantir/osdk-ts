import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { LinkTypeId } from "../LinkTypeId.js";
import type { ObjectTypeApiName } from "../ObjectTypeApiName.js";
import type { ActionTypePermissionInformation } from "./ActionTypePermissionInformation.js";
import type { LinkTypePermissionInformation } from "./LinkTypePermissionInformation.js";
import type { ObjectTypePermissionInformation } from "./ObjectTypePermissionInformation.js";
export interface OntologyIrBlockPermissionInformation {
	actionTypes: Record<ActionTypeRid, ActionTypePermissionInformation>;
	objectTypes: Record<ObjectTypeApiName, ObjectTypePermissionInformation>;
	linkTypes: Record<LinkTypeId, LinkTypePermissionInformation>;
}
