import type { TypeGroupsAlreadyExistError } from "./TypeGroupsAlreadyExistError.js";
import type { TypeGroupsNotFoundError } from "./TypeGroupsNotFoundError.js";
export interface TypeGroupError_typeGroupsNotFound {
	type: "typeGroupsNotFound";
	typeGroupsNotFound: TypeGroupsNotFoundError;
}
export interface TypeGroupError_typeGroupsAlreadyExist {
	type: "typeGroupsAlreadyExist";
	typeGroupsAlreadyExist: TypeGroupsAlreadyExistError;
}
export type TypeGroupError = TypeGroupError_typeGroupsNotFound | TypeGroupError_typeGroupsAlreadyExist;
