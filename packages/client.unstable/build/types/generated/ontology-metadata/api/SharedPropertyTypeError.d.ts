import type { SharedPropertyTypesAlreadyExistError } from "./SharedPropertyTypesAlreadyExistError.js";
import type { SharedPropertyTypesNotFoundError } from "./SharedPropertyTypesNotFoundError.js";
export interface SharedPropertyTypeError_sharedPropertyTypesNotFound {
	type: "sharedPropertyTypesNotFound";
	sharedPropertyTypesNotFound: SharedPropertyTypesNotFoundError;
}
export interface SharedPropertyTypeError_sharedPropertyTypesAlreadyExist {
	type: "sharedPropertyTypesAlreadyExist";
	sharedPropertyTypesAlreadyExist: SharedPropertyTypesAlreadyExistError;
}
export type SharedPropertyTypeError = SharedPropertyTypeError_sharedPropertyTypesNotFound | SharedPropertyTypeError_sharedPropertyTypesAlreadyExist;
