import type { LinkTypeId } from "./LinkTypeId.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
/**
* The request to modify the ontology references some missing ObjectTypes.
*/
export interface ReferencedObjectTypesNotFoundError {
	linkTypeReferences: Record<ObjectTypeId, Array<LinkTypeId>>;
}
