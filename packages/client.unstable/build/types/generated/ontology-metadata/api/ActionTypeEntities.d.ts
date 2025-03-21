import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { LinkTypeId } from "./LinkTypeId.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { TypeGroupRid } from "./TypeGroupRid.js";
export interface ActionTypeEntities {
	affectedObjectTypes: Array<ObjectTypeId>;
	affectedLinkTypes: Array<LinkTypeId>;
	affectedInterfaceTypes: Array<InterfaceTypeRid>;
	typeGroups: Array<TypeGroupRid>;
}
