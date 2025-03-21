import type { LinkTypeId } from "./LinkTypeId.js";
/**
* The LinkTypes were not found.
*/
export interface LinkTypesNotFoundError {
	linkTypeIds: Array<LinkTypeId>;
}
