import type { LinkTypeId } from "./LinkTypeId.js";
/**
* There was an attempt to create LinkTypes that already exist.
*/
export interface LinkTypesAlreadyExistError {
	linkTypeIds: Array<LinkTypeId>;
}
