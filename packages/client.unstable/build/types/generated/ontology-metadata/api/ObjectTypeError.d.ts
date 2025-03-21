import type { ObjectTypeRidsNotFoundError } from "./ObjectTypeRidsNotFoundError.js";
import type { ObjectTypesAlreadyExistError } from "./ObjectTypesAlreadyExistError.js";
import type { ObjectTypesNotFoundError } from "./ObjectTypesNotFoundError.js";
import type { PatchBackupInitializationConfigurationSourceDoesNotExistError } from "./PatchBackupInitializationConfigurationSourceDoesNotExistError.js";
export interface ObjectTypeError_objectTypesAlreadyExist {
	type: "objectTypesAlreadyExist";
	objectTypesAlreadyExist: ObjectTypesAlreadyExistError;
}
export interface ObjectTypeError_objectTypesNotFound {
	type: "objectTypesNotFound";
	objectTypesNotFound: ObjectTypesNotFoundError;
}
export interface ObjectTypeError_objectTypeRidsNotFound {
	type: "objectTypeRidsNotFound";
	objectTypeRidsNotFound: ObjectTypeRidsNotFoundError;
}
export interface ObjectTypeError_patchBackupInitializationConfigurationSourceDoesNotExist {
	type: "patchBackupInitializationConfigurationSourceDoesNotExist";
	patchBackupInitializationConfigurationSourceDoesNotExist: PatchBackupInitializationConfigurationSourceDoesNotExistError;
}
export type ObjectTypeError = ObjectTypeError_objectTypesAlreadyExist | ObjectTypeError_objectTypesNotFound | ObjectTypeError_objectTypeRidsNotFound | ObjectTypeError_patchBackupInitializationConfigurationSourceDoesNotExist;
