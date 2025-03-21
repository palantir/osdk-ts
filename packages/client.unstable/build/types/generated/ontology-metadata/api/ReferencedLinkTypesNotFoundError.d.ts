import type { LinkTypeId } from "./LinkTypeId.js";
/**
* The request to modify the ontology references some missing LinkTypes.
*/
export interface ReferencedLinkTypesNotFoundError {
	linkTypeReferences: Record<LinkTypeId, Array<LinkTypeId>>;
}
