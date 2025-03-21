import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
/**
* Cannot create InterfaceTypes that already exist.
*/
export interface InterfaceTypesAlreadyExistError {
	interfaceTypeRids: Array<InterfaceTypeRid>;
}
