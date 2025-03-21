import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { LinkTypeId } from "./LinkTypeId.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
export interface OntologyIrActionTypeEntities {
	affectedObjectTypes: Array<ObjectTypeId>;
	affectedLinkTypes: Array<LinkTypeId>;
	affectedInterfaceTypes: Array<InterfaceTypeApiName>;
	typeGroups: Array<TypeGroupRid>;
}
