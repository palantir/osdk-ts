import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
/**
* A wrapping of ObjectType ids and InterfaceType rids, used when returning information from API name conflict
* checks.
*/
export interface ObjectTypeIdsAndInterfaceTypeRids {
	objectTypeIds: Array<ObjectTypeId>;
	interfaceTypeRids: Array<InterfaceTypeRid>;
}
