import type { InterfaceTypesAlreadyExistError } from "./InterfaceTypesAlreadyExistError.js";
import type { InterfaceTypesNotFoundError } from "./InterfaceTypesNotFoundError.js";
export interface InterfaceTypeError_interfaceTypesNotFound {
	type: "interfaceTypesNotFound";
	interfaceTypesNotFound: InterfaceTypesNotFoundError;
}
export interface InterfaceTypeError_interfaceTypesAlreadyExist {
	type: "interfaceTypesAlreadyExist";
	interfaceTypesAlreadyExist: InterfaceTypesAlreadyExistError;
}
export type InterfaceTypeError = InterfaceTypeError_interfaceTypesNotFound | InterfaceTypeError_interfaceTypesAlreadyExist;
