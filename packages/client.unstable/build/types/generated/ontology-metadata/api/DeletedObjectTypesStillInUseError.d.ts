import type { LinkTypeRid } from "./LinkTypeRid.js";
import type { ObjectTypeRid } from "./ObjectTypeRid.js";
/**
* The request to modify the ontology deletes ObjectTypes that are still in use.
*/
export interface DeletedObjectTypesStillInUseError {
	linkTypeReferences: Record<ObjectTypeRid, Array<LinkTypeRid>>;
}
