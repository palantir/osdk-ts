import type { TypeGroupRid } from "./TypeGroupRid.js";
/**
* Cannot create TypeGroups that already exist.
*/
export interface TypeGroupsAlreadyExistError {
	typeGroupRids: Array<TypeGroupRid>;
}
