import type { ActionTypeRid } from "../ActionTypeRid.js";
import type { InterfaceTypeRid } from "../InterfaceTypeRid.js";
import type { LinkTypeRid } from "../LinkTypeRid.js";
import type { ObjectTypeRid } from "../ObjectTypeRid.js";
import type { SharedPropertyTypeRid } from "../SharedPropertyTypeRid.js";
import type { TypeGroupRid } from "../TypeGroupRid.js";
/**
* The ontology entities to get access requests for.
*/
export interface BulkGetAccessRequestForOntologyEntityRequest {
	objectTypeRids: Array<ObjectTypeRid>;
	linkTypeRids: Array<LinkTypeRid>;
	actionTypeRids: Array<ActionTypeRid>;
	sharedPropertyTypeRids: Array<SharedPropertyTypeRid>;
	interfaceTypeRids: Array<InterfaceTypeRid>;
	typeGroupRids: Array<TypeGroupRid>;
}
