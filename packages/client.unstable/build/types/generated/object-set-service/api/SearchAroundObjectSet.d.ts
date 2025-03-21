import type { ObjectSet } from "./ObjectSet.js";
import type { RelationId } from "./RelationId.js";
import type { RelationSide } from "./RelationSide.js";
/**
* ObjectSet containing all objects that are linked to objects in provided object set, and are
* on the opposite side of the provided relation side (or in case of either, any of the sides).
*/
export interface SearchAroundObjectSet {
	objectSet: ObjectSet;
	relationId: RelationId;
	relationSide: RelationSide;
}
