import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
/**
* Allows ObjectTypeReference values where the object type implements the specified interfaces.
*/
export interface ParameterObjectTypeReference {
	interfaceTypeRids: Array<InterfaceTypeRid>;
}
