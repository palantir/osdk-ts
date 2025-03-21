import type { LinkTypeRid } from "./LinkTypeRid.js";
/**
* The request to modify the ontology deletes LinkTypes that are still in use.
*/
export interface DeletedLinkTypesStillInUseError {
	linkTypeReferences: Record<LinkTypeRid, Array<LinkTypeRid>>;
}
