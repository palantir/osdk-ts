import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* A wrapping of ObjectType rids and InterfaceType rids, used when returning information from API name conflict
* checks.
*/
export interface ObjectTypeRidsAndInterfaceTypeRids {
	objectTypeRids: Array<ObjectTypeRid>;
	interfaceTypeRids: Array<InterfaceTypeRid>;
}
