import type { LinkTypeRid } from "./LinkTypeRid.js";
/**
* The LinkTypesRids were not found in the current ontology.
*/
export interface LinkTypeRidsNotFoundError {
	linkTypeRids: Array<LinkTypeRid>;
}
