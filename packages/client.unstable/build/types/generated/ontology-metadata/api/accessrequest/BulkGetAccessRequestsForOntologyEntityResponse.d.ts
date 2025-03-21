import type { AccessRequestRid } from "../AccessRequestRid.js";
import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
/**
* Returns the access request rids requesting access to ontology entities.
*/
export interface BulkGetAccessRequestsForOntologyEntityResponse {
	objectTypeRids: Record<ObjectTypeRid, Array<AccessRequestRid>>;
	linkTypeRids: Record<LinkTypeRid, Array<AccessRequestRid>>;
	actionTypeRids: Record<ActionTypeRid, Array<AccessRequestRid>>;
	sharedPropertyTypeRids: Record<SharedPropertyTypeRid, Array<AccessRequestRid>>;
	interfaceTypeRids: Record<InterfaceTypeRid, Array<AccessRequestRid>>;
	typeGroupRids: Record<TypeGroupRid, Array<AccessRequestRid>>;
}
