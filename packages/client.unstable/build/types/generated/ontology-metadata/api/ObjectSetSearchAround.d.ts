import type { LinkTypeId } from "./LinkTypeId.js";
import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { RelationSide } from "./types/RelationSide.js";
/**
* Transforms objects in the ObjectSet to all objects on the other end of the specified Relation.
*/
export interface ObjectSetSearchAround {
	relationId: LinkTypeId;
	relationSide: RelationSide;
	objectTypeId: ObjectTypeId;
}
